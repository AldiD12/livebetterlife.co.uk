import React from 'react';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({ name, description, url }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "provider": {
      "@type": "GeneralContractor",
      "name": "LiveBetterLife",
      "url": "https://livebetterlife.co.uk"
    },
    "areaServed": {
      "@type": "Place",
      "name": "North West London"
    },
    "description": description,
    "url": url
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </>
  );
};
