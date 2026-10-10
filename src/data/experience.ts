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
    org: 'Meta', url: 'https://about.meta.com/realitylabs/', role: 'Research program manager', team: 'Reality Labs (AR/VR)',
    // TODO(Clem): add 2–3 NDA-safe highlights, e.g. kinds of studies/programs run, team size, scale, outcomes.
    // This list is hidden on the site while it's empty.
    highlights: [],
    notes: [],
  },
  {
    org: 'Yext', url: 'https://www.yext.com/', role: 'UX digital project manager',
    highlights: ['Led the overhaul of Caravel Autism Health\'s facility pages for a nationwide healthcare client.'],
    notes: ['Learned to interpret the objectives and needs of the client.', 'Learned to leverage agile project management.', 'Learned to take excellent notes.'],
  },
  {
    org: 'Redfin', url: 'https://www.redfin.com/', role: 'Quantitative user researcher',
    highlights: ['Turned thousands of data points about home buyers and sellers into stories that influenced product decisions.'],
    notes: ['Learned to interpret the behaviors and needs of real estate buyers/sellers.', 'Learned to influence design decisions with product team.', 'Learned to illustrate thousands of data points into data-driven stories.'],
  },
  {
    org: 'Invent.us', url: 'https://invent.us/', role: 'Product manager intern', highlights: [],
    notes: ['Learned to usability test digital wireframes.', 'Learned to wear multiple hats in a fast-paced fintech startup environment.'],
  },
  {
    org: 'PSB Insights', url: 'https://www.psbinsights.com/', role: 'Market research analyst', highlights: [],
    notes: ['Learned to program advanced surveys for large B2C clients.', 'Learned to leverage data visualization techniques.'],
  },
];

export const education = [
  { title: 'UX Design Certificate', school: 'School of Visual Concepts' },
  { title: 'Minor Degree: Informatics (UX/UI)', school: 'University of Washington - Information School (iSchool)' },
  { title: 'B.A. Business Administration (Information Systems, Marketing Analytics)', school: 'University of Washington - Foster School of Business' },
];
