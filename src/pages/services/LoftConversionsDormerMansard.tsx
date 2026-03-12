import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Home } from 'lucide-react';
import SEO from '../../components/SEO';
import { ServiceSchema } from '../../components/SEO/ServiceSchema';

const LoftConversionsDormerMansard = () => {
  return (
    <>
      <SEO
        title="Loft Conversions Dormer & Mansard | NW6 & Harrow Specialists"
        description="Convert your attic into a master suite. Specialists in Mansard conversions for conservation areas and Dormers for Harrow semis."
        canonicalUrl="https://livebetterlife.co.uk/services/loft-conversions-dormer-mansard"
        keywords="mansard loft conversion nw6, dormer loft conversion harrow, loft conversion conservation area, loft conversion kingsbury, attic conversion west hampstead"
      />
      
      <ServiceSchema 
        name="Loft Conversions (Dormer & Mansard)"
        description="Convert your attic into a master suite. Specialists in Mansard conversions for conservation areas and Dormers for Harrow semis."
        url="https://livebetterlife.co.uk/services/loft-conversions-dormer-mansard"
      />

      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 sm:py-32">
          <div className="absolute inset-0 bg-[url('/images/logo.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <Home className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-light tracking-wider text-blue-400 uppercase">Custom Home Builder</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                Loft Conversions (Dormer & Mansard)
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed mb-8">
                Mansard conversions for conservation areas and Dormers for Harrow semis
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:+447387844751"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-light"
                >
                  <Phone className="w-5 h-5" />
                  Call 07387 844751
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-light border border-white/20"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-light mb-6">Mansard Loft Conversions</h2>
                <p className="text-gray-600 font-light mb-6">
                  Perfect for conservation areas in West Hampstead and Brondesbury. Mansard conversions create maximum headroom and floor space.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Planning permission required (we handle Camden Council applications)</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Flat roof design with near-vertical walls</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Maximum usable floor space</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-light text-blue-600 mb-1">£50k-£70k</div>
                  <div className="text-sm text-gray-600">Typical Investment</div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-light mb-6">Dormer Loft Conversions</h2>
                <p className="text-gray-600 font-light mb-6">
                  Ideal for Harrow, Kingsbury, and Kenton semi-detached houses. Dormer conversions often fall under Permitted Development.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Usually Permitted Development (no planning needed)</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Rear dormer or hip-to-gable extension</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Cost-effective way to add a bedroom</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-light text-blue-600 mb-1">£35k-£55k</div>
                  <div className="text-sm text-gray-600">Typical Investment</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-6">What's Included in Your Loft Conversion</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 font-light">Structural steel beams and floor joists</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 font-light">New staircase installation</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 font-light">Velux windows or dormer windows</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 font-light">Full insulation and plasterboard</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 font-light">Electrical wiring and lighting</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 font-light">Heating and radiators</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 font-light">En-suite bathroom (optional)</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 font-light">Building Control sign-off</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-6">
              Ready to Convert Your Loft?
            </h2>
            <p className="text-xl text-white/90 font-light mb-8">
              Get a free feasibility survey and quote for your loft conversion
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="tel:+447387844751"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-light"
              >
                <Phone className="w-5 h-5" />
                Call 07387 844751
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-light border border-white/20"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default LoftConversionsDormerMansard;
