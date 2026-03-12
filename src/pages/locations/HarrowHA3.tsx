import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, FileText, Award, Phone, Home } from 'lucide-react';
import { projects } from '../../data/projects';
import SEO from '../../components/SEO';

const HarrowHA3 = () => {
  // Filter only HA3 projects
  const ha3Projects = projects.filter(project => 
    project.location.includes('HA3')
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Home Extensions",
    "provider": {
      "@type": "GeneralContractor",
      "name": "LiveBetterLife",
      "url": "https://livebetterlife.co.uk"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Harrow",
        "postalCode": "HA3",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.5806,
          "longitude": -0.3420
        }
      },
      {
        "@type": "Place",
        "name": "Kenton",
        "postalCode": "HA3"
      },
      {
        "@type": "Place",
        "name": "Stanmore",
        "postalCode": "HA7"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Extension Services Harrow",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "1930s House Extension"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Loft Conversion Permitted Development"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="House Extensions Harrow HA3 & Kenton"
        description="Builders for Harrow (HA3) & Kenton. We specialize in 1930s semi-detached extensions, open-plan renovations, and Permitted Development projects."
        canonicalUrl="https://livebetterlife.co.uk/locations/harrow-ha3"
        keywords="harrow builders, ha3 extension, kenton builders, 1930s house extension, permitted development harrow, loft conversion harrow, open plan kitchen harrow, house extension kenton"
        schema={schemaData}
        ogImage="https://livebetterlife.co.uk/images/projects/project6/after/kenton-lane-harrow-ha3-ground-floor-renovation-after-living-room-custom-entertainment-unit-led-lighting-1.jpeg"
      />

      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 sm:py-32">
          <div className="absolute inset-0 bg-[url('/images/logo.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-light tracking-wider text-blue-400 uppercase">Harrow HA3 & Kenton</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                House Extensions & Renovations in Harrow (HA3) & Kenton
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed mb-4">
                Unlock the potential of your 1930s Semi-Detached home. Specialists in Permitted Development extensions and Loft Conversions.
              </p>

              <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                Homeowners in Kenton, Stanmore, and Harrow Weald sit on untapped potential. We specialize in transforming the traditional 1930s layout into modern, open-plan family homes without the hassle of moving.
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
              <h2 className="text-3xl sm:text-4xl font-light mb-4">See Our Work in HA3</h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                Real transformations of 1930s homes in your neighborhood
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {ha3Projects.map((project) => (
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

            {ha3Projects.length > 0 && (
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <p className="text-lg text-gray-700 font-light italic">
                  "View this Ground Floor Renovation on Kenton Lane. We removed the load-bearing walls to create the open-plan kitchen-diner every Harrow family wants."
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Permitted Development Authority Block */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-light tracking-wider text-blue-600 uppercase">Legal Expertise</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-light mb-6">
                  Maximizing Permitted Development in Harrow
                </h2>
                
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                  Did you know you can often extend your Harrow home up to 6 meters (rear) or convert your loft without full planning permission? We help you utilize your Permitted Development Rights to bypass long council waits.
                </p>

                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                  We handle the Lawful Development Certificate application with Harrow Council or Brent Council to ensure your project is 100% legal.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Single Storey Rear Extensions</h3>
                      <p className="text-gray-600 font-light">Up to 6 meters for semi-detached homes under Permitted Development. No planning permission needed in most cases.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Loft Conversions</h3>
                      <p className="text-gray-600 font-light">Add a 4th bedroom or home office without planning permission. We handle Building Regulations and Party Wall Agreements.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Open-Plan Transformations</h3>
                      <p className="text-gray-600 font-light">Remove load-bearing walls safely with structural engineer calculations and Building Control approval.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <Home className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-light mb-4">Why This Matters</h3>
                <p className="text-white/80 font-light leading-relaxed mb-6">
                  "Lawful Development Certificate" is the specific legal term that proves you are a pro. We sell speed and certainty - get your extension approved faster.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-white/70 font-light">10+ years Harrow Council experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-white/70 font-light">Permitted Development specialists</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-white/70 font-light">Fast-track Building Regulations approval</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-white/70 font-light">Party Wall Agreement handling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for HA3 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light mb-4">Why Harrow Homeowners Choose Us</h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                We understand the unique opportunities of 1930s semi-detached homes in HA3
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-light mb-3">1930s Home Specialists</h3>
                <p className="text-gray-600 font-light">
                  We know the typical layout, the cavity walls, and exactly how to maximize space in your semi-detached home.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-light mb-3">Permitted Development Experts</h3>
                <p className="text-gray-600 font-light">
                  We handle all Lawful Development Certificates and Building Regulations to get your project approved fast.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-light mb-3">Open-Plan Transformation</h3>
                <p className="text-gray-600 font-light">
                  From closed-off kitchens to modern open-plan living. We create the space your family needs without moving house.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-6">
              Ready to Extend Your Harrow Home?
            </h2>
            <p className="text-xl text-white/90 font-light mb-8">
              Get a free consultation and see how we can unlock the potential of your 1930s semi-detached home
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

export default HarrowHA3;
