export type ProjectStatus = 'ongoing' | 'completed';

export type Project = {
  title: string;
  client: string;
  location?: string;
  state?: string;
  category: string;
  status: ProjectStatus;
};

/**
 * Contract values profile mein hain par site par deliberately nahi dikhaye ja rahe —
 * scope, client aur status hi public rakhe gaye hain.
 */
export const projects: Project[] = [
  // ---------- Ongoing ----------
  {
    title:
      'Civil works of silo complexes and allied facilities at Ujjain, Dhar, Damoh and Guna for HM Agri Logistics',
    client: 'Adani HM Agri Logistics Ltd',
    location: 'Ujjain, Dhar, Damoh & Guna',
    state: 'Madhya Pradesh',
    category: 'civil-building',
    status: 'ongoing',
  },
  {
    title:
      'Civil work for custom building, PEB warehouse, paved yard, drains, boundary wall, electrical and fire fighting works',
    client: 'DP World Multimodal Logistics Panipat Pvt Ltd',
    location: 'Panipat',
    state: 'Haryana',
    category: 'peb',
    status: 'ongoing',
  },
  {
    title:
      'Civil work, railway works and allied facilities at Borkhedi, and phase-02 civil and railway works at Nagpur ICD',
    client: 'Adani Logistics Ltd',
    location: 'Borkhedi, Nagpur',
    state: 'Maharashtra',
    category: 'railway-siding',
    status: 'ongoing',
  },
  {
    title: 'Civil work package of the Chandari site for the FCI agri-silo project',
    client: 'Adani Agri Logistics (Chandari) Ltd',
    location: 'Chandari',
    state: 'Uttar Pradesh',
    category: 'civil-building',
    status: 'ongoing',
  },
  {
    title: 'Supply and execution of P-Way work, OHE, PSI and telecom',
    client: 'UltraTech Cement Ltd',
    category: 'ohe',
    status: 'ongoing',
  },
  {
    title: 'Overhead electrification works at ICD Tumb',
    client: 'Adani Forwarding Agent Pvt Ltd',
    location: 'Tumb',
    state: 'Gujarat',
    category: 'ohe',
    status: 'ongoing',
  },

  // ---------- Completed ----------
  {
    title:
      'Railway siding to the AALL food grain storage silos, taking off from Khudiram Bose Pusa station on the Muzaffarpur–Samastipur section, Sonpur Division, East Central Railway',
    client: 'Adani Agri Logistics (Samastipur) Ltd',
    location: 'Pusa, Samastipur',
    state: 'Bihar',
    category: 'railway-siding',
    status: 'completed',
  },
  {
    title: 'Railway works and grain silo project civil works at Darbhanga',
    client: 'Adani Agri Logistics (Darbhanga) Ltd',
    location: 'Darbhanga',
    state: 'Bihar',
    category: 'railway-siding',
    status: 'completed',
  },
  {
    title: 'Civil work, third line and railway platform work at Pali, Govindpuri',
    client: 'DP World Rail Logistics Pvt Ltd',
    location: 'Pali, Govindpuri',
    state: 'Haryana',
    category: 'yard-development',
    status: 'completed',
  },
  {
    title: 'Civil and yard extension works — railway line no. 4 at ICD Patli',
    client: 'Adani Logistics Ltd',
    location: 'Patli',
    state: 'Haryana',
    category: 'yard-development',
    status: 'completed',
  },
  {
    title: 'Civil works at Kila Raipur',
    client: 'Adani Logistics Ltd',
    location: 'Kila Raipur, Ludhiana',
    state: 'Punjab',
    category: 'civil-building',
    status: 'completed',
  },
  {
    title:
      'Supply, assembling, laying and linking of railway track with own P-Way materials, and design and construction of flooring, embedded track and pit track for the new Electric Loco Shed at Daund',
    client: 'Ircon International Ltd',
    location: 'Daund, Pune',
    state: 'Maharashtra',
    category: 'p-way',
    status: 'completed',
  },
  {
    title: 'Civil works at the DP World Rail Logistics private freight terminal at Pali',
    client: 'DP World Rail Logistics Pvt Ltd',
    location: 'Pali, Rewari',
    state: 'Haryana',
    category: 'civil-building',
    status: 'completed',
  },
  {
    title: 'Railway connectivity from Borekhedi station to the project site',
    client: 'Adani Logistics Ltd',
    location: 'Borekhedi, Nagpur',
    state: 'Maharashtra',
    category: 'railway-siding',
    status: 'completed',
  },
  {
    title: 'Civil works for extension of the existing paved yard at ICD Patli',
    client: 'Adani Logistics Ltd',
    location: 'Patli, Gurgaon',
    state: 'Haryana',
    category: 'yard-development',
    status: 'completed',
  },
  {
    title: 'Civil and ballast supply for the HORC project, T-1 package',
    client: 'Shivakriti International Ltd',
    location: 'Manesar',
    state: 'Haryana',
    category: 'p-way',
    status: 'completed',
  },
  {
    title: 'Track upliftment at DP World Hyderabad',
    client: 'DP World Multimodal Logistics Hyderabad Pvt Ltd',
    location: 'Hyderabad',
    state: 'Telangana',
    category: 'p-way',
    status: 'completed',
  },
  {
    title: 'Track upliftment at DP World Hyderabad — second package',
    client: 'DP World Multimodal Logistics Hyderabad Pvt Ltd',
    location: 'Hyderabad',
    state: 'Telangana',
    category: 'p-way',
    status: 'completed',
  },
  {
    title:
      'Earthwork in formation, bridges and drains, P-Way linking, ballast and P-Way material supply, PSC sleepers, points and crossings and derailing switches for the new railway siding of the ammonia–urea fertilizer complex',
    client: 'Hindustan Urvarak & Rasayan Ltd',
    location: 'Gorakhpur',
    state: 'Uttar Pradesh',
    category: 'railway-siding',
    status: 'completed',
  },
  {
    title:
      'Civil rectification and repairing works for Jhamuwas (Gokaldas) at Tauru — warehouses 2 and 4',
    client: 'Howe Engineering Project (India) Pvt Ltd',
    location: 'Tauru, Mewat',
    state: 'Haryana',
    category: 'civil-building',
    status: 'completed',
  },
  {
    title: 'Civil rectification and repairing works for Jhamuwas (Gokaldas) at Tauru',
    client: 'Blue Star Realtors Ltd',
    location: 'Tauru, Mewat',
    state: 'Haryana',
    category: 'civil-building',
    status: 'completed',
  },
  {
    title:
      'Railway and civil work for development of the Gati Shakti Multi Modal Cargo Terminal at line no. 10 of New Rewari station on DFCCIL / railway land',
    client: 'Pristine Mega Logistics Park Pvt Ltd',
    location: 'New Rewari',
    state: 'Haryana',
    category: 'railway-siding',
    status: 'completed',
  },
  {
    title: 'Civil works at Kishangarh',
    client: 'Adani Logistics Ltd',
    location: 'Kishangarh',
    state: 'Rajasthan',
    category: 'civil-building',
    status: 'completed',
  },
  {
    title: 'Railway siding to the FCI silos taking off from Naultha station on the Rohtak–Panipat section, Northern Railway',
    client: 'Adani Logistics Ltd',
    location: 'Naultha, Panipat',
    state: 'Haryana',
    category: 'railway-siding',
    status: 'completed',
  },
  {
    title:
      'Roadbed, major and minor bridges, RUBs, ROBs, track linking, S&T and general electrical works for the new Barbigha–Sheikhpura line (16.8 km), Danapur Division, East Central Railway',
    client: 'Rail Vikas Nigam Ltd',
    location: 'Barbigha–Sheikhpura',
    state: 'Bihar',
    category: 'railway-siding',
    status: 'completed',
  },
  {
    title: 'Civil and permanent way works for rail connectivity to the proposed ICD from Kila Raipur station',
    client: 'Adani Logistics Ltd',
    location: 'Kila Raipur, Ludhiana',
    state: 'Punjab',
    category: 'p-way',
    status: 'completed',
  },
  {
    title: 'Civil works for the extension of the existing paved yard at ICD Patli, Gurgaon',
    client: 'Adani Logistics Ltd',
    location: 'Patli, Gurgaon',
    state: 'Haryana',
    category: 'yard-development',
    status: 'completed',
  },
  {
    title:
      'Manufacturing and laying of M-50 high strength paver blocks with base and sub-base work for the proposed ICD at Bihta',
    client: 'Pristine Mega Logistics Park Pvt Ltd',
    location: 'Bihta, Patna',
    state: 'Bihar',
    category: 'yard-development',
    status: 'completed',
  },
  {
    title: 'Civil works for the proposed multi-modal logistics park, phase 1',
    client: 'Adani Logistics Ltd',
    location: 'Kila Raipur, Ludhiana',
    state: 'Punjab',
    category: 'civil-building',
    status: 'completed',
  },
  {
    title:
      'Development of the CFS extension area including paving, base and sub-base work, drainage, empty yard and allied works for the rail-linked terminal',
    client: 'Kanpur Logistics Park Pvt Ltd',
    location: 'Panki, Kanpur',
    state: 'Uttar Pradesh',
    category: 'yard-development',
    status: 'completed',
  },
  {
    title:
      'Paving of the rail side platform and CFS in M-50 grade high strength paver blocks with base and sub-base, and allied civil works for the rail-linked terminal near Panki railway station',
    client: 'Kanpur Logistics Park Pvt Ltd',
    location: 'Panki, Kanpur',
    state: 'Uttar Pradesh',
    category: 'yard-development',
    status: 'completed',
  },
  {
    title: 'Civil works for the balance ICD Kishangarh yard work (677 m × 1.3 m wide)',
    client: 'Adani Agri Logistics Ltd',
    location: 'Kishangarh',
    state: 'Rajasthan',
    category: 'yard-development',
    status: 'completed',
  },
  {
    title: 'Civil work for extension of the existing domestic paved yard at the Rewari end of ICD Patli',
    client: 'Adani Logistics Ltd',
    location: 'Patli',
    state: 'Haryana',
    category: 'yard-development',
    status: 'completed',
  },
  {
    title: 'Civil work for balance yard and road development works at Naultha',
    client: 'Adani Agri Logistics Ltd',
    location: 'Naultha, Panipat',
    state: 'Haryana',
    category: 'yard-development',
    status: 'completed',
  },
  {
    title:
      'Prestressed precast panel and pole compound wall with concertina and barbed wire, and retaining wall works at ICD Patli',
    client: 'Adani Logistics Ltd',
    location: 'Patli',
    state: 'Haryana',
    category: 'civil-building',
    status: 'completed',
  },
  {
    title: 'Construction of the railway siding platform at ICD Bawal',
    client: 'Sanjvik Terminals Pvt Ltd',
    location: 'Bawal',
    state: 'Haryana',
    category: 'yard-development',
    status: 'completed',
  },
  {
    title: 'Remaining work of the railway siding platform, line no. 2 for CAR use at ICD Bawal',
    client: 'Sanjvik Terminals Pvt Ltd',
    location: 'Bawal',
    state: 'Haryana',
    category: 'yard-development',
    status: 'completed',
  },
  {
    title: 'Railway siding platform up to 4.0 m wide WMM, line no. 2 for APL Vascor at ICD Bawal',
    client: 'Sanjvik Terminals Pvt Ltd',
    location: 'Bawal',
    state: 'Haryana',
    category: 'yard-development',
    status: 'completed',
  },
  {
    title: 'Yard extension — railway line no. 4 at ICD Patli',
    client: 'Adani Logistics Ltd',
    location: 'Patli',
    state: 'Haryana',
    category: 'yard-development',
    status: 'completed',
  },
  {
    title: 'Earthwork for the proposed ICD rail-linked terminals at Chawa Payal',
    client: 'Pristine Mega Logistics Park Pvt Ltd',
    location: 'Chawa Payal, Ludhiana',
    state: 'Punjab',
    category: 'civil-building',
    status: 'completed',
  },
  {
    title: 'Civil works at the DP World Rail Logistics private freight terminal at Pali — allied package',
    client: 'DP World Rail Logistics Pvt Ltd',
    location: 'Pali, Rewari',
    state: 'Haryana',
    category: 'civil-building',
    status: 'completed',
  },
];

export const ongoingProjects = projects.filter((p) => p.status === 'ongoing');
export const completedProjects = projects.filter((p) => p.status === 'completed');

export const projectStates = [...new Set(projects.map((p) => p.state).filter(Boolean))].sort() as string[];
export const projectClients = [...new Set(projects.map((p) => p.client))].sort();
