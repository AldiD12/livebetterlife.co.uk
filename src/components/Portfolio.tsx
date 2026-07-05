import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const CircleArrow = ({ className = '' }: { className?: string }) => (
  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full border border-current ${className}`} aria-hidden="true">
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-brass" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-brass-deep">Our work</span>
          </div>
          <h2 className="font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
            Recent renovations across North West London
          </h2>
          <p className="text-lg text-stone leading-relaxed">
            Real projects in West Hampstead &amp; Brondesbury (NW6), Kingsbury (NW9), Mill Hill (NW7),
            Willesden (NW10), Harrow &amp; Kenton (HA3), Kensington (W14) and Mayfair (W1K).
          </p>
        </div>

        {/* Project grid */}
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="group">
              <Link to={`/portfolio/${project.slug}`} className="block">
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
                  <h3 className="font-display text-xl text-ink leading-snug mb-3">{project.title}</h3>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 group-hover:text-ink transition-colors">
                    View project
                    <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA band */}
        <div className="mt-20 rounded-card bg-ink text-cream px-8 py-14 sm:px-14 sm:py-16 text-center">
          <h3 className="font-display font-semibold text-3xl sm:text-4xl mb-4">Your NW London home could be next</h3>
          <p className="text-cream/75 text-lg max-w-2xl mx-auto mb-9">
            127 families across West Hampstead, Brondesbury, Kingsbury and Harrow have trusted us since 2010.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="group inline-flex items-center justify-center gap-3 pl-8 pr-3 py-4 bg-ivory text-ink rounded-full font-medium hover:bg-cream transition-colors">
              Book a free consultation
              <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
            </Link>
            <Link to="/portfolio" className="group inline-flex items-center justify-center gap-3 pl-8 pr-3 py-4 border border-cream/40 text-cream rounded-full font-medium hover:bg-cream/10 transition-colors">
              See all projects
              <CircleArrow className="text-cream group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
