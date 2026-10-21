// robots.txt: lets search engines crawl everything and points them to the sitemap.
// Uses the site address from astro.config.mjs, so it stays correct if the domain changes.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
