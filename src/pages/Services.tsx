import { Shield, Award, Users, Wrench } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';

// TypeScript interfaces for FAQ schema
interface Answer {
  "@type": string;
  text: string;
}

interface FAQItem {
  "@type": string;
  name: string;
  acceptedAnswer: Answer;
}

interface FAQSchema {
  "@context": string;
  "@type": string;
  mainEntity: FAQItem[];
}

const services = [
  {
    id: 'renovation-services',
    title: 'RENOVATION SERVICES',
    description: 'We specialize in complete renovation services, handling everything from start to finish. If you want to renovate your space, we ensure high-quality results at every step.',
    image: '/images/services/image1.webp',
    features: [
      'Full project management',
      'Sustainable solutions',
      'Quality assurance',
      'Modern design integration',
      'Detailed planning',
      'Expert execution'
    ]
  },
  {
    id: 'home-renovation',
    title: 'HOME RENOVATION & REMODELING',
    description: 'We improve and upgrade your home, increasing its value while enhancing comfort and functionality.',
    image: '/images/services/image2.jpeg',
    features: [
      'Value enhancement',
      'Energy efficiency',
      'Premium materials',
      'Modern design',
      'Comfort optimization',
      'Sustainable features'
    ]
  },
  {
    id: 'room-renovation',
    title: 'ROOM RENOVATION',
    description: 'Transform any room into a modern and functional space with our design and remodeling services. We specialize in creating new layouts, removing old fixtures, and installing fresh elements .',
    image: '/images/services/image3.webp',
    features: [
      'Layout optimization',
      'Fixture modernization',
      'Custom solutions',
      'Space planning',
      'Design consultation',
      'Quality installation'
    ]
  },
  {
    id: 'kitchen-renovation',
    title: 'KITCHEN RENOVATION',
    description: 'We specialize in stylish, functional kitchen makeovers using custom cabinetry, elegant lighting, and high-end finishes.',
    image: '/images/services/image7.jpeg',
    features: [
      'Custom cabinetry',
      'High-end appliances',
      'Luxury finishes',
      'Elegant lighting',
      'Ergonomic design',
      'Premium materials'
    ]
  },
  {
    id: 'bathroom-renovation',
    title: 'BATHROOM RENOVATION',
    description: 'Our bathroom remodel services focus on functionality and aesthetics, offering new fixtures, updated flooring, modern lighting, and efficient layouts. ',
    image: '/images/services/image6.webp',
    features: [
      'Modern fixtures',
      'Luxury flooring',
      'Efficient layouts',
      'Custom storage',
      'Premium finishes',
      'Water efficiency'
    ]
  }
];

const ServicesPage = () => {
  const certifications = [
    { name: 'NICEIC', logo: '/images/certs/11.jpg' },
    { name: 'LPS GAS SAFETY', logo: '/images/certs/12.png' },
    { name: 'F-GAS', logo: '/images/certs/13.jpeg' },
  ];

  const serviceCategories = [
    {
      title: "New Construction",
      services: [
        "Custom Home Building",
        "Multi-Unit Developments",
        "Commercial Buildings",
        "Eco-Friendly Construction",
        "Steel Frame Construction",
        "Foundation Work",
        "Structural Engineering",
        "Timber Frame Construction",
        "Sustainable Building",
        "Passive House Construction"
      ]
    },
    {
      title: "Home Extensions",
      services: [
        "Single Storey Extensions",
        "Double Storey Extensions",
        "Rear Extensions",
        "Side Return Extensions",
        "Wrap-around Extensions",
        "Conservatories",
        "Garden Rooms",
        "Glass Extensions",
        "Kitchen Extensions",
        "Basement Extensions",
        "Porch Additions"
      ]
    },
    {
      title: "Renovations & Remodeling",
      services: [
        "Full House Renovation",
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Waterproofing",
        "Basement Conversion",
        "Loft Conversion",
        "Garage Conversion",
        "Interior Reconfiguration",
        "Period Property Restoration",
        "Heritage Building Renovation",
        "Commercial Renovation",
        "Restaurant Renovation",
        "Office Remodeling"
      ]
    },
    {
      title: "Interior Services",
      services: [
        "Custom Cabinetry",
        "Flooring Installation",
        "Wall & Ceiling Work",
        "Interior Painting",
        "Tiling Services",
        "Built-in Storage",
        "Staircase Renovation",
        "Door Installation",
        "Window Fitting",
        "Plastering",
        "Dry Lining",
        "Acoustic Treatment",
        "Interior Design",
        "Lighting Design"
      ]
    },
    {
      title: "Exterior Services",
      services: [
        "Roofing & Guttering",
        "External Wall Insulation",
        "Facade Renovation",
        "Window Installation",
        "Driveway Construction",
        "Patio & Decking",
        "Landscaping",
        "Outdoor Kitchens",
        "Brick & Stone Work",
        "Rendering",
        "Cladding Installation",
        "Roof Lanterns",
        "Garage Construction",
        "Garden Design"
      ]
    },
    {
      title: "Specialist Services",
      services: [
        "Electrical Installations",
        "Plumbing Systems",
        "HVAC Installation",
        "Smart Home Integration",
        "Security Systems",
        "Fire Safety Systems",
        "Renewable Energy Solutions",
        "Underfloor Heating",
        "Air Conditioning",
        "Solar Panel Installation",
        "Home Automation",
        "EV Charging Points",
        "Energy Efficiency Upgrades"
      ]
    },
    {
      title: "Project Management",
      services: [
        "Construction Planning",
        "Building Regulations",
        "Planning Permission",
        "Project Coordination",
        "Budget Management",
        "Timeline Planning",
        "Quality Control",
        "Safety Management",
        "Contractor Coordination",
        "Site Supervision",
        "Documentation",
        "Final Inspection"
      ]
    },
    {
      title: "Additional Services",
      services: [
        "Structural Surveys",
        "Building Inspections",
        "Energy Performance Certificates",
        "Damp Proofing",
        "Waste Management",
        "Property Maintenance",
        "Emergency Repairs",
        "Insurance Work",
        "Party Wall Agreements",
        "Conservation Work",
        "Accessibility Modifications"
      ]
    }
  ];

  // FAQ Schema
  const faqSchema: FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a typical kitchen renovation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard kitchen renovation typically takes 4-6 weeks, depending on the scope of work and materials selected."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free consultations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer free initial consultations to discuss your project requirements and provide a detailed quote."
        }
      },
      {
        "@type": "Question",
        "name": "Are your workers certified and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All our team members are fully certified, and we carry comprehensive insurance for all our projects."
        }
      }
    ]
  };

  // Services Schema
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Live Better Life",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 1.04 The Light Box, 111 Power Road",
        "addressLocality": "London",
        "postalCode": "W4 5PY",
        "addressCountry": "UK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.4938,
        "longitude": -0.2694
      },
      "telephone": "+442071234567",
      "openingHours": "Mo-Fr 08:00-18:00"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "London"
      },
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 51.5074,
          "longitude": -0.1278
        },
        "geoRadius": 25000
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Renovation Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  // Breadcrumb items for navigation
  const breadcrumbItems = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" }
  ];

  return (
    <>
      <SEO
        title="Professional Home Renovation Services in London | Live Better Life"
        description="Expert home renovation, kitchen remodeling, bathroom renovation, and construction services across London. Quality craftsmanship and comprehensive solutions for your property."
        canonicalUrl="https://livebetterlife.co.uk/services"
        keywords="home renovation london, kitchen remodeling, bathroom renovation, construction services, property renovation, home extension london"
        schema={[servicesSchema, faqSchema]}
        breadcrumbs={breadcrumbItems}
      />


      <div className="pb-16 bg-white">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <picture>
            <source
              srcSet="/images/projects/project1/after/kingsbury-road-nw9-flats-conversion-after-exterior-1.jpeg"
              type="image/jpeg"
            />
            <img
              src="/images/projects/project1/after/kingsbury-road-nw9-flats-conversion-after-exterior-1.jpeg"
              alt="Professional home renovation services in London"
              className="absolute inset-0 w-full h-full object-cover"
              width={1920}
              height={1080}
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white font-serif mb-4">
                OUR SERVICES
              </h1>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto px-6 font-light tracking-wide">
                Comprehensive construction and renovation services delivered by certified professionals
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-6">
              CERTIFIED EXCELLENCE
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto font-light tracking-wide">
              Our team consists of fully certified professionals, ensuring the highest standards of workmanship and safety
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-center justify-center">
                <img
                  src={cert.logo}
                  alt={`${cert.name} Certification`}
                  width={96}
                  height={96}
                  loading="lazy"
                  className="h-24 w-auto hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Services with Links */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-6">
              OUR SPECIALIST SERVICES
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto font-light tracking-wide">
              Explore our comprehensive range of construction and renovation services across London
            </p>
          </div>

          {/* General Contractor - Primary Category */}
          <div className="mb-16">
            <h3 className="text-2xl font-light tracking-[0.15em] text-gray-900 font-serif mb-8">
              General Contractor
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/services/full-house-renovation-victorian-edwardian" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Full House Renovation (Victorian & Edwardian)</h4>
                  <span className="text-sm text-gray-600 font-light">From £60,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Complete transformation of Victorian & Edwardian homes in NW6 & NW9. We strip back to brick, insulate, and rebuild for modern living.</p>
              </a>
              <a href="/services/structural-alterations-wall-removal" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Structural Alterations & Wall Removal</h4>
                  <span className="text-sm text-gray-600 font-light">From £3,500</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Safe removal of load-bearing walls to create open-plan layouts. We handle all steel beam calculations and Building Control approvals.</p>
              </a>
              <a href="/services/structural-alterations-wall-removal" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Open Plan Living Configurations</h4>
                  <span className="text-sm text-gray-600 font-light">From £8,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Reconfiguring cramped layouts in Harrow and Willesden properties to create spacious, flow-through living and dining areas.</p>
              </a>
              <a href="/contact" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Design & Build Service (Planning to Completion)</h4>
                  <span className="text-sm text-gray-600 font-light">From £50,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">We manage the entire process—from architectural drawings for Camden Council planning to the final coat of paint.</p>
              </a>
            </div>
          </div>

          {/* Custom Home Builder - Secondary Category */}
          <div className="mb-16">
            <h3 className="text-2xl font-light tracking-[0.15em] text-gray-900 font-serif mb-8">
              Custom Home Builder
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/services/kitchen-extensions-side-returns" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Kitchen Extensions & Side Returns</h4>
                  <span className="text-sm text-gray-600 font-light">From £45,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Maximize the potential of your terraced house with a side-return extension. Perfect for gaining space in West Hampstead and Queens Park.</p>
              </a>
              <a href="/services/loft-conversions-dormer-mansard" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Loft Conversions (Dormer & Mansard)</h4>
                  <span className="text-sm text-gray-600 font-light">From £35,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Convert your attic into a master suite. Specialists in Mansard conversions for conservation areas and Dormers for Harrow semis.</p>
              </a>
              <a href="/services/kitchen-extensions-side-returns" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Double Storey Rear Extensions</h4>
                  <span className="text-sm text-gray-600 font-light">From £80,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Add bedrooms upstairs and living space downstairs simultaneously. The most cost-effective way to add value in Kingsbury.</p>
              </a>
            </div>
          </div>

          {/* Kitchen Renovator - Secondary Category */}
          <div className="mb-16">
            <h3 className="text-2xl font-light tracking-[0.15em] text-gray-900 font-serif mb-8">
              Kitchen Renovator
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/services/kitchen-extensions-side-returns" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Kitchen Remodeling</h4>
                  <span className="text-sm text-gray-600 font-light">From £25,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Transform your entire kitchen with new cabinets, worktops, appliances, flooring, and lighting. We rip out everything old and build you a modern kitchen that works perfectly for your family.</p>
              </a>
              <a href="/services/bespoke-kitchen-installation" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Bespoke Kitchen Installation</h4>
                  <span className="text-sm text-gray-600 font-light">From £8,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Custom-designed cabinetry and islands tailored to your space. We install premium units that fit perfectly in non-standard Victorian rooms.</p>
              </a>
              <a href="/services/kitchen-extensions-side-returns" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Kitchen Extension</h4>
                  <span className="text-sm text-gray-600 font-light">From £55,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Knocking through to the garden to create the ultimate kitchen-diner.</p>
              </a>
            </div>
          </div>

          {/* Bathroom Renovator - Secondary Category */}
          <div className="mb-16">
            <h3 className="text-2xl font-light tracking-[0.15em] text-gray-900 font-serif mb-8">
              Bathroom Renovator
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/portfolio" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Luxury Wet Room & Walk-In Showers</h4>
                  <span className="text-sm text-gray-600 font-light">From £18,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Sleek, barrier-free showering spaces. Ideal for modernizing compact bathrooms in Kensington (W14) flats.</p>
              </a>
              <a href="/portfolio" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Marble & Stone Bathroom Tiling</h4>
                  <span className="text-sm text-gray-600 font-light">From £5,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">High-end natural stone and marble installation for a spa-like finish. Specialists in large-format tiling.</p>
              </a>
              <a href="/portfolio" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Bathroom Remodeling</h4>
                  <span className="text-sm text-gray-600 font-light">From £15,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Transform your entire bathroom with new everything - tiles, suite, shower, lighting, and flooring. We rip out your old bathroom completely and build you a modern space that feels like a luxury hotel.</p>
              </a>
            </div>
          </div>

          {/* Building Restoration Service - Secondary Category */}
          <div className="mb-16">
            <h3 className="text-2xl font-light tracking-[0.15em] text-gray-900 font-serif mb-8">
              Building Restoration Service
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/services/period-property-restoration" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Period Property Restoration</h4>
                  <span className="text-sm text-gray-600 font-light">From £80,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Preserving the soul of your home while updating the systems. We work within Conservation Area guidelines.</p>
              </a>
              <a href="/services/period-property-restoration" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Victorian Facade & Brickwork Restoration</h4>
                  <span className="text-sm text-gray-600 font-light">From £15,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Cleaning and pointing original London stock brickwork and restoring stone masonry facades.</p>
              </a>
              <a href="/services/period-property-restoration" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Sash Window Refurbishment & Repair</h4>
                  <span className="text-sm text-gray-600 font-light">From £800</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Restore your original sash windows to perfect working order. We repair the wood, replace broken glass, and make them slide smoothly again.</p>
              </a>
              <a href="/services/period-property-restoration" className="block p-6 border border-gray-200 hover:border-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-light text-gray-900 text-lg">Original Feature Restoration (Cornice & Fireplaces)</h4>
                  <span className="text-sm text-gray-600 font-light">From £5,000</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Restoring damaged plaster cornices, ceiling roses, and cast-iron fireplaces to their original glory.</p>
              </a>
            </div>
          </div>
        </div>



        {/* Why Choose Us */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-6">
              WHY CHOOSE US
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-lg font-light tracking-[0.15em] text-gray-900 mb-2">
                Certified Team
              </h3>
              <p className="text-gray-600 font-light">
                Fully certified and accredited professionals
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-lg font-light tracking-[0.15em] text-gray-900 mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600 font-light">
                Highest standards of workmanship
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-lg font-light tracking-[0.15em] text-gray-900 mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600 font-light">
                Experienced professionals
              </p>
            </div>
            <div className="text-center">
              <Wrench className="w-12 h-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-lg font-light tracking-[0.15em] text-gray-900 mb-2">
                Modern Methods
              </h3>
              <p className="text-gray-600 font-light">
                Latest construction techniques
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto font-light tracking-wide">
              Find answers to common questions about our renovation services
            </p>
          </div>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-light text-gray-900 mb-2">
                  {faq.name}
                </h3>
                <p className="text-gray-600 font-light">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-block bg-gray-900 text-white px-8 py-3 font-light tracking-wider hover:bg-gray-800 transition-colors duration-300"
            >
              HAVE MORE QUESTIONS? CONTACT US
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage; 