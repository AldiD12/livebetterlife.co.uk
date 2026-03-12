import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { Project, projects } from '../data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../components/Portfolio.css';

const stages = ['Before', 'In Progress', 'After'] as const;
type StageType = typeof stages[number];

const stageToKey: { [key in StageType]: keyof Project['images'] } = {
  'Before': 'before',
  'In Progress': 'progress',
  'After': 'after'
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const [activeStage, setActiveStage] = useState<StageType>('Before');
  
  // Find project by slug instead of id
  const project = projects.find(p => p.slug === slug);

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-light text-gray-900 mb-4">Project not found</h1>
        <a href="/portfolio" className="text-blue-600 hover:text-blue-800">Return to Portfolio</a>
      </div>
    </div>
  );

  // Generate SEO meta tags dynamically
  const pageTitle = `${project.title} - ${project.location} | Live Better Life`;
  const pageDescription = `${project.description} Professional renovation services in ${project.location}. Completed ${project.year}.`;
  const canonicalUrl = `https://livebetterlife.co.uk/portfolio/${project.slug}`;

  // Generate SEO-friendly alt text
  const generateAltText = (stage: StageType, index: number) => {
    const location = project.location;
    const projectType = project.title;
    
    const altTexts: Record<StageType, string> = {
      'Before': `Before renovation of ${projectType} at ${location} - showing original condition prior to construction`,
      'In Progress': `Construction in progress for ${projectType} at ${location} - renovation work phase ${index + 1}`,
      'After': `Completed ${projectType} at ${location} - final result showing transformed space after renovation`
    };
    
    return altTexts[stage];
  };

  // Only show stages that have images
  const availableStages = stages.filter(stage => 
    project.images[stageToKey[stage]].length > 0
  );

  // Use first available stage if current selection has no images
  if (!project.images[stageToKey[activeStage]].length && availableStages.length > 0) {
    setActiveStage(availableStages[0] as StageType);
  }
  
  return (
    <div className="pt-24 pb-16 bg-white">
      {/* SEO Meta Tags */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        ogImage={`https://livebetterlife.co.uk${project.heroImage}`}
      />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src={project.heroImage}
          alt={`${project.title} - ${project.location} - Featured renovation project by Live Better Life`}
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
        {availableStages.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {availableStages.map(stage => (
              <button
                key={stage}
                onClick={() => setActiveStage(stage as StageType)}
                className={`px-6 py-2 text-sm tracking-wider ${
                  activeStage === stage 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-white text-gray-900 border border-gray-200 hover:border-gray-900'
                } transition-colors duration-300`}
                aria-label={`View ${stage} stage of ${project.title} renovation`}
              >
                {stage}
              </button>
            ))}
          </div>
        )}

        {/* Stage Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-light tracking-[0.15em] text-gray-900">
              {activeStage} Stage
            </h2>
            {/* Only show description if it exists */}
            {project.description && (
              <p className="text-gray-600 font-light leading-relaxed">
                {project.description}
              </p>
            )}
            
            {/* Location-specific interlink */}
            {project.location.includes('HA3') && (
              <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                <p className="text-gray-700 font-light">
                  This project is a prime example of our{' '}
                  <a 
                    href="/locations/harrow-ha3" 
                    className="text-blue-600 hover:text-blue-800 font-normal underline"
                  >
                    Renovation Services in Harrow
                  </a>
                  . We specialize in transforming 1930s semi-detached homes in HA3.
                </p>
              </div>
            )}
            
            {project.location.includes('NW6') && (
              <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                <p className="text-gray-700 font-light">
                  This project showcases our expertise in{' '}
                  <a 
                    href="/locations/west-hampstead-nw6" 
                    className="text-blue-600 hover:text-blue-800 font-normal underline"
                  >
                    Victorian Renovations in West Hampstead
                  </a>
                  . We are conservation area specialists in NW6.
                </p>
              </div>
            )}
            {/* Only show features if they exist and we're in Before stage */}
            {activeStage === 'Before' && project.details.features.length > 0 && (
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
          {project.images[stageToKey[activeStage]].length > 0 && (
            <div>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={true}
                pagination={{ 
                  clickable: true
                }}
                className="h-full"
                aria-label={`${activeStage} photos of ${project.title} renovation project`}
              >
                {project.images[stageToKey[activeStage]].map((media, index) => (
                  <SwiperSlide key={index}>
                    <div className="aspect-square">
                      {(media.endsWith('.mov') || media.endsWith('.mp4')) ? (
                        <video
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover"
                          aria-label={`Video showing ${activeStage.toLowerCase()} stage of ${project.title} renovation at ${project.location}`}
                        >
                          <source src={media} type="video/mp4" />
                          <source src={media} type="video/quicktime" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={media}
                          alt={generateAltText(activeStage, index)}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>

        {/* Project Details - Only show if either services or features exist */}
        {(project.details.services.length > 0 || project.details.features.length > 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Only show if duration or services exist */}
            {(project.details.duration || project.details.services.length > 0) && (
              <div>
                <h3 className="text-sm uppercase tracking-wide text-gray-700 mb-4">
                  PROJECT DETAILS
                </h3>
                <div className="space-y-2 text-gray-600 font-light">
                  {project.details.duration && <p>Duration: {project.details.duration}</p>}
                  {project.details.services.length > 0 && (
                    <p>Services: {project.details.services.join(', ')}</p>
                  )}
                </div>
              </div>
            )}
            
            {/* Only show if features exist */}
            {project.details.features.length > 0 && (
              <div>
                <h3 className="text-sm uppercase tracking-wide text-gray-700 mb-4">
                  FEATURES
                </h3>
                <ul className="space-y-2">
                  {project.details.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <span className="text-gray-900 mr-2">—</span>
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail; 