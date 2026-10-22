// Your experience & education. Used on the home page (top 3 roles) and the About page (everything).

export interface Role {
  org: string;
  url: string;
  role: string;
  team?: string;
  /** Short, NDA-safe highlights shown under the role. Leave empty to hide. */
  highlights: string[];
  /** Lessons shown on the About page. */
  notes: string[];
}

export const experience: Role[] = [
  {
    org: 'Meta', url: 'https://about.meta.com/realitylabs/', role: 'Research Program Manager III (contract)', team: 'Reality Labs Entertainment',
    highlights: [], notes: [],
  },
  {
    org: 'Meta', url: 'https://about.meta.com/realitylabs/', role: 'Research Program Manager (contract)', team: 'Reality Labs (Quantified Wearability AR/VR)',
    // TODO(Clem): add 2–3 NDA-safe highlights, e.g. kinds of studies/programs run, team size, scale, outcomes.
    // This list is hidden on the site while it's empty.
    highlights: [],
    notes: [],
  },
  {
    org: 'Yext', url: 'https://www.yext.com/', role: 'Digital Project Manager',
    highlights: ['Led the overhaul of Caravel Autism Health\'s facility pages for a nationwide healthcare client.'],
    notes: ['Learned to interpret the objectives and needs of the client.', 'Learned to leverage agile project management.', 'Learned to take excellent notes.'],
  },
  {
    org: 'Redfin', url: 'https://www.redfin.com/', role: 'Quantitative User Researcher',
    highlights: ['Turned thousands of data points about home buyers and sellers into stories that influenced product decisions.'],
    notes: ['Learned to interpret the behaviors and needs of real estate buyers/sellers.', 'Learned to influence design decisions with product team.', 'Learned to illustrate thousands of data points into data-driven stories.'],
  },
  {
    org: 'Invent.us', url: 'https://invent.us/', role: 'Product Manager', highlights: [],
    notes: ['Learned to usability test digital wireframes.', 'Learned to wear multiple hats in a fast-paced fintech startup environment.'],
  },
  {
    org: 'PSB Insights', url: 'https://www.psbinsights.com/', role: 'Market Research Analyst', highlights: [],
    notes: ['Learned to program advanced surveys for large B2C clients.', 'Learned to leverage data visualization techniques.'],
  },
];

export const education = [
  { title: 'B.A. Business Administration (Information Systems, Marketing Analytics)', campus: 'University of Washington', school: 'Foster School of Business', url: 'https://foster.uw.edu/' },
  { title: 'Minor, Informatics (UX/UI)', campus: 'University of Washington', school: 'Information School', url: 'https://ischool.uw.edu/' },
  { title: 'UX Design Certificate', school: 'School of Visual Concepts', url: 'https://www.svcseattle.com/' },
];

// Certifications (About page). Each link opens the official credential.
// issuer is plain text; set it to '' when the link label already names the issuer.
export const certifications = [
  { title: 'Professional Scrum Master I (PSM I)', issuer: 'Scrum.org', links: [{ label: 'ID 431559', url: 'https://www.credly.com/badges/9dc465c8-59f2-4b37-a9d9-af4d7f4fef1f' }] },
  { title: 'UX Design Certificate', issuer: '', links: [{ label: 'School of Visual Concepts', url: 'https://badges.parchment.com/public/assertions/abVyx3hBR9Gc2zgp3X0bOg' }] },
  { title: 'Wilderness First Aid (WFA)', issuer: 'BASE Medical', links: [
    { label: 'WFA', url: 'https://base-medical.thinkific.com/certificates/5oyawoly5f' },
    { label: 'Wilderness Medicine', url: 'https://base-medical.thinkific.com/certificates/nyhhzykltw' },
  ] },
];
