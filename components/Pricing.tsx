
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-brand-light py-20 sm:py-32 md:py-48 text-brand-dark scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
        <div className="max-w-[1000px] mx-auto bg-white border border-brand-dark/5 p-8 sm:p-12 md:p-20 rounded-sm shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            <div className="order-2 lg:order-1">
               <span className="text-brand-gold text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6 block">Annual Partnership</span>
               <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-6 sm:mb-8 font-serif">
                 The Selective <br/><span className="italic">Engagement</span>
               </h2>
               <p className="text-brand-dark/50 leading-relaxed mb-8 sm:mb-10 text-[15px] sm:text-[17px] font-light">
                 Our partners value access over noise. We operate as an extension of your commercial leadership team, limited to six engagements annually.
               </p>
               <div className="space-y-4 sm:space-y-5">
                  {[
                    'Guaranteed 5+ Tier-1 Strategic Introductions',
                    'Bi-Weekly Market Intelligence Reports',
                    'Full Category Exclusivity for 12 Months',
                    'Direct access to Global Principal'
                  ].map(t => (
                    <div key={t} className="flex items-center gap-3 sm:gap-4 text-[13px] sm:text-[14px] text-brand-dark/80 font-light">
                      <div className="w-1 h-1 rounded-full bg-brand-gold"></div>
                      {t}
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="bg-brand-dark p-8 sm:p-12 text-center rounded-sm relative z-10 shadow-3xl">
                 <p className="text-[9px] sm:text-[11px] uppercase tracking-widest text-white/40 mb-3 sm:mb-4">Starting At</p>
                 <div className="text-5xl sm:text-7xl font-serif italic mb-3 sm:mb-4 leading-none text-white">$12k</div>
                 <p className="text-[12px] sm:text-[14px] text-white/50 mb-8 sm:mb-12 tracking-wide font-light">Monthly Retainer / Billed Quarterly</p>
                 <a href="#contact" className="block w-full bg-brand-gold text-brand-dark font-bold py-4 sm:py-5 text-[11px] sm:text-[12px] tracking-[0.2em] uppercase hover:bg-white transition-all duration-500 rounded-sm">
                   Apply for Consideration
                 </a>
                 <div className="mt-6 sm:mt-8 text-[9px] sm:text-[10px] text-white/30 uppercase tracking-[0.2em]">02 Openings Remaining for 2025</div>
              </div>
              <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-full h-full border border-brand-gold/20 -z-10"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
