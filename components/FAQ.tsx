
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "How do you source your decision-makers?", a: "We exclusively leverage a proprietary network of relationships built over 15 years in the institutional space. We do not use commercial lists or broad scraping." },
    { q: "Is there a long-term commitment requirement?", a: "Engagements are structured in 6-month cycles to ensure depth of results, though we operate on a partnership trust model rather than restrictive contracts." },
    { q: "Do you offer category exclusivity?", a: "Strictly. Once we partner with a firm in a specific niche, we do not accept direct competitors for the duration of the engagement." },
    { q: "What constitutes a 'High-Intent' introduction?", a: "An introduction occurs only when a buyer has articulated a specific pain point or budgetary mandate that aligns directly with your solution's core value." }
  ];

  return (
    <section id="faq" className="bg-brand-dark py-20 md:py-40 border-t border-white/5 scroll-mt-20">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
           <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Protocols</span>
          <h2 className="text-5xl md:text-7xl font-black leading-none text-white font-serif">
            Strategic <br/><span className="italic text-white/10 font-normal">Clarification.</span>
          </h2>
        </div>
        
        <div className="space-y-4 mb-16">
          {faqs.map((item, i) => (
            <details key={i} className="group bg-white/5 border border-white/5 rounded-sm overflow-hidden transition-all duration-500 hover:bg-white/[0.08]">
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none select-none group-open:bg-brand-greenLight transition-all">
                <span className="text-[17px] font-black text-white tracking-tight uppercase">{item.q}</span>
                <span className="transition-transform duration-500 group-open:rotate-180 text-brand-gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </summary>
              <div className="p-8 pt-4 text-white/60 text-[15px] leading-relaxed font-bold border-t border-white/5">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center p-12 border border-brand-gold/20 bg-brand-greenLight/20 rounded-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl pointer-events-none"></div>
           <p className="text-white text-[15px] mb-8 font-black uppercase tracking-tight italic">Require deeper engagement intelligence?</p>
           <a href="#hero" className="bg-brand-gold text-brand-dark px-10 py-4 text-[12px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all duration-500 rounded-full inline-block shadow-premium">
             Consult Principal
           </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
