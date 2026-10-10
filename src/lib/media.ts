import { site } from '../site.config';

const base = (import.meta.env.MEDIA_URL || site.mediaUrl).replace(/\/$/, '');

/**
 * Turn an R2 key like "caravel/hero.png" into a full URL.
 * Full URLs (http/https) and site-relative paths ("/lottie/x.lottie") pass through unchanged.
 */
export function media(key: string): string {
  if (/^(https?:)?\/\//.test(key) || key.startsWith('/')) return key;
  return `${base}/${key.replace(/^\/+/, '').split('/').map(encodeURIComponent).join('/')}`;
}

/** File types that should NOT go through Astro's image optimizer (animation or vector). */
export function isPassthrough(key: string): boolean {
  return /\.(gif|svg)$/i.test(key);
}
