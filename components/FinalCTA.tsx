
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-32 md:py-56 relative overflow-hidden">
      {/* Decorative blurred background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <span className="text-brand-gold text-[12px] font-bold uppercase tracking-[0.5em] mb-10 block">Application for Q2 2025</span>
        <h2 className="text-[52px] md:text-[86px] font-normal text-brand-dark leading-[1] mb-12 tracking-tight">
          Ready to drive <br/><span className="italic font-serif">measurable growth?</span>
        </h2>
        <p className="text-black/50 max-w-[640px] mx-auto text-[18px] md:text-[20px] mb-16 font-light leading-relaxed">
          If your company is well-positioned and seeking selective, meaningful access over high-volume noise, we should connect.
        </p>
        
        <div className="flex flex-col items-center gap-12">
          <button className="bg-brand text-white px-20 py-6 text-[13px] font-bold rounded-full hover:bg-brand-dark hover:scale-105 transition-all duration-700 uppercase tracking-[0.3em] shadow-2xl shadow-brand/20">
            Request Consideration
          </button>
          
          <div className="flex flex-col md:flex-row items-center gap-8 text-[11px] font-bold text-black/30 uppercase tracking-[0.3em]">
             <span className="flex items-center gap-2">
               <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
               Next Review Cycle: April 2025
             </span>
             <span className="flex items-center gap-2">
               <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
               Verified Identity Required
             </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
