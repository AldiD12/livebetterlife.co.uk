import React from 'react';

const steps = [
  {
    number: "01",
    title: "CONSULTATION",
    description: "We discuss your vision and goals for the project.",
  },
  {
    number: "02",
    title: "DESIGN",
      description: "Our team creates custom plans and visuals that match your needs and style.",
    },
  {
    number: "03",
    title: "PLANNING",
    description: "We handle all necessary permits and create detailed timelines.",
  },
  {
    number: "04",
    title: "CONSTRUCTION",
    description: "We build your home with precision and attention to detail.",
  },
  {
    number: "05",
    title: "COMPLETION",
    description: "We ensure everything meets our high standards before we present your finished space.",
  }
];

const ProcessTimeline = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif">
            OUR PROCESS
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            We follow a structured approach to ensure exceptional results from concept to completion.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 p-6 md:p-12 flex flex-col items-center md:items-start">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-light text-gray-300 mr-4">{step.number}</span>
                    <h3 className="text-xl font-light tracking-[0.15em] text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 font-light tracking-wide leading-relaxed text-center md:text-left">
                    {step.description}
                  </p>
                </div>
                
                <div className="hidden md:flex justify-center items-center w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm z-10 absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-gray-900"></div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline; 