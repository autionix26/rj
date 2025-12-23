
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The introductions weren't just leads—they were warm, high-context conversations with decision-makers already seeking solutions.",
      author: "David Chen",
      role: "CRO at AstraGen",
      stat: "4 MO. ROI"
    },
    {
      quote: "Within 90 days, we secured three pilot programs with top-tier firms. AccessDeal's network is legitimate and highly influential.",
      author: "Dr. Sarah Lowell",
      role: "Founder at BioLogic",
      stat: "3 NEW PILOTS"
    },
    {
      quote: "Finally, a partner that understands enterprise sales cycles. They don't just 'send emails'; they build the bridge.",
      author: "James Mitchell",
      role: "VP Engineering at Vesper",
      stat: "12X PIPELINE"
    },
    {
      quote: "The 6-partner limit isn't marketing fluff. You truly feel like their only client. The attention to detail is remarkable.",
      author: "Linda Voss",
      role: "CEO at Quantum Life",
      stat: "ACTIVE PARTNER"
    }
  ];

  return (
    <section id="testimonials" className="bg-white py-24 sm:py-32 md:py-56 relative overflow-hidden border-y border-brand-dark/5">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-24 lg:mb-32 gap-10 sm:gap-12">
          <div className="max-w-[720px]">
            <span className="text-brand-gold text-[11px] font-bold uppercase tracking-[0.6em] mb-6 block">Partner Outcomes</span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-tight text-brand-dark font-serif">
              Validated <br />
              <span className="italic text-brand-dark/30 font-normal">By Principals.</span>
            </h2>
          </div>
          <div className="text-[12px] font-bold text-brand-dark uppercase tracking-[0.4em] max-w-[320px] leading-relaxed border-l-4 border-brand-gold pl-8">
            Full Case Audit reports available via secure partner dashboard login.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col h-full group bg-brand-stone/20 p-8 rounded-sm hover:bg-white hover:shadow-premium transition-all duration-700">
              <div className="mb-10">
                 <span className="text-[11px] font-bold text-white bg-brand-dark px-6 py-2 rounded-full uppercase tracking-widest group-hover:bg-brand-gold transition-colors duration-500">
                   {t.stat}
                 </span>
              </div>

              <blockquote className="text-[20px] sm:text-[22px] text-brand-dark leading-relaxed mb-12 font-bold italic font-serif">
                "{t.quote}"
              </blockquote>
              
              <div className="mt-auto pt-10 border-t border-brand-dark/10">
                 <div className="font-bold text-brand-dark text-[14px] uppercase tracking-[0.2em] mb-2">{t.author}</div>
                 <div className="text-[11px] text-brand-gold font-bold tracking-[0.3em] uppercase">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
