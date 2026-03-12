import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, FileText, Award, Phone } from 'lucide-react';
import { projects } from '../../data/projects';
import SEO from '../../components/SEO';

const WestHampsteadNW6 = () => {
  // Filter only NW6 projects
  const nw6Projects = projects.filter(project => 
    project.location.includes('NW6')
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Home Renovation",
    "provider": {
      "@type": "GeneralContractor",
      "name": "LiveBetterLife",
      "url": "https://livebetterlife.co.uk"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "West Hampstead",
        "postalCode": "NW6",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.5475,
          "longitude": -0.1913
        }
      },
      {
        "@type": "Place",
        "name": "Brondesbury",
        "postalCode": "NW6"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Renovation Services NW6",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Victorian House Extension NW6"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Conservation Area Restoration"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Victorian Renovations West Hampstead NW6"
        description="Specialist builders for West Hampstead (NW6) & Brondesbury. Experts in Victorian restoration, side-return extensions, and Camden Council planning approvals."
        canonicalUrl="https://livebetterlife.co.uk/locations/west-hampstead-nw6"
        keywords="west hampstead builders, nw6 renovation, brondesbury builders, victorian house renovation nw6, camden council planning, conservation area builders, west hampstead extension, tennyson road renovation"
        schema={schemaData}
        ogImage="https://livebetterlife.co.uk/images/projects/project4/after/IMG_4909.jpg"
      />

      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 sm:py-32">
          <div className="absolute inset-0 bg-[url('/images/logo.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-light tracking-wider text-blue-400 uppercase">West Hampstead NW6</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                Victorian & Edwardian Renovation Specialists in West Hampstead (NW6)
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed mb-8">
                From the conservation areas of Brondesbury to the mansion blocks of West End Lane. We are the local experts in period property restoration.
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

        {/* Local Proof Engine */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light mb-4">Our Work on Your Street</h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                We don't just work in NW6; we live and breathe these streets. We have completed multiple full-house transformations within walking distance of the station.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {nw6Projects.map((project) => (
                <Link 
                  key={project.id}
                  to={`/portfolio/${project.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.heroImage} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-light">
                      {project.location}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-light mb-3">{project.title}</h3>
                    <p className="text-gray-600 font-light mb-4">{project.description}</p>
                    <div className="flex items-center gap-2 text-blue-600 font-light">
                      <span>View Full Project</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {nw6Projects.length > 0 && (
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <p className="text-lg text-gray-700 font-light italic">
                  "See how we handled the Camden Council planning application for this side-return extension on Tennyson Road."
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Planning Permission Authority Block */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-light tracking-wider text-blue-600 uppercase">Planning Expertise</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-light mb-6">
                  Navigating Camden Council Planning in NW6
                </h2>
                
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                  West Hampstead is covered by strict Article 4 Directions. Whether you are in the South Hampstead Conservation Area or the West Hampstead Conservation Area, we know the rules for:
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Sash Window Replacements</h3>
                      <p className="text-gray-600 font-light">Matching the original timber sightlines and maintaining conservation area compliance.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Mansard Lofts</h3>
                      <p className="text-gray-600 font-light">Maximizing space while respecting the roofline and Camden's strict design guidelines.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Basement Excavations</h3>
                      <p className="text-gray-600 font-light">Handling the Camden Construction Management Plan (CMP) and structural engineer requirements.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <Award className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-light mb-4">Why This Matters</h3>
                <p className="text-white/80 font-light leading-relaxed mb-6">
                  "Article 4 Directions" and "CMP" are expert terms. A homeowner reading this will think, "This guy knows more than the architect."
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-white/70 font-light">15+ years Camden Council experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-white/70 font-light">100% planning approval success rate in NW6</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-white/70 font-light">Direct relationships with conservation officers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for NW6 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light mb-4">Why West Hampstead Homeowners Choose Us</h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                We understand the unique challenges of renovating in NW6's conservation areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-light mb-3">Hyper-Local Knowledge</h3>
                <p className="text-gray-600 font-light">
                  We know every street, every conservation area boundary, and every Camden planning quirk in NW6.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-light mb-3">Planning Permission Experts</h3>
                <p className="text-gray-600 font-light">
                  We handle all Camden Council applications, from Party Wall Agreements to full planning submissions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-light mb-3">Period Property Specialists</h3>
                <p className="text-gray-600 font-light">
                  Victorian and Edwardian homes require specialist knowledge. We preserve character while adding modern comfort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-6">
              Ready to Transform Your West Hampstead Home?
            </h2>
            <p className="text-xl text-white/90 font-light mb-8">
              Get a free consultation and see how we can help with your renovation project in NW6
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

export default WestHampsteadNW6;
