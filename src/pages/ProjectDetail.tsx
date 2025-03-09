import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Project, projects } from '../data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const stages = ['Before', 'In Progress', 'After'];

const stageToKey: { [key: string]: keyof Project['images'] } = {
  'Before': 'before',
  'In Progress': 'progress',
  'After': 'after'
} as const;

const ProjectDetail = () => {
  const { id } = useParams();
  const [activeStage, setActiveStage] = useState('Before');
  
  const project = projects.find(p => p.id.toString() === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white font-serif mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto px-6 font-light tracking-wide">
              {project.location} | {project.year}
            </p>
          </div>
        </div>
      </div>

      {/* Project Stages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Simple Stage Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {stages.map(stage => (
            <button
              key={stage}
              onClick={() => setActiveStage(stage)}
              className={`px-6 py-2 text-sm tracking-wider ${
                activeStage === stage 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-900 border border-gray-200 hover:border-gray-900'
              } transition-colors duration-300`}
            >
              {stage}
            </button>
          ))}
        </div>

        {/* Stage Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-light tracking-[0.15em] text-gray-900">
              {activeStage} Stage
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              {project.description}
            </p>
            {activeStage === 'Before' && (
              <ul className="space-y-2">
                {project.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="text-gray-900 mr-2">—</span>
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Photos Swiper */}
          <div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="h-full"
            >
              {project.images[stageToKey[activeStage]].map((media, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-square">
                    {media.endsWith('.mov') ? (
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      >
                        <source src={media} type="video/mp4" />
                        <source src={media} type="video/quicktime" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={media}
                        alt={`${activeStage} stage ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-50 p-8">
          <div>
            <h3 className="text-sm uppercase tracking-wide text-gray-700 mb-4">
              PROJECT DETAILS
            </h3>
            <div className="space-y-2 text-gray-600 font-light">
              <p>Size: {project.details.size}</p>
              <p>Duration: {project.details.duration}</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wide text-gray-700 mb-4">
              SERVICES
            </h3>
            <div className="space-y-2">
              {project.details.services.map((service, index) => (
                <p key={index} className="text-gray-600 font-light">{service}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wide text-gray-700 mb-4">
              TIMELINE
            </h3>
            <div className="space-y-4">
              {stages.map((stage, index) => (
                <div key={stage} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${
                    index <= stages.indexOf(activeStage) 
                      ? 'bg-gray-900' 
                      : 'bg-gray-300'
                  }`} />
                  <div className="ml-4">
                    <p className="text-gray-900 font-light">{stage}</p>
                    <p className="text-sm text-gray-500">
                      {/* Replace with actual dates */}
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 