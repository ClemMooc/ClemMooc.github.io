// Shared helpers for the media scripts.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

export function mediaUrl() {
  if (process.env.MEDIA_URL) return process.env.MEDIA_URL.replace(/\/$/, '');
  const cfg = readFileSync('src/site.config.ts', 'utf8');
  return cfg.match(/mediaUrl:\s*'([^']+)'/)[1].replace(/\/$/, '');
}

export const BUCKET = 'clemmooc-media';

export function keyUrl(key) {
  return `${mediaUrl()}/${key.split('/').map(encodeURIComponent).join('/')}`;
}

export async function exists(key) {
  const res = await fetch(keyUrl(key), { method: 'HEAD' });
  return res.ok;
}

export function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.') || name.endsWith('.csv')) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

export { relative };
