import React from 'react';

const reasons = [
  {
    title: "EXPERTISE",
    description: "15+ years of experience in high-end renovations and construction.",
    icon: (
      <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "QUALITY",
    description: "We pay attention to every detail and use premium materials.",
    icon: (
      <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "TRANSPARENCY",
    description: "We are transparent and communicate clearly throughout the entire project.",
    icon: (
      <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "RELIABILITY",
    description: "We are reliable and deliver on time and within budget.",
    icon: (
      <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const WhyChooseUs = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif">
            WHY CHOOSE US
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
          We focus on quality and pay attention to every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="p-8 bg-gray-50 border border-gray-100 group hover:border-gray-300 transition-all duration-300">
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-light tracking-[0.15em] text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 font-light tracking-wide leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 