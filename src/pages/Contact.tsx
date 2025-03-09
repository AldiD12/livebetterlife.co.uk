import React from 'react';

const ContactPage = () => {
  return (
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
            <form className="space-y-6">
              <div>
                <label className="block text-sm uppercase tracking-wide text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm uppercase tracking-wide text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm uppercase tracking-wide text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                />
              </div>
              
              <div>
                <label className="block text-sm uppercase tracking-wide text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gray-900 text-white uppercase tracking-wider hover:bg-gray-800 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-light tracking-[0.15em] text-gray-900 mb-6">
                CONTACT INFORMATION
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-gray-700 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-600 font-light">
                    123 Luxury Avenue<br />
                    London, W1 1AA<br />
                    United Kingdom
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-gray-700 mb-2">
                    Contact
                  </h3>
                  <p className="text-gray-600 font-light">
                    info@luxbuild.com<br />
                    +44 (0) 20 1234 5678
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-gray-700 mb-2">
                    Hours
                  </h3>
                  <p className="text-gray-600 font-light">
                    Monday - Friday: 9am - 6pm<br />
                    Saturday: By appointment<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 h-64 bg-gray-200">
              {/* Map would go here - replace with actual map implementation */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Map Location
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 