import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '..', 'src');
const publicDir = path.join(__dirname, '..', 'public');

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

// Only update references where a corresponding .webp file exists
const webpFiles = new Set(
  walk(path.join(publicDir, 'images'))
    .filter(f => f.endsWith('.webp'))
    .map(f => '/' + path.relative(publicDir, f).replace(/\\/g, '/'))
);

const sourceFiles = walk(srcDir).filter(f => /\.(tsx|ts|js|jsx|json)$/.test(f));

let totalReplacements = 0;

for (const file of sourceFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let updated = content;

  // Replace /images/...png|jpg|jpeg references with .webp where webp exists
  updated = updated.replace(/\/images\/[^"'\s)>]+\.(png|jpe?g)/gi, (match) => {
    const webpPath = match.replace(/\.(png|jpe?g)$/i, '.webp');
    if (webpFiles.has(webpPath)) {
      return webpPath;
    }
    return match; // leave unchanged if no webp exists
  });

  if (updated !== content) {
    const changes = (content.match(/\/images\/[^"'\s)>]+\.(png|jpe?g)/gi) || []).length;
    totalReplacements += changes;
    fs.writeFileSync(file, updated, 'utf8');
    console.log(`✓ ${path.relative(srcDir, file)} (${changes} reference(s))`);
  }
}

console.log(`\nTotal files updated: references changed to .webp`);
console.log(`Total replacements: ${totalReplacements}`);
