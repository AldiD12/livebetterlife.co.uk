import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, Star, ArrowRight, Clock, PoundSterling } from 'lucide-react';

const Portfolio = () => {
  const featuredProject = {
    address: "Tennyson Road, West Hampstead NW6",
    type: "FULL HOUSE RENOVATION",
    description: "Complete transformation creating modern family living",
    investment: "£85,000",
    timeline: "12 weeks",
    completed: "2025",
    image: "/images/projects/project1/after/nw9-london-flat-conversion-after-living.jpeg",
    scope: [
      "Complete kitchen renovation with modern appliances",
      "Full bathroom upgrades throughout",
      "Open-plan living area creation", 
      "Premium flooring installation",
      "Contemporary lighting design",
      "Full property redecoration"
    ],
    testimonial: "We initially called about a kitchen renovation. They showed us why doing the entire house made more sense financially. Best decision we made. The project manager was exceptional - daily WhatsApp updates, weekly meetings, finished ahead of schedule.",
    client: "Homeowners, West Hampstead"
  };

  const mediumProjects = [
    {
      address: "22 Davies Street, Mayfair W1K 3DE",
      type: "LUXURY MAYFAIR RENOVATION",
      description: "Stunning commercial renovation in the heart of Mayfair",
      investment: "£180,000",
      timeline: "16 weeks",
      completed: "2024",
      image: "/images/projects/project2/progress/6.jpeg",
      scope: [
        "Impressive reception area with bespoke lighting",
        "Elegant meeting rooms with custom joinery",
        "State-of-the-art conference facilities",
        "Premium office spaces with marble flooring",
        "Sophisticated lighting design throughout",
        "Historic character preservation with modern amenities"
      ],
      specialty: "High-end Central London specialist"
    },
    {
      address: "Brondesbury Road, Brondesbury NW6",
      type: "FULL FLAT RENOVATION",
      description: "Complete kitchen transformation with custom cabinetry",
      investment: "£65,000",
      timeline: "8 weeks",
      completed: "2023",
      image: "/images/projects/project3/after/aft7.jpeg",
      scope: [
        "Custom cabinetry design and installation",
        "Premium appliances integration",
        "Open-concept design maximizing space",
        "Natural light optimization",
        "Functional yet elegant cooking space",
        "Modern entertaining area creation"
      ]
    }
  ];

  const smallerProjects = [
    {
      address: "Kingsbury Road, Kingsbury NW9",
      type: "Converting In Three Flats",
      description: "Complete transformation of traditional London home into modern flats",
      investment: "£120,000",
      timeline: "14 weeks",
      completed: "2023"
    },
    {
      address: "Kenton Lane, Harrow HA3 8UF", 
      type: "Ground Floor Renovation",
      description: "Comprehensive ground floor renovation with open-plan layout",
      investment: "£75,000",
      timeline: "10 weeks",
      completed: "2025"
    }
  ];

  return (
    <div id="portfolio" className="py-20 bg-white sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm tracking-[0.3em] text-gray-500 uppercase">Our Work</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
          <h2 className="text-3xl font-light tracking-wide text-gray-900 font-serif mb-6 sm:text-4xl md:text-5xl lg:tracking-[0.2em]">
            Our Recent NW London Full House Renovations
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light sm:text-xl">
            6 complete home transformations completed in 2023-2024 across West Hampstead, Brondesbury, Kingsbury, Harrow & Kensington
          </p>
        </div>

        <div className="space-y-16">
          
          {/* PROJECT CARD 1 - LARGE FEATURE */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-lg font-medium text-gray-900">{featuredProject.address}</span>
                </div>
                
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                  {featuredProject.type}
                </div>
                
                <h3 className="text-2xl font-light text-gray-900 font-serif mb-4 sm:text-3xl">
                  {featuredProject.description}
                </h3>

                {/* Scope of Work */}
                <h4 className="text-xl font-medium text-gray-900 mb-4">Scope of work:</h4>
                <div className="grid sm:grid-cols-2 gap-2 mb-8">
                  {featuredProject.scope.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Project Details */}
                <div className="grid sm:grid-cols-3 gap-6 mb-8 p-6 bg-white rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2">
                    <PoundSterling className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-500">Investment:</div>
                      <div className="text-xl font-bold text-gray-900">{featuredProject.investment}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-600" />
                    <div>
                      <div className="text-sm text-gray-500">Timeline:</div>
                      <div className="text-lg font-bold text-gray-900">{featuredProject.timeline}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Completed:</div>
                    <div className="text-lg font-bold text-gray-900">{featuredProject.completed}</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-3 leading-relaxed">
                    "{featuredProject.testimonial}"
                  </p>
                  <p className="text-sm text-gray-600">- {featuredProject.client}</p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link 
                    to="/portfolio"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-gray-800 rounded-lg"
                  >
                    View Full Project Gallery
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-900 text-gray-900 text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-gray-900 hover:text-white rounded-lg"
                  >
                    Book Similar Consultation
                  </Link>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src={featuredProject.image}
                    alt={featuredProject.type}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">FEATURED PROJECT</span>
                </div>
              </div>
            </div>
          </div>

          {/* MEDIUM PROJECTS GRID */}
          <div className="grid lg:grid-cols-2 gap-8">
            {mediumProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-lg font-medium text-gray-900">{project.address}</span>
                </div>
                
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {project.type}
                </div>
                
                <h3 className="text-xl font-light text-gray-900 font-serif mb-4">
                  {project.description}
                </h3>

                {project.scope && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Scope of work:</h4>
                    <div className="space-y-2">
                      {project.scope.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg text-sm">
                  <div>
                    <div className="text-gray-500 mb-1">Investment:</div>
                    <div className="font-bold text-gray-900">{project.investment}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Timeline:</div>
                    <div className="font-bold text-gray-900">{project.timeline}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Completed:</div>
                    <div className="font-bold text-gray-900">{project.completed}</div>
                  </div>
                </div>

                {project.testimonial && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-sm mb-2">"{project.testimonial}"</p>
                    <p className="text-xs text-gray-600">- {project.client}</p>
                  </div>
                )}

                {project.specialty && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
                    <p className="text-blue-800 text-sm font-medium">{project.specialty}</p>
                  </div>
                )}

                <Link 
                  to="/portfolio"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors font-medium"
                >
                  View Full Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* SMALLER PROJECTS */}
          <div className="grid md:grid-cols-2 gap-6">
            {smallerProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="font-medium text-gray-900">{project.address}</span>
                </div>
                <h3 className="text-lg text-gray-900 mb-4">{project.type}</h3>
                <div className="flex flex-wrap gap-4 text-sm mb-4">
                  <span><strong>Investment:</strong> {project.investment}</span>
                  <span><strong>Timeline:</strong> {project.timeline}</span>
                  <span><strong>Completed:</strong> {project.completed}</span>
                </div>
                <Link 
                  to="/portfolio"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
                >
                  View Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION BELOW PROJECTS */}
        <div className="mt-20 text-center bg-gray-900 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-light tracking-wide font-serif mb-4 sm:text-4xl">
            Your NW London Home Could Be Next
          </h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            127 families in West Hampstead, Brondesbury, Kingsbury & Harrow have trusted us since 2010.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row sm:gap-6">
            <Link 
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-gray-900 text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-gray-100 rounded-lg"
            >
              Book Free Consultation
            </Link>
            <Link 
              to="/portfolio"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 border border-white text-white text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-white hover:text-gray-900 rounded-lg"
            >
              See All 127 Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;