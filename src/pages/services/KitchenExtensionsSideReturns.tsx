import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight, Home } from 'lucide-react';
import SEO from '../../components/SEO';
import { ServiceSchema } from '../../components/SEO/ServiceSchema';

const KitchenExtensionsSideReturns = () => {
  return (
    <>
      <SEO
        title="Kitchen Extensions & Side Returns | West Hampstead & Brondesbury Specialists"
        description="Side-return extensions for Brondesbury & Kilburn terraces. Maximize the potential of your terraced house in West Hampstead and Queens Park."
        canonicalUrl="https://livebetterlife.co.uk/services/kitchen-extensions-side-returns"
        keywords="side return extension west hampstead, kitchen extension brondesbury, side return nw6, terraced house extension london, kitchen extension kilburn"
      />
      
      <ServiceSchema 
        name="Kitchen Extensions & Side Returns"
        description="Maximize the potential of your terraced house with a side-return extension. Perfect for gaining space in West Hampstead and Queens Park."
        url="https://livebetterlife.co.uk/services/kitchen-extensions-side-returns"
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
                Kitchen Extensions & Side Returns
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed mb-8">
                Side-return extensions for Brondesbury & Kilburn terraces
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
                  Maximize Your Terraced House Space
                </h2>
                
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                  Side-return extensions are perfect for Victorian and Edwardian terraced houses in West Hampstead, Brondesbury, and Kilburn. We transform narrow side passages into valuable kitchen space.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Planning Permission</h3>
                      <p className="text-gray-600 font-light">Most side returns fall under Permitted Development, but we handle Camden Council applications when needed.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Structural Glazing</h3>
                      <p className="text-gray-600 font-light">Large sliding or bi-fold doors connecting to your garden. Maximizing natural light in your new kitchen-diner.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Complete Kitchen Fit-Out</h3>
                      <p className="text-gray-600 font-light">New kitchen installation, flooring, underfloor heating, and electrical work all included.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src="/images/projects/project2/after/af1.jpg"
                    alt="Side Return Extension Brondesbury"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-3xl font-light mb-1">£45k-£75k</div>
                  <div className="text-sm text-white/80">Typical Investment</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <p className="text-lg text-gray-700 font-light italic">
                "See how we transformed this cramped galley kitchen in Brondesbury with a side-return extension."
              </p>
              <Link to="/portfolio" className="inline-flex items-center gap-2 text-blue-600 font-light mt-4">
                View Brondesbury Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Where We Build Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-white p-8 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-light mb-4">Where We Build Kitchen Extensions</h3>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                We specialize in kitchen extensions for Victorian terraces in <Link to="/locations/west-hampstead-nw6" className="text-blue-600 hover:text-blue-700 underline">West Hampstead (NW6)</Link> and 1930s semi-detached homes in <Link to="/locations/harrow-ha3" className="text-blue-600 hover:text-blue-700 underline">Harrow (HA3)</Link>. Our team understands the unique challenges of extending period properties in conservation areas and navigating Camden and Brent Council planning requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-6">
              Ready to Extend Your Kitchen?
            </h2>
            <p className="text-xl text-white/90 font-light mb-8">
              Get a free site survey and quote for your side-return extension in NW6
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

export default KitchenExtensionsSideReturns;
