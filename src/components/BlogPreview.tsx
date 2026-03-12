import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPreview = () => {
  // Get the 3 most recent blog posts
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif">
            LATEST FROM OUR BLOG
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Discover renovation tips, design inspiration, and expert advice from our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
              <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
                {post.featuredImage?.url ? (
                  <img
                    src={post.featuredImage.url.startsWith('/') ? post.featuredImage.url : `/${post.featuredImage.url}`}
                    alt={post.featuredImage.alt || `${post.title} - Featured Image`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={450}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder-blog.jpg';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-sm">
                    No image available
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-light text-gray-900 hover:text-gray-600 transition-colors"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-block px-8 py-3 border border-gray-900 text-gray-900 font-light tracking-wider hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            VIEW ALL ARTICLES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
