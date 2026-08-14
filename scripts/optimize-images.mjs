/**
 * Compress large public JPEGs and emit WebP companions.
 * Run: node scripts/optimize-images.mjs
 *
 * No photo targets currently — cover JPGs are produced by generate-covers.mjs.
 * Keep this script as a hook for future one-off photo assets.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const DIR = join(process.cwd(), "public", "images");
/** Add filenames here when new large JPEGs need compression. */
const TARGETS = new Set([]);

async function optimize(file) {
  const input = join(DIR, file);
  const before = statSync(input).size;
  const buffer = readFileSync(input);
  const base = basename(file, extname(file));
  const webpOut = join(DIR, `${base}.webp`);
  const jpgOut = join(DIR, file);

  const meta = await sharp(buffer).metadata();
  const width = meta.width && meta.width > 1600 ? 1600 : undefined;

  const pipeline = () =>
    sharp(buffer)
      .rotate()
      .resize(width ? { width, withoutEnlargement: true } : undefined);

  const [jpgBuf, webpBuf] = await Promise.all([
    pipeline().jpeg({ quality: 78, mozjpeg: true }).toBuffer(),
    pipeline().webp({ quality: 78 }).toBuffer(),
  ]);

  writeFileSync(jpgOut, jpgBuf);
  writeFileSync(webpOut, webpBuf);

  console.log(
    `${file}: ${Math.round(before / 1024)}KB → jpg ${Math.round(jpgBuf.length / 1024)}KB, webp ${Math.round(webpBuf.length / 1024)}KB`,
  );
}

const files = readdirSync(DIR).filter((f) => TARGETS.has(f));
if (files.length === 0) {
  console.log("No image targets configured.");
} else {
  for (const file of files) {
    await optimize(file);
  }
}
