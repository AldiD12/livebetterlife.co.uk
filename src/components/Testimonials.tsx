import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "The attention to detail and craftsmanship exceeded our expectations. They transformed our space into something truly extraordinary.",
    author: "Sarah & James Thompson",
    project: "SW6-541 FULHAM ROAD",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
  {
    id: 2,
    quote: "Professional, innovative, and incredibly responsive throughout the entire process. The end result is exactly what we envisioned.",
    author: "Michael Richardson",
    project: "SW3-545 NEW KINGS ROAD",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
  },
  {
    id: 3,
    quote: "Their expertise in both design and construction made the entire renovation process seamless. We couldn't be happier with our new home.",
    author: "Emma & David Clarke",
    project: "SW1P-547 PIMLICO",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4",
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-[0.2em] text-gray-900 font-serif">
            CLIENT TESTIMONIALS
          </h2>
          <p className="mt-6 text-lg text-gray-600 font-light tracking-wide">
            Discover what our clients say about their renovation journey
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white p-6 sm:p-8">
                      <div className="aspect-[16/9] overflow-hidden mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.project}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <blockquote className="mb-6">
                        <p className="text-gray-700 italic leading-relaxed font-light">
                          "{testimonial.quote}"
                        </p>
                      </blockquote>
                      <div className="border-t border-gray-100 pt-4">
                        <p className="font-light text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-600 tracking-wider mt-1 font-light">
                          {testimonial.project}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevSlide}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white p-8"
            >
              <div className="absolute top-6 right-6">
                <svg
                  className="h-8 w-8 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
                </svg>
              </div>
              <div className="aspect-[16/9] overflow-hidden mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.project}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <blockquote className="mb-6">
                <p className="text-gray-700 italic leading-relaxed font-light">
                  "{testimonial.quote}"
                </p>
              </blockquote>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-light text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600 tracking-wider mt-1 font-light">
                  {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 