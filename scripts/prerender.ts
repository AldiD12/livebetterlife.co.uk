import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

// All routes to pre-render
const routes: string[] = [
  '/',
  '/services',
  '/portfolio',
  '/contact',
  '/privacy',
  '/blog',

  // Location pages
  '/locations/west-hampstead-nw6',
  '/locations/harrow-ha3',
  '/locations/kensington-mayfair-prime',

  // Blog posts
  '/blog/london-home-renovation-costs-2025',
  '/blog/london-home-renovation-timeline-guide-2025',
  '/blog/top-5-renovations-add-most-value-london-homes-2025',

  // Portfolio projects
  '/portfolio/house-conversion-flats-kingsbury-nw9',
  '/portfolio/victorian-flat-renovation-brondesbury-nw6',
  '/portfolio/luxury-renovation-russell-gardens-mews-kensington-w14',
  '/portfolio/victorian-house-renovation-tennyson-road-nw6',
  '/portfolio/luxury-office-renovation-mayfair-w1k',
  '/portfolio/ground-floor-renovation-kenton-harrow-ha3',

  // Construction Company Services
  '/services/house-extensions-london',
  '/services/structural-alterations-london',
  '/services/whole-property-renovations-london',
  '/services/load-bearing-wall-removal-london',
  '/services/basement-conversion-london',
  '/services/garage-conversion-london',

  // Home Builder Services
  '/services/double-storey-extension-london',
  '/services/loft-conversion-london',
  '/services/full-house-renovation-london',
  '/services/internal-wall-removal-london',
  '/services/steel-beam-installation-london',
  '/services/single-storey-rear-extension-london',

  // Kitchen Renovator Services
  '/services/complete-kitchen-renovation-london',
  '/services/kitchen-extension-london',
  '/services/kitchen-island-installation-london',
  '/services/complete-kitchen-refit-extension-london',
  '/services/premium-kitchen-surface-installation-london',
  '/services/kitchen-layout-restructuring-london',

  // Bathroom Renovator Services
  '/services/complete-bathroom-renovation-london',
  '/services/wet-room-conversion-london',
  '/services/ensuite-bathroom-creation-london',
  '/services/designer-wet-room-creation-london',
  '/services/luxury-bathroom-renovation-london',
  '/services/underfloor-heating-installation-london',

  // GBP-Aligned Service Pages
  '/services/full-house-renovation-victorian-edwardian',
  '/services/structural-alterations-wall-removal',
  '/services/kitchen-extensions-side-returns',
  '/services/loft-conversions-dormer-mansard',
  '/services/bespoke-kitchen-installation',
  '/services/period-property-restoration',

  // Building Restoration Services
  '/services/victorian-house-restoration-london',
  '/services/period-property-renovation-london',
  '/services/listed-building-restoration-london',
  '/services/sash-window-restoration-london',
  '/services/heritage-building-renovation-london',
  '/services/traditional-building-repair-london',
];

async function prerender() {
  console.log(`\n🔨 Pre-rendering ${routes.length} routes...\n`);

  // Read the template HTML
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Run `vite build` first.');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  // Import the server entry (built by Vite SSR)
  const ssrEntryPath = path.join(distDir, 'server', 'entry-server.js');
  if (!fs.existsSync(ssrEntryPath)) {
    console.error('dist/server/entry-server.js not found. Run the SSR build first.');
    process.exit(1);
  }

  const { render } = await import(ssrEntryPath);

  let success = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      const appHtml = render(route);

      // Inject the rendered HTML into the template
      const html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Write to the appropriate directory
      const filePath = route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route, 'index.html');

      const dir = path.dirname(filePath);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(filePath, html);

      success++;
      console.log(`  ✓ ${route}`);
    } catch (err) {
      failed++;
      console.error(`  ✗ ${route}: ${(err as Error).message}`);
    }
  }

  console.log(`\n✅ Pre-rendered ${success}/${routes.length} routes (${failed} failed)\n`);
}

prerender().catch(console.error);
