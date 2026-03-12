import { writeFileSync } from 'fs';
import { join } from 'path';
import { projects } from '../data/projects';
import { blogPosts } from '../data/blogPosts';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://livebetterlife.co.uk';
  const currentDate = new Date().toISOString();

  const urls: SitemapUrl[] = [
    // Main pages
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/portfolio`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },

    // Location Pages
    {
      loc: `${baseUrl}/locations/west-hampstead-nw6`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/locations/harrow-ha3`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/locations/kensington-mayfair-prime`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },

    // GBP-Aligned Service Pages (High Priority - The "Authority" Pages)
    {
      loc: `${baseUrl}/services/full-house-renovation-victorian-edwardian`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/services/structural-alterations-wall-removal`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/services/kitchen-extensions-side-returns`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/services/loft-conversions-dormer-mansard`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/services/bespoke-kitchen-installation`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/services/period-property-restoration`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    }

    // NOTE: All generic "-london" service pages have been REMOVED to eliminate keyword cannibalization
    // The specific GBP-aligned pages above are now the sole authority pages
  ];

  // Add project pages (The "Proof" - High Priority for Long-Tail Rankings)
  projects.forEach(project => {
    urls.push({
      loc: `${baseUrl}/portfolio/${project.slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8  // Boosted from 0.6 - These are "Money Pages" for local searches
    });
  });

  // Add blog posts
  blogPosts.forEach(post => {
    urls.push({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastmod: post.publishDate,
      changefreq: 'weekly',
      priority: 0.8
    });
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};

export const generateImageSitemap = (): string => {
  const baseUrl = 'https://livebetterlife.co.uk';
  const currentDate = new Date().toISOString();

  let imageUrls: string[] = [];

  // Add project images
  projects.forEach(project => {
    // Add hero image
    if (project.heroImage) {
      imageUrls.push(`    <image:image>
      <image:loc>${baseUrl}${project.heroImage}</image:loc>
      <image:caption>${project.title} - ${project.location}</image:caption>
    </image:image>`);
    }

    // Add all project images
    [...project.images.before, ...project.images.progress, ...project.images.after].forEach(image => {
      imageUrls.push(`    <image:image>
      <image:loc>${baseUrl}${image}</image:loc>
      <image:caption>${project.title} - ${project.location}</image:caption>
    </image:image>`);
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Homepage Images -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
${imageUrls.join('\n')}
  </url>
</urlset>`;

  return xml;
};

// Execute sitemap generation
const generateSitemapFiles = () => {
  try {
    const sitemap = generateSitemap();
    writeFileSync(join(process.cwd(), 'public/sitemap.xml'), sitemap);
    console.log('✅ Main sitemap generated successfully');

    const imageSitemap = generateImageSitemap();
    writeFileSync(join(process.cwd(), 'public/sitemap-images.xml'), imageSitemap);
    console.log('✅ Image sitemap generated successfully');

  } catch (error) {
    console.error('❌ Error generating sitemaps:', error);
  }
};

// Run the generation
generateSitemapFiles();