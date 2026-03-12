import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight, Wrench } from 'lucide-react';
import SEO from '../../components/SEO';
import { ServiceSchema } from '../../components/SEO/ServiceSchema';

const StructuralAlterationsWallRemoval = () => {
  return (
    <>
      <SEO
        title="Structural Alterations & Wall Removal | Steel Beam Installation London"
        description="Safe removal of load-bearing walls to create open-plan layouts. Steel beam calculations for open-plan layouts in Harrow (HA3), West Hampstead, and Kingsbury."
        canonicalUrl="https://livebetterlife.co.uk/services/structural-alterations-wall-removal"
        keywords="load bearing wall removal london, structural alterations harrow, steel beam installation nw6, open plan conversion, wall removal west hampstead"
      />
      
      <ServiceSchema 
        name="Structural Alterations & Wall Removal"
        description="Safe removal of load-bearing walls to create open-plan layouts. We handle all steel beam calculations and Building Control approvals."
        url="https://livebetterlife.co.uk/services/structural-alterations-wall-removal"
      />

      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 sm:py-32">
          <div className="absolute inset-0 bg-[url('/images/logo.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <Wrench className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-light tracking-wider text-blue-400 uppercase">General Contractor</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                Structural Alterations & Wall Removal
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed mb-8">
                Steel beam calculations for open-plan layouts in Harrow (HA3), West Hampstead, and Kingsbury
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
                  Creating Open-Plan Living Spaces
                </h2>
                
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                  Safe removal of load-bearing walls to create open-plan layouts. We handle all steel beam calculations and Building Control approvals for properties across North West London.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Structural Engineer Calculations</h3>
                      <p className="text-gray-600 font-light">Full structural calculations for steel beam sizing and positioning. Building Control approval included.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Steel Beam Installation</h3>
                      <p className="text-gray-600 font-light">RSJ (Rolled Steel Joist) installation with temporary supports. We handle the entire process from start to finish.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Party Wall Agreements</h3>
                      <p className="text-gray-600 font-light">Managing Party Wall Act notices for terraced and semi-detached properties in NW6 and HA3.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src="/images/projects/project3/after/af1.jpg"
                    alt="Structural Wall Removal Kenton Lane"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-3xl font-light mb-1">£3.5k-£12k</div>
                  <div className="text-sm text-white/80">Typical Cost</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <p className="text-lg text-gray-700 font-light italic">
                "See how we removed the load-bearing wall between kitchen and dining room on Kenton Lane, Harrow (HA3)."
              </p>
              <Link to="/portfolio" className="inline-flex items-center gap-2 text-blue-600 font-light mt-4">
                View Kenton Lane Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Where We Build Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-white p-8 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-light mb-4">Where We Remove Load-Bearing Walls</h3>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                We handle structural alterations and wall removal across <Link to="/locations/west-hampstead-nw6" className="text-blue-600 hover:text-blue-700 underline">West Hampstead (NW6)</Link>, <Link to="/locations/harrow-ha3" className="text-blue-600 hover:text-blue-700 underline">Harrow (HA3)</Link>, and <Link to="/locations/kensington-mayfair-prime" className="text-blue-600 hover:text-blue-700 underline">Kensington (W14)</Link>. Our structural engineers are approved by Camden, Brent, and Kensington & Chelsea councils, ensuring smooth Building Control approval for your open-plan conversion.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-6">
              Ready to Create Your Open-Plan Space?
            </h2>
            <p className="text-xl text-white/90 font-light mb-8">
              Get a free structural survey and quote for your wall removal project
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

export default StructuralAlterationsWallRemoval;
