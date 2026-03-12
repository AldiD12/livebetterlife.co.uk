import { Link } from 'react-router-dom';
import { PoundSterling, MapPin, Clock, Shield, MessageCircle, Home, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const localExpertise = [
    "Camden Council planning officers by name",
    "Brent planning requirements inside-out", 
    "Every conservation area rule in NW6",
    "Which builders' merchants deliver fastest to your postcode",
    "Westminster & RBKC listed building protocols"
  ];

  const onTimeDelivery = [
    "Professional project managers",
    "Our own trusted subcontractors (not random)",
    "Material ordered 2 weeks in advance", 
    "Weather contingency in timeline",
    "Weekly progress meetings"
  ];

  const recentCompletions = [
    "Tennyson Road NW6: Finished 3 days early ✓",
    "Brondesbury Road NW6: On time ✓",
    "Kingsbury Road NW9: Finished 1 week early ✓"
  ];

  const insurance = [
    "£5M public liability insurance",
    "£10M employer's liability insurance",
    "12-month workmanship guarantee",
    "10-year structural warranty (where applicable)"
  ];

  const accreditations = [
    "FMB (Federation of Master Builders) approved",
    "CHAS health & safety accredited",
    "Constructionline registered", 
    "TrustMark government-endorsed"
  ];

  const communication = [
    "Mobile number from day 1",
    "WhatsApp updates with photos (daily if you want)",
    "Weekly on-site meetings",
    "Questions answered within 2 hours",
    "No offshore call centers",
    "Same project manager start to finish"
  ];

  const recentProjects = [
    { text: "Tennyson Road, West Hampstead NW6", link: "/locations/west-hampstead-nw6" },
    { text: "Brondesbury Road, Brondesbury NW6", link: "/locations/west-hampstead-nw6" },
    { text: "Russell Gardens Mews, Kensington W14", link: "/locations/kensington-mayfair-prime" },
    { text: "Davies Street, Mayfair W1K", link: "/locations/kensington-mayfair-prime" },
    { text: "Kingsbury Road, Kingsbury NW9", link: "/locations/harrow-ha3" },
    { text: "Kenton Lane, Harrow HA3", link: "/locations/harrow-ha3" }
  ];

  return (
    <section className="py-20 bg-gray-50 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm tracking-[0.3em] text-gray-500 uppercase">Why Choose Us</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
          <h2 className="text-3xl font-light tracking-wide text-gray-900 font-serif mb-6 sm:text-4xl md:text-5xl lg:tracking-[0.2em]">
            Why 127 NW London Families Choose LiveBetterLife
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light sm:text-xl">
            We're not just contractors - we're your neighbors' renovation specialists
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* BENEFIT BOX 1 - Fixed-Price Guarantee */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <PoundSterling className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-medium text-gray-900">Fixed-Price Guarantee</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              No hidden costs. Ever. Price quoted = price paid.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">Stage payments at 25% increments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">Transparent itemized quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">No surprise charges</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">Contract protects you</span>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="font-medium text-green-800 mb-1">Recent example: Tennyson Road NW6</div>
              <div className="text-green-700">Quoted: £85,000 | Final cost: £85,000 ✓</div>
            </div>
          </div>

          {/* BENEFIT BOX 2 - NW London Specialists */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-medium text-gray-900">NW London Specialists Since 2010</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              15+ years exclusively in West Hampstead, Brondesbury, Kingsbury, Harrow & Kensington.
            </p>
            <div className="mb-6">
              <div className="font-medium text-gray-900 mb-3">We know:</div>
              <div className="space-y-2">
                {localExpertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-blue-800 font-medium">89% of our projects are within 5 miles of each other.</div>
              <div className="text-blue-700">Your neighbor probably knows us.</div>
            </div>
          </div>

          {/* BENEFIT BOX 3 - On-Time Delivery */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl font-medium text-gray-900">On-Time Delivery</h3>
            </div>
            <div className="mb-6">
              <div className="text-lg font-medium text-gray-900 mb-2">89% of projects finish on time or early.</div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Industry average delay:</span>
                  <span className="font-medium text-red-600 ml-1">3 weeks</span>
                </div>
                <div>
                  <span className="text-gray-600">Our average delay:</span>
                  <span className="font-medium text-green-600 ml-1">2 days</span>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="font-medium text-gray-900 mb-3">How we do it:</div>
              <div className="space-y-2">
                {onTimeDelivery.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="font-medium text-orange-800 mb-2">Recent on-time completions:</div>
              <div className="space-y-1">
                {recentCompletions.map((completion, index) => (
                  <div key={index} className="text-orange-700 text-sm">{completion}</div>
                ))}
              </div>
            </div>
          </div>

          {/* BENEFIT BOX 4 - Fully Protected & Insured */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-medium text-gray-900">Fully Protected & Insured</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Sleep easy knowing you're protected:
            </p>
            <div className="mb-6">
              <div className="space-y-2 mb-4">
                {insurance.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="font-medium text-gray-900 mb-3">Accreditations:</div>
              <div className="space-y-2">
                {accreditations.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="text-purple-800 font-medium">All work signed off by Building Control.</div>
            </div>
          </div>

          {/* BENEFIT BOX 5 - Real Communication */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-8 h-8 text-teal-600" />
              <h3 className="text-2xl font-medium text-gray-900">Real Communication</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Direct access to your project manager:
            </p>
            <div className="space-y-2 mb-6">
              {communication.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-teal-800 italic mb-2">
                "The communication was exceptional. Daily photos, weekly meetings, always available on WhatsApp."
              </p>
              <p className="text-teal-700 text-sm">- Tennyson Road, West Hampstead</p>
            </div>
          </div>

          {/* BENEFIT BOX 6 - Local Proof */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Home className="w-8 h-8 text-indigo-600" />
              <h3 className="text-2xl font-medium text-gray-900">Local Proof You Can Verify</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              127 completed renovations in NW London since 2010.
            </p>
            <div className="mb-6">
              <div className="font-medium text-gray-900 mb-3">Recent projects you can see:</div>
              <div className="space-y-2">
                {recentProjects.map((project, index) => (
                  <Link key={index} to={project.link} className="flex items-center gap-2 hover:text-blue-600 transition-colors group">
                    <MapPin className="w-4 h-4 text-indigo-600 group-hover:text-blue-600" />
                    <span className="text-gray-700 text-sm group-hover:text-blue-600">{project.text}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6">
              <div className="text-indigo-800 space-y-1">
                <div>Ask your neighbors on these streets - they know us.</div>
                <div>Drive by and see our work.</div>
                <div className="font-medium">6 projects completed in 2023-2024 alone.</div>
              </div>
            </div>
            <Link 
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-indigo-700 rounded-lg"
            >
              See All Project Addresses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;