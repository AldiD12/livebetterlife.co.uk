import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, Award, Phone, Building2, Briefcase } from 'lucide-react';
import { projects } from '../../data/projects';
import SEO from '../../components/SEO';

const KensingtonMayfairPrime = () => {
  // Filter W14 and W1K projects
  const primeProjects = projects.filter(project => 
    project.location.includes('W14') || project.location.includes('W1K') || 
    project.location.includes('Kensington') || project.location.includes('Mayfair')
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "LiveBetterLife Prime",
    "url": "https://livebetterlife.co.uk",
    "areaServed": [
      {
        "@type": "Place",
        "name": "Kensington",
        "postalCode": "W14",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.4983,
          "longitude": -0.2115
        }
      },
      {
        "@type": "Place",
        "name": "Mayfair",
        "postalCode": "W1K",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.5113,
          "longitude": -0.1478
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Luxury Renovation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mews House Renovation W14",
            "serviceType": "Residential"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Office Fit Out Mayfair",
            "serviceType": "Commercial"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Luxury Renovations Kensington W14 & Mayfair | LiveBetterLife"
        description="Prime Central London contractors for Kensington (W14) & Mayfair (W1K). Specialists in Mews House renovations and high-end commercial office fit-outs."
        canonicalUrl="https://livebetterlife.co.uk/locations/kensington-mayfair-prime"
        keywords="kensington builders w14, mayfair contractors w1k, mews house renovation, luxury renovation london, grosvenor estate builders, cadogan estate contractors, high end renovation, prime central london builders"
        schema={schemaData}
        ogImage="https://livebetterlife.co.uk/images/projects/project1/after/af1.jpg"
      />

      <div className="min-h-screen bg-white">
        
        {/* Hero Section - The "Prestige" Hook */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 sm:py-32">
          <div className="absolute inset-0 bg-[url('/images/logo.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-light tracking-wider text-blue-400 uppercase">Prime Central London</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                Luxury Renovations in Kensington (W14) & Mayfair (W1K)
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed mb-8">
                Specialists in Mews House Restorations and High-End Commercial Fit-Outs
              </p>

              <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                Operating in London's most prestigious postcodes requires a different level of precision. From Grade II Listed requirements in Mayfair to space-optimizing basements in Russell Gardens Mews, we deliver flawless finishes for high-net-worth assets.
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
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Dual-Asset Proof Engine */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light mb-4">Residential & Commercial Excellence</h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                Our portfolio spans both luxury residential transformations and high-specification commercial projects in Prime Central London
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              
              {/* Left Card - Residential */}
              <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="/images/projects/project1/after/af1.jpg"
                    alt="Russell Gardens Mews Luxury Renovation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-light flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Residential
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light mb-3">Russell Gardens Mews, Kensington</h3>
                  <p className="text-gray-600 font-light mb-6 leading-relaxed">
                    Complete luxury transformation of a Kensington Mews house, featuring spa-grade bathrooms and custom joinery.
                  </p>
                  <Link 
                    to="/portfolio/luxury-renovation-russell-gardens-mews-kensington-w14"
                    className="inline-flex items-center gap-2 text-blue-600 font-light hover:gap-3 transition-all"
                  >
                    <span>View Full Project</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right Card - Commercial */}
              <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="/images/projects/project2/after/af1.jpg"
                    alt="22 Davies Street Mayfair Office Renovation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-light flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Commercial
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light mb-3">22 Davies Street, Mayfair</h3>
                  <p className="text-gray-600 font-light mb-6 leading-relaxed">
                    High-specification office renovation in the heart of Mayfair, installing acoustic glass meeting rooms and marble reception areas.
                  </p>
                  <Link 
                    to="/portfolio/luxury-office-renovation-mayfair-w1k"
                    className="inline-flex items-center gap-2 text-blue-600 font-light hover:gap-3 transition-all"
                  >
                    <span>View Full Project</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {primeProjects.length > 0 && (
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <p className="text-lg text-gray-700 font-light italic">
                  "From Grosvenor Estate license applications to narrow Mews logistics, we handle the complexities that define Prime Central London construction."
                </p>
              </div>
            )}
          </div>
        </section>

        {/* The "Authority" Block - Logistics Weapon */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-light tracking-wider text-blue-600 uppercase">Logistics Mastery</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-light mb-6">
                  The Logistics of Prime Central London
                </h2>
                
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                  Renovating in W14 and W1K is a logistical challenge we have mastered. We handle:
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Grosvenor Estate & Cadogan Estate Applications</h3>
                      <p className="text-gray-600 font-light">License to alter applications, estate-specific design guidelines, and approval processes for London's most prestigious freeholds.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Restricted Access Logistics</h3>
                      <p className="text-gray-600 font-light">Managing skip permits and deliveries in narrow Mews streets. Coordinating crane lifts and material hoists in high-density areas.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Noise Control & Quiet Hours</h3>
                      <p className="text-gray-600 font-light">Working in high-density areas with strict quiet hours. Acoustic monitoring and neighbor liaison protocols.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Grade II Listed Building Compliance</h3>
                      <p className="text-gray-600 font-light">Heritage consultants, conservation officers, and Listed Building Consent applications for Mayfair's protected properties.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <Award className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-light mb-4">Why This Matters</h3>
                <p className="text-white/80 font-light leading-relaxed mb-6">
                  Mentioning "Grosvenor Estate" and "Narrow Mews Logistics" proves you are not a van-driver from the suburbs. You are a Central London operator.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-white/70 font-light">Direct relationships with estate management offices</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-white/70 font-light">Pre-approved contractor status with major estates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-white/70 font-light">£5M+ project insurance for high-value properties</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-white/70 font-light">Specialist heritage craftsmen on permanent staff</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-End Finishes Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light mb-4">High-Specification Finishes</h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                The level of finish expected in W14 and W1K properties demands specialist suppliers and craftsmen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-light mb-3">Mews House Specialists</h3>
                <p className="text-gray-600 font-light">
                  Space optimization, bespoke storage solutions, and architectural glazing for compact luxury living.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-light mb-3">Luxury Materials</h3>
                <p className="text-gray-600 font-light">
                  Carrara marble, engineered oak flooring, Gaggenau appliances, and Dornbracht fixtures as standard.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-light mb-3">Commercial Expertise</h3>
                <p className="text-gray-600 font-light">
                  Cat A/B fit-outs, acoustic meeting rooms, and reception areas that reflect corporate prestige.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-6">
              Ready to Discuss Your Prime London Project?
            </h2>
            <p className="text-xl text-white/90 font-light mb-8">
              Whether it's a Kensington Mews house or a Mayfair office, we deliver the precision your property deserves
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
                Request Consultation
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default KensingtonMayfairPrime;
