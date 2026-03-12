import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Home, FileText, Hammer, Sparkles, Calendar } from 'lucide-react';

const ProcessTimeline = () => {
  const steps = [
    {
      number: "1",
      icon: Phone,
      title: "Free Consultation",
      duration: "30 minutes, phone or video",
      description: "You tell us what you love about your home and what you want to change. We explain whether full house or kitchen-only makes sense.",
      details: [
        "Your budget & timeline discussion",
        "Must-haves vs nice-to-haves",
        "Rough cost estimates provided",
        "Planning permission requirements explained"
      ],
      responseTime: "Within 2 hours (Mon-Fri, 8am-6pm)",
      cta: "Book Free Consultation"
    },
    {
      number: "2", 
      icon: Home,
      title: "Site Visit",
      duration: "Free, no obligation",
      description: "Within 3-5 days of consultation. We measure rooms, assess structure, and discuss design ideas.",
      details: [
        "Measure rooms & assess structure",
        "Take photos for planning",
        "Discuss design ideas in detail",
        "Check for any issues (damp, structural, etc.)"
      ],
      responseTime: "Same-day visits available for West Hampstead, Brondesbury, Kingsbury",
      duration2: "1-2 hours on-site"
    },
    {
      number: "3",
      icon: FileText, 
      title: "Detailed Quote",
      duration: "Free, itemized breakdown",
      description: "Within 7 days of site visit. Two options provided: Kitchen-only vs Full house renovation.",
      details: [
        "Itemized breakdown (materials, labor, everything)",
        "Fixed-price guarantee included",
        "Timeline with weekly milestones",
        "3D renders (for full house projects over £50K)"
      ],
      responseTime: "Questions answered within 24 hours",
      guarantee: "No pressure to decide immediately - take your time"
    },
    {
      number: "4",
      icon: Calendar,
      title: "Planning & Approvals",
      duration: "8-12 weeks (if needed)",
      description: "We handle all architect drawings, planning applications, and building control notifications.",
      details: [
        "Architect drawings prepared",
        "Structural engineer calculations",
        "Planning application submission",
        "Party wall agreements (if needed)"
      ],
      responseTime: "Weekly updates via email/WhatsApp",
      guarantee: "Planning included in quote - no hidden fees"
    },
    {
      number: "5",
      icon: Hammer,
      title: "Project Starts", 
      duration: "Typical 10-week timeline",
      description: "Your project manager is on-site daily with WhatsApp updates and weekly progress meetings.",
      details: [
        "Week 1: Strip out & structural work",
        "Week 2-3: First fix (plumbing, electrical, plastering)",
        "Week 4-6: Second fix (kitchen, bathrooms, flooring)",
        "Week 7-8: Decoration & finishing"
      ],
      responseTime: "Daily cleanup & respectful of neighbors",
      guarantee: "Tools locked away overnight for security"
    },
    {
      number: "6",
      icon: Sparkles,
      title: "Completion & Handover",
      duration: "Final walkthrough together",
      description: "Building Control sign-off, 12-month warranty activated, and welcome home!",
      details: [
        "Snagging list created (if any issues)",
        "All snags resolved within 7 days", 
        "Building Control sign-off (if applicable)",
        "12-month warranty activated"
      ],
      responseTime: "Average client satisfaction: 4.8★ / 5.0",
      guarantee: "1-month, 6-month & 12-month follow-ups included"
    }
  ];

  const timeline = [
    { day: "Day 1", event: "Free consultation" },
    { day: "Day 3-5", event: "Site visit" },
    { day: "Day 12", event: "Quote received" },
    { day: "Day 20", event: "Accept quote" },
    { day: "Day 21-110", event: "Planning approval (if needed)" },
    { day: "Day 111", event: "Project starts" },
    { day: "Day 181", event: "Completion (typical 10-week project)" }
  ];

  const guarantees = [
    "Fixed-price - no surprise costs",
    "Stage payments - never pay upfront", 
    "On-time delivery - or we pay YOU £100/day late",
    "12-month workmanship warranty",
    "£5M insurance throughout",
    "Daily site cleanup",
    "Respectful of neighbors",
    "Professional communication"
  ];

  return (
    <div className="py-20 bg-gray-50 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm tracking-[0.3em] text-gray-500 uppercase">Our Process</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
          <h2 className="text-3xl font-light tracking-wide text-gray-900 font-serif mb-6 sm:text-4xl md:text-5xl lg:tracking-[0.2em]">
            How Our NW London Renovation Process Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light sm:text-xl">
            From free consultation to move-in day - here's exactly what happens
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 sm:p-12">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  
                  {/* Step Header */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-3xl font-light text-gray-400">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <div className="text-sm text-blue-600 font-medium mb-4">
                      {step.duration}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Details */}
                  <div className="lg:col-span-1">
                    <h4 className="font-medium text-gray-900 mb-3">What happens:</h4>
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                    {step.duration2 && (
                      <div className="mt-4 text-sm text-gray-600">
                        <strong>Duration:</strong> {step.duration2}
                      </div>
                    )}
                  </div>

                  {/* Step Guarantees */}
                  <div className="lg:col-span-1">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">Response Time:</span>
                      </div>
                      <p className="text-sm text-green-700 mb-3">{step.responseTime}</p>
                      
                      {step.guarantee && (
                        <>
                          <div className="flex items-center gap-2 mb-2">
                            <Shield className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-800">Our Promise:</span>
                          </div>
                          <p className="text-sm text-green-700">{step.guarantee}</p>
                        </>
                      )}
                    </div>

                    {step.cta && (
                      <div className="mt-4">
                        <Link 
                          to="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-blue-700 rounded-lg"
                        >
                          {step.cta}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Graphic */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-20 sm:p-12">
          <h3 className="text-2xl font-light text-gray-900 font-serif mb-8 text-center">
            Complete Timeline Overview
          </h3>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-20 text-sm font-medium text-blue-600 flex-shrink-0">
                  {item.day}
                </div>
                <div className="flex-1 h-px bg-gray-200"></div>
                <div className="text-sm text-gray-700">
                  {item.event}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-6 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-lg font-bold text-blue-900">6 months total</div>
              <div className="text-sm text-blue-700">From first call to completion (with planning)</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-lg font-bold text-green-900">12 weeks</div>
              <div className="text-sm text-green-700">If no planning permission needed</div>
            </div>
          </div>
        </div>

        {/* Guarantee Box */}
        <div className="bg-gray-900 text-white rounded-xl p-8 mb-20 sm:p-12">
          <div className="text-center mb-8">
            <Shield className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-light tracking-wide font-serif mb-4">
              Our Promises
            </h3>
            <p className="text-white/80">If you're not happy, we make it right.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/90">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-light tracking-wide text-gray-900 font-serif mb-4 sm:text-4xl">
            Ready to Start Your NW London Renovation?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            127 families have trusted this process since 2010. Your West Hampstead, Brondesbury, or Kingsbury home could be next.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row sm:gap-6">
            <Link 
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-gray-900 text-white text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-gray-800 rounded-lg"
            >
              Book Free Consultation
            </Link>
            <a 
              href="tel:+447387844751"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 border border-gray-900 text-gray-900 text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-gray-900 hover:text-white rounded-lg"
            >
              <Phone className="w-4 h-4" />
              Call: 07387 844751
            </a>
            <a 
              href="https://wa.me/447387844751"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 border border-gray-900 text-gray-900 text-sm tracking-wider uppercase font-medium transition-all duration-500 hover:bg-gray-900 hover:text-white rounded-lg"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            No obligation. No pressure. No hidden fees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline; 