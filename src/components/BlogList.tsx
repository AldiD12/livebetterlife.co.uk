import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, BlogCategory } from '../types/blog';
import { blogPosts, author } from '../data/blogPosts';
import { Helmet } from 'react-helmet';
import { Clock, Calendar } from 'lucide-react';

const BlogList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'All'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 6; // Reduced from 9 to 6 for better readability

  // Get unique categories from blog posts
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Filter posts based on category
  const filteredPosts = blogPosts.filter((post: BlogPost) => {
    return activeCategory === 'All' || post.category === activeCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Generate structured data for blog posts
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Live Better Life Renovation Blog",
    "description": "Expert advice and insights on home renovation, kitchen remodeling, and property improvements in London",
    "url": "https://livebetterlife.co.uk/blog",
    "publisher": {
      "@type": "Organization",
      "@id": "https://livebetterlife.co.uk/#organization",
      "name": "Live Better Life",
      "url": "https://livebetterlife.co.uk",
      "logo": {
        "@type": "ImageObject",
        "url": "https://livebetterlife.co.uk/images/logo.png"
      },
      "sameAs": [
        "https://www.instagram.com/livebetterlifeuk/",
        "https://www.facebook.com/livebetterlifeuk/"
      ]
    },
    "blogPost": paginatedPosts.map(post => ({
      "@type": "BlogPosting",
      "@id": `https://livebetterlife.co.uk/blog/${post.slug}`,
      "headline": post.title,
      "description": post.excerpt || post.metaDescription,
      "image": post.featuredImage.url,
      "datePublished": post.publishDate,
      "dateModified": post.publishDate,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://livebetterlife.co.uk/blog/${post.slug}`
      },
      "author": {
        "@type": "Person",
        "name": post.author?.name || author.name,
        "jobTitle": post.author?.title || author.title,
        "image": post.featuredImage?.url || author.image,
        "sameAs": "https://livebetterlife.co.uk/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Live Better Life",
        "logo": {
          "@type": "ImageObject",
          "url": "https://livebetterlife.co.uk/logo.png"
        }
      },
      "keywords": post.tags.join(', '),
      "articleSection": post.category
    }))
  };

  return (
    <>
      <Helmet>
        <title>Expert Home Renovation Blog | Live Better Life</title>
        <meta
          name="description"
          content="Discover expert home renovation advice, costs, and tips. Get practical insights on kitchen remodeling, bathroom renovations, and home extensions in London."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Live Better Life" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Expert Home Renovation Blog | Live Better Life" />
        <meta property="og:description" content="Discover expert home renovation advice, costs, and tips. Get practical insights on kitchen remodeling, bathroom renovations, and home extensions in London." />
        <meta property="og:image" content="https://livebetterlife.co.uk/images/projects/project1/after/nw9-london-flat-conversion-after-living.jpeg" />
        <meta property="og:url" content="https://livebetterlife.co.uk/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Home Renovation Blog | Live Better Life" />
        <meta name="twitter:description" content="Discover expert home renovation advice, costs, and tips for London homes." />
        <meta name="twitter:image" content="https://livebetterlife.co.uk/images/projects/project1/after/nw9-london-flat-conversion-after-living.jpeg" />
        <link rel="canonical" href="https://livebetterlife.co.uk/blog" />
        <script type="application/ld+json">
          {JSON.stringify(blogListSchema)}
        </script>
      </Helmet>

      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-gray-900 font-serif mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Expert advice and practical insights for your home renovation journey
            </p>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-5 py-2.5 text-sm font-light rounded-full transition-colors
                  ${activeCategory === 'All'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                All Topics
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 text-sm font-light rounded-full transition-colors
                    ${activeCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {paginatedPosts.map((post: BlogPost) => (
              <article key={post.id} className="group">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="aspect-[16/9] overflow-hidden rounded-xl mb-6 bg-gray-100">
                    <img
                      src={post.featuredImage.url}
                      alt={post.featuredImage.alt || `${post.title} - Featured Image`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={800}
                      height={450}
                      onError={(e) => {
                        // Fallback to .jpeg if .jpg fails
                        const target = e.target as HTMLImageElement;
                        if (target.src.endsWith('.jpg')) {
                          target.src = target.src.replace(/\.jpg$/, '.jpeg');
                        }
                      }}
                      decoding="async"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.publishDate}>
                          {new Date(post.publishDate).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </time>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="pt-2">
                      <span className="inline-flex items-center text-gray-900 font-medium">
                        Read Article
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <nav className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 text-sm transition-colors rounded-md
                    ${currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 text-sm transition-colors rounded-md
                      ${currentPage === page
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 text-sm transition-colors rounded-md
                    ${currentPage === totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogList; 