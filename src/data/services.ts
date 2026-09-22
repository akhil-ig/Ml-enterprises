export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: 'survey-alignment',
    title: 'Survey & alignment design',
    short: 'Detailed engineering survey, final location survey and alignment design for railways and roadways.',
    body: 'Every alignment we build starts with our own survey teams and instruments. Detailed engineering survey and final location survey work is carried out in-house, which keeps the design assumptions and the executed ground reality in the same hands.',
    points: [
      'Detailed engineering survey (DES)',
      'Final location survey (FLS)',
      'Alignment design for railways and roadways',
      'Cross-sections, levels and quantity computation',
    ],
  },
  {
    slug: 'earthwork',
    title: 'Earthwork execution',
    short: 'Formation earthwork in cutting and filling for railway and road projects.',
    body: 'Earthwork in cutting and filling, blanketing and formation work for railway and road projects, executed with our own fleet of excavators, dozers, compactors and tippers, with layer-wise compaction control from our material laboratory.',
    points: [
      'Formation earthwork in cutting and filling',
      'Blanketing material supply and spreading',
      'Layer-wise compaction with quality control',
      'Widening and extension of existing formation',
    ],
  },
  {
    slug: 'ballast',
    title: 'Ballast supply & laying',
    short: 'Supply, spreading and consolidation of stone crushed ballast for track work.',
    body: 'Supply and laying of stone crushed ballast to specification, including spreading, boxing and consolidation. Large ballast supply contracts have been executed for orbit rail corridors, private sidings and mainline doubling projects.',
    points: [
      'Stone crushed ballast supply to IRS specification',
      'Spreading, boxing and consolidation',
      'Stone soling and WMM layers',
      'Bulk supply for doubling and corridor projects',
    ],
  },
  {
    slug: 'p-way',
    title: 'P-Way laying & linking',
    short: 'Permanent way laying, linking, turnouts and point & crossing work.',
    body: 'Supply, assembling, laying and linking of railway track with our own P-Way materials, including points and crossings, derailing switches, SEJs, embedded track and pit track for loco sheds and workshops.',
    points: [
      'Track laying and linking, plain track and yard lines',
      'Points and crossings, derailing switches',
      'Embedded track and pit track for sheds',
      'Ballastless track for rail-linked terminals',
    ],
  },
  {
    slug: 'bridges',
    title: 'Bridges for rail & road',
    short: 'Major and minor bridges, RUBs, ROBs, culverts and retaining structures.',
    body: 'Execution of major and minor bridges, road under bridges, road over bridges, box culverts and retaining walls — including work alongside live railway traffic, under traffic blocks and with the safety protocols that railway working demands.',
    points: [
      'Major and minor bridges for rail and road',
      'RUBs, ROBs and box culverts',
      'Retaining walls and stone pitching for erosion control',
      'Work adjoining live tracks under traffic blocks',
    ],
  },
  {
    slug: 'allied-works',
    title: 'Terminals, sidings & buildings',
    short: 'Rail-linked terminals, private sidings, stations, service buildings and paved yards.',
    body: 'Complete rail-linked terminal and private siding development — paved container yards, CFS areas, handling platforms, weighbridge foundations, admin and service buildings, pre-engineered warehouses, compound walls and approach roads.',
    points: [
      'ICD, CFS and rail-linked terminal development',
      'Paved yards in M-50 paver block and CC pavement',
      'Handling platforms and in-motion weighbridge foundations',
      'Service buildings, stations, warehouses and compound walls',
    ],
  },
  {
    slug: 'maintenance',
    title: 'Annual maintenance of rail infrastructure',
    short: 'Ongoing maintenance contracts for private sidings and terminal track assets.',
    body: 'Annual maintenance of rail infrastructure for terminal operators and industrial sidings — track attention, tamping support, ballast replenishment and structure upkeep that keeps a siding available for traffic.',
    points: [
      'Track attention and periodic maintenance',
      'Ballast replenishment and packing',
      'Structure and drainage upkeep',
      'Breakdown response for siding assets',
    ],
  },
];
