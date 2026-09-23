export type Client = {
  name: string;
  short?: string;
  sector: string;
};

/** Profile mein "KEY CLIENTS" ke neeche naamzad */
export const keyClientNames = [
  'Adani Group',
  'DP World',
  'UltraTech Cement',
  'Pristine Mega Logistics Park',
  'Kanpur Logistics Park',
];

export const clients: Client[] = [
  { name: 'Adani Logistics Ltd', sector: 'Logistics & terminals' },
  { name: 'Adani Agri Logistics Ltd', sector: 'Logistics & terminals' },
  { name: 'Adani HM Agri Logistics Ltd', sector: 'Logistics & terminals' },
  { name: 'Adani Forwarding Agent Pvt Ltd', sector: 'Logistics & terminals' },
  { name: 'DP World Rail Logistics Pvt Ltd', sector: 'Logistics & terminals' },
  { name: 'DP World Multimodal Logistics — Panipat', sector: 'Logistics & terminals' },
  { name: 'DP World Multimodal Logistics — Hyderabad', sector: 'Logistics & terminals' },
  { name: 'Pristine Mega Logistics Park Pvt Ltd', sector: 'Logistics & terminals' },
  { name: 'Kanpur Logistics Park Pvt Ltd', sector: 'Logistics & terminals' },
  { name: 'Sanjvik Terminals Pvt Ltd', sector: 'Logistics & terminals' },

  { name: 'Rail Vikas Nigam Ltd', short: 'RVNL', sector: 'Government & Indian Railways' },
  { name: 'Ircon International Ltd', short: 'IRCON', sector: 'Government & Indian Railways' },
  { name: 'Hindustan Urvarak & Rasayan Ltd', short: 'HURL', sector: 'Government & Indian Railways' },

  { name: 'UltraTech Cement Ltd', sector: 'Industry & manufacturing' },
  { name: 'Shivakriti International Ltd', sector: 'Infrastructure & EPC' },
  { name: 'Howe Engineering Project (India) Pvt Ltd', sector: 'Infrastructure & EPC' },
  { name: 'Blue Star Realtors Ltd', sector: 'Infrastructure & EPC' },
];

export const clientSectors = [...new Set(clients.map((c) => c.sector))];

/** Home page marquee — full legal names wahan bahut lambe pad jate hain */
export const marqueeNames = [
  'Adani Logistics',
  'DP World',
  'UltraTech Cement',
  'Adani Agri Logistics',
  'Rail Vikas Nigam Ltd',
  'IRCON International',
  'Pristine Mega Logistics',
  'Kanpur Logistics Park',
  'HURL',
  'Sanjvik Terminals',
  'Shivakriti International',
  'Blue Star Realtors',
];
