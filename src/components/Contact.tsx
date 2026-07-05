import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const CircleArrow = ({ className = '' }: { className?: string }) => (
  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full border border-current ${className}`} aria-hidden="true">
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

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
    info: { error: false, msg: null as string | null },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus((prev) => ({ ...prev, submitting: true }));

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
        info: { error: false, msg: "Message sent successfully! We'll call you within 2 hours." },
      });
      setFormData({ name: '', email: '', phone: '', postcode: '', projectType: '', message: '' });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try calling us directly: 07387 844751' },
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const areas = [
    'West Hampstead & Brondesbury (NW6)',
    'Kingsbury (NW9)',
    'Mill Hill (NW7)',
    'Willesden & Kensal Green (NW10)',
    'Harrow & Kenton (HA3)',
    'Kensington (W14)',
    'Mayfair (W1K)',
  ];

  const steps = [
    'We call within 2 hours (Mon–Fri)',
    '30-minute free consultation',
    'Free site visit within 3–5 days',
    'Detailed quote within 7 days',
    'You decide — no pressure',
  ];

  const inputClass =
    'w-full px-4 py-3 bg-cream border border-line rounded-xl text-ink placeholder-stone/60 focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-colors';
  const labelClass = 'block text-sm font-medium text-ink mb-2';

  return (
    <section id="contact" className="py-20 sm:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-brass" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-brass-deep">Get started</span>
          </div>
          <h2 className="font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
            Ready to transform your NW London home?
          </h2>
          <p className="text-lg text-stone leading-relaxed">
            Book your free consultation today — we respond within 2 hours. 127 families across West Hampstead,
            Brondesbury, Kingsbury and Harrow have trusted us since 2010.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: contact methods */}
          <div className="lg:col-span-2 space-y-6">
            <a href="tel:+447387844751" className="group flex items-start gap-4 bg-ivory border border-line rounded-2xl p-6 shadow-card hover:border-brass transition-colors">
              <Phone className="w-6 h-6 text-brass flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-display text-lg text-ink">Call us</div>
                <div className="text-ink font-medium">07387 844751</div>
                <div className="text-sm text-stone mt-1">Mon–Fri 8am–6pm · Sat 9am–2pm</div>
              </div>
            </a>
            <a href="https://wa.me/447387844751" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 bg-ivory border border-line rounded-2xl p-6 shadow-card hover:border-brass transition-colors">
              <MessageCircle className="w-6 h-6 text-brass flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-display text-lg text-ink">WhatsApp us</div>
                <div className="text-ink font-medium">07387 844751</div>
                <div className="text-sm text-stone mt-1">Fastest reply — send photos & your postcode</div>
              </div>
            </a>
            <a href="mailto:info@livebetterlife.co.uk" className="group flex items-start gap-4 bg-ivory border border-line rounded-2xl p-6 shadow-card hover:border-brass transition-colors">
              <Mail className="w-6 h-6 text-brass flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-display text-lg text-ink">Email us</div>
                <div className="text-ink font-medium break-all">info@livebetterlife.co.uk</div>
                <div className="text-sm text-stone mt-1">Response within 2 hours (Mon–Fri)</div>
              </div>
            </a>

            {/* What happens next */}
            <div className="bg-ink text-cream rounded-2xl p-6">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-brass mb-4">What happens next</div>
              <ol className="space-y-3">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-cream/85">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-brass/50 text-brass flex items-center justify-center text-xs">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="bg-ivory border border-line rounded-card shadow-card p-7 sm:p-10">
              <h3 className="font-display font-semibold text-2xl text-ink mb-2">Request a free consultation</h3>
              <p className="text-stone mb-8">We'll call you within 2 hours to schedule a site visit.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full name</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone number</label>
                    <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} placeholder="07…" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="jane@email.com" />
                  </div>
                  <div>
                    <label htmlFor="postcode" className={labelClass}>Postcode</label>
                    <input id="postcode" type="text" name="postcode" value={formData.postcode} onChange={handleChange} required className={inputClass} placeholder="NW6 1AB" />
                  </div>
                </div>
                <div>
                  <label htmlFor="projectType" className={labelClass}>What are you planning?</label>
                  <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} required className={inputClass}>
                    <option value="">Select project type</option>
                    <option value="full-house">Full house renovation</option>
                    <option value="kitchen">Kitchen renovation / extension</option>
                    <option value="bathroom">Bathroom renovation</option>
                    <option value="loft">Loft conversion</option>
                    <option value="victorian">Victorian restoration</option>
                    <option value="advice">Not sure yet — need advice</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Brief description (optional)</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className={`${inputClass} resize-none`} placeholder="Tell us about your project…" />
                </div>

                {status.info.msg && (
                  <div className={`p-4 rounded-xl text-sm ${status.info.error ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                    {status.info.msg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`group inline-flex items-center justify-center gap-3 pl-8 pr-3 py-4 bg-ink text-cream rounded-full font-medium transition-colors hover:bg-ink-soft ${status.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {status.submitting ? 'Sending…' : 'Request free consultation'}
                  <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Reassurance + areas + hours */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-14 border-t border-line">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-brass-deep mb-4">No obligation</div>
            <ul className="space-y-2 text-stone">
              {['Free consultation', 'Free site visit', 'Free detailed quote', 'No commitment required', 'No high-pressure sales'].map((g) => (
                <li key={g} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brass" /> {g}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-brass-deep mb-4">Areas we serve</div>
            <div className="flex flex-wrap gap-2">
              {areas.map((a) => (
                <span key={a} className="text-sm text-stone border border-line rounded-full px-3 py-1.5 bg-ivory">{a}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-brass-deep mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brass" /> Office hours
            </div>
            <div className="space-y-1.5 text-stone">
              <div>Monday–Friday: 8:00am – 6:00pm</div>
              <div>Saturday: 9:00am – 2:00pm</div>
              <div>Sunday: Closed (emergency only)</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 rounded-card bg-ink text-cream px-8 py-14 sm:px-14 sm:py-16 text-center">
          <h3 className="font-display font-semibold text-3xl sm:text-4xl mb-4">Don't move. Renovate.</h3>
          <p className="text-cream/75 text-lg max-w-2xl mx-auto mb-9">
            Transform your Victorian or Edwardian home for less than it costs to move. 127 families made this choice since 2010.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+447387844751" className="group inline-flex items-center justify-center gap-3 pl-8 pr-3 py-4 bg-ivory text-ink rounded-full font-medium hover:bg-cream transition-colors">
              Call 07387 844751
              <CircleArrow className="text-brass group-hover:rotate-45 transition-transform duration-300" />
            </a>
            <Link to="/portfolio" className="group inline-flex items-center justify-center gap-3 pl-8 pr-3 py-4 border border-cream/40 text-cream rounded-full font-medium hover:bg-cream/10 transition-colors">
              See our work
              <CircleArrow className="text-cream group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
