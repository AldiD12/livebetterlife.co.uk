import { Helmet } from 'react-helmet';
import { websiteSchema, localBusinessSchema, breadcrumbSchema } from '../utils/structuredData';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  schema?: object | object[];  // Allow single object or array of objects
  noindex?: boolean;
  keywords?: string;
  isHome?: boolean;
  breadcrumbs?: Array<{name: string, item: string}>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = 'https://livebetterlife.co.uk/images/projects/project1/after/af6.jpg',
  ogType = 'website',
  schema,
  noindex = false,
  keywords = 'construction company london, home renovation london, london builders, house extension london, kitchen renovation london, bathroom renovation london, home improvement london, building contractors london',
  isHome = false,
  breadcrumbs = []
}) => {
  const siteName = 'Live Better Life';
  const twitterHandle = '@livebetterlife';
  
  // Generate structured data
  const structuredData = [
    websiteSchema,
    isHome && localBusinessSchema,
    breadcrumbs.length > 0 && breadcrumbSchema(breadcrumbs),
    ...(Array.isArray(schema) ? schema : [schema])
  ].filter(Boolean);

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{isHome ? `${siteName} | ${title}` : `${title} | ${siteName}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="author" content={siteName} />
        <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={isHome ? `${siteName} | ${title}` : title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={description} />
        <meta property="og:locale" content="en_GB" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={isHome ? `${siteName} | ${title}` : title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={description} />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:creator" content={twitterHandle} />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>

      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
};

export default SEO;