export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "LiveBetterLife",
  "url": "https://livebetterlife.co.uk",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://livebetterlife.co.uk/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LiveBetterLife",
    "logo": {
      "@type": "ImageObject",
      "url": "https://livebetterlife.co.uk/images/logo.png"
    }
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor", // More specific than LocalBusiness
  "name": "LiveBetterLife",
  "image": "https://livebetterlife.co.uk/images/logo.png",
  "description": "Specialist General Contractors for North West London. Experts in Victorian & Edwardian home renovations, side-return extensions, and structural alterations in West Hampstead (NW6), Kingsbury (NW9), and Harrow (HA3).",
  "@id": "https://livebetterlife.co.uk",
  "url": "https://livebetterlife.co.uk",
  "telephone": "+44 7387 844751", // FIXED: Your real number
  "priceRange": "£50000-£150000", // FIXED: Realistic range for renovations
  // Address removed - registered office is accountant's address, not operating location
  // Physical address kept only in Privacy Policy as legally required
  "areaServed": [
    {
      "@type": "Place",
      "name": "North West London"
    },
    {
      "@type": "PostalCode",
      "name": "NW6" // West Hampstead / Brondesbury
    },
    {
      "@type": "PostalCode",
      "name": "NW9" // Kingsbury
    },
    {
      "@type": "PostalCode",
      "name": "HA3" // Harrow / Kenton
    },
    {
      "@type": "PostalCode",
      "name": "W14" // Kensington
    },
    {
      "@type": "PostalCode",
      "name": "W1K" // Mayfair
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00", // Adjusted to typical builder hours
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Diamant Kadiu"
  },
  "foundingDate": "2010",
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Victorian House Renovation",
        "description": "Full structural renovation of period properties in NW6."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Kitchen Extensions",
        "description": "Side-return and rear extensions for terraced houses."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Loft Conversions",
        "description": "Dormer and Mansard conversions in Harrow and Brent."
      }
    }
  ]
};


export const breadcrumbSchema = (items: Array<{ name: string, item: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://livebetterlife.co.uk${item.item}`
  }))
});

export const createFaqSchema = (faqs: Array<{ question: string, answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
