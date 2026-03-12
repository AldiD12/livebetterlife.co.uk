import { writeFileSync } from 'fs';
import { join } from 'path';

const generateSitemapIndex = () => {
  const siteUrl = 'https://livebetterlife.co.uk';
  const date = new Date().toISOString();

  // Only include sitemap.xml in the index since we're not generating sitemap-images.xml
  const sitemapIndex = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    '  <sitemap>\n' +
    `    <loc>${siteUrl}/sitemap.xml</loc>\n` +
    `    <lastmod>${date}</lastmod>\n` +
    '  </sitemap>\n' +
    '</sitemapindex>';

  // Write sitemap index to public directory
  writeFileSync(join(process.cwd(), 'dist', 'sitemap-index.xml'), sitemapIndex);
  console.log('Sitemap index generated successfully!');
};

// Execute the function if this file is run directly
if (process.argv[1] === new URL(import.meta.url).pathname) {
  generateSitemapIndex();
}

export default generateSitemapIndex;
