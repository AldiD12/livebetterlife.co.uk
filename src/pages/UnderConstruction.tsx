import React from 'react';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-gray-900 font-serif mb-6">
          UNDER CONSTRUCTION
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-light tracking-wide">
          We're currently working on this feature. Please check back soon.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 border-2 border-gray-900 text-sm uppercase tracking-wider text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction; 