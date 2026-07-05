import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
  'After': 'after',
};

const CircleArrow = ({ className = '' }: { className?: string }) => (
  <span
    className={`inline-flex items-center justify-center w-6 h-6 rounded-full border border-current shrink-0 ${className}`}
    aria-hidden="true"
  >
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-brass shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 8.5L6.5 12L13 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const [activeStage, setActiveStage] = useState<StageType>('Before');

  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center px-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brass-deep mb-4">404</p>
          <h1 className="font-display font-semibold text-3xl text-ink mb-4">Project not found</h1>
          <p className="text-stone mb-8">We couldn't find that project. Browse all our work below.</p>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 pl-7 pr-3 py-3.5 bg-ink text-cream rounded-full font-medium hover:bg-ink-soft transition-colors"
          >
            View all projects
            <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    );
  }

  const pageTitle = `${project.title} — ${project.location} | Live Better Life`;
  const pageDescription = `${project.description} Professional renovation in ${project.location}. Completed ${project.year}.`;
  const canonicalUrl = `https://livebetterlife.co.uk/portfolio/${project.slug}`;

  const generateAltText = (stage: StageType, index: number) => {
    const altTexts: Record<StageType, string> = {
      'Before': `Before renovation — ${project.title} at ${project.location} (image ${index + 1})`,
      'In Progress': `Construction in progress — ${project.title} at ${project.location} (image ${index + 1})`,
      'After': `Completed renovation — ${project.title} at ${project.location} (image ${index + 1})`,
    };
    return altTexts[stage];
  };

  const availableStages = stages.filter(stage =>
    project.images[stageToKey[stage]].length > 0
  );

  const safeStage: StageType = availableStages.includes(activeStage) ? activeStage : (availableStages[0] ?? 'Before');
  const currentImages = project.images[stageToKey[safeStage]];

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    dateCreated: project.year,
    locationCreated: { '@type': 'Place', name: project.location },
    image: `https://livebetterlife.co.uk${project.heroImage}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  };

  return (
    <div className="bg-cream">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        ogImage={`https://livebetterlife.co.uk${project.heroImage}`}
        schema={projectSchema}
      />

      {/* Breadcrumb */}
      <nav className="pt-24 pb-0" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-4 pb-2">
          <ol className="flex items-center gap-2 text-sm text-stone">
            <li><Link to="/" className="hover:text-ink transition-colors">Home</Link></li>
            <li aria-hidden="true">
              <svg className="w-3 h-3 text-line" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </li>
            <li><Link to="/portfolio" className="hover:text-ink transition-colors">Portfolio</Link></li>
            <li aria-hidden="true">
              <svg className="w-3 h-3 text-line" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </li>
            <li className="text-ink font-medium truncate max-w-[200px] sm:max-w-none">{project.title}</li>
          </ol>
        </div>
      </nav>

      {/* Cinematic hero */}
      <div className="relative h-[55vh] min-h-[380px] max-h-[640px] overflow-hidden mt-4 mx-5 sm:mx-6 lg:mx-10 rounded-card">
        <img
          src={project.heroImage}
          alt={`${project.title} — ${project.location} | Live Better Life renovation`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20" />

        <div className="relative z-10 h-full flex flex-col justify-end px-8 sm:px-12 pb-10 sm:pb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-7 h-px bg-brass" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-brass-tint">
              {project.category}
            </span>
          </div>

          <h1 className="font-display font-semibold text-cream text-3xl sm:text-4xl lg:text-5xl leading-tight mb-3 max-w-2xl">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-cream/70 text-sm">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
              </svg>
              {project.year}
            </span>
            {project.details.duration && (
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {project.details.duration}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px]">

          {/* Left: Gallery + description */}
          <div>
            <p className="text-stone text-lg leading-relaxed mb-10 max-w-2xl">
              {project.description}
            </p>

            {/* Stage tabs */}
            {availableStages.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-8">
                {availableStages.map(stage => (
                  <button
                    key={stage}
                    onClick={() => setActiveStage(stage as StageType)}
                    aria-pressed={safeStage === stage}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${safeStage === stage
                        ? 'bg-ink text-cream shadow-sm'
                        : 'bg-ivory text-stone border border-line hover:border-brass hover:text-ink'
                      }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            )}

            {/* Gallery */}
            {currentImages.length > 0 ? (
              <div className="relative rounded-card overflow-hidden bg-ivory shadow-card">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  className="project-swiper"
                  aria-label={`${safeStage} photos of ${project.title}`}
                >
                  {currentImages.map((media, index) => (
                    <SwiperSlide key={index}>
                      <div className="aspect-[16/10] bg-sand">
                        {(media.endsWith('.mov') || media.endsWith('.mp4')) ? (
                          <video
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                            aria-label={`Video — ${safeStage.toLowerCase()} stage of ${project.title}`}
                          >
                            <source src={media} type="video/mp4" />
                            <source src={media} type="video/quicktime" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img
                            src={media}
                            alt={generateAltText(safeStage, index)}
                            className="w-full h-full object-cover"
                            loading={index === 0 ? 'eager' : 'lazy'}
                          />
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Photo count badge */}
                <div className="absolute top-4 right-4 z-10 bg-ink/70 backdrop-blur-sm text-cream text-xs font-medium px-3 py-1.5 rounded-full pointer-events-none">
                  {currentImages.length} {currentImages.length === 1 ? 'photo' : 'photos'}
                </div>
              </div>
            ) : (
              <div className="rounded-card bg-sand border border-line aspect-[16/10] flex items-center justify-center">
                <p className="text-stone text-sm">No {safeStage.toLowerCase()} photos yet</p>
              </div>
            )}

            {/* Location interlinks */}
            <div className="mt-8 space-y-4">
              {project.location.includes('HA3') && (
                <div className="flex gap-4 p-5 bg-ivory rounded-card border border-line">
                  <span className="w-1 shrink-0 bg-brass rounded-full" />
                  <p className="text-stone leading-relaxed text-sm">
                    This project showcases our expertise in{' '}
                    <Link to="/locations/harrow-ha3" className="text-ink font-medium underline decoration-brass/40 hover:decoration-brass transition-colors">
                      Victorian Renovations in Harrow (HA3)
                    </Link>
                    . We specialise in transforming 1930s semi-detached homes in the HA3 area.
                  </p>
                </div>
              )}
              {project.location.includes('NW6') && (
                <div className="flex gap-4 p-5 bg-ivory rounded-card border border-line">
                  <span className="w-1 shrink-0 bg-brass rounded-full" />
                  <p className="text-stone leading-relaxed text-sm">
                    This project demonstrates our conservation-area expertise in{' '}
                    <Link to="/locations/west-hampstead-nw6" className="text-ink font-medium underline decoration-brass/40 hover:decoration-brass transition-colors">
                      West Hampstead &amp; Brondesbury (NW6)
                    </Link>
                    . We are specialists in period and Victorian renovations in NW6.
                  </p>
                </div>
              )}
              {(project.location.includes('W14') || project.location.includes('W1K') || project.location.includes('Kensington') || project.location.includes('Mayfair')) && (
                <div className="flex gap-4 p-5 bg-ivory rounded-card border border-line">
                  <span className="w-1 shrink-0 bg-brass rounded-full" />
                  <p className="text-stone leading-relaxed text-sm">
                    See more of our premium work in{' '}
                    <Link to="/locations/kensington-mayfair-prime" className="text-ink font-medium underline decoration-brass/40 hover:decoration-brass transition-colors">
                      Kensington &amp; Mayfair
                    </Link>
                    , where we deliver high-end renovations for London's finest properties.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">

            {/* Services */}
            {project.details.services.length > 0 && (
              <div className="bg-ivory rounded-card shadow-card border border-line p-7">
                <div className="inline-flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-brass" />
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-brass-deep">Services delivered</span>
                </div>
                <ul className="space-y-2.5">
                  {project.details.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone">
                      <CheckIcon />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Project stats */}
            <div className="bg-ivory rounded-card shadow-card border border-line p-7">
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-brass" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-brass-deep">Project details</span>
              </div>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-stone/60 mb-1">Category</dt>
                  <dd className="text-ink font-medium text-sm">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-stone/60 mb-1">Location</dt>
                  <dd className="text-ink font-medium text-sm">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-stone/60 mb-1">Year</dt>
                  <dd className="text-ink font-medium text-sm">{project.year}</dd>
                </div>
                {project.details.duration && (
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-stone/60 mb-1">Duration</dt>
                    <dd className="text-ink font-medium text-sm">{project.details.duration}</dd>
                  </div>
                )}
                {availableStages.length > 0 && (
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-stone/60 mb-1">Stages documented</dt>
                    <dd className="flex flex-wrap gap-2 mt-1">
                      {availableStages.map(s => (
                        <span key={s} className="inline-flex items-center px-3 py-1 rounded-full bg-brass-tint text-brass-deep text-xs font-medium">
                          {s}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Key features */}
            {project.details.features.length > 0 && (
              <div className="bg-ivory rounded-card shadow-card border border-line p-7">
                <div className="inline-flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-brass" />
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-brass-deep">Key features</span>
                </div>
                <ul className="space-y-2.5">
                  {project.details.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA card */}
            <div className="bg-ink rounded-card p-7 text-cream">
              <h2 className="font-display font-semibold text-xl mb-3 leading-snug">
                Ready to start your project?
              </h2>
              <p className="text-cream/70 text-sm leading-relaxed mb-6">
                Get a free consultation and no-obligation quote for your renovation in North West London.
              </p>
              <Link
                to="/contact"
                className="group flex items-center justify-between gap-3 w-full pl-6 pr-3 py-3.5 bg-ivory text-ink rounded-full font-medium hover:bg-cream transition-colors mb-3 text-sm"
              >
                Book a free consultation
                <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
              </Link>
              <a
                href="tel:+447387844751"
                className="group flex items-center justify-between gap-3 w-full pl-6 pr-3 py-3.5 border border-cream/30 text-cream rounded-full font-medium hover:bg-cream/10 transition-colors text-sm"
              >
                Call 07387 844751
                <CircleArrow className="text-cream/60 group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </div>
          </aside>
        </div>

        {/* Bottom navigation */}
        <div className="mt-16 pt-10 border-t border-line">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone mb-3">Explore more</p>
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-3 pl-7 pr-3 py-3.5 bg-ivory text-ink border border-line rounded-full font-medium hover:border-brass transition-colors text-sm"
              >
                View all our work
                <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 pl-7 pr-3 py-3.5 bg-ink text-cream rounded-full font-medium hover:bg-ink-soft transition-colors text-sm"
            >
              Start your project
              <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;