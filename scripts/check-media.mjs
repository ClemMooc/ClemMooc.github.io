// npm run check:media
// Finds every R2 key used in the site and checks it actually exists in the bucket.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { exists, keyUrl } from './media-lib.mjs';

const files = [
  ...readdirSync('src/content/work').map((f) => join('src/content/work', f)),
  'src/site.config.ts',
  ...readdirSync('src/pages').filter((f) => f.endsWith('.astro')).map((f) => join('src/pages', f)),
];
const keys = new Set();
const re = /(?:src|cover|hero|img|resume|href)[=:]\s*["']([a-z0-9-]+\/[^"'\s]+\.(?:png|jpe?g|gif|webp|svg|avif|pdf|mp4))["']/gi;
for (const f of files) for (const m of readFileSync(f, 'utf8').matchAll(re)) keys.add(m[1]);

let missing = 0;
await Promise.all([...keys].map(async (k) => {
  if (!(await exists(k))) { missing++; console.log('✗ missing in R2:', k, '→', keyUrl(k)); }
}));
console.log(`${keys.size} media files referenced, ${missing} missing.`);
process.exit(missing ? 1 : 0);
