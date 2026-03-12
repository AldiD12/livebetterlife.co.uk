import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
}

const FAQ: React.FC<FAQProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  description = "Common questions about our home renovation services in London"
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="py-12 bg-gray-50">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {description}
          </p>
        </div>

        <div className="mt-12">
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                <dt>
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex-shrink-0">
                      <svg
                        className={`h-6 w-6 transform ${
                          openIndex === index ? 'rotate-180' : ''
                        } transition-transform duration-200`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={`${
                    openIndex === index ? 'block' : 'hidden'
                  } px-6 py-4 bg-gray-50`}
                >
                  <p className="text-base text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 