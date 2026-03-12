const fs = require('fs');
const path = require('path');

// Import the sitemap generators (we'll need to compile TypeScript first)
const { generateSitemap, generateImageSitemap } = require('../dist/utils/generateSitemap.js');

const generateSitemaps = () => {
  try {
    // Generate main sitemap
    const sitemap = generateSitemap();
    fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
    console.log('✅ Main sitemap generated successfully');

    // Generate image sitemap
    const imageSitemap = generateImageSitemap();
    fs.writeFileSync(path.join(__dirname, '../public/sitemap-images.xml'), imageSitemap);
    console.log('✅ Image sitemap generated successfully');

    // Generate sitemap index
    const currentDate = new Date().toISOString();
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://livebetterlife.co.uk/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://livebetterlife.co.uk/sitemap-images.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;

    fs.writeFileSync(path.join(__dirname, '../public/sitemap-index.xml'), sitemapIndex);
    console.log('✅ Sitemap index generated successfully');

  } catch (error) {
    console.error('❌ Error generating sitemaps:', error);
  }
};

generateSitemaps();