import { Mail, Phone, MessageCircle, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'Full house renovation (Victorian & Edwardian)', link: '/services/full-house-renovation-victorian-edwardian' },
    { name: 'Kitchen extensions & side returns', link: '/services/kitchen-extensions-side-returns' },
    { name: 'Structural alterations & wall removal', link: '/services/structural-alterations-wall-removal' },
    { name: 'Loft conversions (dormer & mansard)', link: '/services/loft-conversions-dormer-mansard' },
    { name: 'Bespoke kitchen installation', link: '/services/bespoke-kitchen-installation' },
    { name: 'Period property restoration', link: '/services/period-property-restoration' },
  ];

  const areas = [
    { name: 'West Hampstead & Brondesbury (NW6)', link: '/locations/west-hampstead-nw6' },
    { name: 'Kingsbury (NW9)', link: '/portfolio' },
    { name: 'Mill Hill (NW7)', link: '/portfolio' },
    { name: 'Willesden & Kensal Green (NW10)', link: '/portfolio' },
    { name: 'Harrow & Kenton (HA3)', link: '/locations/harrow-ha3' },
    { name: 'Kensington & Mayfair (W14/W1K)', link: '/locations/kensington-mayfair-prime' },
  ];

  const companyLinks = [
    { name: 'All services', link: '/services' },
    { name: 'Our projects', link: '/portfolio' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact us', link: '/contact' },
    { name: 'Privacy policy', link: '/privacy' },
  ];

  const colHeading = 'text-xs font-medium uppercase tracking-[0.18em] text-brass mb-6';
  const linkClass = 'block text-sm text-cream/70 hover:text-cream transition-colors';

  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company */}
          <div>
            <h3 className="font-display text-2xl text-cream mb-4">Live Better Life</h3>
            <p className="text-sm text-cream/70 leading-relaxed mb-2">General contractor & home remodeler</p>
            <p className="text-sm text-cream/60 leading-relaxed mb-8">
              Complete home renovations across North West London since 2010.
            </p>
            <div className="space-y-3">
              <a href="tel:+447387844751" className="flex items-center gap-3 text-sm text-cream/80 hover:text-cream transition-colors">
                <Phone className="w-4 h-4 text-brass" /> 07387 844751
              </a>
              <a href="https://wa.me/447387844751" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-cream/80 hover:text-cream transition-colors">
                <MessageCircle className="w-4 h-4 text-brass" /> WhatsApp: 07387 844751
              </a>
              <a href="mailto:info@livebetterlife.co.uk" className="flex items-center gap-3 text-sm text-cream/80 hover:text-cream transition-colors">
                <Mail className="w-4 h-4 text-brass" /> info@livebetterlife.co.uk
              </a>
            </div>
            <div className="border-t border-cream/15 mt-8 pt-6 flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-brass mt-0.5 flex-shrink-0" />
              <div className="text-xs text-cream/60 leading-relaxed">
                North West London (NW6, NW7, NW9, NW10, HA3, W14, W1K)<br />
                Registered in England & Wales
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className={colHeading}>Our services</h3>
            <div className="space-y-3">
              {services.map((s) => (
                <Link key={s.link} to={s.link} className={linkClass}>{s.name}</Link>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div>
            <h3 className={colHeading}>Areas we serve</h3>
            <div className="space-y-3">
              {areas.map((a) => (
                <Link key={a.name} to={a.link} className={linkClass}>{a.name}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className={colHeading}>Company</h3>
            <div className="space-y-3">
              {companyLinks.map((l) => (
                <Link key={l.link} to={l.link} className={linkClass}>{l.name}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/15 mt-16 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-xs text-cream/55 text-center lg:text-left">
            © 2026 Live Better Life. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <span className="text-xs text-cream/60">CHAS accredited · £5M insured · 15 years experience</span>
          </div>
        </div>
      </div>

      {/* Business schema (SEO) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'GeneralContractor',
          name: 'Live Better Life',
          description:
            'Complete home renovations across North West London since 2010. Specializing in Victorian & Edwardian house renovations, kitchen extensions, and full house transformations.',
          url: 'https://livebetterlife.co.uk',
          telephone: '+447387844751',
          email: 'info@livebetterlife.co.uk',
          areaServed: [
            { '@type': 'City', name: 'West Hampstead, London', containedInPlace: { '@type': 'PostalAddress', addressLocality: 'London', postalCode: 'NW6', addressCountry: 'GB' } },
            { '@type': 'City', name: 'Brondesbury, London', containedInPlace: { '@type': 'PostalAddress', addressLocality: 'London', postalCode: 'NW6', addressCountry: 'GB' } },
            { '@type': 'City', name: 'Kingsbury, London', containedInPlace: { '@type': 'PostalAddress', addressLocality: 'London', postalCode: 'NW9', addressCountry: 'GB' } },
            { '@type': 'City', name: 'Mill Hill, London', containedInPlace: { '@type': 'PostalAddress', addressLocality: 'London', postalCode: 'NW7', addressCountry: 'GB' } },
            { '@type': 'City', name: 'Willesden, London', containedInPlace: { '@type': 'PostalAddress', addressLocality: 'London', postalCode: 'NW10', addressCountry: 'GB' } },
            { '@type': 'City', name: 'Harrow, London', containedInPlace: { '@type': 'PostalAddress', addressLocality: 'London', postalCode: 'HA3', addressCountry: 'GB' } },
            { '@type': 'City', name: 'Kensington, London', containedInPlace: { '@type': 'PostalAddress', addressLocality: 'London', postalCode: 'W14', addressCountry: 'GB' } },
          ],
          serviceType: ['Full House Renovation', 'Kitchen Renovation', 'Bathroom Renovation', 'Victorian House Restoration', 'Home Extension', 'Loft Conversion'],
          foundingDate: '2010',
          priceRange: '£50000-£150000',
        })}
      </script>
    </footer>
  );
};

export default Footer;
