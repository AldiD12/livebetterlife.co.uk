import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Award } from 'lucide-react';
import SEO from '../../components/SEO';
import { ServiceSchema } from '../../components/SEO/ServiceSchema';

const PeriodPropertyRestoration = () => {
  return (
    <>
      <SEO
        title="Period Property Restoration | Victorian & Edwardian Specialists West Hampstead"
        description="Preserving the soul of your home while updating the systems. We work within Conservation Area guidelines. Restoring cornices & sash windows in West Hampstead."
        canonicalUrl="https://livebetterlife.co.uk/services/period-property-restoration"
        keywords="period property restoration nw6, victorian restoration west hampstead, conservation area renovation, sash window restoration, cornice restoration london"
      />
      
      <ServiceSchema 
        name="Period Property Restoration"
        description="Preserving the soul of your home while updating the systems. We work within Conservation Area guidelines."
        url="https://livebetterlife.co.uk/services/period-property-restoration"
      />

      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 sm:py-32">
          <div className="absolute inset-0 bg-[url('/images/logo.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-light tracking-wider text-blue-400 uppercase">Building Restoration Service</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                Period Property Restoration
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed mb-8">
                Restoring cornices & sash windows in West Hampstead
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              
              <div>
                <h2 className="text-3xl sm:text-4xl font-light mb-6">
                  Preserving Character, Adding Comfort
                </h2>
                
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                  Preserving the soul of your home while updating the systems. We work within Conservation Area guidelines in West Hampstead, Brondesbury, and Kensington.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Sash Window Restoration</h3>
                      <p className="text-gray-600 font-light">Repairing original timber sash windows. Draught-proofing and double-glazing while maintaining period appearance.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Cornice & Ceiling Rose Restoration</h3>
                      <p className="text-gray-600 font-light">Repairing damaged plaster mouldings. Matching original Victorian and Edwardian designs.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Fireplace Restoration</h3>
                      <p className="text-gray-600 font-light">Restoring cast-iron fireplaces and marble surrounds. Opening up blocked fireplaces.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Brickwork & Facade Restoration</h3>
                      <p className="text-gray-600 font-light">Cleaning and pointing original London stock brickwork. Restoring stone masonry facades.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src="/images/projects/project4/after/IMG_4909.jpg"
                    alt="Period Property Restoration West Hampstead"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-3xl font-light mb-1">£80k-£120k</div>
                  <div className="text-sm text-white/80">Full Restoration</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <h3 className="text-xl font-light mb-3">Conservation Area Compliance</h3>
              <p className="text-gray-700 font-light">
                West Hampstead, Brondesbury, and parts of Kensington are designated Conservation Areas. We understand the planning restrictions and work with Camden Council conservation officers to ensure all work is compliant.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-6">
              Ready to Restore Your Period Home?
            </h2>
            <p className="text-xl text-white/90 font-light mb-8">
              Get a free heritage consultation and quote
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

export default PeriodPropertyRestoration;
