import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16" aria-label="Home">
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
          {/* Fallback image for browsers that don't support video */}
          <img
            src="/images/projects/project2/after/project2.jpeg"
            alt="Luxury home interior with modern design and elegant finishes"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
      </div>

      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-28">
          <div className="max-w-4xl text-center sm:text-left">
            {/* SEO-Optimized Heading */}
            <h1 className="text-3xl font-light text-white tracking-wide mb-3 font-serif leading-tight sm:text-4xl sm:mb-4 md:text-5xl lg:text-6xl lg:tracking-[0.1em] lg:mb-6">
              Victorian & Edwardian Home Renovation Specialists
            </h1>
            
            {/* Authority Sub-headline */}
            <p className="text-lg font-light tracking-wide text-gray-100 leading-relaxed mb-6 sm:text-xl sm:mb-8 md:text-2xl lg:max-w-3xl">
              Complete Design & Build General Contractors for West Hampstead (NW6), Kingsbury (NW9) & Harrow (HA3)
            </p>
            
            {/* Service Bullet Points */}
            <div className="mb-8 space-y-2 sm:mb-10">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-base font-light tracking-wide sm:text-lg">Full House Renovations & Extensions</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-base font-light tracking-wide sm:text-lg">Kitchen Remodeling & Structural Alterations</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-base font-light tracking-wide sm:text-lg">Specialists in Camden & Brent Planning Permission</span>
              </div>
            </div>
            
            {/* Clean Stats */}
            <div className="text-base text-white/90 mb-8 font-light space-y-1 sm:space-y-0 sm:text-lg lg:text-xl">
              <div>£50K-£150K • 8-12 weeks</div>
              <div className="text-sm text-white/80 sm:text-base">West Hampstead • Brondesbury • Kingsbury</div>
            </div>

            {/* Fact-Based Trust Bar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8 border border-white/20">
              <div className="flex flex-col gap-3 text-white text-sm text-center sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:text-base">
                <span className="font-medium">15 Years in NW London</span>
                <div className="hidden sm:block w-px h-4 bg-white/30"></div>
                <span className="font-medium">£5M Insurance Coverage</span>
                <div className="hidden sm:block w-px h-4 bg-white/30"></div>
                <span className="font-medium">100% Planning Approval Record in Brent/Camden</span>
              </div>
            </div>

            {/* Optimized CTAs */}
            <div className="flex flex-col gap-4 mb-10 sm:flex-row sm:gap-6 lg:mt-12">
              <Link
                to="/contact"
                className="group relative overflow-hidden px-10 py-5 bg-white text-black text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-transparent hover:text-white border border-white text-center rounded-lg sm:px-12 lg:text-base"
                aria-label="Book your free consultation"
              >
                <span className="relative z-10">Book Consultation</span>
                <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
              <Link
                to="/portfolio"
                className="group relative overflow-hidden px-10 py-5 border border-white text-white text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-white hover:text-black text-center rounded-lg sm:px-12 lg:text-base"
                aria-label="See our completed projects"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
            </div>

            {/* Quick Contact */}
            <div className="flex justify-center gap-8 sm:justify-start">
              <a 
                href="tel:+447387844751" 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-light"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-lg">Call Now</span>
              </a>
              <a 
                href="https://wa.me/447387844751" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-light"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.594"/>
                </svg>
                <span className="text-lg">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button - Mobile Only */}
      <a 
        href="https://wa.me/447387844751" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 sm:hidden"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.594"/>
        </svg>
      </a>
    </section>
  );
};

export default Hero;