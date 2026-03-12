export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  heroImage: string;
  images: {
    before: string[];
    progress: string[];
    after: string[];
  };
  details: {
    duration: string;
    services: string[];
    features: string[];
  };
};

export const projects: Project[] = [
  {
    id: 'kingsbury-conversion',
    slug: 'house-conversion-flats-kingsbury-nw9',
    title: 'House to Flat Conversion',
    category: 'Residential',
    location: 'Kingsbury Road NW9',
    year: '2023',
    description: 'Complete structural conversion of a single-dwelling home into three luxury flats in Kingsbury. Features rear extension, soundproofing between floors, and separate utility metering.',
    heroImage: '/images/projects/project1/after/kingsbury-road-nw9-flats-conversion-after-exterior-1.jpeg',
    images: {
      before: [
        '/images/projects/project1/before/kingsbury-road-nw9-flats-conversion-before-exterior-2.jpeg',
        '/images/projects/project1/before/kingsbury-road-nw9-flats-conversion-before-exterior-3.jpeg',
        '/images/projects/project1/before/kingsbury-road-nw9-flats-conversion-before-exterior-4.jpeg',
        '/images/projects/project1/before/kingsbury-road-nw9-flats-conversion-before-interior-1.jpeg'

      ],
      progress: [
        '/images/projects/project1/progress/kingsbury-road-nw9-flats-conversion-in-progress-structure-work-1.jpeg',
        '/images/projects/project1/progress/kingsbury-road-nw9-flats-conversion-in-progress-structure-work-2.jpeg',
        '/images/projects/project1/progress/kingsbury-road-nw9-flats-conversion-in-progress-structure-work-3.jpeg',
        '/images/projects/project1/progress/kingsbury-road-nw9-flats-conversion-in-progress-structure-work-4.jpeg',
        '/images/projects/project1/progress/kingsbury-road-nw9-flats-conversion-in-progress-structure-work-5.jpeg',
      ],
      after: [
        '/images/projects/project1/after/kingsbury-road-nw9-flats-conversion-after-bathroom-1.jpeg',
        '/images/projects/project1/after/kingsbury-road-nw9-flats-conversion-after-bedroom-1.jpeg',
        '/images/projects/project1/after/kingsbury-road-nw9-flats-conversion-after-exterior-1.jpeg',
        '/images/projects/project1/after/kingsbury-road-nw9-flats-conversion-after-exterior-2.jpeg',
        '/images/projects/project1/after/kingsbury-road-nw9-flats-conversion-after-exterior-3.jpeg',
        '/images/projects/project1/after/kingsbury-road-nw9-flats-conversion-after-exterior-4.jpeg',
        '/images/projects/project1/after/kingsbury-road-nw9-flats-conversion-after-interior-1.jpeg',
        '/images/projects/project1/after/nw9-london-flat-conversion-after-living.jpeg'
      ]
    },
    details: {
      duration: '11 months',
      services: [
        'Architectural Design',
        'Full House Renovation',
        'Rear Extension',
        'Interior Remodeling',
        'Structural Engineering',
        'Electrical Rewiring',
        'Plumbing Installation',
        'Custom Joinery'
      ],
      features: [
        'Modern open-plan living space',
        'Floor-to-ceiling glass doors',
        'Custom kitchen with island',
        'Integrated smart home system',
        'Underfloor heating throughout',
        'Contemporary bathroom suites',
        'Bespoke storage solutions',
        'Energy-efficient lighting'
      ]
    }
  },
  {
    id: 'brondesbury-flat',
    slug: 'victorian-flat-renovation-brondesbury-nw6',
    title: 'Victorian Flat Renovation',
    category: 'Residential',
    location: 'Brondesbury Road NW6',
    year: '2023',
    description: 'Full modernization of a Victorian conversion flat. Custom joinery, open-plan kitchen reconfiguration, and restoration of period sash windows in the Brondesbury Conservation Area.',
    heroImage: '/images/projects/project2/after/project2.jpeg',
    images: {
      before: [
        '/images/projects/project2/before/before3.jpeg',
        '/images/projects/project2/before/before1.jpeg',
        '/images/projects/project2/before/before2.jpeg',
      ],
      progress: [
        '/images/projects/project2/progress/progress4.jpeg',
        '/images/projects/project2/progress/7.jpeg',
        '/images/projects/project2/progress/6.jpeg',
        '/images/projects/project2/progress/progress1.png',
        '/images/projects/project2/progress/progress3.jpeg',
        '/images/projects/project2/progress/prgree8.jpeg',
      ],
      after: [
        '/images/projects/project2/after/after.mp4',
      ]
    },
    details: {
      duration: '4 months',
      services: [
        'Custom Cabinetry',
        'Countertop Installation',
        'Electrical Rewiring',
        'Plumbing',
        'Flooring',
        'Lighting Design'
      ],
      features: [
        'Quartz countertops with waterfall edge',
        'Custom hardwood cabinetry with soft-close drawers',
        'Kitchen island with integrated seating',
        'Premium stainless steel appliances',
        'Under-cabinet LED lighting',
        'Porcelain tile flooring with underfloor heating'
      ]
    }
  },
  {
    id: 'russell-gardens',
    slug: 'luxury-renovation-russell-gardens-mews-kensington-w14',
    title: 'Luxury Mews House Renovation',
    category: 'Residential',
    location: 'Russell Gardens Mews W14',
    year: '2024',
    description: 'High-end renovation of a Kensington Mews property. Spa-like bathroom transformation with marble tiling, custom vanity, and space-saving layout optimization.',
    heroImage: '/images/projects/project3/after/aftr2.jpeg',
    images: {
      before: [
        '/images/projects/project3/before/bf1r.jpeg',
        '/images/projects/project3/before/befre2.jpeg',
        '/images/projects/project3/before/bfre3.jpeg',
      ],
      progress: [
        '/images/projects/project3/progress/pr1.jpeg',
        '/images/projects/project3/progress/pr2.jpeg',
        '/images/projects/project3/progress/pr3.jpeg',
        '/images/projects/project3/progress/pr4.jpeg',
        '/images/projects/project3/progress/pr6.jpeg',
        '/images/projects/project3/progress/pr9.jpeg',
        '/images/projects/project3/progress/prgre1.jpeg',
        '/images/projects/project3/progress/prgre2.jpeg',
        '/images/projects/project3/progress/prgre3.jpeg',
      ],
      after: [
        '/images/projects/project3/after/aaft6.jpeg',
        '/images/projects/project3/after/aft1.jpeg',
        '/images/projects/project3/after/aft2.jpeg',
        '/images/projects/project3/after/aft3.jpeg',
        '/images/projects/project3/after/aft5.jpeg',
        '/images/projects/project3/after/aft7.jpeg',
        '/images/projects/project3/after/aftr1.jpeg',
        '/images/projects/project3/after/aftr2.jpeg',
        '/images/projects/project3/after/aftr3.jpeg',
        '/images/projects/project3/after/aftr4.jpeg',
      ]
    },
    details: {
      duration: '11 months',
      services: [
        'Custom Vanity Installation',
        'Tile Work',
        'Plumbing',
        'Electrical',
        'Glass Installation',
        'Lighting Design'
      ],
      features: [
        'Heated marble flooring',
        'Double vanity with quartz countertop',
        'Frameless glass shower enclosure',
        'Custom LED lighting',
        'Freestanding soaking tub',
        'Smart toilet with bidet features'
      ]
    }
  },
  {
    id: 'tennyson-road',
    slug: 'victorian-house-renovation-tennyson-road-nw6',
    title: 'Full Victorian House Renovation',
    category: 'Residential',
    location: 'Tennyson Road NW6',
    year: '2025',
    description: 'Complete transformation of a family home in West Hampstead. Kitchen extension, loft insulation, and structural wall removal to create open-plan living while preserving period features.',
    heroImage: '/images/projects/project4/before/bb5.jpeg',
    images: {
      before: [
        '/images/projects/project4/before/bb1.jpeg',
        '/images/projects/project4/before/bb2.jpeg',
        '/images/projects/project4/before/bb3.jpeg',
        '/images/projects/project4/before/bb4.jpeg',
        '/images/projects/project4/before/bb5.jpeg',
        '/images/projects/project4/before/bb6.jpeg',


      ],
      progress: [
        '/images/projects/project4/progress/pr1.jpeg',
        '/images/projects/project4/progress/pr2.jpeg',
        '/images/projects/project4/progress/pr3.jpeg',
        '/images/projects/project4/progress/pr4.jpeg',
        '/images/projects/project4/progress/pr5.jpeg',
        '/images/projects/project4/progress/pr6.jpeg',
        '/images/projects/project4/progress/pr7.jpeg',
        '/images/projects/project4/progress/pr8.jpeg',
        '/images/projects/project4/progress/pr9.jpeg',
        '/images/projects/project4/progress/pr10.jpeg',
        '/images/projects/project4/progress/pr11.jpeg',
        '/images/projects/project4/progress/pr12.jpeg',
        '/images/projects/project4/progress/pr13.jpeg',
        '/images/projects/project4/progress/pr14.jpeg',
        '/images/projects/project4/progress/pr15.jpeg',
        '/images/projects/project4/progress/pr16.jpeg'
      ],
      after: [
        '/images/projects/project4/after/fullHouseRenovation.mp4',
        '/images/projects/project4/after/DJI_20251106114203_0306_D.jpg',
        '/images/projects/project4/after/DJI_20251106114736_0316_D.jpg',
        '/images/projects/project4/after/IMG_4413.jpg',
        '/images/projects/project4/after/IMG_4473.jpg',
        '/images/projects/project4/after/IMG_4495.jpg',
        '/images/projects/project4/after/IMG_4515.jpg',
        '/images/projects/project4/after/IMG_4571.jpg',
        '/images/projects/project4/after/IMG_4612.jpg',
        '/images/projects/project4/after/IMG_4697.jpg',
        '/images/projects/project4/after/IMG_4760.jpg',
        '/images/projects/project4/after/IMG_4783.jpg',
        '/images/projects/project4/after/IMG_4792.jpg',
        '/images/projects/project4/after/IMG_4855.jpg',
        '/images/projects/project4/after/IMG_4867.jpg',
        '/images/projects/project4/after/IMG_4880.jpg',
        '/images/projects/project4/after/IMG_4909.jpg',
        '/images/projects/project4/after/IMG_4915.jpg',
        '/images/projects/project4/after/IMG_4933.jpg',
        '/images/projects/project4/after/IMG_4967.jpg',
        '/images/projects/project4/after/IMG_4995.jpg',
        '/images/projects/project4/after/IMG_5009.jpg',
        '/images/projects/project4/after/IMG_5015.jpg',
        '/images/projects/project4/after/IMG_5046.jpg',
        '/images/projects/project4/after/IMG_5081.jpg',
        '/images/projects/project4/after/IMG_5088.jpg',
        '/images/projects/project4/after/IMG_5096.jpg',
        '/images/projects/project4/after/IMG_5109.jpg',
        '/images/projects/project4/after/IMG_5130.jpg',
        '/images/projects/project4/after/IMG_5171.jpg',
        '/images/projects/project4/after/IMG_5187.jpg'
      ]
    },
    details: {
      duration: 'Work in Progress',
      services: [

      ],
      features: [

      ]
    }
  },
  {
    id: 'davies-street',
    slug: 'luxury-office-renovation-mayfair-w1k',
    title: 'Luxury Commercial Renovation',
    category: 'Commercial',
    location: '22 Davies St, Mayfair W1K',
    year: '2024',
    description: 'Premium office fit-out in Mayfair. Bespoke joinery, conference room acoustics, and high-end marble flooring installation for a prestigious London address.',
    heroImage: '/images/projects/project5/after/a20.jpeg',
    images: {
      before: [
        '/images/projects/project5/before/b1.jpeg',
        '/images/projects/project5/before/b2.jpeg',
        '/images/projects/project5/before/b3.jpeg',
        '/images/projects/project5/before/b4.jpeg',
        '/images/projects/project5/before/b5.jpeg',
        '/images/projects/project5/before/b6.jpeg',
        '/images/projects/project5/before/b7.jpeg',
        '/images/projects/project5/before/b8.jpeg',

      ],
      progress: [
        '/images/projects/project5/progress/p1.jpeg',
        '/images/projects/project5/progress/p2.jpeg',
        '/images/projects/project5/progress/p3.jpeg',
        '/images/projects/project5/progress/p4.jpeg',
        '/images/projects/project5/progress/p5.jpeg',
        '/images/projects/project5/progress/p6.jpeg',
        '/images/projects/project5/progress/p7.jpeg',
        '/images/projects/project5/progress/p8.jpeg',
        '/images/projects/project5/progress/p9.jpeg',
        '/images/projects/project5/progress/p10.jpeg',
        '/images/projects/project5/progress/p11.jpeg',



      ],
      after: [
        '/images/projects/project5/after/a1.jpeg',
        '/images/projects/project5/after/a2.jpeg',
        '/images/projects/project5/after/a3.jpeg',
        '/images/projects/project5/after/a4.jpeg',
        '/images/projects/project5/after/a5.jpeg',
        '/images/projects/project5/after/a6.jpeg',
        '/images/projects/project5/after/a7.jpeg',
        '/images/projects/project5/after/a8.jpeg',
        '/images/projects/project5/after/a9.jpeg',
        '/images/projects/project5/after/a10.jpeg',
        '/images/projects/project5/after/a11.jpeg',
        '/images/projects/project5/after/a12.jpeg',
        '/images/projects/project5/after/a13.jpeg',
        '/images/projects/project5/after/a14.jpeg',
        '/images/projects/project5/after/a15.jpeg',
        '/images/projects/project5/after/a16.jpeg',
        '/images/projects/project5/after/a17.jpeg',
        '/images/projects/project5/after/a18.jpeg',
        '/images/projects/project5/after/a19.jpeg',
        '/images/projects/project5/after/a20.jpeg',



      ]
    },
    details: {
      duration: '8 months',
      services: [
        'Commercial Interior Design',
        'Custom Reception Area Design',
        'Meeting Room Installations',
        'Premium Office Fit-Out',
        'Bespoke Lighting Solutions',
        'High-End Flooring Installation',
        'Commercial HVAC Systems',
        'Corporate Washroom Design'
      ],
      features: [
        'Premium marble and stone finishes',
        'Sophisticated LED lighting system',
        'Custom-built reception desk',
        'High-end meeting room facilities',
        'Premium office partitioning',
        'Acoustic treatment throughout',
        'Elegant communal areas',
        'Modern washroom facilities'
      ]
    }
  },
  {
    id: 'kenton-lane',
    slug: 'ground-floor-renovation-kenton-harrow-ha3',
    title: 'Open Plan Ground Floor Renovation',
    category: 'Residential',
    location: 'Kenton Lane, Harrow HA3',
    year: '2025',
    description: 'Structural removal of load-bearing walls to create a modern open-plan living space in Harrow. Features new steelwork, underfloor heating, and bespoke kitchen installation.',
    heroImage: '/images/projects/project6/after/kenton-lane-harrow-ha3-ground-floor-renovation-after-living-room-custom-entertainment-unit-led-lighting-1.jpeg',
    images: {
      before: [
        '/images/projects/project6/before/kenton-lane-harrow-renovation-before-hallway-entrance.jpeg',
        '/images/projects/project6/before/harrow-renovation-before-kitchen-layout-closed-plan.jpeg',
        '/images/projects/project6/before/kenton-lane-harrow-renovation-before-kitchen-appliances-old.jpeg',
        '/images/projects/project6/before/harrow-ha3-ground-floor-renovation-before-living-room-dated.jpeg',
        '/images/projects/project6/before/kenton-lane-harrow-renovation-before-staircase-old-carpet.jpeg',
        '/images/projects/project6/before/harrow-renovation-before-stairs-landing-original.jpeg',
        '/images/projects/project6/before/kenton-lane-harrow-renovation-before-second-floor-carpet.jpeg',
        '/images/projects/project6/before/kenton-lane-harrow-renovation-before-loft-hatch-old-wooden.jpeg',
        '/images/projects/project6/before/kenton-lane-harrow-renovation-before-windows-frames-dated.jpeg',
        '/images/projects/project6/before/harrow-ha3-ground-floor-renovation-before-flooring-original.jpeg',
        '/images/projects/project6/before/kenton-lane-harrow-renovation-before-wooden-floorboards-old.jpeg',
        '/images/projects/project6/before/harrow-ha3-renovation-progress-floor-joists-exposed-structural-work.jpeg',
        '/images/projects/project6/before/harrow-renovation-progress-floorboard-removal-renovation-work.jpeg',
        '/images/projects/project6/before/kenton-lane-harrow-renovation-progress-professional-team-flooring-work.jpeg'
      ],
      progress: [
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-foundation-work-1.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-base-layer-preparation-1.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-floor-preparation-protection-1.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-sand-leveling-1.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-sand-leveling-2.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-underfloor-heating-boards-1.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-heating-system-layout-1.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-underfloor-heating-pipe-installation-1.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-underfloor-heating-pipes-layout-1.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-heating-system-pipes-installation-2.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-underfloor-heating-complete-layout-1.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-flooring-protection-kitchen-area-1.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-floor-screed-pour-1.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-screed-installation-bay-window-area-1.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-floor-screed-complete-main-room-1.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-floor-screed-finish-room-2.jpeg',
        '/images/projects/project6/progress/kenton-lane-harrow-ha3-ground-floor-renovation-progress-staircase-protection-screed-work-1.jpeg'
      ],
      after: [
        '/images/projects/project6/after/kenton-lane-harrow-ha3-ground-floor-renovation-after-dining-room-open-plan-garden-doors-1.jpeg',
        '/images/projects/project6/after/kenton-lane-harrow-ha3-ground-floor-renovation-after-living-room-custom-entertainment-unit-led-lighting-1.jpeg',
        '/images/projects/project6/after/kenton-lane-harrow-ha3-ground-floor-renovation-after-bathroom-luxury-marble-walk-in-shower-1.jpeg',
        '/images/projects/project6/after/kenton-lane-harrow-ha3-ground-floor-renovation-after-living-room-entertainment-wall-complete-setup-2.jpeg'
      ]
    },
    details: {
      duration: 'In Progress',
      services: [
        'Ground Floor Renovation',
        'Kitchen Remodeling',
        'Bathroom Renovation',
        'Flooring Installation',
        'Electrical Rewiring',
        'Plumbing Upgrades',
        'Interior Design',
        'Custom Joinery'
      ],
      features: [
        'Open-plan kitchen and living area',
        'Bespoke kitchen with quartz worktops',
        'Luxury bathroom with premium fixtures',
        'Engineered hardwood flooring throughout',
        'Contemporary LED lighting system',
        'Underfloor heating in key areas',
        'Custom storage solutions',
        'Modern color palette and finishes'
      ]
    }
  }
]; 