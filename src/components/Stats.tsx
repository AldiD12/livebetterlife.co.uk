const stats = [
  { number: '127', label: 'Homes transformed', sub: 'since 2010' },
  { number: '15', label: 'Years experience', sub: 'in NW London' },
  { number: 'Fixed', label: 'Price Guarantee', sub: 'No hidden costs, ever' },
  { number: '£5M', label: 'Public liability', sub: 'fully insured' },
];

const areas = [
  'West Hampstead & Brondesbury (NW6)',
  'Kingsbury (NW9)',
  'Mill Hill (NW7)',
  'Willesden & Kensal Green (NW10)',
  'Harrow & Kenton (HA3)',
  'Kensington (W14)',
  'Mayfair (W1K)',
];

const certs = ['/images/certs/11.jpg', '/images/certs/12.png', '/images/certs/13.jpeg'];

const Stats = () => {
  return (
    <section className="py-20 sm:py-24 bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-brass" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-brass">Our track record</span>
          </div>
          <h2 className="font-display font-semibold text-cream text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Trusted with North West London's biggest investment
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 border-t border-cream/15 pt-12">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display font-semibold text-brass text-4xl sm:text-5xl mb-2">{s.number}</div>
              <div className="text-cream font-medium">{s.label}</div>
              <div className="text-cream/60 text-sm">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Accreditations + areas */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16 pt-12 border-t border-cream/15">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-cream/60 mb-5">Accredited &amp; insured</div>
            <div className="flex flex-wrap items-center gap-4">
              {certs.map((src) => (
                <div key={src} className="bg-ivory rounded-xl px-4 py-3 flex items-center justify-center h-16">
                  <img src={src} alt="Accreditation" className="max-h-10 w-auto object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-cream/60 mb-5">Areas we serve</div>
            <div className="flex flex-wrap gap-2.5">
              {areas.map((area) => (
                <span key={area} className="text-sm text-cream/85 border border-cream/20 rounded-full px-4 py-1.5">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
