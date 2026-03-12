import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight, Home, Wrench, FileText } from 'lucide-react';
import SEO from '../../components/SEO';
import { ServiceSchema } from '../../components/SEO/ServiceSchema';
import { projects } from '../../data/projects';

const FullHouseRenovationVictorianEdwardian = () => {
  // Filter Victorian/Edwardian projects
  const victorianProjects = projects.filter(project => 
    project.location.includes('NW6') || project.location.includes('NW9')
  );

  return (
    <>
      <SEO
        title="Full House Renovation Victorian & Edwardian | NW6 & NW9 Specialists"
        description="Complete modernization of period properties in West Hampstead (NW6), Brondesbury, and Kingsbury. Specializing in stripping back Victorian terraces to brick and rebuilding for modern living."
        canonicalUrl="https://livebetterlife.co.uk/services/full-house-renovation-victorian-edwardian"
        keywords="victorian house renovation nw6, edwardian house renovation, full house renovation west hampstead, period property renovation brondesbury, victorian terrace renovation london"
      />
      
      <ServiceSchema 
        name="Full House Renovation (Victorian & Edwardian)"
        description="Complete transformation of Victorian & Edwardian homes in NW6 & NW9. We strip back to brick, insulate, and rebuild for modern living."
        url="https://livebetterlife.co.uk/services/full-house-renovation-victorian-edwardian"
      />

      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 sm:py-32">
          <div className="absolute inset-0 bg-[url('/images/logo.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <Home className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-light tracking-wider text-blue-400 uppercase">General Contractor</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                Full House Renovation (Victorian & Edwardian)
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed mb-8">
                Complete modernization of period properties in West Hampstead (NW6), Brondesbury, and Kensington
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

        {/* The "Old vs New" Problem */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div>
                <h2 className="text-3xl sm:text-4xl font-light mb-6">
                  The Victorian Home Problem
                </h2>
                
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                  Victorian homes in North West London are beautiful but often poorly insulated and structurally tired. We don't just paint over cracks; we strip the property back to its shell.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Insulation</h3>
                      <p className="text-gray-600 font-light">Installing thermal boarding to solid brick walls (common in NW6). Bringing 1890s homes up to modern energy standards.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Rewiring</h3>
                      <p className="text-gray-600 font-light">Upgrading 1930s electrics to modern smart-home standards. Full rewire with new consumer units and USB sockets throughout.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Plumbing</h3>
                      <p className="text-gray-600 font-light">Replacing lead pipes often found in Kingsbury properties. New copper or plastic systems with modern boilers and underfloor heating.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-light mb-2">Structural Repairs</h3>
                      <p className="text-gray-600 font-light">Underpinning subsidence, replacing rotten joists, and installing steel beams for open-plan living.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src="/images/projects/project4/after/IMG_4909.jpg"
                    alt="Victorian House Full Renovation NW6"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-3xl font-light mb-1">£60k-£150k</div>
                  <div className="text-sm text-white/80">Typical Investment</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The "Proof" Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light mb-4">See How We Transformed This Victorian Terrace</h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                Real projects in West Hampstead, Brondesbury, and Kingsbury
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {victorianProjects.slice(0, 2).map((project) => (
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
                      <span>View Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <p className="text-lg text-gray-700 font-light italic">
                "See how we handled the Camden Council planning application for this side-return extension on Tennyson Road."
              </p>
            </div>
          </div>
        </section>

        {/* The "Process" Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16">
              <div className="flex items-center gap-2 justify-center mb-6">
                <FileText className="w-6 h-6 text-blue-600" />
                <span className="text-sm font-light tracking-wider text-blue-600 uppercase">Design & Build</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light mb-4">
                We Handle the Entire Process
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                From Camden Council planning applications to Building Control sign-off
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-light text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-light mb-3">Design & Planning</h3>
                <p className="text-gray-600 font-light">
                  Architectural drawings, structural calculations, and planning permission applications for Camden or Brent Council.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-light text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-light mb-3">Strip Out & Rebuild</h3>
                <p className="text-gray-600 font-light">
                  Complete strip back to brick, new insulation, rewiring, replumbing, and structural work. 8-12 weeks on site.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-light text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-light mb-3">High-End Finishing</h3>
                <p className="text-gray-600 font-light">
                  New kitchen, bathrooms, flooring, decorating. Building Control sign-off and final snagging.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gray-900 text-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <Wrench className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-light mb-4">What's Included in Full House Renovation</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-white/80">Complete kitchen renovation/extension</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-white/80">All bathrooms renovated</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-white/80">Full rewire & new consumer unit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-white/80">New central heating & boiler</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-white/80">Structural alterations (if needed)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-white/80">Planning & Building Control</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-white/80">All flooring & decorating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-white/80">Professional project management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where We Build Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-white p-8 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-light mb-4">Where We Renovate Victorian & Edwardian Homes</h3>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                We specialize in full house renovations for Victorian and Edwardian properties in <Link to="/locations/west-hampstead-nw6" className="text-blue-600 hover:text-blue-700 underline">West Hampstead & Brondesbury (NW6)</Link>, <Link to="/locations/harrow-ha3" className="text-blue-600 hover:text-blue-700 underline">Harrow & Kingsbury (HA3/NW9)</Link>, and <Link to="/locations/kensington-mayfair-prime" className="text-blue-600 hover:text-blue-700 underline">Kensington (W14)</Link>. Our expertise in period property restoration combined with modern building standards makes us the go-to contractor for conservation area renovations across North West London.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-6">
              Ready to Transform Your Victorian Home?
            </h2>
            <p className="text-xl text-white/90 font-light mb-8">
              Get a free consultation and detailed quote for your full house renovation in NW6, NW9, or HA3
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

export default FullHouseRenovationVictorianEdwardian;
