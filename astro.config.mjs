// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Live site URL. Switch to 'https://clemmooc.com' once the domain is connected.
const SITE = process.env.SITE_URL || 'https://clemmooc.github.io';

export default defineConfig({
  site: SITE,
  integrations: [mdx(), sitemap()],
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  image: {
    // Astro downloads images from R2 at build time and serves resized,
    // compressed copies. The originals in R2 are never modified.
    remotePatterns: [
      { protocol: 'https', hostname: '**.r2.dev' },
      { protocol: 'https', hostname: 'media.clemmooc.com' },
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'http', hostname: '127.0.0.1' },
    ],
    layout: 'constrained',
    responsiveStyles: true,
  },
});
