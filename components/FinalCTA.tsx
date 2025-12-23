
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="bg-brand-dark py-32 md:py-56 relative overflow-hidden">
      {/* Decorative blurred background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-brand-gold/5 rounded-full blur-[80px] sm:blur-[120px] -z-10"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-4 mb-10">
          <div className="h-[1px] w-8 bg-brand-gold/40"></div>
          <span className="text-brand-gold text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em]">Application for Q2 2025</span>
          <div className="h-[1px] w-8 bg-brand-gold/40"></div>
        </div>

        <h2 className="text-[42px] sm:text-[62px] md:text-[86px] font-normal text-white leading-[1.1] sm:leading-[1] mb-12 tracking-tight">
          Ready to drive <br/><span className="italic font-serif text-brand-gold/90">measurable growth?</span>
        </h2>
        
        <p className="text-white/40 max-w-[640px] mx-auto text-[16px] sm:text-[18px] md:text-[20px] mb-16 font-light leading-relaxed">
          If your company is well-positioned and seeking selective, meaningful access over high-volume noise, we should connect.
        </p>
        
        <div className="flex flex-col items-center gap-12">
          <a href="mailto:partnerships@accessdeal.com" className="relative group overflow-hidden bg-brand-gold text-brand-dark px-12 sm:px-20 py-5 sm:py-6 text-[11px] sm:text-[13px] font-bold rounded-full transition-all duration-700 uppercase tracking-[0.2em] sm:tracking-[0.3em] shadow-2xl shadow-brand-gold/10">
            <span className="relative z-10">Request Consideration</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>
          
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-12 pt-8 border-t border-white/5 w-full max-w-xl justify-center">
             <div className="flex items-center gap-3">
               <div className="w-1 h-1 bg-brand-gold rounded-full shadow-[0_0_8px_#C5A059]"></div>
               <span className="text-[9px] sm:text-[11px] font-bold text-white/30 uppercase tracking-[0.3em]">Review Cycle: April 2025</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-1 h-1 bg-brand-gold rounded-full shadow-[0_0_8px_#C5A059]"></div>
               <span className="text-[9px] sm:text-[11px] font-bold text-white/30 uppercase tracking-[0.3em]">Verified Identity Required</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
