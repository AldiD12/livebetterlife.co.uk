import { Link } from 'react-router-dom';

const CircleArrow = ({ className = '' }: { className?: string }) => (
  <span
    className={`inline-flex items-center justify-center w-7 h-7 rounded-full border border-current ${className}`}
    aria-hidden="true"
  >
    <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center" aria-label="Home">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/projects/project2/after/project2.jpeg"
        >
          <source src="/images/projects/project2/after/after.mp4" type="video/mp4" />
          <img
            src="/images/projects/project2/after/project2.jpeg"
            alt="Luxury home interior with modern design and elegant finishes"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Warm cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-28 pb-16 lg:pt-40 lg:pb-24">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-brass" />
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-brass-tint">
                London renovation &amp; rebuild specialists · since 2010
              </span>
            </div>

            {/* Headline (SEO-preserved keywords) */}
            <h1 className="font-display font-semibold text-cream leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-6">
              Victorian &amp; Edwardian home renovation specialists
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-cream/85 leading-relaxed max-w-2xl mb-9">
              Complete design &amp; build across West Hampstead (NW6), Kingsbury (NW9) and Harrow (HA3) —
              full renovations, extensions, loft conversions and structural work, finished beautifully.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 pl-8 pr-3 py-4 bg-ivory text-ink rounded-full font-medium transition-colors hover:bg-cream"
                aria-label="Book your free consultation"
              >
                Book a free consultation
                <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link
                to="/portfolio"
                className="group inline-flex items-center justify-center gap-3 pl-8 pr-3 py-4 border border-cream/40 text-cream rounded-full font-medium transition-colors hover:bg-cream/10"
                aria-label="See our completed projects"
              >
                View our work
                <CircleArrow className="text-cream group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>

            {/* Trust line */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream/75">
              <span>127 families since 2010</span>
              <span className="w-1 h-1 rounded-full bg-brass" />
              <span>CHAS accredited</span>
              <span className="w-1 h-1 rounded-full bg-brass" />
              <span>£5M insured</span>
              <span className="w-1 h-1 rounded-full bg-brass" />
              <a href="tel:+447387844751" className="underline underline-offset-4 decoration-brass/60 hover:text-cream transition-colors">
                07387 844751
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp - mobile */}
      <a
        href="https://wa.me/447387844751"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 sm:hidden"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.594" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
