import { CheckCircle, MapPin, FileText, Home } from 'lucide-react';

const PlanningExpertise = () => {
  const expertiseAreas = [
    {
      icon: MapPin,
      title: "Camden & Brent Experts",
      description: "We know the specific 'Conservation Area' restrictions for West Hampstead and Brondesbury.",
      areas: ["West Hampstead Conservation Area", "Brondesbury Park Conservation Area", "Kilburn Conservation Areas"]
    },
    {
      icon: FileText,
      title: "Harrow Permitted Development",
      description: "We maximize your square footage in Kenton (HA3) using permitted development rights other builders miss.",
      areas: ["Single-storey rear extensions", "Loft conversions", "Side return extensions"]
    },
    {
      icon: Home,
      title: "Structural Knowledge",
      description: "Experts in stabilizing Victorian foundations on London clay soil.",
      areas: ["Victorian foundation underpinning", "London clay soil solutions", "Period property structural work"]
    }
  ];

  return (
    <section className="py-20 bg-white sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm tracking-[0.3em] text-gray-500 uppercase">Local Authority</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
          <h2 className="text-3xl font-light tracking-wide text-gray-900 font-serif mb-6 sm:text-4xl md:text-5xl lg:tracking-[0.2em]">
            We Navigate NW London Planning Regulations For You
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light sm:text-xl">
            Don't risk your project with a builder who doesn't know the local rules.
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-gray-900 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light mb-6">
                    {area.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {area.areas.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Authority Statement */}
        <div className="bg-gray-50 rounded-xl p-8 text-center sm:p-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 font-serif mb-6 sm:text-3xl">
              We Know Camden Council Planning Officers By Name
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
              15 years of working exclusively in NW London means we have established relationships with local planning departments. 
              We know exactly what they approve, what they reject, and how to get your project through first time.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-light">Planning Approval Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-sm text-gray-600 font-light">Years Local Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
                <div className="text-sm text-gray-600 font-light">Council Areas Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanningExpertise;