import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { useNavigate } from 'react-router-dom';

interface BlogSearchProps {
  posts: BlogPost[];
}

const BlogSearch: React.FC<BlogSearchProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.length < 2) {
      setSearchResults([]);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const results = posts.filter(post => 
      post.title.toLowerCase().includes(searchTermLower) ||
      post.excerpt.toLowerCase().includes(searchTermLower) ||
      post.content.toLowerCase().includes(searchTermLower) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTermLower))
    );

    setSearchResults(results);
  }, [searchTerm, posts]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.length >= 2) {
      navigate(`/blog?search=${encodeURIComponent(searchTerm)}`);
      setIsSearching(false);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearchSubmit} className="relative">
        <input
          type="search"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsSearching(true);
          }}
          onFocus={() => setIsSearching(true)}
          className="w-full px-4 py-2 pl-10 text-sm font-light tracking-wide text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
          aria-label="Search blog posts"
        />
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
      </form>

      {/* Search Results Dropdown */}
      {isSearching && searchTerm.length >= 2 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          {searchResults.length > 0 ? (
            <ul className="py-2 max-h-96 overflow-auto">
              {searchResults.map((post) => (
                <li key={post.id}>
                  <button
                    onClick={() => {
                      navigate(`/blog/${post.slug}`);
                      setIsSearching(false);
                      setSearchTerm('');
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                      {post.excerpt}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-sm text-gray-600">
              No results found for "{searchTerm}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogSearch; 