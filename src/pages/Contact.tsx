import React, { useState, lazy, Suspense } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';

// Lazy load the map component to avoid SSR issues
const LocationMap = lazy(() => import('../components/LocationMap'));

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      await emailjs.send(
        'service_wvmeenw', // from EmailJS
        'template_0rhihr9', // from EmailJS
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        '_1MdPMQe38O6dCyh1' // from EmailJS
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' }
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' }
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Live Better Life",
    "description": "Get in touch with our home renovation experts in London. Contact us for consultations, quotes, and project discussions.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Live Better Life",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 1.04 The Light Box, 111 Power Road",
        "addressLocality": "London",
        "postalCode": "W4 5PY",
        "addressCountry": "UK"
      },
      "telephone": "+44 20 3488 3491",
      "email": "contact@livebetterlife.co.uk",
      "openingHours": "Mo-Fr 08:00-18:00"
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us | Home Renovation Experts in London"
        description="Contact Live Better Life for expert home renovation services in London. Get in touch for consultations, quotes, and to discuss your renovation project."
        canonicalUrl="https://livebetterlife.co.uk/contact"
        keywords="contact renovation company, london renovation contact, home renovation quote, renovation consultation"
        schema={contactSchema}
      />
      
      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light tracking-[0.2em] text-gray-900 font-serif">
              CONTACT US
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
              Get in touch to discuss your project or schedule a consultation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 border border-gray-200">
              <h2 className="text-2xl font-light tracking-[0.15em] text-gray-900 mb-6">
                SEND US A MESSAGE
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-light tracking-[0.15em] text-gray-900 mb-2">NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors font-light"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light tracking-[0.15em] text-gray-900 mb-2">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors font-light"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light tracking-[0.15em] text-gray-900 mb-2">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors font-light resize-none"
                    required
                  />
                </div>
                
                {status.info.msg && (
                  <div className={`p-4 ${status.info.error ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'}`}>
                    {status.info.msg}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full py-4 px-6 bg-gray-900 text-white text-sm font-light tracking-[0.15em] uppercase 
                    hover:bg-gray-800 transition-colors duration-300 rounded-lg
                    ${status.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div className="flex flex-col justify-between">
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 border border-gray-200 rounded-lg">
                  <h2 className="text-2xl font-light tracking-[0.15em] text-gray-900 mb-6">
                    OUR LOCATION
                  </h2>
                  <div className="h-64 md:h-80 rounded-lg overflow-hidden">
                    <Suspense fallback={<div className="w-full h-full bg-gray-100 flex items-center justify-center">Loading map...</div>}>
                      <LocationMap 
                        position={[51.494513, -0.278985]} // Coordinates for Power Road, London
                        popupText="Live Better Life - Home Renovation Specialists"
                      />
                    </Suspense>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 border border-gray-200 rounded-lg">
                  <h2 className="text-2xl font-light tracking-[0.15em] text-gray-900 mb-6">
                    CONTACT INFORMATION
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm uppercase tracking-wide text-gray-700 mb-2">
                        Service Area
                      </h3>
                      <p className="text-gray-600 font-light">
                        North West London<br />
                        West Hampstead (NW6)<br />
                        Harrow & Kingsbury (HA3/NW9)<br />
                        Kensington & Mayfair (W14/W1K)
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wide text-gray-700 mb-2">
                        Contact
                      </h3>
                      <p className="text-gray-600 font-light">
                        info@livebetterlife.co.uk<br />
                        +44 7387 844751
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage; 