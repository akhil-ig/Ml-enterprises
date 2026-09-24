export type GalleryItem = {
  file: string;
  alt: string;
  category: string;
};

export const galleryCategories = [
  'Railway & P-Way',
  'Civil & structures',
  'PEB & buildings',
  'Yards & paving',
  'Silo & storage',
  'Electrical & FFS',
  'Team & safety',
] as const;

export const gallery: GalleryItem[] = [
  { file: 'railway-track-formation.webp', alt: 'Railway track formation work in progress', category: 'Railway & P-Way' },
  { file: 'railway-track-ballast.webp', alt: 'Ballasted railway track at a private siding', category: 'Railway & P-Way' },
  { file: 'team-rails-group.webp', alt: 'Site team beside stacked rails', category: 'Railway & P-Way' },

  { file: 'civil-concrete-pour.webp', alt: 'Concrete being poured from a transit mixer over a prepared bed', category: 'Civil & structures' },
  { file: 'civil-retaining-wall-rebar.webp', alt: 'Reinforcement and shuttering for a retaining wall', category: 'Civil & structures' },
  { file: 'civil-excavation-formwork.webp', alt: 'Excavator working alongside formwork on a foundation', category: 'Civil & structures' },
  { file: 'civil-foundation-waterproofing.webp', alt: 'Foundation waterproofing membrane being laid', category: 'Civil & structures' },
  { file: 'civil-elevated-structure.webp', alt: 'Elevated structure under construction with scaffolding', category: 'Civil & structures' },
  { file: 'civil-circular-foundation.webp', alt: 'Circular reinforcement cage for a tank foundation', category: 'Civil & structures' },
  { file: 'civil-site-office-works.webp', alt: 'Site works in progress around a project office', category: 'Civil & structures' },

  { file: 'peb-warehouse-exterior.webp', alt: 'Completed pre-engineered warehouse building', category: 'PEB & buildings' },
  { file: 'peb-warehouse-interior.webp', alt: 'Interior of a pre-engineered warehouse structure', category: 'PEB & buildings' },
  { file: 'building-admin-block.webp', alt: 'Completed administration block', category: 'PEB & buildings' },
  { file: 'building-reception.webp', alt: 'Finished reception area', category: 'PEB & buildings' },
  { file: 'building-office-hall.webp', alt: 'Finished open office hall', category: 'PEB & buildings' },
  { file: 'building-corridor.webp', alt: 'Finished internal corridor', category: 'PEB & buildings' },
  { file: 'building-meeting-room.webp', alt: 'Finished meeting room', category: 'PEB & buildings' },

  { file: 'yard-wide-paving.webp', alt: 'Wide paved yard at a rail-linked terminal', category: 'Yards & paving' },
  { file: 'yard-paved-road.webp', alt: 'Completed paved approach road', category: 'Yards & paving' },
  { file: 'yard-paved-apron.webp', alt: 'Paved apron alongside a terminal structure', category: 'Yards & paving' },
  { file: 'yard-drainage-works.webp', alt: 'Yard drainage channels under construction', category: 'Yards & paving' },

  { file: 'silo-complex-aerial.webp', alt: 'Silo complex and surrounding works from above', category: 'Silo & storage' },
  { file: 'silo-bank-completed.webp', alt: 'Completed bank of storage silos', category: 'Silo & storage' },
  { file: 'silo-complex-construction.webp', alt: 'Silo complex under construction', category: 'Silo & storage' },
  { file: 'silo-structures-yard.webp', alt: 'Silo structures with material stacked in the yard', category: 'Silo & storage' },

  { file: 'electrical-ffs-room.webp', alt: 'Fire fighting and electrical services room', category: 'Electrical & FFS' },

  { file: 'team-safety-briefing.webp', alt: 'Site team in full PPE during a safety briefing', category: 'Team & safety' },
  { file: 'team-site-group.webp', alt: 'Project team on site in safety gear', category: 'Team & safety' },
  { file: 'team-project-group.webp', alt: 'Project team assembled at a completed facility', category: 'Team & safety' },
  { file: 'team-group-sunset.webp', alt: 'Site crew at the end of a shift', category: 'Team & safety' },
];
