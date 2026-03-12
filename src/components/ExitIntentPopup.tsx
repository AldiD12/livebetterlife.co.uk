import { useState, useEffect } from 'react';
import { X, Clock, Star } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: ''
  });
  const [status, setStatus] = useState({ submitting: false, success: false });

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 70 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Show after 30 seconds if not shown yet
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false });

    try {
      await emailjs.send(
        'service_wvmeenw',
        'template_0rhihr9',
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          lead_source: 'Exit Intent Popup',
          message: `Exit Intent Lead - Project: ${formData.projectType}`
        },
        '_1MdPMQe38O6dCyh1'
      );

      setStatus({ submitting: false, success: true });
      setTimeout(() => setIsVisible(false), 2000);
    } catch (error) {
      setStatus({ submitting: false, success: false });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        {status.success ? (
          <div className="text-center py-8">
            <Star className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-light text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">We'll send your guide and be in touch within 24 hours.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-light text-gray-900 mb-2">
                Wait! Don't Miss Out
              </h3>
              <p className="text-gray-600 text-sm">
                Get our exclusive "London Renovation Cost Guide 2025" 
                <span className="font-medium"> FREE</span> before you go
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 text-yellow-800 text-sm">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Limited Time:</span>
                <span>Includes 2025 pricing for all London boroughs</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gray-900"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gray-900"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gray-900"
                required
              />
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-gray-900"
                required
              >
                <option value="">What's your project?</option>
                <option value="extension">Home Extension</option>
                <option value="kitchen">Kitchen Renovation</option>
                <option value="bathroom">Bathroom Renovation</option>
                <option value="full-renovation">Full Home Renovation</option>
                <option value="loft-conversion">Loft Conversion</option>
              </select>
              
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-3 px-6 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
              >
                {status.submitting ? 'Sending...' : 'Get FREE Cost Guide Now'}
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              No spam. We respect your privacy. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopup;