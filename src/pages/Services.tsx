import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'renovation-services',
    title: 'RENOVATION SERVICES',
    description: 'We specialize in complete renovation services, handling everything from start to finish. If you want to renovate your space, we ensure high-quality results at every step.',
    image: '/images/services/image1.webp',
    features: [
      'Full project management',
      'Sustainable solutions',
      'Quality assurance',
      'Modern design integration',
      'Detailed planning',
      'Expert execution'
    ]
  },
  {
    id: 'home-renovation',
    title: 'HOME RENOVATION & REMODELING',
    description: 'We improve and upgrade your home, increasing its value while enhancing comfort and functionality.',
    image: '/images/services/image2.jpeg',
    features: [
      'Value enhancement',
      'Energy efficiency',
      'Premium materials',
      'Modern design',
      'Comfort optimization',
      'Sustainable features'
    ]
  },
  {
    id: 'room-renovation',
    title: 'ROOM RENOVATION',
    description: 'Transform any room into a modern and functional space with our design and remodeling services. We specialize in creating new layouts, removing old fixtures, and installing fresh elements .',
    image: '/images/services/image3.webp',
    features: [
      'Layout optimization',
      'Fixture modernization',
      'Custom solutions',
      'Space planning',
      'Design consultation',
      'Quality installation'
    ]
  },
  {
    id: 'kitchen-renovation',
    title: 'KITCHEN RENOVATION',
    description: 'We specialize in stylish, functional kitchen makeovers using custom cabinetry, elegant lighting, and high-end finishes.',
    image: '/images/services/image7.jpeg',
    features: [
      'Custom cabinetry',
      'High-end appliances',
      'Luxury finishes',
      'Elegant lighting',
      'Ergonomic design',
      'Premium materials'
    ]
  },
  {
    id: 'bathroom-renovation',
    title: 'BATHROOM RENOVATION',
    description: 'Our bathroom remodel services focus on functionality and aesthetics, offering new fixtures, updated flooring, modern lighting, and efficient layouts. ',
    image: '/images/services/image6.webp',
    features: [
      'Modern fixtures',
      'Luxury flooring',
      'Efficient layouts',
      'Custom storage',
      'Premium finishes',
      'Water efficiency'
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="/images/services/image5.webp" 
          alt="Services Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white font-serif mb-4">
              OUR SERVICES
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto px-6 font-light tracking-wide">
             High-quality work with careful attention to every detail in each project.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 gap-16">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="lg:w-1/2">
                <div className="overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-light tracking-[0.15em] text-gray-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-gray-600 font-light tracking-wide mb-8">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <span className="text-gray-900 mr-2">—</span>
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="self-start py-3 px-6 border-2 border-gray-900 text-sm uppercase tracking-wider text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-6">
            START YOUR PROJECT
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-light tracking-wide">
            Ready to transform your space? Contact us to discuss your project or request an estimate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="py-4 px-8 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/estimate"
              className="py-4 px-8 border-2 border-gray-900 text-sm uppercase tracking-wider text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Get Estimate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 