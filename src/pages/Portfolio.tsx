import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const categories = ['All', 'Residential', 'Commercial'];

const CircleArrow = ({ className = '' }: { className?: string }) => (
  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full border border-current shrink-0 ${className}`} aria-hidden="true">
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        dateCreated: project.year,
        about: { '@type': 'Thing', name: project.category + ' Renovation' },
        image: project.heroImage,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://livebetterlife.co.uk/portfolio/${project.slug}` },
      },
    })),
  };

  const portfolioSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Home Renovation Portfolio',
      description: 'View our home renovation projects across London — from complete home transformations to kitchen and bathroom renovations.',
      about: { '@type': 'Thing', name: 'Home Renovation Projects', description: 'Showcase of our completed renovation projects in London' },
    },
    projectsSchema,
  ];

  return (
    <>
      <SEO
        title="Home Renovation Portfolio | Our Work in London"
        description="Browse our portfolio of home renovation projects across North West London. Before-and-after transformations of kitchens, bathrooms, and complete home renovations."
        canonicalUrl="https://livebetterlife.co.uk/portfolio"
        keywords="renovation portfolio, home renovation projects, kitchen remodeling examples, bathroom renovation gallery, london home renovation"
        schema={portfolioSchema}
      />

      <div className="bg-cream">

        {/* Inline breadcrumb (above hero) */}
        <nav className="pt-24 pb-2" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-4 pb-2">
            <ol className="flex items-center gap-2 text-sm text-stone">
              <li><Link to="/" className="hover:text-ink transition-colors">Home</Link></li>
              <li aria-hidden="true">
                <svg className="w-3 h-3 text-line" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </li>
              <li className="text-ink font-medium">Portfolio</li>
            </ol>
          </div>
        </nav>

        {/* Hero — cinematic card */}
        <div className="relative h-[46vh] min-h-[340px] overflow-hidden mx-5 sm:mx-6 lg:mx-10 mt-4 rounded-card">
          <img
            src="/images/projects/project1/after/nw9-london-flat-conversion-after-living.jpeg"
            alt="Live Better Life portfolio — premium home renovations in North West London"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/20" />
          <div className="relative z-10 h-full flex items-end">
            <div className="max-w-7xl w-full px-8 sm:px-12 pb-10 sm:pb-14">
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-brass" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-brass-tint">Our work</span>
              </div>
              <h1 className="font-display font-semibold text-cream text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl">
                Renovations across North West London
              </h1>
              <p className="text-cream/80 text-lg mt-4 max-w-2xl">
                Real projects in West Hampstead, Brondesbury, Kingsbury, Mill Hill, Willesden, Harrow, Kensington and Mayfair.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20">

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-ink text-cream shadow-sm'
                    : 'bg-ivory text-stone border border-line hover:border-brass hover:text-ink'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article key={project.id} className="group cursor-pointer" onClick={() => navigate(`/portfolio/${project.slug}`)}>
                <div className="overflow-hidden rounded-card shadow-card bg-ivory">
                  <img
                    src={project.heroImage}
                    alt={`${project.title} — ${project.location}`}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={600}
                    height={450}
                  />
                </div>
                <div className="pt-5">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-brass-deep mb-2">
                    <span>{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-brass" />
                    <span className="text-stone normal-case tracking-normal">{project.location}</span>
                  </div>
                  <h2 className="font-display text-xl text-ink leading-snug mb-3">{project.title}</h2>
                  <p className="text-stone leading-relaxed line-clamp-2 mb-4 text-sm">{project.description}</p>
                  <Link
                    to={`/portfolio/${project.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 group-hover:text-ink transition-colors"
                  >
                    View project
                    <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA band */}
          <div className="mt-20 rounded-card bg-ink text-cream px-8 py-14 sm:px-14 sm:py-16 text-center">
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="w-8 h-px bg-brass" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-brass-tint">Get started</span>
              <span className="w-8 h-px bg-brass" />
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-4">Start your project</h2>
            <p className="text-cream/75 text-lg max-w-2xl mx-auto mb-9">
              Ready to transform your space? Contact us to discuss your project or request a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="group inline-flex items-center justify-center gap-3 pl-8 pr-3 py-4 bg-ivory text-ink rounded-full font-medium hover:bg-cream transition-colors">
                Contact us
                <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link to="/services" className="group inline-flex items-center justify-center gap-3 pl-8 pr-3 py-4 border border-cream/40 text-cream rounded-full font-medium hover:bg-cream/10 transition-colors">
                Our services
                <CircleArrow className="text-cream group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
