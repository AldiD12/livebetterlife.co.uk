import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-[100vh] md:h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2070"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-28">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-[0.2em] mb-8 sm:mb-10 font-serif leading-tight">
                BUILT WITH 
              <br className="hidden sm:block" />
              <span className="block mt-2 sm:mt-3">CARE AND QUALITY</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-2xl font-extralight tracking-wider text-gray-100 leading-relaxed">
            We create strong, lasting, and beautiful buildings.
            </p>
            <div className="mt-10 sm:mt-12 md:mt-16 flex flex-col sm:flex-row gap-5 sm:gap-8">
              <Link
                to="/portfolio"
                className="w-full sm:w-auto text-center px-10 py-4 text-sm tracking-[0.25em] uppercase border border-white text-white hover:bg-white hover:text-black transition-all duration-500 font-light"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center px-10 py-4 text-sm tracking-[0.25em] uppercase border border-white bg-white text-black hover:bg-transparent hover:text-white transition-all duration-500 font-light"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;