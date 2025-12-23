
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-brand-dark py-28 md:py-48 text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto bg-brand-light/5 border border-white/10 p-8 md:p-20 rounded-sm shadow-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
               <span className="text-brand-gold text-[11px] font-bold uppercase tracking-[0.4em] mb-6 block">Annual Partnership</span>
               <h2 className="text-5xl md:text-6xl font-normal leading-tight mb-8 font-serif">
                 The Selective <br/><span className="italic">Engagement</span>
               </h2>
               <p className="text-white/50 leading-relaxed mb-10 text-[17px] font-light">
                 Our partners value access over noise. We operate as an extension of your commercial leadership team, limited to six engagements annually to maintain the integrity of our network.
               </p>
               <div className="space-y-5">
                  {[
                    'Guaranteed 5+ Tier-1 Strategic Introductions',
                    'Bi-Weekly Market Intelligence Reports',
                    'Full Category Exclusivity for 12 Months',
                    'Direct access to Global Principal'
                  ].map(t => (
                    <div key={t} className="flex items-center gap-4 text-[14px] text-white/80 font-light">
                      <div className="w-1 h-1 rounded-full bg-brand-gold"></div>
                      {t}
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative">
              <div className="bg-brand p-12 text-center border border-white/10 rounded-sm relative z-10">
                 <p className="text-[11px] uppercase tracking-widest text-white/40 mb-4">Starting At</p>
                 <div className="text-7xl font-serif italic mb-4 leading-none">$12k</div>
                 <p className="text-[14px] text-white/50 mb-12 tracking-wide font-light">Monthly Retainer / Billed Quarterly</p>
                 <a href="#contact" className="block w-full bg-brand-gold text-brand-dark font-bold py-5 text-[12px] tracking-[0.2em] uppercase hover:bg-white transition-all duration-500 rounded-sm">
                   Apply for Consideration
                 </a>
                 <div className="mt-8 text-[10px] text-white/30 uppercase tracking-[0.2em]">02 Openings Remaining for 2025</div>
              </div>
              {/* Artistic shadow element */}
              <div className="absolute top-10 left-10 w-full h-full border border-brand-gold/20 -z-10"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
