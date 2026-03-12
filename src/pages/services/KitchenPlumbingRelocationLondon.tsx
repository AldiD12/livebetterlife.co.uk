import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail } from 'lucide-react';

const KitchenPlumbingRelocationLondon = () => {
  return (
    <>
      <SEO
        title="Kitchen Layout Restructuring London | Live Better Life | Kitchen Redesign Services"
        description="Professional kitchen layout restructuring services in London. Complete kitchen redesign, space optimization, and layout transformation. Free consultation and quotes."
        canonicalUrl="https://livebetterlife.co.uk/services/kitchen-layout-restructuring-london"
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
              KITCHEN LAYOUT RESTRUCTURING LONDON
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Transform your kitchen with expert layout restructuring services in London. We redesign and reconfigure kitchen spaces for optimal functionality, workflow, and aesthetics across all London boroughs.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-12 text-center">
              KITCHEN LAYOUT RESTRUCTURING SERVICES
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Kitchen Space Planning",
                  description: "Expert space planning and design to optimize your kitchen layout for maximum functionality and flow."
                },
                {
                  title: "Kitchen Workflow Optimization",
                  description: "Redesign kitchen layouts to improve workflow efficiency and create the perfect cooking triangle."
                },
                {
                  title: "Kitchen Island Integration",
                  description: "Design and integrate kitchen islands to enhance workspace and create social cooking areas."
                },
                {
                  title: "Storage Optimization",
                  description: "Restructure kitchen layouts to maximize storage capacity and improve accessibility."
                },
                {
                  title: "Open Plan Kitchen Design",
                  description: "Transform closed kitchens into open-plan spaces that connect with living and dining areas."
                },
                {
                  title: "Kitchen Zoning & Layout",
                  description: "Create functional zones within your kitchen for cooking, preparation, cleaning, and storage."
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
              KITCHEN LAYOUT RESTRUCTURING AREAS IN LONDON
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
              READY TO RESTRUCTURE YOUR KITCHEN?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your free consultation and detailed quote for your London kitchen layout restructuring project.
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

export default KitchenPlumbingRelocationLondon;