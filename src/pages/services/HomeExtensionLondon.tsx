import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail } from 'lucide-react';

const HomeExtensionLondon = () => {
  return (
    <>
      <SEO
        title="Home Extension London | Live Better Life | Expert House Extensions"
        description="Professional home extension services in London. Single storey, double storey, and wraparound extensions. Free consultation and quotes. 15+ years experience."
        canonicalUrl="https://livebetterlife.co.uk/services/home-extension-london"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <Link to="/services" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-gray-900 font-serif mb-6">
              HOME EXTENSION LONDON
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Expand your London home with our expert extension services. We specialize in single storey, double storey, and wraparound extensions across all London boroughs, delivering exceptional results for projects ranging from £80k to £200k+.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-12 text-center">
              OUR HOME EXTENSION SERVICES
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Single Storey Extension",
                  description: "Expand your ground floor living space with expertly designed and built single storey extensions."
                },
                {
                  title: "Double Storey Extension",
                  description: "Maximize your home's potential with double storey extensions adding space on both floors."
                },
                {
                  title: "Wraparound Extension",
                  description: "Transform your home with wraparound extensions combining side return and rear extensions."
                },
                {
                  title: "Side Return Extension",
                  description: "Utilize narrow side spaces in Victorian and Edwardian properties with side return extensions."
                },
                {
                  title: "Rear Extension",
                  description: "Extend into your garden with rear extensions designed to maximize natural light and space."
                },
                {
                  title: "Extension Planning Permission",
                  description: "Complete planning permission service for your London home extension project."
                }
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-light tracking-wide text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-12 text-center">
              HOME EXTENSION AREAS IN LONDON
            </h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {[
                "Chiswick W4", "Kilburn NW6", "Willesden NW9", "Kensal Green NW10",
                "Hammersmith W6", "Fulham SW6", "Chelsea SW3", "Kensington W8",
                "Notting Hill W11", "Paddington W2", "Maida Vale W9", "St John's Wood NW8"
              ].map((area, index) => (
                <div key={index} className="py-3 px-4 bg-white rounded border border-gray-200">
                  <span className="text-gray-700 font-light">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-3xl font-light tracking-[0.2em] font-serif mb-6">
              READY TO EXTEND YOUR HOME?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your free consultation and detailed quote for your London home extension project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447387844751"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +44 7387 844751
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-white rounded hover:bg-white hover:text-gray-900 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeExtensionLondon;