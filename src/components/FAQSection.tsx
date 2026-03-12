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
      answer: "£50,000-£150,000 depending on size, scope, and finishes.<br><br><strong>Typical breakdown for 3-bed Victorian terraced house:</strong><br>• Kitchen extension: £30,000-£45,000<br>• 2 bathrooms: £18,000-£30,000<br>• 3 bedrooms (decoration, flooring, built-ins): £12,000-£18,000<br>• Living room transformation: £8,000-£12,000<br>• Hallway, stairs, structural work: £10,000-£20,000<br>• Planning, building control, project management: £10,000-£15,000<br><br><strong>Average full house project: £75,000</strong><br><br>Recent example: Tennyson Road NW6 - £85,000 for complete transformation<br>Kitchen-only projects: £25,000-£60,000"
    },
    {
      question: "I was thinking of just doing the kitchen. Should I do the whole house?",
      answer: "<strong>80% of our clients who call about kitchens end up doing full house renovations.</strong><br><br><strong>Option A: Kitchen only</strong><br>Cost: £35,000 now<br>Result: New kitchen, but...<br>• Rest of house still dated<br>• Bathrooms need work in 2 years (£25,000)<br>• Bedrooms need work in 4 years (£15,000)<br>• 3 separate disruptions over 5 years<br>• Total: £75,000 spent gradually<br><br><strong>Option B: Full house now</strong><br>Cost: £75,000 now<br>Result:<br>• New kitchen + 2 new bathrooms + All bedrooms refreshed + Living areas transformed<br>• One disruption (10 weeks)<br>• Everything coordinated & cohesive<br>• Total: £75,000 spent once<br><br><strong>You save: £0 (same total cost)</strong><br><strong>You gain: Everything done at once, better design, no future disruptions</strong><br><br>Recent client: 'We called about a kitchen. They showed us the math. We did the full house. So glad we did.' - Tennyson Road, West Hampstead"
    },
    {
      question: "How long will my NW6 / NW9 / HA3 renovation take?",
      answer: "<strong>Typical timelines:</strong><br>• Kitchen only: 4-8 weeks<br>• Full bathroom: 2-4 weeks<br>• Loft conversion: 8-10 weeks<br>• Full house renovation: 8-12 weeks<br><br><strong>Add planning approval time:</strong><br>• Camden Council: 8-12 weeks<br>• Brent Council: 8-10 weeks<br>• Harrow Council: 8-12 weeks<br>• Westminster: 10-14 weeks<br><br><strong>Total timeline WITH planning: 4-6 months</strong> from first call to completion<br><strong>Total timeline WITHOUT planning: 10-14 weeks</strong><br><br><strong>Recent examples:</strong><br>• Tennyson Road NW6: 10 weeks (finished 3 days early)<br>• Brondesbury Road NW6: 8 weeks<br>• Kingsbury Road NW9: 9 weeks<br><br><strong>89% of our projects finish on time or early.</strong>"
    },
    {
      question: "What's your payment structure? Do I pay everything upfront?",
      answer: "<strong>No. Stage payments only. Never full payment upfront.</strong><br><br><strong>Standard payment structure (25% increments):</strong><br><br><strong>Payment 1: 25% Deposit</strong><br>When: Upon signing contract<br>Covers: Design, planning application, materials ordered<br>Example: £18,750 (on £75K project)<br><br><strong>Payment 2: 25% Project Start</strong><br>When: Day 1 of work on site<br>Covers: Strip out, structural work, first fix begins<br><br><strong>Payment 3: 25% Halfway</strong><br>When: Major work complete (kitchen in, bathrooms in)<br>Covers: Second fix, finishing begins<br><br><strong>Payment 4: 25% Completion</strong><br>When: Final snagging done, you're happy<br>Covers: Final touches, handover<br><br><strong>You NEVER pay ahead of work done.</strong><br>If anything goes wrong, you're protected (you've only paid for work completed).<br><br>Bank transfer or cheque. No cash. Invoices emailed at each stage."
    },
    {
      question: "Can I live in my home during the renovation?",
      answer: "<strong>Depends on project scope:</strong><br><br><strong>Single room (kitchen OR bathroom):</strong><br>✅ Yes, most families stay<br>• We work room-by-room<br>• Kitchen: Use other rooms, we set up temporary kitchen<br>• Bathroom: We have portable toilet options<br><br><strong>Loft conversion:</strong><br>✅ Yes, ground floor remains livable<br>• We seal off stairs<br>• Dust barriers throughout<br><br><strong>Full house renovation:</strong><br>⚠️ Challenging but possible<br>• Ground floor usually uninhabitable for 2-4 weeks<br>• Upstairs may be OK<br>• No kitchen for 4-6 weeks<br>• 1 bathroom usually kept working<br><br><strong>Whole house gut renovation:</strong><br>❌ We recommend moving out for 8-12 weeks<br>• Too disruptive<br>• Health & safety concerns<br>• Faster completion if empty<br><br>We discuss this during free consultation based on your specific project.<br><br><strong>Alternative:</strong> Many clients stay with family/friends for 2-3 months."
    },
    {
      question: "Do you handle planning permission in Camden / Brent / Harrow?",
      answer: "<strong>Yes. We handle ALL planning applications for:</strong><br><br><strong>Camden Council</strong> (West Hampstead, Kilburn, etc.)<br>✓ 15+ years experience with Camden planning<br>✓ Know the officers personally<br>✓ Understand conservation area requirements<br>✓ Success rate: 94%<br><br><strong>Brent Council</strong> (Brondesbury, Kingsbury, Kilburn, etc.)<br>✓ 12+ years experience with Brent planning<br>✓ Familiar with all Brent conservation areas<br><br><strong>Harrow Council</strong> (Kenton, etc.)<br>✓ 10+ years Harrow experience<br>✓ Understand local policies<br><br><strong>Westminster / RBKC</strong> (if your project borders these)<br>✓ Listed building specialists<br>✓ Know strict conservation rules<br><br><strong>What we handle:</strong><br>✓ Architect drawings<br>✓ Structural engineer calcs<br>✓ Planning application submission<br>✓ Responding to council queries<br>✓ Building control notifications<br>✓ Party wall agreements<br><br><strong>You just:</strong> Review and approve designs<br><br><strong>Average approval time:</strong> 8-12 weeks<br><strong>Planning included in all quotes - no hidden fees.</strong>"
    },
    {
      question: "How do I know you're legitimate? Can I verify your work?",
      answer: "<strong>Yes. We're one of the most transparent contractors in NW London:</strong><br><br><strong>Physical Evidence:</strong><br>✓ 6 recent projects you can drive by and see:<br>• Tennyson Road, West Hampstead NW6<br>• Brondesbury Road, Brondesbury NW6<br>• Russell Gardens Mews, Kensington W14<br>• Davies Street, Mayfair W1K<br>• Kingsbury Road, Kingsbury NW9<br>• Kenton Lane, Harrow HA3<br><br><strong>Ask neighbors on these streets - they watched us work.</strong><br><br><strong>Online Presence:</strong><br>✓ Google Business: 4.8★ average (23 reviews)<br>✓ Website: livebetterlife.co.uk (this site)<br><br><strong>Official Registrations:</strong><br>✓ FMB (Federation of Master Builders) member<br>✓ CHAS health & safety accredited<br>✓ Constructionline registered<br>✓ Public liability insurance: £5M<br><br><strong>References:</strong><br>✓ We provide 3 recent client references<br>✓ You can call them before deciding<br>✓ Most are happy to show you their completed homes<br><br><strong>Track Record:</strong><br>✓ 127 completed projects since 2010<br>✓ 15 years in NW London<br>✓ 89% on-time completion rate<br><br><strong>Red flags we DON'T have:</strong><br>✅ No asking for cash payments<br>✅ No requesting full payment upfront<br>✅ No high-pressure sales tactics<br>✅ No fake addresses"
    },
    {
      question: "What guarantees do you offer?",
      answer: "<strong>12-Month Workmanship Warranty</strong><br>Covers: All our labor and installation<br>If anything goes wrong with our work in first year, we fix it free.<br><br><strong>Manufacturer Warranties (passed to you):</strong><br>• Kitchen cabinets: 10-25 years (depends on brand)<br>• Appliances: 1-5 years<br>• Bathroom fixtures: 5-10 years<br>• Windows/doors: 10 years<br>• Boiler: 5-10 years<br><br><strong>Structural Warranty:</strong><br>• 10-year insurance-backed warranty on structural work<br><br><strong>Insurance Coverage:</strong><br>• £5M public liability (covers damage to your property)<br>• £10M employer's liability (covers our workers)<br><br><strong>Building Control Sign-Off:</strong><br>✓ All structural work inspected by building control<br>✓ Official completion certificate issued<br>✓ Required for future house sales<br><br><strong>FMB Guarantee:</strong><br>✓ Federation of Master Builders approved contractor<br>✓ Independent dispute resolution if needed<br>✓ Financial protection<br><br><strong>Our Promise:</strong> If you're not 100% satisfied at handover, we make it right.<br><br><strong>No 'final payment' until you're happy.</strong>"
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
    <section id="faq" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm tracking-[0.3em] text-gray-500 uppercase">Common Questions</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
          <h2 className="text-3xl font-light tracking-wide text-gray-900 font-serif mb-4 sm:text-4xl lg:tracking-[0.2em]">
            Frequently Asked Questions
          </h2>
          <h3 className="text-xl text-gray-700 font-light mb-6">
            NW London Home Renovations
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Everything you need to know about renovating in West Hampstead, Brondesbury, Kingsbury & Harrow
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="font-light text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <div
                id={`faq-${index}`}
                className={`px-6 pb-4 pt-2 text-gray-600 ${openIndex === index ? 'block' : 'hidden'}`}
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
