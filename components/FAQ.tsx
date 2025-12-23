
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "How do you source your decision-makers?", a: "We exclusively leverage a proprietary network of relationships built over 15 years in the institutional space. We do not use commercial lists or broad scraping." },
    { q: "Is there a long-term commitment requirement?", a: "Engagements are structured in 6-month cycles to ensure depth of results, though we operate on a partnership trust model rather than restrictive contracts." },
    { q: "Do you offer category exclusivity?", a: "Strictly. Once we partner with a firm in a specific niche, we do not accept direct competitors for the duration of the engagement." },
    { q: "What constitutes a 'High-Intent' introduction?", a: "An introduction occurs only when a buyer has articulated a specific pain point or budgetary mandate that aligns directly with your solution's core value." }
  ];

  return (
    <section id="faq" className="bg-brand-stone py-24 md:py-48 border-t border-brand-dark/5 scroll-mt-20">
      <div className="max-w-[840px] mx-auto px-6">
        <div className="text-center mb-20">
           <span className="text-brand-gold text-[13px] font-bold uppercase tracking-[0.5em] mb-6 block">Inquiry Protocol</span>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-brand-dark font-serif">
            Strategic <span className="italic text-brand-dark/40 font-normal">Clarification.</span>
          </h2>
        </div>
        
        <div className="space-y-6 mb-24">
          {faqs.map((item, i) => (
            <details key={i} className="group bg-white border border-brand-dark/10 rounded-sm overflow-hidden transition-all duration-500 shadow-sm hover:shadow-md">
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none select-none group-open:bg-brand-light transition-colors">
                <span className="text-[19px] font-bold text-brand-dark tracking-tight">{item.q}</span>
                <span className="transition-transform duration-500 group-open:rotate-180 text-brand-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </summary>
              <div className="p-8 pt-4 text-brand-dark/80 text-[17px] leading-relaxed font-bold">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center p-12 border-2 border-brand-dark/10 bg-white rounded-sm">
           <p className="text-brand-dark text-[16px] mb-10 font-bold italic">Require further detail regarding our engagement architecture?</p>
           <a href="#hero" className="bg-brand-dark text-white px-12 py-5 text-[13px] font-bold uppercase tracking-[0.3em] hover:bg-brand-gold transition-all duration-500 rounded-sm inline-block shadow-premium">
             Request Principal Consultation
           </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
