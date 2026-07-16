import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const workspace = process.cwd();
const sourceRoot = path.join(workspace, "NHF PICTURES");
const outputRoot = path.join(sourceRoot, "WEBSITE ENHANCED");
const supported = new Set([".jpg", ".jpeg", ".png"]);

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (fullPath === outputRoot) continue;
      files.push(...await walk(fullPath));
    } else if (entry.isFile() && supported.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

function averageLuminance(stats) {
  const channels = stats.channels;
  if (channels.length >= 3) {
    return (0.2126 * channels[0].mean) + (0.7152 * channels[1].mean) + (0.0722 * channels[2].mean);
  }
  return channels[0]?.mean ?? 128;
}

function enhancementFor(luminance) {
  if (luminance < 70) return { brightness: 1.2, saturation: 1.07, linearA: 1.06, linearB: 3 };
  if (luminance < 95) return { brightness: 1.14, saturation: 1.06, linearA: 1.05, linearB: 2 };
  if (luminance < 120) return { brightness: 1.08, saturation: 1.05, linearA: 1.04, linearB: 1 };
  if (luminance > 190) return { brightness: 0.98, saturation: 1.03, linearA: 1.02, linearB: -1 };
  return { brightness: 1.03, saturation: 1.04, linearA: 1.03, linearB: 0 };
}

function targetDimensions(width, height) {
  const longEdge = Math.max(width, height);
  const requestedLongEdge = longEdge < 1200
    ? Math.min(longEdge * 2, 2200)
    : longEdge < 2200
      ? 2400
      : Math.min(longEdge, 3000);
  const scale = requestedLongEdge / longEdge;
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

async function processImage(inputPath) {
  const relative = path.relative(sourceRoot, inputPath);
  const relativeDirectory = path.dirname(relative);
  const baseName = path.basename(relative, path.extname(relative));
  const jpegDirectory = path.join(outputRoot, relativeDirectory, "JPEG");
  const webpDirectory = path.join(outputRoot, relativeDirectory, "WEBP");
  const jpegPath = path.join(jpegDirectory, `${baseName}-enhanced.jpg`);
  const webpPath = path.join(webpDirectory, `${baseName}-website.webp`);

  await fs.mkdir(jpegDirectory, { recursive: true });
  await fs.mkdir(webpDirectory, { recursive: true });

  const source = sharp(inputPath, { failOn: "none" }).rotate();
  const metadata = await source.metadata();
  const stats = await source.stats();
  const luminance = averageLuminance(stats);
  const treatment = enhancementFor(luminance);
  const width = metadata.autoOrient?.width ?? metadata.width;
  const height = metadata.autoOrient?.height ?? metadata.height;

  if (!width || !height) throw new Error(`Unable to read dimensions: ${relative}`);

  const target = targetDimensions(width, height);
  const basePipeline = () => sharp(inputPath, { failOn: "none" })
    .rotate()
    .resize({
      width: target.width,
      height: target.height,
      fit: "fill",
      kernel: sharp.kernel.lanczos3,
    })
    .modulate({ brightness: treatment.brightness, saturation: treatment.saturation })
    .linear(treatment.linearA, treatment.linearB)
    .sharpen({ sigma: 0.8, m1: 0.7, m2: 1.3, x1: 2, y2: 10, y3: 20 });

  const jpegInfo = await basePipeline()
    .jpeg({ quality: 91, chromaSubsampling: "4:4:4", progressive: true, mozjpeg: true })
    .toFile(jpegPath);

  const websiteLongEdge = Math.min(1600, Math.max(jpegInfo.width, jpegInfo.height));
  const websiteScale = websiteLongEdge / Math.max(jpegInfo.width, jpegInfo.height);
  const websiteWidth = Math.max(1, Math.round(jpegInfo.width * websiteScale));
  const websiteHeight = Math.max(1, Math.round(jpegInfo.height * websiteScale));

  const webpInfo = await sharp(jpegPath)
    .resize({ width: websiteWidth, height: websiteHeight, fit: "fill", kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.45 })
    .webp({ quality: 84, effort: 5, smartSubsample: true })
    .toFile(webpPath);

  return {
    source: relative,
    originalWidth: width,
    originalHeight: height,
    luminance: luminance.toFixed(1),
    brightness: treatment.brightness.toFixed(2),
    enhancedWidth: jpegInfo.width,
    enhancedHeight: jpegInfo.height,
    enhancedBytes: jpegInfo.size,
    webpWidth: webpInfo.width,
    webpHeight: webpInfo.height,
    webpBytes: webpInfo.size,
    jpeg: path.relative(sourceRoot, jpegPath),
    webp: path.relative(sourceRoot, webpPath),
  };
}

await fs.mkdir(outputRoot, { recursive: true });
const files = (await walk(sourceRoot)).sort((a, b) => a.localeCompare(b));
const report = [];

for (const [index, file] of files.entries()) {
  const result = await processImage(file);
  report.push(result);
  process.stdout.write(`[${index + 1}/${files.length}] ${result.source}\n`);
}

const columns = [
  "source", "originalWidth", "originalHeight", "luminance", "brightness",
  "enhancedWidth", "enhancedHeight", "enhancedBytes",
  "webpWidth", "webpHeight", "webpBytes", "jpeg", "webp",
];
const csv = [columns.join(","), ...report.map(row => columns.map(column => csvCell(row[column])).join(","))].join("\n");
await fs.writeFile(path.join(outputRoot, "enhancement-report.csv"), `${csv}\n`, "utf8");
await fs.writeFile(
  path.join(outputRoot, "README.txt"),
  [
    "NHF website image enhancement output",
    "",
    "- Originals were not modified.",
    "- JPEG folders contain high-quality enhanced masters (up to 3000px on the long edge).",
    "- WEBP folders contain website-upload versions (up to 1600px on the long edge).",
    "- Processing: auto-orientation, adaptive exposure/brightness, restrained colour/contrast correction, Lanczos resizing, and mild sharpening.",
    "- Embedded metadata is removed from output files for safer web publishing.",
    "- Confirm subject/guardian consent before publishing identifiable people, especially children and clinical scenes.",
    "",
    `Processed images: ${report.length}`,
  ].join("\n"),
  "utf8",
);

process.stdout.write(`Completed ${report.length} images. Output: ${outputRoot}\n`);
