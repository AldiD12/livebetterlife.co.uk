import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CircleArrow = ({ className = '' }: { className?: string }) => (
  <span
    className={`inline-flex items-center justify-center w-6 h-6 rounded-full border border-current ${className}`}
    aria-hidden="true"
  >
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAreasDropdownOpen, setIsAreasDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLink = 'text-stone hover:text-ink transition-colors font-medium';

  return (
    <nav
      className={`fixed w-full z-50 top-0 border-b transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md border-line shadow-nav' : 'bg-cream/80 backdrop-blur-md border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/images/logo.png" alt="Live Better Life Logo" className="h-14 w-auto md:h-16" />
            <span className="font-display text-xl md:text-2xl tracking-tight text-ink whitespace-nowrap">Live Better Life</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link to="/services" className={navLink}>Services</Link>

            <div
              className="relative"
              onMouseEnter={() => setIsAreasDropdownOpen(true)}
              onMouseLeave={() => setIsAreasDropdownOpen(false)}
            >
              <button className={`${navLink} flex items-center gap-1`}>
                Areas
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isAreasDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-ivory rounded-2xl shadow-card border border-line py-2 z-50">
                  <Link to="/locations/west-hampstead-nw6" className="block px-5 py-2.5 text-stone hover:text-ink hover:bg-sand/60 transition-colors">
                    West Hampstead & Brondesbury (NW6)
                  </Link>
                  <Link to="/locations/harrow-ha3" className="block px-5 py-2.5 text-stone hover:text-ink hover:bg-sand/60 transition-colors">
                    Harrow & Kenton (HA3)
                  </Link>
                  <Link to="/locations/kensington-mayfair-prime" className="block px-5 py-2.5 text-stone hover:text-ink hover:bg-sand/60 transition-colors">
                    Kensington & Mayfair
                  </Link>
                </div>
              )}
            </div>

            <Link to="/portfolio" className={navLink}>Portfolio</Link>
            <Link to="/blog" className={navLink}>Blog</Link>
            <Link to="/contact" className={navLink}>Contact</Link>

            <a href="tel:+447387844751" className="flex items-center gap-2 text-ink font-medium">
              <svg className="w-4 h-4 text-brass" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>07387 844751</span>
            </a>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 pl-6 pr-2 py-2 bg-ink text-cream rounded-full font-medium hover:bg-ink-soft transition-colors"
            >
              Get a quote
              <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-ink"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-cream border-t border-line">
          <div className="px-4 pt-3 pb-5 space-y-1">
            <Link to="/services" className="block px-3 py-2.5 text-stone hover:text-ink font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <div className="px-3 py-2">
              <div className="text-stone font-medium mb-2">Areas</div>
              <div className="pl-4 space-y-1">
                <Link to="/locations/west-hampstead-nw6" className="block py-1.5 text-sm text-stone hover:text-ink" onClick={() => setIsMobileMenuOpen(false)}>West Hampstead & Brondesbury (NW6)</Link>
                <Link to="/locations/harrow-ha3" className="block py-1.5 text-sm text-stone hover:text-ink" onClick={() => setIsMobileMenuOpen(false)}>Harrow & Kenton (HA3)</Link>
                <Link to="/locations/kensington-mayfair-prime" className="block py-1.5 text-sm text-stone hover:text-ink" onClick={() => setIsMobileMenuOpen(false)}>Kensington & Mayfair</Link>
              </div>
            </div>
            <Link to="/portfolio" className="block px-3 py-2.5 text-stone hover:text-ink font-medium" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
            <Link to="/blog" className="block px-3 py-2.5 text-stone hover:text-ink font-medium" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="block px-3 py-2.5 text-stone hover:text-ink font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <a href="tel:+447387844751" className="flex items-center gap-2 px-3 py-2.5 text-ink font-medium border-t border-line mt-2 pt-3" onClick={() => setIsMobileMenuOpen(false)}>
              <svg className="w-4 h-4 text-brass" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              07387 844751
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-2 mt-3 px-6 py-3 bg-ink text-cream rounded-full font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Get a quote
              <CircleArrow className="text-brass" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
