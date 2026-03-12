import React from 'react';
import { Star, Shield, Award, Users } from 'lucide-react';

const TrustSignals = () => {
  const testimonials = [
    {
      name: "Sarah & James Mitchell",
      location: "Chiswick, W4",
      project: "Full House Renovation - £120k",
      rating: 5,
      text: "Exceptional work on our Victorian house renovation. The team managed everything professionally and delivered exactly what we envisioned. Worth every penny.",
      image: "/images/testimonials/sarah-james.jpg"
    },
    {
      name: "David Thompson",
      location: "Kilburn, NW6", 
      project: "Kitchen Extension - £85k",
      rating: 5,
      text: "Outstanding kitchen extension that transformed our home. The project management was flawless and they stayed within budget and timeline.",
      image: "/images/testimonials/david.jpg"
    },
    {
      name: "Emma Rodriguez",
      location: "Kensal Green, NW10",
      project: "Loft Conversion - £65k",
      rating: 5,
      text: "Professional, reliable, and delivered exceptional quality. Our loft conversion exceeded expectations and added significant value to our property.",
      image: "/images/testimonials/emma.jpg"
    }
  ];

  const certifications = [
    { name: "Federation of Master Builders", logo: "/images/certifications/fmb.png" },
    { name: "NHBC Registered", logo: "/images/certifications/nhbc.png" },
    { name: "Checkatrade Approved", logo: "/images/certifications/checkatrade.png" },
    { name: "Which? Trusted Trader", logo: "/images/certifications/which.png" }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed", icon: Award },
    { number: "15+", label: "Years Experience", icon: Shield },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "£2.5M+", label: "Projects Delivered", icon: Users }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="w-8 h-8 text-gray-900 mx-auto mb-3" />
                <div className="text-3xl font-light text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 tracking-wide">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif text-center mb-12">
            WHAT OUR CLIENTS SAY
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-gray-500 mt-1">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-xl font-light tracking-[0.15em] text-gray-900 mb-8">
            CERTIFIED & TRUSTED
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="h-16 flex items-center justify-center mb-2">
                  <div className="text-sm text-gray-600 font-medium">{cert.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-16 bg-gray-900 text-white p-8 rounded-lg text-center">
          <Shield className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-light tracking-wide mb-4">
            10-YEAR STRUCTURAL GUARANTEE
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We stand behind our work with comprehensive warranties and full insurance coverage. 
            Your investment is protected with our industry-leading guarantees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;