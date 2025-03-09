import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
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
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-900 hover:text-gray-600 text-sm tracking-wider">
              HOME
            </Link>
            <Link to="/portfolio" className="text-gray-900 hover:text-gray-600 text-sm tracking-wider">
              PORTFOLIO
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-gray-600 text-sm tracking-wider">
              ABOUT
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-gray-600 text-sm tracking-wider">
              CONTACT
            </Link>
            <Link
              to="/estimate"
              className="px-4 py-2 text-sm tracking-wider bg-white text-gray-900 border border-gray-200 hover:border-gray-900 transition-colors duration-300"
            >
              COST ESTIMATE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-gray-600 p-1"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 text-base tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                to="/portfolio" 
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 text-base tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PORTFOLIO
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 text-base tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 text-base tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
              <Link
                to="/estimate"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 text-base tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                COST ESTIMATE
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;