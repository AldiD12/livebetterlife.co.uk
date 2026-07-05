import { Link } from 'react-router-dom';
import { CheckCircle, X } from 'lucide-react';

const CircleArrow = ({ className = '' }: { className?: string }) => (
  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full border border-current ${className}`} aria-hidden="true">
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const WhyRenovateNotMove = () => {
  const kitchenOnly = [
    { item: 'New kitchen layout & fixtures', included: true },
    { item: 'Rest of house remains dated', included: false },
    { item: 'Bathrooms still require work later', included: false },
    { item: 'Bedrooms require work later', included: false },
    { item: 'Multiple disruptions over several years', included: false },
  ];
  const fullHouse = [
    'New kitchen layout & fixtures',
    'Modernised bathroom suites',
    'Refreshed bedroom spaces',
    'Transformed living areas',
    'Coordinated architectural flow',
    'Single combined disruption',
    'Optimised project planning',
  ];
  const movingCosts = [
    'Estate agent listing commissions',
    'Stamp duty government taxes',
    'Removal vans & storage fees',
    'Solicitor & legal paperwork fees',
    'Emotional stress: priceless',
  ];
  const benefits = [
    'Stay in the neighborhood your family loves',
    'Keep your local schools and communities',
    'Avoid the stress of house hunting',
    'Customise every room to your exact lifestyle',
    'Substantially increase property market value',
  ];

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-brass" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-brass-deep">Our approach</span>
          </div>
          <h2 className="font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
            Don't move. Transform the home you already love.
          </h2>
          <p className="text-lg text-stone leading-relaxed">
            We specialise in whole-home transformations across North West London. Instead of paying massive overheads
            to move, our clients prefer customising their current spaces to build their dream homes.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-ivory rounded-card shadow-card border border-line p-8">
            <h3 className="font-display text-2xl text-ink mb-1">Renovate room-by-room</h3>
            <div className="text-stone mb-6">Fractional phases</div>
            <div className="space-y-3">
              {kitchenOnly.map((k) => (
                <div key={k.item} className="flex items-start gap-3">
                  {k.included ? <CheckCircle className="w-5 h-5 text-brass mt-0.5 flex-shrink-0" /> : <X className="w-5 h-5 text-stone/50 mt-0.5 flex-shrink-0" />}
                  <span className={k.included ? 'text-ink' : 'text-stone'}>{k.item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-line font-display text-lg text-ink font-semibold">Total: Higher costs over time</div>
          </div>

          <div className="bg-ink text-cream rounded-card shadow-card p-8">
            <h3 className="font-display text-2xl text-cream mb-1">Renovate the entire home</h3>
            <div className="text-brass mb-6">All-in-one package</div>
            <div className="space-y-3">
              {fullHouse.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brass mt-0.5 flex-shrink-0" />
                  <span className="text-cream/90">{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-cream/15 font-display text-lg text-brass font-semibold">Total: Optimized, single investment</div>
          </div>
        </div>

        {/* Move vs renovate */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-ivory rounded-card shadow-card border border-line p-8">
            <h4 className="font-display text-xl text-ink mb-5">Moving in London carries massive lost costs</h4>
            <div className="space-y-3">
              {movingCosts.map((c) => (
                <div key={c} className="flex items-center gap-3 text-stone">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass flex-shrink-0" /> {c}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-line font-display text-lg text-ink font-semibold">Thousands spent purely on fees</div>
          </div>
          <div className="bg-ivory rounded-card shadow-card border border-line p-8">
            <h4 className="font-display text-xl text-ink mb-5">Invest that budget back into your own space and</h4>
            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 text-stone">
                  <CheckCircle className="w-5 h-5 text-brass mt-0.5 flex-shrink-0" /> {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stat + CTA */}
        <div className="rounded-card bg-brass-tint px-8 py-12 sm:px-14 text-center">
          <div className="font-display font-semibold text-ink text-5xl sm:text-6xl mb-3">127</div>
          <p className="text-ink/80 text-lg max-w-2xl mx-auto mb-8">
            families in West Hampstead, Brondesbury, Kingsbury, Harrow and Kensington have transformed their
            Victorian and Edwardian homes with us since 2010.
          </p>
          <Link to="/portfolio" className="group inline-flex items-center gap-3 pl-8 pr-3 py-4 bg-ink text-cream rounded-full font-medium hover:bg-ink-soft transition-colors">
            See all our projects
            <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyRenovateNotMove;
