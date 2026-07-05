import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  items: Array<{
    name: string;
    item: string;
    isActive?: boolean;
  }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className="bg-cream pt-24 pb-2" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <ol className="flex items-center flex-wrap gap-y-1 gap-x-2 text-sm text-stone">
          <li>
            <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          </li>

          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg
                className="w-3 h-3 text-line"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M4 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {item.isActive ? (
                <span className="text-ink font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.item}
                  className="hover:text-ink transition-colors"
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
