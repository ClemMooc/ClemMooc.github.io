// npm run media:upload
// Uploads any file in the local media/ folder that isn't in R2 yet.
// Needs a one-time `npx wrangler login` first. Never overwrites existing files.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { BUCKET, exists, walk, relative } from './media-lib.mjs';

if (!existsSync('media')) { console.log('No media/ folder found.'); process.exit(0); }
const files = walk('media');
let uploaded = 0;
for (const file of files) {
  const key = relative('media', file).split('\\').join('/');
  if (await exists(key)) continue;
  console.log('↑ uploading', key);
  execFileSync('npx', ['wrangler', 'r2', 'object', 'put', `${BUCKET}/${key}`, '--file', file, '--remote'], { stdio: 'inherit' });
  uploaded++;
}
console.log(uploaded ? `Uploaded ${uploaded} new file(s).` : 'Everything in media/ is already in R2.');
