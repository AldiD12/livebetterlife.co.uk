import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePageServices = () => {
  const serviceCategories = [
    {
      number: "01",
      title: "Construction & Extensions",
      description: "House extensions, structural alterations, and complete building renovations across London's most prestigious addresses.",
      priceRange: "From £80,000",
      image: "/images/projects/project2/progress/6.jpeg",
      link: "/services"
    },
    {
      number: "02", 
      title: "Kitchen & Bathroom Renovation",
      description: "Luxury kitchen and bathroom transformations with premium materials and expert craftsmanship for discerning homeowners.",
      priceRange: "From £25,000",
      image: "/images/projects/project1/after/nw9-london-flat-conversion-after-living.jpeg",
      link: "/services"
    },
    {
      number: "03",
      title: "Heritage & Restoration",
      description: "Specialist restoration services for Victorian houses, period properties, and listed buildings with authentic craftsmanship.",
      priceRange: "From £60,000",
      image: "/images/projects/project3/after/aft7.jpeg",
      link: "/services"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm tracking-[0.3em] text-gray-500 uppercase">Our Expertise</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-gray-900 font-serif mb-8">
            CONSTRUCTION COMPANY LONDON
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Delivering exceptional construction and renovation services across London's most prestigious addresses. 
            Trusted by discerning homeowners for projects valued from £60,000 to £500,000+.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-24">
          {serviceCategories.map((category, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-6">
                  <span className="text-6xl font-light text-gray-200 font-serif">{category.number}</span>
                </div>
                <h3 className="text-3xl font-light tracking-[0.15em] text-gray-900 font-serif mb-6">
                  {category.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
                  {category.description}
                </p>
                <div className="mb-8">
                  <span className="text-2xl font-light text-gray-900 font-serif">{category.priceRange}</span>
                  <span className="text-sm text-gray-500 ml-2">*Typical project range</span>
                </div>
                <Link 
                  to={category.link}
                  className="group inline-flex items-center gap-3 text-gray-900 text-sm tracking-[0.15em] uppercase hover:gap-4 transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-32 text-center">
          <div className="border-t border-gray-200 pt-16">
            <h3 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-8">
              READY TO BEGIN YOUR PROJECT?
            </h3>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Schedule a complimentary consultation to discuss your vision and receive a detailed project proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group relative overflow-hidden px-12 py-5 bg-gray-900 text-white text-sm tracking-[0.2em] uppercase font-light transition-all duration-500 hover:bg-transparent hover:text-gray-900 border border-gray-900"
              >
                <span className="relative z-10">Schedule Consultation</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
              <Link 
                to="/services" 
                className="group relative overflow-hidden px-12 py-5 border border-gray-900 text-gray-900 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500 hover:bg-gray-900 hover:text-white"
              >
                <span className="relative z-10">View All Services</span>
                <div className="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageServices;