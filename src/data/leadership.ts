export type Partner = {
  name: string;
  role: string;
  responsibilities: string[];
  /** Client se photo aane par yahan file name daal dein (public/team/ mein) */
  photo?: string;
};

export const leadershipIntro =
  'M L Enterprises LLP is led by experienced partners with strong domain expertise across railway, civil, electrical and allied infrastructure works. The active involvement of partners ensures technical depth, financial control and effective project execution.';

export const partners: Partner[] = [
  {
    name: 'Mr. Neeraj Kumar',
    role: 'Partner — Civil & PEB Building, Accounts',
    responsibilities: [
      'Overall responsibility for railway siding works',
      'Financial planning, billing control and account management',
      'Client coordination and project monitoring',
    ],
  },
  {
    name: 'Mr. Tilak Raj',
    role: 'Partner — Railway, Civil & Yard Development',
    responsibilities: [
      'Execution of civil works and PEB structures',
      'Technical planning, site management and quality control',
      'Coordination with consultants and vendors',
    ],
  },
  {
    name: 'Mr. Pratap Singh',
    role: 'Partner — Electrical & Fire Fighting Systems, Administration',
    responsibilities: [
      'Electrical works planning and execution',
      'Fire fighting systems design coordination and implementation',
      'Compliance with statutory and safety requirements, and administration',
    ],
  },
];
