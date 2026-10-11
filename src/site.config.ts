// ─────────────────────────────────────────────────────────────
// Site-wide settings. Most "change X everywhere" edits happen here.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Clem Mooc',
  title: 'Clem Mooc · Research & Technical Program Manager',
  description:
    'Research program manager with a background in quantitative UX research and design. Case studies from Cisco Webex, healthcare and more.',
  location: 'Seattle, WA',
  email: 'clementmooc@gmail.com',

  // Where images/files live (Cloudflare R2 bucket "clemmooc-media").
  // When the custom domain is connected, change this ONE line to
  // 'https://media.clemmooc.com' and redeploy. Can also be overridden
  // with the MEDIA_URL environment variable (used for local testing).
  mediaUrl: 'https://pub-9da0c00f141f4782a8890f4823a1e3dd.r2.dev',

  // Google Analytics 4 measurement ID. Set to '' to disable.
  gaId: 'G-0M6FGQRXWJ',

  // R2 key of the resume PDF (see media/shared/).
  // TODO(Clem): replace with the Google Docs link to the current resume (sharing: "Anyone with the link can view").
  resume: 'shared/clem-mooc-resume-2024.pdf',

  links: {
    github: 'https://github.com/ClemMooc',
    linkedin: 'https://www.linkedin.com/in/clemwa/',
    // Photography links: not shown on the site for now (Clem's call, Oct 2026). Kept here to bring back later.
    fivehundredpx: 'https://500px.com/p/ClemMooc?view=photos',
    flickr: 'https://www.flickr.com/photos/187825676@N08/albums',
  },

  // Project tabs on the home page, in display order.
} as const;

