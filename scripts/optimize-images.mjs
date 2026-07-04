// One-off/repeatable image optimization script.
// Usage: node scripts/optimize-images.mjs
// - Resizes + converts outreach photos to WebP (with JPEG fallback kept as-is)
// - Produces a properly sized logo PNG + WebP (source was 756KB rendered at 54px)
// Outputs into public/images/optimized/ and public/logo/ (logo-small).
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const IMAGES_DIR = "public/images";
const OUT_DIR = "public/images/optimized";
const LOGO_SRC = "public/logo/nhf-logo.png";

// Photos actually used by the site (hero carousel, gallery, page heroes).
// The two Screenshot_* files and the two logo-graphic FB_IMGs are deliberately excluded.
const USED = [
  "FB_IMG_1783012529277.jpg",
  "FB_IMG_1783012537202.jpg",
  "FB_IMG_1783012545155.jpg",
  "FB_IMG_1783012553411.jpg",
  "FB_IMG_1783012564264.jpg",
  "FB_IMG_1783012575381.jpg",
  "FB_IMG_1783012581401.jpg",
  "FB_IMG_1783012593613.jpg",
  "FB_IMG_1783012604139.jpg",
  "FB_IMG_1783012611366.jpg",
];

await mkdir(OUT_DIR, { recursive: true });

let before = 0;
let after = 0;

for (const file of USED) {
  const src = path.join(IMAGES_DIR, file);
  const base = path.parse(file).name;
  const srcStat = await stat(src);
  before += srcStat.size;

  // Full-size WebP (max 1200w — larger than any rendered size on the site)
  const outFull = path.join(OUT_DIR, `${base}.webp`);
  await sharp(src).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 72 }).toFile(outFull);

  // 640w variant for mobile/srcset
  const outSmall = path.join(OUT_DIR, `${base}-640.webp`);
  await sharp(src).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 70 }).toFile(outSmall);

  const fullStat = await stat(outFull);
  after += fullStat.size;
  console.log(`${file}: ${(srcStat.size / 1024).toFixed(0)}KB -> ${(fullStat.size / 1024).toFixed(0)}KB (+640w variant)`);
}

// Logo: rendered at 54px in header/footer, 64px on thank-you page. 160px covers 2-3x DPR.
const logoMeta = await sharp(LOGO_SRC).metadata();
const logoStat = await stat(LOGO_SRC);
await sharp(LOGO_SRC).resize({ width: 160 }).png({ compressionLevel: 9 }).toFile("public/logo/nhf-logo-160.png");
await sharp(LOGO_SRC).resize({ width: 160 }).webp({ quality: 85 }).toFile("public/logo/nhf-logo-160.webp");
// 512px version for og:image / apple-touch-icon duty
await sharp(LOGO_SRC).resize({ width: 512 }).png({ compressionLevel: 9 }).toFile("public/logo/nhf-logo-512.png");
const smallStat = await stat("public/logo/nhf-logo-160.png");
console.log(`logo (${logoMeta.width}px, ${(logoStat.size / 1024).toFixed(0)}KB) -> 160px ${(smallStat.size / 1024).toFixed(0)}KB + webp + 512px`);

console.log(`\nPhotos total: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB full-size WebP`);
