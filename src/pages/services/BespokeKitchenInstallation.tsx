import { Link } from 'react-router-dom';
import { CheckCircle, Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import { ServiceSchema } from '../../components/SEO/ServiceSchema';

const BespokeKitchenInstallation = () => {
  return (
    <>
      <SEO
        title="Bespoke Kitchen Installation | Custom Cabinetry for Victorian Homes"
        description="Custom-designed cabinetry and islands tailored to your space. We install premium units that fit perfectly in non-standard Victorian rooms."
        canonicalUrl="https://livebetterlife.co.uk/services/bespoke-kitchen-installation"
        keywords="bespoke kitchen london, custom kitchen cabinets, victorian kitchen renovation, kitchen island installation, custom cabinetry nw6"
      />
      
      <ServiceSchema 
        name="Bespoke Kitchen Installation"
        description="Custom-designed cabinetry and islands tailored to your space. We install premium units that fit perfectly in non-standard Victorian rooms."
        url="https://livebetterlife.co.uk/services/bespoke-kitchen-installation"
      />

      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 sm:py-32">
          <div className="absolute inset-0 bg-[url('/images/logo.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                Bespoke Kitchen Installation
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed mb-8">
                Custom cabinetry for non-standard London Victorian walls
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div>
                <h2 className="text-3xl sm:text-4xl font-light mb-6">
                  Custom-Designed for Your Space
                </h2>
                
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                  Victorian and Edwardian homes have awkward alcoves, uneven walls, and non-standard dimensions. Off-the-shelf kitchens leave gaps and look cheap. We design and install bespoke cabinetry that fits perfectly.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Made-to-Measure Cabinets</h3>
                      <p className="text-gray-600 font-light">Every unit built to exact dimensions. No filler panels or wasted space.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Kitchen Islands</h3>
                      <p className="text-gray-600 font-light">Custom islands with integrated storage, seating, and appliances. Perfect for open-plan living.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Premium Materials</h3>
                      <p className="text-gray-600 font-light">Solid wood, painted Shaker, or handleless modern. Quartz or granite worktops.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src="/images/projects/project1/after/af1.jpg"
                    alt="Bespoke Kitchen Installation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-3xl font-light mb-1">£8k-£35k</div>
                  <div className="text-sm text-white/80">Kitchen Only</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-6">
              Ready for Your Bespoke Kitchen?
            </h2>
            <p className="text-xl text-white/90 font-light mb-8">
              Get a free design consultation and quote
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

export default BespokeKitchenInstallation;
