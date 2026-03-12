import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: "Full House Renovation (Victorian & Edwardian)", link: "/services/full-house-renovation-victorian-edwardian" },
    { name: "Kitchen Extensions & Side Returns", link: "/services/kitchen-extensions-side-returns" },
    { name: "Structural Alterations & Wall Removal", link: "/services/structural-alterations-wall-removal" },
    { name: "Loft Conversions (Dormer & Mansard)", link: "/services/loft-conversions-dormer-mansard" },
    { name: "Bespoke Kitchen Installation", link: "/services/bespoke-kitchen-installation" },
    { name: "Period Property Restoration", link: "/services/period-property-restoration" }
  ];

  const areas = [
    { name: "West Hampstead & Brondesbury (NW6)", link: "/locations/west-hampstead-nw6" },
    { name: "Harrow & Kenton (HA3)", link: "/locations/harrow-ha3" },
    { name: "Kensington & Mayfair (W14/W1K)", link: "/locations/kensington-mayfair-prime" }
  ];

  const companyLinks = [
    { name: "All Services", link: "/services" },
    { name: "Our Projects", link: "/portfolio" },
    { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/contact" },
    { name: "Privacy Policy", link: "/privacy" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Column 1 - Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-light tracking-[0.15em] text-white mb-6 uppercase">
              Live Better Life
            </h3>
            <p className="text-sm text-white/80 font-light leading-relaxed mb-6">
              General Contractor & Home Remodeler
            </p>
            <p className="text-sm text-white/70 font-light leading-relaxed mb-8">
              Complete home renovations across North West London since 2010.
            </p>
            
            <div className="mb-8">
              <p className="text-sm text-white/80 font-light mb-4">Serving North West London:</p>
              <ul className="text-xs text-white/70 font-light leading-relaxed space-y-1">
                <li>• <Link to="/locations/west-hampstead-nw6" className="hover:text-white/90 transition-colors">West Hampstead & Brondesbury (NW6)</Link></li>
                <li>• <Link to="/locations/harrow-ha3" className="hover:text-white/90 transition-colors">Harrow & Kenton (HA3)</Link></li>
                <li>• <Link to="/locations/harrow-ha3" className="hover:text-white/90 transition-colors">Kingsbury (NW9)</Link></li>
                <li>• <Link to="/locations/kensington-mayfair-prime" className="hover:text-white/90 transition-colors">Kensington & Mayfair (W14/W1K)</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/60" />
                <a href="tel:+447387844751" className="text-sm text-white/80 hover:text-white transition-colors font-light">
                  07387 844751
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-white/60" />
                <a href="https://wa.me/447387844751" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white transition-colors font-light">
                  WhatsApp: 07387 844751
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/60" />
                <a href="mailto:info@livebetterlife.co.uk" className="text-sm text-white/80 hover:text-white transition-colors font-light">
                  info@livebetterlife.co.uk
                </a>
              </div>
            </div>

            {/* Operations Area */}
            <div className="border-t border-white/20 pt-6">
              <p className="text-xs text-white/60 font-light mb-2">Operations:</p>
              <div className="flex items-start gap-2">
                <MapPin className="w-3 h-3 text-white/40 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-white/60 font-light leading-relaxed">
                  North West London<br />
                  (NW6, NW9, HA3, W14)
                </div>
              </div>
              <p className="text-xs text-white/50 font-light mt-3">
                Registered in England & Wales
              </p>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-light tracking-[0.15em] text-white mb-6 uppercase">
              Our Services
            </h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <Link 
                  key={index}
                  to={service.link} 
                  className="block text-sm text-white/70 hover:text-white transition-colors font-light"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Areas We Serve */}
          <div>
            <h3 className="text-lg font-light tracking-[0.15em] text-white mb-6 uppercase">
              NW London Areas
            </h3>
            <div className="space-y-3">
              {areas.map((area, index) => (
                <Link 
                  key={index}
                  to={area.link} 
                  className="block text-sm text-white/70 hover:text-white transition-colors font-light"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 - Company */}
          <div>
            <h3 className="text-lg font-light tracking-[0.15em] text-white mb-6 uppercase">
              Company
            </h3>
            <div className="space-y-3">
              {companyLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.link} 
                  className="block text-sm text-white/70 hover:text-white transition-colors font-light"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Left - Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-xs text-white/60 font-light">
                © 2025 Live Better Life. All rights reserved.
              </p>
              <p className="text-xs text-white/50 font-light mt-1">
                Registered in England & Wales.
              </p>
            </div>

            {/* Center - Reviews & Credentials */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs text-white/70 font-light">4.8/5.0 (23 Google Reviews)</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-xs text-white/60 font-light">
                <span>FMB Approved</span>
                <span>•</span>
                <span>£5M Insured</span>
                <span>•</span>
                <span>15 Years Experience</span>
              </div>
            </div>

            {/* Right - Social Media (if you have accounts) */}
            <div className="text-center lg:text-right">
              <p className="text-xs text-white/50 font-light">
                Follow us for project updates
              </p>
              {/* Uncomment when you have social media accounts
              <div className="flex items-center justify-center lg:justify-end gap-4 mt-2">
                <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.google.com/maps/place/Live+Better+Life" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/70 transition-colors">
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>

      {/* Schema Markup for Business - NW London Focused */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "name": "Live Better Life",
          "description": "Complete home renovations across North West London since 2010. Specializing in Victorian & Edwardian house renovations, kitchen extensions, and full house transformations.",
          "url": "https://livebetterlife.co.uk",
          "telephone": "+447387844751",
          "email": "info@livebetterlife.co.uk",
          "areaServed": [
            {
              "@type": "City",
              "name": "West Hampstead, London",
              "containedInPlace": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "postalCode": "NW6",
                "addressCountry": "GB"
              }
            },
            {
              "@type": "City", 
              "name": "Brondesbury, London",
              "containedInPlace": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "postalCode": "NW6",
                "addressCountry": "GB"
              }
            },
            {
              "@type": "City",
              "name": "Kingsbury, London",
              "containedInPlace": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "postalCode": "NW9",
                "addressCountry": "GB"
              }
            },
            {
              "@type": "City",
              "name": "Harrow, London",
              "containedInPlace": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "postalCode": "HA3",
                "addressCountry": "GB"
              }
            },
            {
              "@type": "City",
              "name": "Kensington, London",
              "containedInPlace": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "postalCode": "W14",
                "addressCountry": "GB"
              }
            }
          ],
          "serviceType": [
            "Full House Renovation",
            "Kitchen Renovation",
            "Bathroom Renovation", 
            "Victorian House Restoration",
            "Home Extension",
            "Loft Conversion"
          ],
          "foundingDate": "2010",
          "priceRange": "£50000-£150000"
        })}
      </script>
    </footer>
  );
};

export default Footer;