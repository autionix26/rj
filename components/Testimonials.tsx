
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
    <section id="testimonials" className="bg-brand-black py-32 md:py-64 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-[720px]">
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.6em] mb-8 block">Partner Outcomes</span>
            <h2 className="text-6xl md:text-8xl font-normal leading-none text-white font-serif">
              Validated <br />
              <span className="italic text-white/30">By Principals.</span>
            </h2>
          </div>
          <div className="text-[12px] font-bold text-white/30 uppercase tracking-[0.4em] max-w-[280px] leading-relaxed border-l border-brand-gold/20 pl-10">
            Full Case Audit reports available via secure partner dashboard login.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col h-full group">
              <div className="mb-12">
                 <span className="text-[10px] font-bold text-brand-gold border border-brand-gold/30 px-6 py-2 rounded-full uppercase tracking-widest group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-700">
                   {t.stat}
                 </span>
              </div>

              <blockquote className="text-[20px] text-white/70 leading-relaxed mb-14 font-light italic font-serif">
                "{t.quote}"
              </blockquote>
              
              <div className="mt-auto pt-10 border-t border-white/10">
                 <div className="font-bold text-white text-[13px] uppercase tracking-[0.3em] mb-3">{t.author}</div>
                 <div className="text-[10px] text-white/30 font-bold tracking-[0.4em] uppercase">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
