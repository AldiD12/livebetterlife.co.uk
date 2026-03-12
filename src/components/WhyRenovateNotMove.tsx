import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, ArrowRight, X } from 'lucide-react';

const WhyRenovateNotMove = () => {
  const kitchenOnlyItems = [
    { item: "New kitchen", included: true },
    { item: "Rest of house still dated", included: false },
    { item: "Bathrooms need work in 2 years (£25K more)", included: false },
    { item: "Bedrooms need work in 4 years (£15K more)", included: false },
    { item: "3 separate disruptions over 5 years", included: false }
  ];

  const fullHouseItems = [
    { item: "New kitchen", included: true },
    { item: "2 new bathrooms", included: true },
    { item: "All bedrooms refreshed", included: true },
    { item: "Living areas transformed", included: true },
    { item: "Everything done at once", included: true },
    { item: "One disruption, 10 weeks", included: true },
    { item: "Better planning & design", included: true }
  ];

  const movingCosts = [
    "Estate agent fees: £15,000-£25,000",
    "Stamp duty: £30,000-£60,000", 
    "Moving costs: £5,000-£10,000",
    "Emotional stress: Priceless"
  ];

  const renovationBenefits = [
    "Stay in the area your kids know",
    "Keep your local schools and friends",
    "Avoid moving stress", 
    "Get exactly the home you want",
    "Increase property value by £100K-£200K"
  ];

  const recentProjects = [
    "Tennyson Road, West Hampstead NW6",
    "Brondesbury Road, Brondesbury NW6",
    "Russell Gardens Mews, Kensington W14",
    "Davies Street, Mayfair W1K", 
    "Kingsbury Road, Kingsbury NW9",
    "Kenton Lane, Harrow HA3"
  ];

  return (
    <section className="py-20 bg-gray-50 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm tracking-[0.3em] text-gray-500 uppercase">Our Expertise</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
          <h2 className="text-3xl font-light tracking-wide text-gray-900 font-serif mb-8 sm:text-4xl md:text-5xl lg:tracking-[0.2em]">
            Full House Renovation Specialists Since 2010
          </h2>
          
          {/* Main Intro Paragraph */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-4 sm:text-xl">
              We transform entire homes across North West London - not just individual rooms.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light sm:text-xl">
              While many homeowners initially contact us about kitchen renovations or extensions, 80% choose to upgrade to complete house transformations once they understand the value.
            </p>
          </div>
        </div>

        {/* Two Column Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* Column 1 - Kitchen Only */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sm:p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-medium text-gray-900 mb-2">Renovate Just Kitchen</h3>
              <div className="text-3xl font-bold text-red-600">Kitchen Only: £35,000</div>
            </div>
            
            <div className="space-y-4">
              {kitchenOnlyItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  {item.included ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  )}
                  <span className={`text-sm ${item.included ? 'text-gray-700' : 'text-red-600'}`}>
                    {item.item}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-lg font-semibold text-red-600">
                Total: £75,000 spent gradually
              </div>
            </div>
          </div>

          {/* Column 2 - Full House */}
          <div className="bg-green-50 rounded-xl p-6 shadow-sm border border-green-200 sm:p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-medium text-gray-900 mb-2">Renovate Entire Home</h3>
              <div className="text-3xl font-bold text-green-600">Full House: £75,000</div>
            </div>
            
            <div className="space-y-4">
              {fullHouseItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item.item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-green-200">
              <div className="text-lg font-semibold text-green-600">
                Total: £75,000 spent once
              </div>
            </div>
          </div>
        </div>

        {/* Why Families Choose Full House Renovations */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-gray-900 font-serif mb-8 text-center sm:text-3xl lg:text-4xl">
            Why Families Choose Full House Renovations
          </h3>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-600 leading-relaxed font-light text-center sm:text-xl">
              You love your neighborhood in West Hampstead, Brondesbury, or Kingsbury. You just don't love your outdated home.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Moving Costs */}
            <div>
              <h4 className="text-xl font-medium text-gray-900 mb-6 sm:text-2xl">
                Moving in North West London costs:
              </h4>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6 sm:p-8">
                <div className="space-y-3">
                  {movingCosts.map((cost, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{cost}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-xl font-semibold text-red-600">
                    Total: £50,000-£95,000 just to move
                  </div>
                </div>
              </div>
            </div>

            {/* Renovation Benefits */}
            <div>
              <h4 className="text-xl font-medium text-gray-900 mb-6 sm:text-2xl">
                OR transform your existing home for £50,000-£150,000 and:
              </h4>
              <div className="bg-green-50 rounded-xl p-6 border border-green-200 sm:p-8">
                <div className="space-y-3">
                  {renovationBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-green-700 font-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map and Projects */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* Map Placeholder */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sm:p-8">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm font-medium">Project Locations Map</p>
                  <p className="text-xs text-gray-400">NW London Coverage Area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Projects */}
          <div>
            <h4 className="text-xl font-medium text-gray-900 mb-6 sm:text-2xl">
              Map showing project locations with pins:
            </h4>
            <div className="space-y-3 mb-8">
              {recentProjects.map((project, index) => (
                <div key={index} className="flex items-center gap-3 py-2">
                  <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700">{project}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stat Callout Box */}
        <div className="bg-gray-900 rounded-xl p-8 text-center text-white mb-12 sm:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-4xl font-bold mb-4 sm:text-5xl lg:text-6xl">127</div>
            <p className="text-lg font-light leading-relaxed sm:text-xl">
              families in West Hampstead, Brondesbury, Kingsbury, Harrow & Kensington have transformed their Victorian and Edwardian homes with us since 2010.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            to="/portfolio"
            className="group inline-flex items-center gap-3 px-12 py-5 bg-gray-900 text-white text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-gray-800 rounded-lg"
          >
            See All Our Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyRenovateNotMove;