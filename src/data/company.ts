export const company = {
  name: 'M L Enterprises LLP',
  shortName: 'M L Enterprises',
  tagline: 'Construct for Future',
  establishedYear: 2008,
  llpYear: 2020,

  intro:
    'A professionally managed civil infrastructure contracting firm specialising in civil works, PEB buildings, railway siding and allied infrastructure — executed end to end for Adani, DP World, UltraTech Cement and other industrial clients across India.',

  address: {
    line1: 'SCO 204, 1st Floor',
    line2: 'Opposite BMG Mall, Sector 5',
    city: 'Rewari',
    state: 'Haryana',
    pincode: '123401',
    country: 'India',
  },

  phones: ['+91 94161 14706', '+91 98133 50544'],
  emails: ['info@mlenterprises.net', 'neerajyadav@mlenterprises.net'],
  contactPersons: ['Mr. Neeraj Kumar', 'Mr. Tilak Raj'],

  gstin: '06AAQFJ1194G1Z6',
  udyam: 'UDYAM-HR-15-0012611',

  mapQuery: 'SCO 204, Sector 5, Rewari, Haryana 123401',
} as const;

export const stats = [
  { value: 18, suffix: '', label: 'Years of execution', note: 'Since 2008' },
  { value: 40, suffix: '+', label: 'Projects delivered & in hand', note: 'Civil, railway & PEB' },
  { value: 8, suffix: '', label: 'Disciplines in-house', note: 'Civil through to OHE and FFS' },
  { value: 9, suffix: '', label: 'States of operation', note: 'PAN India execution' },
] as const;

export const aboutParagraphs = [
  'M L Enterprises LLP is a professionally managed civil infrastructure contracting firm specialising in civil work and PEB buildings, railway siding and allied infrastructure works.',
  'Established in 2008 as M L Enterprises, the company initially focused on civil, railway and siding projects. With continuous growth, expanded capabilities and the induction of new partners, the firm was restructured as M L Enterprises LLP in 2020.',
  'We are recognised for quality execution, timely delivery, and adherence to safety and compliance standards.',
] as const;

export const vision =
  'To become a leading infrastructure and railway siding construction company in India, recognised for engineering excellence, safety, and sustainable project delivery.';

export const mission = [
  'Deliver high-quality, cost-effective and timely infrastructure solutions',
  'Maintain the highest standards of safety, quality and statutory compliance',
  'Build long-term partnerships based on trust and performance',
  'Continuously enhance skills, systems and technology',
] as const;

export const policies = [
  {
    slug: 'hse',
    title: 'Health, Safety & Environment',
    short: 'Zero tolerance for unsafe practices.',
    body: 'M L Enterprises LLP is committed to providing a safe, healthy and environmentally responsible workplace. Our HSE policy includes zero tolerance for unsafe practices, compliance with statutory regulations, regular safety training, proper use of PPE, hazard identification, emergency preparedness, and minimisation of environmental impact.',
    points: [
      'Zero tolerance for unsafe practices',
      'Compliance with statutory regulations',
      'Regular safety training and PPE discipline',
      'Hazard identification and emergency preparedness',
      'Minimisation of environmental impact',
    ],
  },
  {
    slug: 'qaqc',
    title: 'Quality Assurance & Quality Control',
    short: 'Inspection and testing at every stage.',
    body: 'We follow a robust QA/QC system to ensure all works meet contractual and statutory requirements. This includes implementation of Quality Assurance Plans, adherence to standards and approved drawings, inspection and testing at all stages, use of approved materials, documentation, audits, and continuous improvement practices.',
    points: [
      'Quality Assurance Plans on every package',
      'Adherence to standards and approved drawings',
      'Inspection and testing at all stages',
      'Approved materials and full documentation',
      'Audits and continuous improvement',
    ],
  },
] as const;

export const strengths = [
  {
    title: 'End-to-end railway siding execution',
    body: 'From formation earthwork and P-Way through to OHE, signalling interface and commissioning — one contractor carries the whole siding instead of a chain of sub-agencies.',
  },
  {
    title: 'Eight disciplines under one roof',
    body: 'Civil, PEB, railway, yard development, P-Way, OHE, electrical and fire fighting systems are all executed in-house, which keeps interfaces and accountability in one place.',
  },
  {
    title: 'Partner-led project control',
    body: 'Each partner owns a discipline and stays actively involved on site, giving technical depth, financial control and decisions without escalation delays.',
  },
  {
    title: 'Large-scale, time-bound delivery',
    body: 'Proven capability on multi-crore packages for Adani, DP World and UltraTech, delivered against fixed programmes and client milestones.',
  },
  {
    title: 'Safety and compliance discipline',
    body: 'A formal HSE policy with zero tolerance for unsafe practices, regular training, PPE discipline and emergency preparedness across every site.',
  },
  {
    title: 'Statutory coordination',
    body: 'Strong working coordination with clients, consultants and statutory authorities — approvals and inspections tracked as part of the programme, not after it.',
  },
] as const;
