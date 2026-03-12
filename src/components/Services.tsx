import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Lightbulb } from 'lucide-react';

const Services = () => {
  const fullHouseIncludes = [
    "Complete kitchen renovation/extension",
    "All bathrooms renovated", 
    "All bedrooms refreshed (paint, flooring, built-ins)",
    "Living areas transformed",
    "Structural alterations (if needed)",
    "Planning permission & building control",
    "Professional project management",
    "One disruption, done in 8-12 weeks"
  ];

  const kitchenIncludes = [
    "Kitchen design & planning",
    "Structural work & extensions", 
    "New cabinets & worktops",
    "High-end appliances",
    "Plumbing & electrical",
    "Flooring & lighting",
    "Planning permission & building control"
  ];

  const victorianIncludes = [
    "Period feature restoration (cornicing, fireplaces, sash windows)",
    "Structural repairs (foundations, walls, roofs)",
    "Modern kitchen & bathrooms", 
    "Updated plumbing, electrical, heating",
    "Conservation area compliance",
    "Planning permission for listed buildings"
  ];

  return (
    <div id="services" className="py-20 bg-white sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm tracking-[0.3em] text-gray-500 uppercase">Our Services</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
          <h2 className="text-3xl font-light tracking-wide text-gray-900 font-serif mb-6 sm:text-4xl md:text-5xl lg:tracking-[0.2em]">
            Our Renovation Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light sm:text-xl">
            Complete home transformations across West Hampstead, Brondesbury, Kingsbury & Harrow
          </p>
        </div>

        <div className="space-y-16">
          
          {/* SERVICE CARD 1 - FULL HOUSE (LARGEST/FEATURED) */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    MOST POPULAR
                  </div>
                </div>
                
                <h3 className="text-3xl font-light text-gray-900 font-serif mb-4 sm:text-4xl">
                  Full House Renovation (General Contracting)
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Complete project management from start to finish. We handle the electrics, plumbing, structural steel, and high-end finishing. Transform your entire Victorian or Edwardian home in one coordinated project.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-blue-800 font-medium">
                    80% of our clients choose this over single-room renovations once they see the value.
                  </p>
                </div>

                {/* What's Included */}
                <h4 className="text-xl font-medium text-gray-900 mb-4">What's included:</h4>
                <div className="grid sm:grid-cols-2 gap-2 mb-8">
                  {fullHouseIncludes.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Timeline */}
                <div className="grid sm:grid-cols-3 gap-6 mb-8 p-6 bg-white rounded-xl border border-gray-200">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Investment:</div>
                    <div className="text-xl font-bold text-gray-900">£50,000-£150,000</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Timeline:</div>
                    <div className="text-xl font-bold text-gray-900">8-12 weeks</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Average:</div>
                    <div className="text-xl font-bold text-green-600">£75,000</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div><span className="font-medium">Popular in:</span> West Hampstead, Brondesbury, Kingsbury, Harrow</div>
                  <div><span className="font-medium">Recent project:</span> Tennyson Road, West Hampstead NW6 - £85,000, 10 weeks</div>
                </div>

                {/* Testimonial */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-2">
                    "We called about a kitchen. They showed us why the full house made sense. Best decision ever."
                  </p>
                  <p className="text-sm text-gray-600">- Homeowners, West Hampstead</p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link 
                    to="/portfolio"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-gray-800 rounded-lg"
                  >
                    View Full House Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-900 text-gray-900 text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-gray-900 hover:text-white rounded-lg"
                  >
                    Book Free Consultation
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src="/images/projects/project1/after/nw9-london-flat-conversion-after-living.jpeg" 
                    alt="Full House Renovation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE CARDS 2-3 (MEDIUM) */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Kitchen Renovation */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-light text-gray-900 font-serif mb-4">
                Kitchen Renovation & Remodeling
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bespoke kitchen extensions and full remodeling services. From side-return extensions in Victorian terraces to open-plan knock-throughs.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <p className="text-orange-800 text-sm">
                    Most clients upgrade to full house renovation when they see it's only £40K more for the entire home.
                  </p>
                </div>
              </div>

              <h4 className="font-medium text-gray-900 mb-3">What's included:</h4>
              <div className="space-y-2 mb-6">
                {kitchenIncludes.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-lg">
                <div><span className="font-medium">Investment:</span></div>
                <div className="text-sm">- Standalone kitchen: £25,000-£60,000</div>
                <div className="text-sm">- As part of full house: £35,000-£50,000</div>
                <div><span className="font-medium">Timeline:</span> 4-8 weeks (standalone)</div>
                <div><span className="font-medium">Popular in:</span> West Hampstead, Kensington, Harrow</div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
                <p className="text-blue-800 text-sm font-medium">
                  💡 80% of kitchen inquiries become full house renovations - see both options
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/services/kitchen-extensions-side-returns"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-gray-800 rounded-lg"
                >
                  View Kitchen Projects
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-900 text-gray-900 text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-gray-900 hover:text-white rounded-lg"
                >
                  Get Kitchen Quote
                </Link>
              </div>
            </div>

            {/* Victorian & Edwardian Restoration */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-light text-gray-900 font-serif mb-4">
                Victorian & Edwardian Restoration
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Period property specialists. We preserve original character while adding modern amenities. Expert in conservation areas and listed buildings.
              </p>

              <h4 className="font-medium text-gray-900 mb-3">What's included:</h4>
              <div className="space-y-2 mb-6">
                {victorianIncludes.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-lg">
                <div><span className="font-medium">Investment:</span> £60,000-£120,000</div>
                <div><span className="font-medium">Timeline:</span> 10-14 weeks</div>
                <div><span className="font-medium">Popular in:</span> West Hampstead, Brondesbury, Kensington</div>
                <div><span className="font-medium">Recent restoration:</span> Brondesbury Road NW6 - Victorian terraced house</div>
                <div className="text-sm text-gray-600">Camden Council conservation area specialists</div>
              </div>

              <div className="flex flex-col gap-3">
                <Link 
                  to="/services/period-property-restoration"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-gray-800 rounded-lg"
                >
                  View Victorian Projects
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-900 text-gray-900 text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-gray-900 hover:text-white rounded-lg"
                >
                  Book Heritage Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* SERVICE CARDS 4-5 (SMALLER) */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Loft Conversions */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Loft Conversions</h3>
              <p className="text-gray-600 mb-4">Extra bedroom, bathroom, or home office. Building control approval included.</p>
              <div className="space-y-2 mb-4 text-sm">
                <div><span className="font-medium">Investment:</span> £40,000-£80,000</div>
                <div><span className="font-medium">Timeline:</span> 8-10 weeks</div>
                <div><span className="font-medium">Popular in:</span> West Hampstead, Kingsbury, Harrow</div>
              </div>
              <Link 
                to="/services/loft-conversions-dormer-mansard"
                className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
              >
                View Loft Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Bathroom Renovations */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Bathroom Renovations</h3>
              <p className="text-gray-600 mb-4">Luxury bathroom transformations. Walk-in showers, modern fixtures, elegant tiling.</p>
              <div className="space-y-2 mb-4 text-sm">
                <div><span className="font-medium">Investment:</span> £12,000-£35,000</div>
                <div><span className="font-medium">Timeline:</span> 2-4 weeks</div>
                <div className="text-blue-600">Note: Often included in full house renovations</div>
              </div>
              <Link 
                to="/portfolio"
                className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
              >
                View Bathroom Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;