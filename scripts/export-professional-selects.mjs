import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.join(process.cwd(), "NHF PICTURES", "WEBSITE ENHANCED", "PROFESSIONAL SELECTS");
const webpRoot = path.join(root, "WEBP");

const uses = {
  "01": ["Ovu School Health Programme", "Impact story lead / presentation moment"],
  "02": ["Ovu School Health Programme", "Programme gallery / school outreach overview"],
  "03": ["School for the Deaf", "Impact story lead / inclusive outreach"],
  "04": ["Sapele Medical Outreach", "Team and partners"],
  "05": ["Sapele Medical Outreach", "Clinical screening / laboratory services"],
  "06": ["Sapele Medical Outreach", "Dental care"],
  "07": ["Sapele Medical Outreach", "Health counselling / follow-up"],
  "08": ["Sapele Medical Outreach", "Medication and pharmacy support"],
  "09": ["Ovu School Health Programme", "School supplies and health education"],
  "10": ["Ovu School Health Programme", "Outreach team"],
  "11": ["School for the Deaf", "Partner and volunteer team"],
  "12": ["School for the Deaf", "Classroom health education"],
  "13": ["Sapele Medical Outreach", "Registration and triage"],
  "14": ["Sapele Medical Outreach", "Laboratory screening"],
  "15": ["Sapele Medical Outreach", "Blood-pressure screening"],
  "16": ["Sapele Medical Outreach", "Community health education"],
};

await fs.mkdir(webpRoot, { recursive: true });
const files = (await fs.readdir(root))
  .filter(file => /^\d{2}-.+-professional\.png$/i.test(file))
  .sort((a, b) => a.localeCompare(b));

const rows = [];
for (const file of files) {
  const input = path.join(root, file);
  const outputName = file.replace(/-professional\.png$/i, "-website.webp");
  const output = path.join(webpRoot, outputName);
  const metadata = await sharp(input).metadata();
  const longEdge = Math.max(metadata.width ?? 0, metadata.height ?? 0);
  const scale = longEdge > 1600 ? 1600 / longEdge : 1;
  const width = Math.max(1, Math.round((metadata.width ?? 1) * scale));
  const height = Math.max(1, Math.round((metadata.height ?? 1) * scale));
  const info = await sharp(input)
    .resize({ width, height, fit: "fill", kernel: sharp.kernel.lanczos3 })
    .webp({ quality: 86, effort: 5, smartSubsample: true })
    .toFile(output);
  const id = file.slice(0, 2);
  const [event, suggestedUse] = uses[id] ?? ["NHF Outreach", "Website gallery"];
  rows.push({ id, file, webp: path.join("WEBP", outputName), event, suggestedUse, width: info.width, height: info.height, bytes: info.size });
}

const quote = value => `"${String(value).replaceAll('"', '""')}"`;
const header = ["id", "png_master", "website_webp", "event", "suggested_use", "width", "height", "bytes"];
const csv = [
  header.join(","),
  ...rows.map(row => [row.id, row.file, row.webp, row.event, row.suggestedUse, row.width, row.height, row.bytes].map(quote).join(",")),
].join("\n");
await fs.writeFile(path.join(root, "curated-image-manifest.csv"), `${csv}\n`, "utf8");

const readme = [
  "NHF PROFESSIONAL WEBSITE SELECTS",
  "",
  `Curated professional images: ${rows.length}`,
  "",
  "CONTENTS",
  "- PNG files in this folder are the highest-quality professional masters.",
  "- WEBP contains lighter 1600px website-upload copies.",
  "- curated-image-manifest.csv gives the event and suggested website use for each image.",
  "",
  "EDITING APPROACH",
  "- Professional reframing and perspective improvement",
  "- Distracting background and edge-content cleanup",
  "- Improved lighting, facial visibility, colour, and subject emphasis",
  "- Identity-preservation instructions and restrained documentary styling",
  "",
  "IMPORTANT REVIEW",
  "These are AI-assisted professional edits derived from authentic NHF event photographs.",
  "Before publication, compare each select with its original to approve identities, logos, banner wording, partner branding, medical details, and documentary accuracy.",
  "Obtain subject or guardian consent before publishing identifiable children, patients, or clinical encounters.",
  "The original photographs remain unchanged in their original event folders.",
].join("\n");
await fs.writeFile(path.join(root, "README.txt"), `${readme}\n`, "utf8");

const tileWidth = 360;
const tileHeight = 270;
const columns = 4;
const rowsCount = Math.ceil(rows.length / columns);
const composites = [];
for (const [index, row] of rows.entries()) {
  const x = (index % columns) * tileWidth;
  const y = Math.floor(index / columns) * tileHeight;
  const thumb = await sharp(path.join(root, row.file))
    .resize({ width: 340, height: 220, fit: "contain", background: "#eef5f6" })
    .jpeg({ quality: 84 })
    .toBuffer();
  const safeLabel = `${row.id} · ${row.event}`.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  const label = Buffer.from(`<svg width="340" height="34" xmlns="http://www.w3.org/2000/svg"><rect width="340" height="34" fill="#ffffff"/><text x="8" y="22" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#102a43">${safeLabel}</text></svg>`);
  composites.push({ input: thumb, left: x + 10, top: y + 10 });
  composites.push({ input: label, left: x + 10, top: y + 232 });
}
await sharp({
  create: {
    width: columns * tileWidth,
    height: rowsCount * tileHeight,
    channels: 3,
    background: "#d9eaed",
  },
})
  .composite(composites)
  .jpeg({ quality: 88, progressive: true })
  .toFile(path.join(root, "professional-selects-contact-sheet.jpg"));

console.log(`Exported ${rows.length} professional WebP images to ${webpRoot}`);
