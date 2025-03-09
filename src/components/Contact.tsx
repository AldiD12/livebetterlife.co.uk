import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif">
            GET IN TOUCH
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            Our team is ready to bring your vision to life. Contact us to discuss your next project.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg opacity-5"></div>
            <div className="relative bg-white p-8 sm:p-10 rounded-lg border border-gray-100">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-gray-900" />
                  <div>
                    <h3 className="text-lg font-light tracking-[0.15em] text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600 font-light tracking-wide">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-gray-900" />
                  <div>
                    <h3 className="text-lg font-light tracking-[0.15em] text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600 font-light tracking-wide">contact@buildpro.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-gray-900" />
                  <div>
                    <h3 className="text-lg font-light tracking-[0.15em] text-gray-900">Address</h3>
                    <p className="mt-1 text-gray-600 font-light tracking-wide">
                      123 Construction Ave<br />
                      Building City, ST 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

            <button
              type="submit"
              className="w-full py-4 px-6 bg-gray-900 text-white text-sm font-light tracking-[0.15em] uppercase hover:bg-gray-800 transition-colors duration-300 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;