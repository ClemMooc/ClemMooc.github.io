import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each case study is one .mdx file in src/content/work/.
// The file name becomes the URL: project-webex-heads-up.mdx → /work/project-webex-heads-up
const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(), // Big title on the case study page
    cardTitle: z.string(), // Title on the home page card (use " / " for a line break)
    seoTitle: z.string().optional(), // Browser tab title; defaults to `title`
    description: z.string().optional(), // Search/social preview text
    category: z.enum(['ux', 'graphic', 'community']),
    order: z.number().default(99), // Lower numbers show first on the home page
    cover: z.string(), // R2 key for the home page card image
    hero: z.string().optional(), // R2 key for the full-width banner at the top
    eyebrow: z.string().optional(), // small label on the card, e.g. "CISCO WEBEX · CLIENT CAPSTONE"
    featured: z.boolean().default(false), // true = big card at the top of the home page
    role: z.string().optional(), // One line under the card title, e.g. "Research lead · 10 weeks · team of 3"
    result: z.string().optional(), // One-line outcome on the card. Only real, confirmed results.
    draft: z.boolean().default(false), // true = hidden from the live site
  }),
});

export const collections = { work };
