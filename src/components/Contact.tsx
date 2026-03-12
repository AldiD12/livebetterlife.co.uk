import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Clock, CheckCircle, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    projectType: '',
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
        'service_wvmeenw',
        'template_0rhihr9',
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          postcode: formData.postcode,
          project_type: formData.projectType,
          message: formData.message,
        },
        '_1MdPMQe38O6dCyh1'
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully! We\'ll call you within 2 hours.' }
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        postcode: '',
        projectType: '',
        message: ''
      });

    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try calling us directly: 07387 844751' }
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const primaryAreas = [
    "West Hampstead (NW6)",
    "Brondesbury (NW6)", 
    "Kilburn (NW6)",
    "Kingsbury (NW9)",
    "Harrow (HA3)",
    "Kenton (HA3)"
  ];

  const secondaryAreas = [
    "Maida Vale (W9)",
    "St John's Wood (NW8)",
    "Kensington (W14)",
    "Notting Hill (W11)",
    "Hampstead (NW3)",
    "Willesden (NW10)"
  ];

  const processSteps = [
    "We call within 2 hours (Mon-Fri business hours)",
    "30-minute free consultation (phone/video)",
    "Free site visit within 3-5 days",
    "Detailed quote within 7 days",
    "You decide - no pressure"
  ];

  const guarantees = [
    "Free consultation",
    "Free site visit",
    "Free detailed quote",
    "No commitment required",
    "No high-pressure sales",
    "Take your time to decide"
  ];

  const recentConsultations = [
    "West Hampstead NW6: Booked same day, quoted in 5 days",
    "Brondesbury NW6: Site visit next day, full house renovation started 3 months later",
    "Kingsbury NW9: Kitchen quote delivered in 4 days, upgraded to full house"
  ];

  return (
    <div id="contact" className="py-20 bg-gray-50 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm tracking-[0.3em] text-gray-500 uppercase">Get Started</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
          <h2 className="text-3xl font-light tracking-wide text-gray-900 font-serif mb-6 sm:text-4xl md:text-5xl lg:tracking-[0.2em]">
            Ready to Transform Your NW London Home?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-4 sm:text-xl">
            Book your free consultation today. We respond within 2 hours.
          </p>
          <p className="text-base text-gray-600 font-medium">
            127 families in West Hampstead, Brondesbury, Kingsbury & Harrow have trusted us since 2010.
          </p>
        </div>

        {/* Three Contact Options - Elegant Theme */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          
          {/* Option 1 - Phone */}
          <div className="text-center">
            <div className="mb-8">
              <Phone className="w-8 h-8 text-gray-900 mx-auto mb-6" />
              <h3 className="text-xl font-light tracking-[0.15em] text-gray-900 mb-4 uppercase">Call Us Now</h3>
              <div className="text-2xl font-light text-gray-900 mb-6 font-serif">07387 844751</div>
            </div>
            <div className="space-y-1 text-sm text-gray-600 mb-8 font-light">
              <div>Monday-Friday: 8am-6pm</div>
              <div>Saturday: 9am-2pm</div>
              <div>Sunday: Closed</div>
            </div>
            <p className="text-gray-600 mb-8 font-light leading-relaxed">
              Speak directly to our team. Average call back: 30 minutes
            </p>
            <a 
              href="tel:+447387844751"
              className="group relative overflow-hidden px-8 py-4 bg-gray-900 text-white text-sm tracking-[0.2em] uppercase font-light transition-all duration-500 hover:bg-transparent hover:text-gray-900 border border-gray-900"
            >
              <span className="relative z-10">Click to Call</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
          </div>

          {/* Option 2 - WhatsApp */}
          <div className="text-center">
            <div className="mb-8">
              <MessageCircle className="w-8 h-8 text-gray-900 mx-auto mb-6" />
              <h3 className="text-xl font-light tracking-[0.15em] text-gray-900 mb-4 uppercase">WhatsApp Us</h3>
              <div className="text-2xl font-light text-gray-900 mb-6 font-serif">07387 844751</div>
            </div>
            <p className="text-gray-700 mb-6 font-light">
              Fastest response time! Usually within 30 minutes
            </p>
            <div className="text-sm text-gray-600 mb-8 font-light leading-relaxed">
              <div className="mb-3">Send us:</div>
              <div>Photos of your space</div>
              <div>Your postcode</div>
              <div>Brief description</div>
            </div>
            <p className="text-gray-600 mb-8 font-light leading-relaxed">
              We'll reply with rough estimate same day.
            </p>
            <a 
              href="https://wa.me/447387844751"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden px-8 py-4 border border-gray-900 text-gray-900 text-sm tracking-[0.2em] uppercase font-light transition-all duration-500 hover:bg-gray-900 hover:text-white"
            >
              <span className="relative z-10">Open WhatsApp</span>
              <div className="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
          </div>

          {/* Option 3 - Email/Form */}
          <div className="text-center">
            <div className="mb-8">
              <Mail className="w-8 h-8 text-gray-900 mx-auto mb-6" />
              <h3 className="text-xl font-light tracking-[0.15em] text-gray-900 mb-4 uppercase">Send Enquiry</h3>
              <div className="text-lg font-light text-gray-900 mb-6 font-serif">info@livebetterlife.co.uk</div>
            </div>
            <p className="text-gray-700 mb-6 font-light">
              Response within 2 hours (Monday-Friday, 8am-6pm)
            </p>
            <p className="text-gray-600 mb-8 font-light leading-relaxed">
              Complete the form below for detailed consultation
            </p>
          </div>
        </div>

        {/* Elegant Contact Form */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-6">
              REQUEST FREE CONSULTATION
            </h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              We'll call you within 2 hours to schedule site visit.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-light tracking-[0.15em] text-gray-900 mb-3 uppercase">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-gray-900 transition-colors bg-transparent font-light"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-light tracking-[0.15em] text-gray-900 mb-3 uppercase">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-gray-900 transition-colors bg-transparent font-light"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="email" className="block text-sm font-light tracking-[0.15em] text-gray-900 mb-3 uppercase">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-gray-900 transition-colors bg-transparent font-light"
                  required
                />
              </div>

              <div>
                <label htmlFor="postcode" className="block text-sm font-light tracking-[0.15em] text-gray-900 mb-3 uppercase">
                  Postcode
                </label>
                <input
                  id="postcode"
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="e.g. NW6 1AB"
                  className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-gray-900 transition-colors bg-transparent font-light"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-light tracking-[0.15em] text-gray-900 mb-3 uppercase">
                What are you planning?
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-gray-900 transition-colors bg-transparent font-light"
                required
              >
                <option value="">Select project type</option>
                <option value="full-house">Full house renovation</option>
                <option value="kitchen">Kitchen renovation/extension</option>
                <option value="bathroom">Bathroom renovation</option>
                <option value="loft">Loft conversion</option>
                <option value="victorian">Victorian restoration</option>
                <option value="advice">Not sure yet - need advice</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-light tracking-[0.15em] text-gray-900 mb-3 uppercase">
                Brief description (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-gray-900 transition-colors bg-transparent font-light resize-none"
              />
            </div>

            {status.info.msg && (
              <div className={`p-6 ${status.info.error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'} font-light`}>
                {status.info.msg}
              </div>
            )}

            <div className="text-center pt-8">
              <button
                type="submit"
                disabled={status.submitting}
                className={`group relative overflow-hidden px-12 py-5 bg-gray-900 text-white text-sm tracking-[0.2em] uppercase font-light transition-all duration-500 hover:bg-transparent hover:text-gray-900 border border-gray-900
                  ${status.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span className="relative z-10">
                  {status.submitting ? 'Sending...' : 'Request Free Consultation'}
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </div>
          </form>
        </div>

        {/* What Happens Next - Elegant */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-6">
              WHAT HAPPENS NEXT
            </h3>
          </div>
          <div className="grid sm:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 border border-gray-300 text-gray-900 flex items-center justify-center font-light mb-6 mx-auto text-lg">
                  {index + 1}
                </div>
                <p className="text-sm text-gray-700 font-light leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Reassurance - Elegant */}
        <div className="border-t border-b border-gray-200 py-16 mb-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light tracking-[0.15em] text-gray-900 font-serif mb-8">
              NO OBLIGATION. NO PRESSURE. NO HIDDEN FEES.
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center">
                <CheckCircle className="w-6 h-6 text-gray-900 mx-auto mb-3" />
                <span className="text-gray-700 font-light tracking-wide">{guarantee}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h4 className="text-lg font-light tracking-[0.15em] text-gray-900 mb-6 uppercase">Recent consultations in your area:</h4>
            <div className="space-y-3 max-w-2xl mx-auto">
              {recentConsultations.map((consultation, index) => (
                <div key={index} className="text-gray-600 font-light">{consultation}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Areas We Serve - Elegant */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif mb-6">
              SERVING NORTH WEST LONDON
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="text-center">
              <h4 className="text-lg font-light tracking-[0.15em] text-gray-900 mb-8 uppercase">Primary areas:</h4>
              <div className="space-y-4">
                {primaryAreas.map((area, index) => (
                  <div key={index} className="text-gray-700 font-light tracking-wide">
                    {area}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-light tracking-[0.15em] text-gray-900 mb-8 uppercase">Also serving:</h4>
              <div className="space-y-4">
                {secondaryAreas.map((area, index) => (
                  <div key={index} className="text-gray-700 font-light tracking-wide">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-12 font-light tracking-wide">
            Free site visits for all NW London postcodes.
          </p>
        </div>

        {/* Office Hours - Elegant */}
        <div className="text-center mb-32">
          <div className="border-t border-gray-200 pt-16">
            <Clock className="w-8 h-8 text-gray-900 mx-auto mb-6" />
            <h3 className="text-2xl font-light tracking-[0.15em] text-gray-900 mb-8 uppercase font-serif">Office Hours</h3>
            <div className="space-y-3 text-gray-700 font-light mb-8">
              <div>Monday-Friday: 8:00am-6:00pm</div>
              <div>Saturday: 9:00am-2:00pm</div>
              <div>Sunday: Closed (emergency calls only)</div>
            </div>
            <p className="text-gray-600 font-light tracking-wide">
              Same-day site visits available for West Hampstead, Brondesbury, Kingsbury (subject to availability).
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gray-900 text-white rounded-xl p-12">
          <h3 className="text-3xl font-light tracking-wide font-serif mb-4 sm:text-4xl">
            Don't Move. Renovate.
          </h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your Victorian or Edwardian home for less than it costs to move.<br />
            127 families made this choice since 2010.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row sm:gap-6">
            <a 
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-gray-900 text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-gray-100 rounded-lg"
            >
              Book Free Consultation
            </a>
            <a 
              href="tel:+447387844751"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 border border-white text-white text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-white hover:text-gray-900 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              Call: 07387 844751
            </a>
            <a 
              href="https://wa.me/447387844751"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 border border-white text-white text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-white hover:text-gray-900 rounded-lg"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;