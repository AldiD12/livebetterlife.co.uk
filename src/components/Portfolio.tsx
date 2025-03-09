import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { projects } from '../data/projects';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Add custom CSS for Swiper pagination
import './Portfolio.css';

const Portfolio = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/portfolio/${projectId}`);
  };

  return (
    <div id="portfolio" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-2xl sm:text-3xl font-light tracking-[0.2em] text-gray-900 font-serif">
            DISCOVER OUR LATEST PROJECTS
          </h2>
        </div>

        <div className="mb-20">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ 
              clickable: true,
              el: '.swiper-custom-pagination'
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="custom-swiper mb-16"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div 
                  className="group relative overflow-hidden cursor-pointer"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2">
                      <span className="text-base sm:text-lg font-light tracking-wider">{project.id}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-light tracking-[0.15em] text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-[0.2em] font-light">
                      {project.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-custom-pagination mt-8"></div>
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-block px-8 py-3 border-2 border-gray-900 text-sm uppercase tracking-wider text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;