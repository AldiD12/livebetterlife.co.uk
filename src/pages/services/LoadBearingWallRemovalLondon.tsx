import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail } from 'lucide-react';

const LoadBearingWallRemovalLondon = () => {
  return (
    <>
      <SEO
        title="Load Bearing Wall Removal London | Live Better Life | Structural Wall Removal"
        description="Professional load bearing wall removal in London. Safe structural wall removal with certified engineering and building regulations compliance. Free consultation and quotes."
        canonicalUrl="https://livebetterlife.co.uk/services/load-bearing-wall-removal-london"
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
              LOAD BEARING WALL REMOVAL LONDON
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Expert load bearing wall removal services in London. We safely remove structural walls with proper engineering support, building regulations compliance, and certified structural calculations.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-12 text-center">
              LOAD BEARING WALL REMOVAL SERVICES
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Structural Assessment",
                  description: "Comprehensive structural assessment to determine load bearing requirements and safe removal methods."
                },
                {
                  title: "Engineering Calculations",
                  description: "Certified structural engineering calculations and drawings for building control approval."
                },
                {
                  title: "Steel Beam Installation",
                  description: "Professional installation of steel beams and supports to replace load bearing walls."
                },
                {
                  title: "Building Regulations",
                  description: "Complete building regulations application and approval process for structural work."
                },
                {
                  title: "Safe Wall Removal",
                  description: "Safe and controlled removal of load bearing walls with minimal disruption to your property."
                },
                {
                  title: "Structural Repairs",
                  description: "Professional finishing and repairs following wall removal including plastering and decoration."
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
              LOAD BEARING WALL REMOVAL AREAS IN LONDON
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
              NEED LOAD BEARING WALL REMOVAL?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your free structural assessment and detailed quote for your London wall removal project.
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

export default LoadBearingWallRemovalLondon;