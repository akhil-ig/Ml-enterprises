export type Client = {
  name: string;
  short?: string;
  sector: string;
};

export const clients: Client[] = [
  { name: 'Container Corporation of India Ltd', short: 'CONCOR', sector: 'Government & Indian Railways' },
  { name: 'Rail Vikas Nigam Ltd', short: 'RVNL', sector: 'Government & Indian Railways' },
  { name: 'Ircon International Ltd', short: 'IRCON', sector: 'Government & Indian Railways' },
  { name: 'Haryana Orbital Rail Corporation', short: 'HRIDC', sector: 'Government & Indian Railways' },
  { name: 'North Western Railway', sector: 'Government & Indian Railways' },
  { name: 'Hindustan Urvarak & Rasayan Ltd', short: 'HURL', sector: 'Government & Indian Railways' },

  { name: 'Adani Logistics Ltd', sector: 'Logistics & terminals' },
  { name: 'Adani Agri Logistics Ltd', sector: 'Logistics & terminals' },
  { name: 'Kribhco Infrastructure Ltd', sector: 'Logistics & terminals' },
  { name: 'Sanjvik Terminals Pvt Ltd', sector: 'Logistics & terminals' },
  { name: 'Gateway Rail Freight Ltd', sector: 'Logistics & terminals' },
  { name: 'Kanpur Logistics Park Pvt Ltd', sector: 'Logistics & terminals' },
  { name: 'Pristine Mega Logistics Park Pvt Ltd', sector: 'Logistics & terminals' },
  { name: 'Pristine Magadh Infrastructure Pvt Ltd', sector: 'Logistics & terminals' },
  { name: 'Innovative B2B Logistics Solutions Ltd', sector: 'Logistics & terminals' },

  { name: 'Vedanta Ltd', sector: 'Mining & metals' },
  { name: 'Hindustan Zinc Ltd', sector: 'Mining & metals' },
  { name: 'Worlds Window Group', sector: 'Mining & metals' },

  { name: 'Shivakriti International Ltd', sector: 'Infrastructure & EPC' },
  { name: 'ARSS Infrastructure Projects Ltd', sector: 'Infrastructure & EPC' },
  { name: 'Blue Star Realtors Ltd', sector: 'Infrastructure & EPC' },
];

export const clientSectors = [...new Set(clients.map((c) => c.sector))];

/** Home page marquee ke liye chune hue bade naam */
export const featuredClientNames = [
  'CONCOR',
  'Rail Vikas Nigam Ltd',
  'Adani Logistics',
  'IRCON International',
  'Vedanta',
  'Hindustan Zinc',
  'Kribhco Infrastructure',
  'HRIDC',
  'Gateway Rail Freight',
  'Sanjvik Terminals',
  'HURL',
  'North Western Railway',
];
