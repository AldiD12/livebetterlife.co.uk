export type BlogCategory =
  | 'Renovation Guide'
  | 'Cost Guides'
  | 'Design Trends'
  | 'Project Showcase'
  | 'Planning Guides'
  | 'Investment Guides'
  | 'Expert Tips';

export interface Author {
  name: string;
  title: string;
  image: string;
  bio: string;
}

export interface FeaturedImage {
  url: string;
  alt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: string;
  category: BlogCategory;
  tags: string[];
  metaDescription?: string;
  featuredImage: {
    url: string;
    alt: string;
  };
  author: {
    name: string;
    title: string;
    bio: string;
    image: string;
  };
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: 1 | 2 | 3;
  subItems?: TableOfContentsItem[];
}

// London areas we're targeting
export const londonAreas = [
  'NW6',
  'NW9',
  'W14',
  'North West London',
  'West London',
  'Kilburn',
  'Cricklewood',
  'West Kensington',
  'Hampstead',
  'Queens Park',
  'Willesden'
] as const;

export type LondonArea = typeof londonAreas[number]; 