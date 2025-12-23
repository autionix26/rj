
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
    <section id="testimonials" className="bg-brand-dark py-16 md:py-32 relative overflow-hidden border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-20 gap-8 sm:gap-10">
          <div className="max-w-[600px]">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Partner Outcomes</span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-white font-serif">
              Validated <br />
              <span className="italic text-white/20 font-normal">By Principals.</span>
            </h2>
          </div>
          <div className="text-[11px] font-bold text-white/40 uppercase tracking-[0.3em] max-w-[280px] leading-relaxed border-l-2 border-brand-gold pl-6">
            Full Case Audit reports available via secure partner dashboard login.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col h-full group bg-white/5 p-8 rounded-sm hover:bg-white/[0.08] transition-all duration-700">
              <div className="mb-8">
                 <span className="text-[9px] font-bold text-brand-dark bg-brand-gold px-4 py-1.5 rounded-full uppercase tracking-widest transition-colors duration-500">
                   {t.stat}
                 </span>
              </div>

              <blockquote className="text-[16px] sm:text-[18px] text-white/80 leading-relaxed mb-10 font-bold italic font-serif">
                "{t.quote}"
              </blockquote>
              
              <div className="mt-auto pt-6 border-t border-white/5">
                 <div className="font-bold text-white text-[12px] uppercase tracking-[0.15em] mb-1">{t.author}</div>
                 <div className="text-[10px] text-brand-gold font-bold tracking-[0.2em] uppercase">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
