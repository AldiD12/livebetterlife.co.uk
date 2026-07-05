import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { createFaqSchema } from '../utils/structuredData';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "How much does a full house renovation cost in West Hampstead / Brondesbury / Kingsbury?",
      answer: "We position ourselves as a highly cost-competitive, budget-friendly local builder in North West London. Because we source materials directly through trade accounts and run efficient, local teams, we can offer premium results without the high contractor premium.<br><br>Every project is unique, and costs vary based on size, structural complexity, and finishes. We recommend booking a free, no-obligation consultation where we will compile an itemised quote tailored directly to your budget."
    },
    {
      question: "I was thinking of just doing the kitchen. Should I do the whole house?",
      answer: "Doing a full house renovation at once is significantly more cost-effective than doing it room-by-room over several years. Sourcing materials in bulk, handling all structural work simultaneously, and booking subcontractors in one block saves considerable labor and administration costs.<br><br>Additionally, doing it all at once minimizes the total disruption to your household. We can design and package a complete renovation plan tailored to fit your budget, ensuring cohesive styling across your kitchen, bathrooms, and bedrooms."
    },
    {
      question: "How long will my NW6 / NW9 / HA3 renovation take?",
      answer: "<strong>Typical timelines:</strong><br>• Kitchen only: 4-8 weeks<br>• Full bathroom: 2-4 weeks<br>• Loft conversion: 8-10 weeks<br>• Full house renovation: 8-12 weeks<br><br><strong>Add planning approval time (if needed):</strong><br>• Camden Council: 8-12 weeks<br>• Brent Council: 8-10 weeks<br>• Harrow Council: 8-12 weeks<br>• Westminster: 10-14 weeks<br><br><strong>89% of our projects finish on time or early.</strong>"
    },
    {
      question: "What's your payment structure? Do I pay everything upfront?",
      answer: "<strong>No. Stage payments only. Never full payment upfront.</strong><br><br>We use a standard, transparent payment structure split into 25% increments linked directly to verified project milestones (Deposit, Project Start, Halfway complete, and Handover).<br><br><strong>You NEVER pay ahead of work done.</strong> If anything goes wrong, you are fully protected. All payments are handled via bank transfer or check with detailed invoices."
    },
    {
      question: "Can I live in my home during the renovation?",
      answer: "<strong>Depends on project scope:</strong><br><br><strong>Single room (kitchen or bathroom):</strong><br>✅ Yes, most families stay. We work room-by-room and maintain dust barriers.<br><br><strong>Loft conversion:</strong><br>✅ Yes, ground floor remains livable.<br><br><strong>Full house renovation:</strong><br>⚠️ Challenging but possible. We discuss this during your free consultation based on your specific layout.<br><br><strong>Whole house gut renovation:</strong><br>❌ We recommend moving out temporarily. It ensures a safer site and allows for a faster, more efficient build."
    },
    {
      question: "Do you handle planning permission in Camden / Brent / Harrow?",
      answer: "<strong>Yes. We handle ALL planning applications for:</strong><br><br><strong>Camden Council</strong> (West Hampstead, Kilburn, etc.)<br>✓ 15+ years experience with Camden planning<br>✓ Know the officers personally<br>✓ Understand conservation area requirements<br>✓ Success rate: 94%<br><br><strong>Brent Council</strong> (Brondesbury, Kingsbury, Kilburn, etc.)<br>✓ 12+ years experience with Brent planning<br>✓ Familiar with all Brent conservation areas<br><br><strong>Harrow Council</strong> (Kenton, etc.)<br>✓ 10+ years Harrow experience<br>✓ Understand local policies<br><br><strong>Westminster / RBKC</strong> (if your project borders these)<br>✓ Listed building specialists<br>✓ Know strict conservation rules<br><br><strong>What we handle:</strong> Architect drawings, structural calculations, planning submissions, council queries, building control, and party wall agreements."
    },
    {
      question: "How do I know you're legitimate? Can I verify your work?",
      answer: "<strong>Yes. We're one of the most transparent contractors in NW London:</strong><br><br><strong>Physical Evidence:</strong><br>✓ 6 recent projects you can drive by and see:<br>• Tennyson Road, West Hampstead NW6<br>• Brondesbury Road, Brondesbury NW6<br>• Russell Gardens Mews, Kensington W14<br>• Davies Street, Mayfair W1K<br>• Kingsbury Road, Kingsbury NW9<br>• Kenton Lane, Harrow HA3<br><br><strong>Official Registrations:</strong><br>✓ CHAS health & safety accredited<br>✓ Constructionline registered<br>✓ Public liability insurance: £5M<br><br><strong>References:</strong><br>✓ We provide recent client references whom you can contact directly to verify our workmanship.<br><br><strong>Track Record:</strong><br>✓ 127 completed projects since 2010<br>✓ 15 years in NW London<br>✓ 89% on-time completion rate"
    },
    {
      question: "What guarantees do you offer?",
      answer: "<strong>12-Month Workmanship Warranty</strong><br>Covers all our labor and installation. If anything requires attention within the first year, we address it immediately at no cost.<br><br><strong>Manufacturer Warranties (passed to you):</strong><br>• Kitchen cabinets: 10-25 years<br>• Appliances: 1-5 years<br>• Bathroom fixtures: 5-10 years<br>• Windows/doors: 10 years<br>• Boiler: 5-10 years<br><br><strong>Structural Warranty:</strong><br>• 10-year insurance-backed warranty on structural work<br><br><strong>Insurance Coverage:</strong><br>• £5M public liability (covers damage to your property)<br>• £10M employer's liability<br><br><strong>Building Control Sign-Off:</strong><br>✓ All structural work inspected by building control<br>✓ Official completion certificate issued"
    }
  ];

  // Generate FAQ schema for structured data
  const faqStructuredData = createFaqSchema(faqs);
  
  // Add FAQ schema to the document head
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqStructuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [faqStructuredData]);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-brass" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-brass-deep">Common questions</span>
          </div>
          <h2 className="font-display font-semibold text-ink text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
            Everything you need to know
          </h2>
          <p className="text-lg text-stone leading-relaxed">
            Renovating in West Hampstead, Brondesbury, Kingsbury, Harrow and across North West London.
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-ivory border border-line rounded-2xl overflow-hidden shadow-card">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="font-display text-lg text-ink leading-snug">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brass flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brass flex-shrink-0" />
                )}
              </button>
              <div
                id={`faq-${index}`}
                className={`px-6 pb-6 pt-1 text-stone leading-relaxed ${openIndex === index ? 'block' : 'hidden'}`}
                dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br />') }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
