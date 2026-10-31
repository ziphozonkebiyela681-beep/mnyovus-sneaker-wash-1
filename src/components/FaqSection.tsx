import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppBookingUrl } from '../data/services';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How long does a sneaker wash or respray take?",
    answer: "Standard sneaker washes typically take 24 to 48 hours. We never rush drying with high heat, ensuring your midsoles, adhesives, and upper materials do not warp or crack. Respray services (Carvella, Arbiter) and Dye Restorations take 48 to 72 hours for proper curing and sealing."
  },
  {
    question: "Do I have to book in advance or can I just walk in?",
    answer: "Walk-ins are always welcome! You can simply drop off your pairs at our workshop at 34 Macintyre Street, Jeppestown, Johannesburg during opening hours. If you prefer, message us on WhatsApp at 060 399 1998 beforehand so we know you are coming."
  },
  {
    question: "Can you restore faded or scuffed Carvella and Arbiter shoes?",
    answer: "Yes! Carvella resprays (R180) and Arbiter refinishing (R120) are among our top specializations. We strip old build-up, apply professional color-matched pigment coats, and finish with a nourishing sealant that restores deep factory richness."
  },
  {
    question: "What is included in the R80 Basic Sneaker Wash?",
    answer: "The R80 Basic Sneaker Wash includes a full exterior deep scrub of the uppers and mesh, intense midsole & sole cleaning, laces removal and soaking wash, insole deodorizing mist, and controlled drying. Manje Clean!!"
  },
  {
    question: "Can you clean delicate materials like suede, nubuck, and canvas?",
    answer: "Absolutely. We adjust our brushes and solutions based on your footwear fabric. For suede and nubuck, we use gentle horsehair brushes, dry foams, and suede erasers with nap resetters to prevent water spotting."
  },
  {
    question: "How does your 2-in-1 sneaker washing machine work?",
    answer: "We use an industrial Dustria Service 2-in-1 Washer & Dryer station with dedicated motorized brushes for the sole, upper, and outsole grooves. It features a dehydrator spin cycle and an illuminated low-temperature drying cabinet. This cleans deeper than hand washing while completely protecting delicate glues and stitchwork from warping."
  },
  {
    question: "How do your workers handle and treat customer shoes?",
    answer: "Our team takes immense pride in their craft. Every pair is individually checked upon drop-off, treated with professional-grade cleaners and nitrile gloves, and inspected before return. We treat each pair—from daily beaters to luxury Carvella and Arbiter shoes—with respect and royalty care."
  },
  {
    question: "How do I make a booking or inquiry right now?",
    answer: "You can book directly by calling us at 060 399 1998 or tapping the WhatsApp button anywhere on this page. You can also use our interactive price calculator above to get a clear total before sending your message."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsAppGeneralUrl = createWhatsAppBookingUrl({
    notes: "Hi Mnyovu's, I have a quick question about shoe cleaning..."
  });

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-black tracking-widest uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-red-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1a38] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
            Everything you need to know about our cleaning processes, drop-offs, and booking via <strong className="text-[#0b1a38]">060 399 1998</strong>.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-[#0b1a38] text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-red-100 text-red-600' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help box */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
          <p className="text-xs sm:text-sm font-semibold text-slate-700">
            Have a unique pair or custom color change request?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 060 399 1998</span>
            </a>
            <a
              href={whatsAppGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 text-xs font-black flex items-center gap-1.5 transition"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
