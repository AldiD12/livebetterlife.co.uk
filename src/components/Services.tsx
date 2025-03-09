import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'ROOFING',
    description: 'We install and repair roofs to protect your home.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
  },
  {
    title: 'DESIGN + BUILD',
    description: 'We design and build your dream home.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80',
  },
  {
    title: 'CONSTRUCTION',
    description: 'Professional construction services with attention to detail.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',
  },
  {
    title: 'RENOVATION',
    description: 'We renovate your home to your liking.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',

  },
];

const Services = () => {
  return (
    <div id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif">
          OUR SERVICES
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
          We offer a wide range of services to meet your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[4/3] sm:aspect-[4/5]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl font-light tracking-[0.15em] text-white mb-2 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white font-light tracking-wide opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/services"
            className="inline-block px-8 py-3 border-2 border-gray-900 text-sm uppercase tracking-wider text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;