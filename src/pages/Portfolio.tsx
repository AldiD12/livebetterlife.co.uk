import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Project, projects } from '../data/projects';



const categories = ['All', 'Residential', 'Commercial'];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (project: { id: string }) => {
    navigate(`/portfolio/${project.id}`);
  };

  return (
    <div className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="/images/projects/project1/after/af1.jpeg" 
          alt="Portfolio Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white font-serif mb-4">
              OUR PORTFOLIO
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto px-6 font-light tracking-wide">
              A showcase of our finest projects and transformations
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm tracking-wider ${
                activeCategory === category 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-900 border border-gray-200 hover:border-gray-900'
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img 
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100">
                <h3 className="text-xl font-light tracking-[0.15em] text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {project.location} | {project.year}
                </p>
                <p className="text-gray-600 font-light tracking-wide line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-sm my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Moved to top right */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/90 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 text-2xl font-light z-20"
            >
              ×
            </button>

            <div className="relative">
              <img 
                src={selectedProject.images.after[currentImageIndex]}
                alt={selectedProject.title}
                className="w-full h-[30vh] object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(
                    (currentImageIndex - 1 + selectedProject.images.after.length) % selectedProject.images.after.length
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white text-gray-900"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(
                    (currentImageIndex + 1) % selectedProject.images.after.length
                  );
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white text-gray-900"
              >
                →
              </button>
            </div>
            
            <div className="p-8 sm:p-12">
              <h2 className="text-2xl font-light tracking-[0.15em] text-gray-900 mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-gray-500 mb-6">
                {selectedProject.location} | {selectedProject.year}
              </p>
              <p className="text-gray-600 font-light tracking-wide mb-8">
                {selectedProject.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-gray-700 mb-4">
                    PROJECT DETAILS
                  </h3>
                  <div className="space-y-2 text-gray-600 font-light">
                    <p>Size: {selectedProject.details.size}</p>
                    <p>Duration: {selectedProject.details.duration}</p>
                    <p>Services: {selectedProject.details.services.join(', ')}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-gray-700 mb-4">
                    FEATURES
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.details.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="text-gray-900 mr-2">—</span>
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add CTA Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-24">
        <div className="text-center">
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

export default PortfolioPage; 