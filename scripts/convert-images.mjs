import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'public', 'images');

let converted = 0, skipped = 0, errors = 0;
let savedBytes = 0;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

const all = walk(imagesDir);
const targets = all.filter(f => /\.(png|jpe?g)$/i.test(f));

console.log(`Found ${targets.length} PNG/JPG files to convert`);

for (const src of targets) {
  const dest = src.replace(/\.(png|jpe?g)$/i, '.webp');
  
  // Skip if webp already exists and is newer
  if (fs.existsSync(dest)) {
    const srcStat = fs.statSync(src);
    const destStat = fs.statSync(dest);
    if (destStat.mtimeMs >= srcStat.mtimeMs) {
      skipped++;
      continue;
    }
  }

  try {
    const srcSize = fs.statSync(src).size;
    await sharp(src)
      .webp({ quality: 82, effort: 4 })
      .toFile(dest);
    const destSize = fs.statSync(dest).size;
    const saving = srcSize - destSize;
    savedBytes += saving;
    converted++;
    const rel = path.relative(imagesDir, src);
    console.log(`✓ ${rel}: ${Math.round(srcSize/1024)}KB → ${Math.round(destSize/1024)}KB (saved ${Math.round(saving/1024)}KB)`);
  } catch (e) {
    errors++;
    console.error(`✗ ${path.basename(src)}: ${e.message}`);
  }
}

console.log(`\n=== DONE ===`);
console.log(`Converted: ${converted} | Skipped (already exist): ${skipped} | Errors: ${errors}`);
console.log(`Total saved: ${Math.round(savedBytes / 1024 / 1024 * 10) / 10} MB`);
