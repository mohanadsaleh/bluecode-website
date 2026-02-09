import fs from "fs";
import path from "path";
import sharp from "sharp";

const IMAGES_DIR = path.resolve("public/images");

// إعدادات موحّدة
const THUMB_WIDTH = 900;
const FULL_WIDTH = 1600;

const THUMB_QUALITY = 70;
const FULL_QUALITY = 80;

const files = fs.readdirSync(IMAGES_DIR).filter(f =>
  /\.(png|jpe?g)$/i.test(f)
);

if (!files.length) {
  console.log("❌ No images found");
  process.exit(0);
}

for (const file of files) {
  const input = path.join(IMAGES_DIR, file);
  const base = file.replace(/\.(png|jpe?g)$/i, "");

  const thumbOut = path.join(IMAGES_DIR, `${base}-thumb.webp`);
  const fullOut  = path.join(IMAGES_DIR, `${base}-full.webp`);

  await sharp(input)
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .webp({ quality: THUMB_QUALITY })
    .toFile(thumbOut);

  await sharp(input)
    .resize({ width: FULL_WIDTH, withoutEnlargement: true })
    .webp({ quality: FULL_QUALITY })
    .toFile(fullOut);

  console.log(`✅ ${file} → thumb & full`);
}

console.log("🎉 All images processed");