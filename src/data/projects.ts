export type Project = {
  id: string;
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
    size: string;
    duration: string;
    services: string[];
    features: string[];
  };
};

export const projects: Project[] = [
  {
    id: 'NW9 9PE',
    title: 'Luxury Renovation',
    category: 'Residential',
    location: '333 Kingsbury Road',
    year: '2024',
    description: 'Project description goes here',
    heroImage: '/images/projects/project1/after/af1.jpeg',
    images: {
      before: [
        '/images/projects/project1/before/bf4.jpeg',
        '/images/projects/project1/before/bfr5.jpeg',
        '/images/projects/project1/before/bf3.jpeg',
        '/images/projects/project1/before/bf7.jpeg'
      ],
      progress: [
        '/images/projects/project1/progress/prog1.jpeg',
        '/images/projects/project1/progress/prog2.jpeg',
        '/images/projects/project1/progress/prog3.jpeg',
        '/images/projects/project1/progress/prog4.jpeg'
      ],
      after: [
        '/images/projects/project1/after/af1.jpeg',
        '/images/projects/project1/after/af2.jpeg',
        '/images/projects/project1/after/af3.jpeg',
        '/images/projects/project1/after/af4.jpeg',
        '/images/projects/project1/after/af5.jpeg',
        '/images/projects/project1/after/af6.jpeg'
      ]
    },
    details: {
      size: 'Size of project',
      duration: 'Duration of project',
      services: ['Service 1', 'Service 2'],
      features: ['Feature 1', 'Feature 2']
    }
  },
  {
    id: ' NW6 6BP',
    title: 'Modern Kitchen Renovation',
    category: 'Residential',
    location: '43 Brondsbury Road',
    year: '2023',
    description: 'A complete kitchen transformation featuring custom cabinetry, premium appliances, and an open-concept design that maximizes space and natural light. This project focused on creating a functional yet elegant cooking and entertaining space.',
    heroImage: '/images/projects/project2/after/project2.jpeg',
    images: {
      before: [
        '/images/projects/project2/before/before3.jpeg',
        '/images/projects/project2/before/before1.jpeg',
        '/images/projects/project2/before/before2.jpeg',
      ],
      progress: [       
       '/images/projects/project2/progress/progress4.jpeg',

        '/images/projects/project2/progress/progress1.png',
        '/images/projects/project2/progress/progress3.jpeg',
        '/images/projects/project2/progress/progress2.jpeg',

      ],
      after: [
        '/images/projects/project2/after/after1.mov',
        
      ]
    },
    details: {
      size: '350 sq ft',
      duration: '8 weeks',
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
    id: 'W14 8EU',
    title: 'Modern House Renovation',
    category: 'Residential',
    location: '19 Rusell Garden Muse',
    year: '2024',
    description: 'A complete bathroom transformation featuring premium materials, custom vanity, and modern fixtures. This project focused on creating a spa-like retreat with maximum comfort and elegance.',
    heroImage: '/images/projects/project3/after/aftr2.jpeg',
    images: {
      before: [
        '/images/projects/project3/before/bfre1.jpeg',
        '/images/projects/project3/before/befre2.jpeg',
        '/images/projects/project3/before/bfre3.jpeg',
      ],
      progress: [
        '/images/projects/project3/progress/prgre1.jpeg',
        '/images/projects/project3/progress/prgre2.jpeg',
        '/images/projects/project3/progress/prgre3.jpeg',
        '/images/projects/project3/progress/prgre4.jpeg'
      ],
      after: [
        '/images/projects/project3/after/aftr1.jpeg',
        '/images/projects/project3/after/aftr2.jpeg',
        '/images/projects/project3/after/aftr3.jpeg',
        '/images/projects/project3/after/aftr4.jpeg',
        '/images/projects/project3/after/aftr5.jpeg',
      ]
    },
    details: {
      size: '120 sq ft',
      duration: '6 weeks',
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
  }
]; 