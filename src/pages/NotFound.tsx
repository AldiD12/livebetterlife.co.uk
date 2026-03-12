import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    // Set page title for 404 page
    document.title = '404 Page Not Found - Live Better Life';
  }, []);

  // Common navigation paths to help users get back on track
  const commonPaths = [
    { title: 'Home Renovations', path: '/services#home-renovations' },
    { title: 'Kitchen Renovations', path: '/services#kitchen-renovations' },
    { title: 'Bathroom Remodels', path: '/services#bathroom-remodels' },
    { title: 'Our Portfolio', path: '/portfolio' },
    { title: 'Contact Us', path: '/contact' },
    { title: 'Get an Estimate', path: '/estimate' }
  ];

  // Featured projects to recapture user interest
  const featuredProjects = [
    { title: 'Kingsbury Road NW9', path: '/portfolio/NW9' },
    { title: 'Brondsbury Road NW6', path: '/portfolio/NW6' },
    { title: 'Rusell Garden Muse W14', path: '/portfolio/W14' }
  ];

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-light text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-light tracking-[0.15em] text-gray-900 mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            We're sorry, but the page you're looking for isn't available. It might have been moved or no longer exists.
          </p>
          <Link
            to="/"
            className="inline-block mt-8 py-3 px-8 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-all duration-300"
          >
            Return to Homepage
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div>
            <h3 className="text-xl font-light tracking-[0.1em] text-gray-900 mb-4">
              Popular Services
            </h3>
            <ul className="space-y-3">
              {commonPaths.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-gray-900 hover:underline flex items-center"
                  >
                    <span className="mr-2">—</span> {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-light tracking-[0.1em] text-gray-900 mb-4">
              Featured Projects
            </h3>
            <ul className="space-y-3">
              {featuredProjects.map((project, index) => (
                <li key={index}>
                  <Link
                    to={project.path}
                    className="text-gray-600 hover:text-gray-900 hover:underline flex items-center"
                  >
                    <span className="mr-2">—</span> {project.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-light tracking-[0.1em] text-gray-900 mb-4">
                Need Help?
              </h3>
              <p className="text-gray-600 mb-4">
                If you're looking for something specific, feel free to contact us directly.
              </p>
              <Link
                to="/contact"
                className="text-gray-900 hover:underline font-medium"
              >
                Contact our team →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 