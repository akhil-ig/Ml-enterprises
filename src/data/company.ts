export const company = {
  name: 'M L Enterprises LLP',
  shortName: 'M L Enterprises',
  formerName: 'M/s. Sis Ram Bir Singh',
  establishedYear: 1972,
  tagline: 'Building rail & road infrastructure across India since 1972',
  intro:
    'A Rewari-based civil construction firm executing railway and road infrastructure across PAN India — earthwork, permanent way, ballast, bridges and rail-linked terminals, from concept to commissioning.',

  address: {
    line1: 'SCO 204, Ist Floor, Near Bharat Gas Agency',
    line2: 'Opposite BMG Mall, Sector 5',
    city: 'Rewari',
    state: 'Haryana',
    pincode: '123401',
    country: 'India',
  },

  phones: ['+91 98719 83138', '+91 98133 50544'],
  email: 'info@mlenterprises.net',

  mapQuery: 'SCO 204, Sector 5, Rewari, Haryana 123401',
} as const;

export const stats = [
  { value: 54, suffix: '+', label: 'Years of experience', note: 'Established 1972' },
  { value: 52, suffix: '', label: 'Projects delivered & in hand', note: 'Rail, road & terminals' },
  { value: 21, suffix: '', label: 'Institutional clients', note: 'PSUs & corporates' },
  { value: 8, suffix: '', label: 'States of operation', note: 'PAN India execution' },
] as const;

export const aboutParagraphs = [
  'We are committed to a high standard of excellence in all activities that strives to establish a strong relationship of mutual trust and confidence with clients. On any given project, our team is committed to provide services at all times to the client’s satisfaction.',
  'M L Enterprises — formerly M/s. Sis Ram Bir Singh, established in 1972 and based at Rewari, Haryana — is a group of highly qualified and experienced staff. Our expertise is civil construction work across PAN India, such as railways, roadways, bridges and buildings.',
  'Our aim is to provide high quality construction services in a smooth, convenient and impressive manner, which will automatically influence our clients to recommend the services of our company to others.',
] as const;

export const competenceParagraph =
  'Our company has been associated with reputed companies across India for the last twenty years and has had the opportunity of executing every type of work mentioned above, from concept to commissioning — even on EPC basis, as well as for allied infrastructure. In the process, we have not only acquired all the plant and machinery, but also the intellectual know-how and trained manpower needed for executing such types of work. We also have a full-fledged material investigation laboratory and excellent in-house survey capabilities, both of which add considerable value to our work.';

export const capabilities = [
  {
    title: 'Owned plant & machinery',
    body: 'A complete fleet acquired over decades of execution — no dependency on hired equipment for critical activities, so programme dates hold.',
  },
  {
    title: 'In-house material laboratory',
    body: 'A full-fledged material investigation laboratory keeps quality control on site rather than in a queue at an external lab.',
  },
  {
    title: 'In-house survey capability',
    body: 'Detailed engineering survey, final location survey and alignment design handled by our own teams and instruments.',
  },
  {
    title: 'Trained manpower',
    body: 'Permanent supervisory and skilled workforce experienced in railway working conditions, including work adjoining live tracks.',
  },
  {
    title: 'EPC delivery',
    body: 'Capability to take a project from concept to commissioning, including allied infrastructure, under a single responsibility.',
  },
  {
    title: 'PAN India execution',
    body: 'Projects delivered across Haryana, Punjab, Bihar, Maharashtra, Rajasthan, Uttar Pradesh, Chhattisgarh, Karnataka and beyond.',
  },
] as const;
