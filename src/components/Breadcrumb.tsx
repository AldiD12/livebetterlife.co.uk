import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  items: Array<{
    name: string;
    item: string;
    isActive?: boolean;
  }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="flex-shrink-0 h-4 w-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {item.isActive ? (
                <span className="text-gray-600 font-light">{item.name}</span>
              ) : (
                <Link
                  to={item.item}
                  className="text-gray-600 hover:text-gray-900 font-light transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
