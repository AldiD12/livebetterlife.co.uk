import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail } from 'lucide-react';

const QuartzWorktopInstallationLondon = () => {
  return (
    <>
      <SEO
        title="Premium Kitchen Surface Installation London | Live Better Life | Luxury Kitchen Surfaces"
        description="Premium kitchen surface installation in London. Quartz, granite, marble, and luxury surface installation with expert craftsmanship. Free consultation and quotes."
        canonicalUrl="https://livebetterlife.co.uk/services/premium-kitchen-surface-installation-london"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-gray-900 font-serif mb-6">
              PREMIUM KITCHEN SURFACE INSTALLATION LONDON
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Transform your London kitchen with premium surface installation. We specialize in luxury quartz, granite, marble, and bespoke surface solutions with expert craftsmanship and precision installation across all London boroughs.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-12 text-center">
              PREMIUM KITCHEN SURFACE SERVICES
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Premium Quartz Surfaces",
                  description: "Luxury engineered quartz surfaces with seamless installation and perfect finishing for modern kitchens."
                },
                {
                  title: "Natural Stone Installation",
                  description: "Premium granite and marble surfaces with professional templating and precision installation."
                },
                {
                  title: "Bespoke Surface Solutions",
                  description: "Custom surface designs and installations tailored to your specific kitchen requirements."
                },
                {
                  title: "Surface Templating & Design",
                  description: "Precise digital templating and design consultation to ensure perfect fit and aesthetic appeal."
                },
                {
                  title: "Kitchen Island Surfaces",
                  description: "Premium surface solutions for kitchen islands, breakfast bars, and feature areas."
                },
                {
                  title: "Edge Profiling & Finishing",
                  description: "Custom edge profiles, finishes, and detailing to complement your luxury kitchen design."
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
              PREMIUM SURFACE INSTALLATION AREAS IN LONDON
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
              READY FOR PREMIUM KITCHEN SURFACES?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your free consultation and detailed quote for your London premium kitchen surface installation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+442081234567"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: 020 8123 4567
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

export default QuartzWorktopInstallationLondon;