import { Link } from 'react-router-dom';
import { PoundSterling, MapPin, Clock, Shield, MessageCircle, Home, CheckCircle } from 'lucide-react';

const CircleArrow = ({ className = '' }: { className?: string }) => (
  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full border border-current ${className}`} aria-hidden="true">
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const features = [
  {
    icon: PoundSterling,
    title: 'Fixed-price guarantee',
    copy: 'No hidden costs, ever. The price quoted is the price paid.',
    points: ['Stage payments at 25% increments', 'Transparent itemised quotes', 'No surprise charges', 'A contract that protects you'],
    highlight: 'Tennyson Road NW6 — quoted contract price matched final completion cost exactly.',
  },
  {
    icon: MapPin,
    title: 'NW London specialists since 2010',
    copy: '15+ years exclusively across West Hampstead, Brondesbury, Kingsbury, Harrow and Kensington.',
    points: ['Camden & Brent planning inside-out', 'Every conservation-area rule in NW6', 'Westminster & RBKC listed-building protocols', 'The merchants that deliver fastest to your postcode'],
    highlight: '89% of our projects are within 5 miles of each other — your neighbour probably knows us.',
  },
  {
    icon: Clock,
    title: 'On-time delivery',
    copy: '89% of projects finish on time or early. Industry average delay is 3 weeks; ours is 2 days.',
    points: ['Professional project managers', 'Our own trusted subcontractors', 'Materials ordered 2 weeks ahead', 'Weekly progress meetings'],
    highlight: 'Tennyson Road NW6 finished 3 days early. Kingsbury Road NW9 a week early.',
  },
  {
    icon: Shield,
    title: 'Fully protected & insured',
    copy: 'Sleep easy knowing you and your home are covered.',
    points: ['£5M public liability insurance', '£10M employer\'s liability', '12-month workmanship guarantee', '10-year structural warranty (where applicable)'],
    highlight: 'CHAS accredited · Constructionline registered · all work signed off by Building Control.',
  },
  {
    icon: MessageCircle,
    title: 'Real communication',
    copy: 'Direct access to your project manager from day one.',
    points: ['Mobile number from day 1', 'WhatsApp updates with photos', 'Weekly on-site meetings', 'Questions answered within 2 hours'],
    highlight: '"Daily photos, weekly meetings, always available on WhatsApp." — West Hampstead',
  },
  {
    icon: Home,
    title: 'Local proof you can verify',
    copy: '127 completed renovations across NW London since 2010 — real streets you can drive past.',
    points: ['West Hampstead & Brondesbury (NW6)', 'Kingsbury (NW9) · Mill Hill (NW7)', 'Harrow & Kenton (HA3)', 'Kensington (W14) · Mayfair (W1K)'],
    highlight: 'Ask your neighbours on these streets — they watched us work.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-brass" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-brass-deep">Why choose us</span>
          </div>
          <h2 className="font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
            Why 127 NW London families chose Live Better Life
          </h2>
          <p className="text-lg text-stone leading-relaxed">
            We're not just contractors — we're your neighbours' renovation specialists.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="bg-ivory rounded-card shadow-card border border-line p-8 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-brass-tint flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brass-deep" />
                </div>
                <h3 className="font-display text-xl text-ink mb-3">{f.title}</h3>
                <p className="text-stone leading-relaxed mb-5">{f.copy}</p>
                <div className="space-y-2.5 mb-6">
                  {f.points.map((p) => (
                    <div key={p} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brass mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-stone">{p}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto bg-brass-tint/60 border border-brass/20 rounded-xl p-4">
                  <p className="text-sm text-ink/80">{f.highlight}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link to="/portfolio" className="group inline-flex items-center gap-3 pl-8 pr-3 py-4 bg-ink text-cream rounded-full font-medium hover:bg-ink-soft transition-colors">
            See all our projects
            <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
