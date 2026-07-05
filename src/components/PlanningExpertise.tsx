import { CheckCircle, MapPin, FileText, Home } from 'lucide-react';

const PlanningExpertise = () => {
  const expertiseAreas = [
    {
      icon: MapPin,
      title: 'Camden & Brent experts',
      description: "We know the specific conservation-area restrictions for West Hampstead and Brondesbury.",
      areas: ['West Hampstead Conservation Area', 'Brondesbury Park Conservation Area', 'Kilburn conservation areas'],
    },
    {
      icon: FileText,
      title: 'Harrow permitted development',
      description: 'We maximise your square footage in Kenton (HA3) using permitted development rights other builders miss.',
      areas: ['Single-storey rear extensions', 'Loft conversions', 'Side-return extensions'],
    },
    {
      icon: Home,
      title: 'Structural knowledge',
      description: 'Experts in stabilising Victorian foundations on London clay soil.',
      areas: ['Victorian foundation underpinning', 'London clay soil solutions', 'Period property structural work'],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-brass" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-brass-deep">Local authority</span>
          </div>
          <h2 className="font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
            We navigate NW London planning for you
          </h2>
          <p className="text-lg text-stone leading-relaxed">
            Don't risk your project with a builder who doesn't know the local rules.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {expertiseAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="bg-ivory rounded-card shadow-card border border-line p-8">
                <div className="w-12 h-12 rounded-full bg-brass-tint flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brass-deep" />
                </div>
                <h3 className="font-display text-xl text-ink mb-3">{area.title}</h3>
                <p className="text-stone leading-relaxed mb-6">{area.description}</p>
                <div className="space-y-2.5 border-t border-line pt-5">
                  {area.areas.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brass flex-shrink-0" />
                      <span className="text-sm text-stone">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Authority band */}
        <div className="rounded-card bg-ink text-cream p-8 sm:p-12">
          <div className="max-w-3xl">
            <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-5">
              We know Camden Council planning officers by name
            </h3>
            <p className="text-cream/75 text-lg leading-relaxed mb-10">
              15 years working exclusively in NW London means established relationships with local planning
              departments. We know what they approve, what they reject, and how to get your project through first time.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 border-t border-cream/15 pt-10">
            <div>
              <div className="font-display font-semibold text-brass text-4xl sm:text-5xl mb-2">100%</div>
              <div className="text-cream/70">Planning approval rate</div>
            </div>
            <div>
              <div className="font-display font-semibold text-brass text-4xl sm:text-5xl mb-2">15+</div>
              <div className="text-cream/70">Years local experience</div>
            </div>
            <div>
              <div className="font-display font-semibold text-brass text-4xl sm:text-5xl mb-2">3</div>
              <div className="text-cream/70">Council areas covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanningExpertise;
