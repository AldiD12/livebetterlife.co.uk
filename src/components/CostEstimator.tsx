import React, { useState } from 'react';
import type { EstimateFormData } from '../types';

const CostEstimator = () => {
  const [formData, setFormData] = useState<EstimateFormData>({
    serviceType: '',
    projectSize: '',
    timeline: '',
    details: '',
    name: '',
    email: '',
    phone: '',
    services: {}
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateEstimate = () => {
    let basePrice = 0;
    
    // Base prices by service type
    if (formData.serviceType === 'construction') basePrice = 50000;
    if (formData.serviceType === 'renovation') basePrice = 30000;
    if (formData.serviceType === 'painting') basePrice = 5000;
    if (formData.serviceType === 'electrical') basePrice = 8000;

    // Multipliers for project size
    if (formData.projectSize === 'medium') basePrice *= 1.5;
    if (formData.projectSize === 'large') basePrice *= 2.5;

    // Urgency multiplier
    if (formData.timeline === 'urgent') basePrice *= 1.3;

    return basePrice;
  };

  return (
    <div id="estimate" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-normal tracking-wide text-white uppercase">Cost Estimator</h2>
          <p className="mt-4 text-lg text-gray-400 tracking-wide">
            Get an estimate for your project in minutes
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-8 bg-white/5 backdrop-blur-sm p-8 rounded-none border border-white/10">
          <div>
            <label className="block text-sm uppercase tracking-wide text-gray-300">Service Type</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="mt-1 block w-full bg-black/50 border border-white/20 rounded-none text-white focus:ring-1 focus:ring-white"
            >
              <option value="">Select a service</option>
              <option value="construction">Construction</option>
              <option value="renovation">Renovation</option>
              <option value="painting">Painting</option>
              <option value="electrical">Electrical</option>
            </select>
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wide text-gray-300">Project Size</label>
            <select
              name="projectSize"
              value={formData.projectSize}
              onChange={handleChange}
              className="mt-1 block w-full bg-black/50 border border-white/20 rounded-none text-white focus:ring-1 focus:ring-white"
            >
              <option value="">Select size</option>
              <option value="small">Small (under 1000 sq ft)</option>
              <option value="medium">Medium (1000-2500 sq ft)</option>
              <option value="large">Large (over 2500 sq ft)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wide text-gray-300">Timeline</label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="mt-1 block w-full bg-black/50 border border-white/20 rounded-none text-white focus:ring-1 focus:ring-white"
            >
              <option value="">Select timeline</option>
              <option value="urgent">Urgent (under 1 month)</option>
              <option value="normal">Normal (1-3 months)</option>
              <option value="flexible">Flexible (over 3 months)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wide text-gray-300">Project Details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full bg-black/50 border border-white/20 rounded-none text-white focus:ring-1 focus:ring-white"
              placeholder="Please describe your project..."
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm uppercase tracking-wide text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full bg-black/50 border border-white/20 rounded-none text-white focus:ring-1 focus:ring-white"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wide text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full bg-black/50 border border-white/20 rounded-none text-white focus:ring-1 focus:ring-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wide text-gray-300">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full bg-black/50 border border-white/20 rounded-none text-white focus:ring-1 focus:ring-white"
            />
          </div>

          <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex justify-between items-center">
              <span className="text-lg text-gray-300 tracking-wide">Estimated Range:</span>
              <span className="text-2xl text-white font-light">
                {formData.serviceType ? 
                  `£${(calculateEstimate() * 0.8).toLocaleString()} - £${(calculateEstimate() * 1.2).toLocaleString()}*` 
                  : '---'
                }
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400 italic">
              * This is a rough estimate. Final costs may vary based on specific requirements and site conditions.
            </p>
          </div>

          <div className="mt-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-light tracking-[0.15em] text-white mb-4">
              GET AN ACCURATE QUOTE
            </h3>
            <p className="text-gray-400 font-light tracking-wide mb-6">
              For a detailed cost assessment and to discuss your project in person, schedule a consultation with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto py-4 px-6 border-2 border-white text-white uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                Submit Estimate Request
              </button>
              <a
                href="/contact"
                className="w-full sm:w-auto py-4 px-6 bg-white text-black uppercase tracking-wider hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 text-center"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CostEstimator;