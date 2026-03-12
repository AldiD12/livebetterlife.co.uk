import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Helmet } from 'react-helmet';
import { Clock, Calendar, ArrowLeft, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-light text-gray-900 font-serif mb-6">
            Post Not Found
          </h1>
          <p className="text-lg text-gray-600 font-light">
            The article you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </div>
    );
  }

  // Format dates for schema
  const publishDate = new Date(post.publishDate).toISOString();
  const modifiedDate = new Date().toISOString();
  
  // Extract first paragraph for meta description
  const metaDescription = post.metaDescription || post.excerpt;
  
  // Generate FAQ schema if exists
  const faqMatch = post.content.match(/## 8\. Frequently Asked Questions([\s\S]*)/);
  let faqSchema = null;
  
  if (faqMatch) {
    const faqContent = faqMatch[1];
    const qaPairs = faqContent.split(/### /).filter(Boolean);
    
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": qaPairs.map((qa, _) => {
        const [question, ...answerArr] = qa.split(/\n/);
        const answer = answerArr.join('\n').trim();
        return {
          "@type": "Question",
          "name": question.trim(),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": answer
          }
        };
      })
    };
  }

  // Prepare schema markup
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": metaDescription,
    "image": post.featuredImage.url,
    "author": {
      "@type": "Person",
      "@id": "#author",
      "name": post.author.name,
      "jobTitle": post.author.title,
      "sameAs": "https://livebetterlife.co.uk/about"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://livebetterlife.co.uk/#organization",
      "name": "Live Better Life",
      "url": "https://livebetterlife.co.uk",
      "logo": {
        "@type": "ImageObject",
        "url": "https://livebetterlife.co.uk/imageslogo.png"
      },
      "sameAs": [
        "https://www.instagram.com/livebetterlifeuk/",
        "https://www.facebook.com/livebetterlifeuk/"
      ]
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://livebetterlife.co.uk/blog/${post.slug}`
    },
    "keywords": post.tags.join(', '),
    "articleSection": post.category,
    "inLanguage": "en-GB",
    "wordCount": post.content.split(/\s+/).length,
    "thumbnailUrl": post.featuredImage.url,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "h1",
        ".prose"
      ]
    }
  };
  
  // Combine schemas
  const schemaData = faqSchema ? [blogPostSchema, faqSchema] : blogPostSchema;

  // Custom renderers for headings and paragraphs
  const components = {
    h1: ({node, ...props}: any) => (
      <h1 className="text-2xl sm:text-4xl font-black text-black mt-8 mb-4 border-b border-gray-200 pb-2 tracking-tight">{props.children}</h1>
    ),
    h2: ({node, ...props}: any) => (
      <h2 className="text-xl sm:text-2xl font-black text-black mt-8 mb-3 border-b border-gray-100 pb-1 tracking-tight">{props.children}</h2>
    ),
    h3: ({node, ...props}: any) => (
      <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mt-6 mb-2 tracking-tight">{props.children}</h3>
    ),
    p: ({node, ...props}: any) => (
      <p className="mb-3 text-gray-700 leading-relaxed text-base sm:text-lg">{props.children}</p>
    ),
    ul: ({node, ...props}: any) => (
      <ul className="list-disc pl-6 mb-4 text-gray-700">{props.children}</ul>
    ),
    ol: ({node, ...props}: any) => (
      <ol className="list-decimal pl-6 mb-4 text-gray-700">{props.children}</ol>
    ),
    li: ({node, ...props}: any) => (
      <li className="mb-2">{props.children}</li>
    ),
    blockquote: ({node, ...props}: any) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">{props.children}</blockquote>
    ),
    table: ({node, ...props}: any) => (
      <table className="w-full border-collapse my-8">{props.children}</table>
    ),
    th: ({node, ...props}: any) => (
      <th className="bg-gray-50 p-2 sm:p-4 text-gray-900 font-medium border">{props.children}</th>
    ),
    td: ({node, ...props}: any) => (
      <td className="p-2 sm:p-4 text-gray-700 border">{props.children}</td>
    ),
  };

  // Extract the first paragraph as the introduction
  const introMatch = post.content.match(/^(.*?)(\n\n|$)/s);
  const intro = introMatch ? introMatch[1] : '';
  const restContent = post.content.replace(intro, '').replace(/^\n+/, '');

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{`${post.title} | Live Better Life`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="author" content={post.author.name} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <link rel="canonical" href={`https://livebetterlife.co.uk/blog/${post.slug}`} />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={post.featuredImage.url} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={`https://livebetterlife.co.uk/blog/${post.slug}`} />
        <meta property="og:site_name" content="Live Better Life" />
        <meta property="og:locale" content="en_GB" />
        
        {/* Article Specific Tags */}
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={post.featuredImage.url} />
        <meta name="twitter:site" content="@livebetterlifeuk" />
        <meta name="twitter:creator" content="@livebetterlifeuk" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="alternate" type="application/rss+xml" title="Live Better Life Blog RSS Feed" href="/rss.xml" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <article className="min-h-screen bg-white pt-8 sm:pt-20" itemScope itemType="https://schema.org/BlogPosting">
        {/* Back Button - Desktop */}
        <div className="hidden sm:block bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Back to Blog</span>
            </Link>
          </div>
        </div>

        {/* Mobile Back Button */}
        <div className="fixed sm:hidden top-4 left-4 z-50">
          <Link
            to="/blog"
            className="flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-gray-600 hover:text-gray-900 transition-all hover:bg-white"
            aria-label="Back to blog"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <header className="mb-12">
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={publishDate} itemProp="datePublished">
                  {new Date(post.publishDate).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <meta itemProp="timeRequired" content="PT{post.readTime}M" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                <meta itemProp="articleSection" content={post.category} />
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-black mb-6 leading-tight tracking-tight" itemProp="headline">
              {post.title}
            </h1>
            <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-12 shadow-lg">
              <picture>
                <source 
                  srcSet={post.featuredImage.url.replace(/\.(jpg|jpeg|png)$/, '.jpeg')} 
                  type="image/jpeg"
                />
                <img
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt || post.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={1200}
                  height={630}
                  decoding="async"
                  itemProp="image"
                />
              </picture>
            </div>
          </header>

          {/* Introduction Block */}
          {intro && (
            <div 
            className="bg-gray-50 p-6 rounded-xl mb-10 shadow text-lg text-gray-800 font-serif border-l-4 border-gray-200"
            itemProp="description"
          >
            <ReactMarkdown components={{p: ({children}) => <p className="mb-0">{children}</p>}}>
              {intro}
            </ReactMarkdown>
          </div>
          )}

          {/* Main Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight prose-h1:text-3xl sm:prose-h1:text-4xl prose-h2:text-xl sm:prose-h2:text-2xl prose-h3:text-lg sm:prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-gray-900 prose-ul:list-disc prose-ul:text-gray-700 prose-li:mb-2 prose-table:border-collapse prose-table:w-full prose-th:bg-gray-50 prose-th:p-2 sm:prose-th:p-4 prose-th:text-gray-900 prose-th:font-medium prose-td:p-2 sm:prose-td:p-4 prose-td:text-gray-700 prose-td:border prose-blockquote:border-l-4 prose-blockquote:border-gray-200 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:my-6 prose-blockquote:text-gray-600 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-gray-900 prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-2 sm:prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
              {(() => {
                // Remove the FAQ section from the main content
                const faqSectionMatch = restContent.match(/([\s\S]*?)(?=## 8\. Frequently Asked Questions|$)/);
                return faqSectionMatch ? faqSectionMatch[1].trim() : restContent;
              })()}
            </ReactMarkdown>
          </div>

          {/* FAQ Section */}
          {restContent.includes('## 8. Frequently Asked Questions') && (
            <div className="mt-10 sm:mt-16">
              <div className="bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-md overflow-x-auto">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                  <span className="inline-block bg-gray-200 text-gray-700 rounded-full p-1 sm:p-2 mr-2">
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 sm:h-6 sm:w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 10h.01M12 14v.01M16 10h.01M12 18a9 9 0 100-18 9 9 0 000 18z' /></svg>
                  </span>
                  Frequently Asked Questions
                </h2>
                {/* Extract and render FAQ Q&A pairs */}
                {(() => {
                  const faqMatch = restContent.match(/## 8\. Frequently Asked Questions([\s\S]*)/);
                  if (!faqMatch) return null;
                  const faqContent = faqMatch[1];
                  const qaPairs = faqContent.split(/### /).filter(Boolean);
                  return qaPairs.map((qa, idx) => {
                    const [question, ...answerArr] = qa.split(/\n/);
                    const answer = answerArr.join('\n').trim();
                    return (
                      <div key={idx} className="mb-6 sm:mb-8">
                        <div className="flex items-start gap-2 mb-2">
                          <span className="text-blue-500 mt-1">
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 sm:h-5 sm:w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16.293 9.293a1 1 0 011.414 0l.293.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L10 15.586l6.293-6.293z' /></svg>
                          </span>
                          <span className="font-semibold text-base sm:text-lg text-gray-900">{question.trim()}</span>
                        </div>
                        <div className="text-gray-700 text-sm sm:text-base leading-relaxed pl-6 sm:pl-7">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>{answer}</ReactMarkdown>
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="mt-24 pt-12 border-t border-gray-200">
            <div className="flex items-center gap-6">
            
              <div>
                <h3 className="text-xl font-medium text-gray-900">
                  {post.author.name}
                </h3>
                <p className="text-gray-600">{post.author.title}</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-gray-50 rounded-2xl text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Ready to Build Your Dream Home?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us today for a free consultation and discover how we can turn your dream home into a reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:02012345678"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                📞 Call +44 7387 844751
              </a>
              <a
                href="mailto:info@livebetterlife.co.uk"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                📧 Email Us
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogDetail; 