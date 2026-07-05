import { Link } from 'react-router-dom';

const CircleArrow = ({ className = '' }: { className?: string }) => (
  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full border border-current ${className}`} aria-hidden="true">
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const services = [
  {
    title: 'Kitchen extensions & side returns',
    copy: 'Side-return and rear extensions with open-plan knock-throughs, bespoke kitchens and bifold doors.',
    image: '/images/projects/project6/after/kenton-lane-harrow-ha3-ground-floor-renovation-after-dining-room-open-plan-garden-doors-1.jpeg',
    to: '/services/kitchen-extensions-side-returns',
  },
  {
    title: 'Victorian & period restoration',
    copy: 'Sensitive restoration of period features alongside modern comforts — conservation-area specialists.',
    image: '/images/projects/project3/after/aftr2.jpeg',
    to: '/services/period-property-restoration',
  },
  {
    title: 'Loft conversions — dormer & mansard',
    copy: 'Extra bedrooms, en-suites and home offices with new roof structure, dormers and rooflights.',
    image: '/images/projects/project1/after/kingsbury-road-nw9-flats-conversion-after-bedroom-1.jpeg',
    to: '/services/loft-conversions-dormer-mansard',
  },
  {
    title: 'Structural alterations & steelwork',
    copy: 'Load-bearing wall removal, steel beams and structural openings to create modern open-plan living.',
    image: '/images/projects/project1/after/nw9-london-flat-conversion-after-living.jpeg',
    to: '/services/structural-alterations-wall-removal',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-brass" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-brass-deep">Our services</span>
          </div>
          <h2 className="font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
            Complete design &amp; build, under one roof
          </h2>
          <p className="text-lg text-stone leading-relaxed">
            Full home transformations across West Hampstead, Brondesbury, Kingsbury and Harrow — one team,
            one project manager, from first drawing to final finish.
          </p>
        </div>

        {/* Featured: Full house */}
        <div className="rounded-card bg-ivory shadow-card overflow-hidden grid lg:grid-cols-2 mb-10">
          <div className="order-2 lg:order-1 p-8 sm:p-12 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 self-start bg-brass-tint text-brass-deep text-xs font-medium uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-5">
              Most popular
            </span>
            <h3 className="font-display font-semibold text-ink text-2xl sm:text-3xl mb-4">
              Full house renovation
            </h3>
            <p className="text-stone leading-relaxed mb-8">
              Complete project management from start to finish — electrics, plumbing, structural steel and
              high-end finishing. Transform your entire Victorian or Edwardian home in one coordinated project,
              typically in 8–12 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services/full-house-renovation-victorian-edwardian" className="group inline-flex items-center justify-center gap-3 pl-7 pr-3 py-3.5 bg-ink text-cream rounded-full font-medium hover:bg-ink-soft transition-colors">
                Explore full renovations
                <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-7 py-3.5 border border-ink/25 text-ink rounded-full font-medium hover:bg-ink hover:text-cream transition-colors">
                Book a consultation
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 min-h-[280px] lg:min-h-full overflow-hidden">
            <img
              src="/images/projects/project6/after/kenton-lane-harrow-ha3-ground-floor-renovation-after-living-room-custom-entertainment-unit-led-lighting-1.jpeg"
              alt="Full house renovation — open-plan living room in Harrow HA3"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Service grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((s) => (
            <Link key={s.title} to={s.to} className="group block rounded-card bg-ivory shadow-card overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl text-ink leading-snug mb-3">{s.title}</h3>
                <p className="text-stone leading-relaxed mb-5">{s.copy}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 group-hover:text-ink transition-colors">
                  Learn more
                  <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
