import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAreasDropdownOpen, setIsAreasDropdownOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Live Better Life Logo" 
              className="h-20 w-auto md:h-24 lg:h-28"
            />
            <div className="text-gray-900 font-serif">
              <div className="text-xl md:text-2xl lg:text-3xl tracking-wide">Live Better Life</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors font-light tracking-wider">Services</Link>
            
            {/* Areas Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAreasDropdownOpen(true)}
              onMouseLeave={() => setIsAreasDropdownOpen(false)}
            >
              <button className="text-gray-600 hover:text-gray-900 transition-colors font-light tracking-wider flex items-center gap-1">
                Areas
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isAreasDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  <Link 
                    to="/locations/west-hampstead-nw6"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-light"
                  >
                    West Hampstead & Brondesbury (NW6)
                  </Link>
                  <Link 
                    to="/locations/harrow-ha3"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-light"
                  >
                    Harrow & Kenton (HA3)
                  </Link>
                  <Link 
                    to="/locations/kensington-mayfair-prime"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-light"
                  >
                    Kensington & Mayfair
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors font-light tracking-wider">Portfolio</Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors font-light tracking-wider">Blog</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-light tracking-wider">Contact</Link>
            
            {/* Phone Number */}
            <a 
              href="tel:+442081234567" 
              className="flex items-center space-x-2 text-gray-900 hover:text-gray-700 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-lg tracking-wide">+44 7387 844751</span>
            </a>
            
            <Link to="/estimate" className="px-6 py-2 bg-gray-900 text-white text-sm tracking-wider hover:bg-gray-800 transition-all duration-300">Get Estimate</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-900"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-light tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            
            {/* Areas - Mobile */}
            <div className="px-3 py-2">
              <div className="text-gray-600 font-light tracking-wider mb-2">Areas</div>
              <div className="pl-4 space-y-1">
                <Link
                  to="/locations/west-hampstead-nw6"
                  className="block py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  West Hampstead & Brondesbury (NW6)
                </Link>
                <Link
                  to="/locations/harrow-ha3"
                  className="block py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Harrow & Kenton (HA3)
                </Link>
                <Link
                  to="/locations/kensington-mayfair-prime"
                  className="block py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kensington & Mayfair
                </Link>
              </div>
            </div>
            
            <Link
              to="/portfolio"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-light tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-light tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-light tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Phone Number - Mobile */}
            <a 
              href="tel:+442081234567" 
              className="flex items-center space-x-2 px-3 py-2 text-gray-900 hover:text-gray-700 transition-colors font-medium border-t border-gray-100 mt-2 pt-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-lg tracking-wide">+44 7387 844751</span>
            </a>
            
            <Link
              to="/estimate"
              className="block px-3 py-2 bg-gray-900 text-white text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Estimate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;