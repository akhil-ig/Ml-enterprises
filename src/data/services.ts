export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  points: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: 'civil-building',
    title: 'Civil & Building Works',
    short: 'Foundations, structures, buildings and allied civil packages for industrial sites.',
    body: 'Complete civil scopes for logistics terminals, silo complexes and industrial facilities — foundations, RCC structures, custom buildings, drains, boundary walls and approach works, executed to approved drawings with stage-wise quality control.',
    points: [
      'Foundations and RCC structures',
      'Custom buildings and admin blocks',
      'Drains, boundary walls and approach roads',
      'Civil rectification and repair packages',
    ],
    image: 'gallery/civil-concrete-pour.webp',
  },
  {
    slug: 'railway-siding',
    title: 'Railway Siding Projects',
    short: 'End-to-end private siding execution, from formation to commissioning.',
    body: 'Complete railway siding development taken from concept to commissioning — formation earthwork, track linking, structures, OHE and allied facilities delivered under one responsibility, including sidings taking off from mainline stations.',
    points: [
      'End-to-end private siding development',
      'Connectivity from mainline stations',
      'Coordination with railway authorities',
      'Allied facilities and terminal works',
    ],
    image: 'gallery/railway-track-formation.webp',
  },
  {
    slug: 'ohe',
    title: 'Overhead Electrification (OHE)',
    short: 'OHE erection and commissioning for sidings and terminals.',
    body: 'Supply and execution of overhead electrification works for private sidings and industrial terminals, including mast erection, wiring and coordination with PSI and telecom scopes.',
    points: [
      'OHE supply and erection',
      'Mast foundations and structures',
      'PSI and telecom coordination',
      'Testing and commissioning support',
    ],
    image: 'gallery/railway-track-ballast.webp',
  },
  {
    slug: 'yard-development',
    title: 'Railway Yard Development',
    short: 'Yard extensions, paved yards, handling platforms and terminal aprons.',
    body: 'Development and extension of railway yards and rail-linked terminals — paved yards in M-50 paver block and CC pavement, handling platforms, CFS areas, drainage and yard lighting works.',
    points: [
      'Yard extension and additional lines',
      'Paved yards and CFS areas',
      'Handling platforms and aprons',
      'Yard drainage and allied works',
    ],
    image: 'gallery/yard-wide-paving.webp',
  },
  {
    slug: 'p-way',
    title: 'Permanent Way (P-Way) Works',
    short: 'Track laying and linking, points and crossings, embedded and pit track.',
    body: 'Supply, assembling, laying and linking of railway track with our own P-Way materials — including points and crossings, derailing switches, embedded track and pit track for loco sheds, and track upliftment works.',
    points: [
      'Track laying, linking and upliftment',
      'Points, crossings and derailing switches',
      'Embedded track and pit track for sheds',
      'Ballast supply, spreading and packing',
    ],
    image: 'gallery/team-rails-group.webp',
  },
  {
    slug: 'peb',
    title: 'Pre-Engineered Buildings (PEB)',
    short: 'PEB warehouses and industrial sheds, foundation to cladding.',
    body: 'Pre-engineered building packages for warehouses and industrial facilities — foundations and pedestals, structural erection, sheeting and cladding, along with the surrounding civil and paving scope.',
    points: [
      'PEB warehouses and industrial sheds',
      'Foundations, pedestals and anchor systems',
      'Structural erection, sheeting and cladding',
      'Integrated civil and paving scope',
    ],
    image: 'gallery/peb-warehouse-exterior.webp',
  },
  {
    slug: 'ffs',
    title: 'Fire Fighting Systems (FFS)',
    short: 'Fire fighting system design coordination and installation.',
    body: 'Fire fighting systems for warehouses, terminals and industrial buildings — design coordination, pump rooms, piping networks, hydrants and sprinklers, executed to statutory requirements alongside the building package.',
    points: [
      'Design coordination and approvals',
      'Pump rooms and piping networks',
      'Hydrant and sprinkler systems',
      'Statutory compliance and testing',
    ],
    image: 'gallery/electrical-ffs-room.webp',
  },
  {
    slug: 'electrical',
    title: 'Electrical Works',
    short: 'Internal and external electrical packages for industrial facilities.',
    body: 'Electrical works planning and execution across terminals and industrial buildings — internal distribution, external lighting, panels and cabling, delivered in step with the civil and PEB programme.',
    points: [
      'Internal electrical distribution',
      'Panels, cabling and earthing',
      'Yard and external lighting',
      'Statutory compliance and handover',
    ],
    image: 'gallery/building-office-hall.webp',
  },
];
