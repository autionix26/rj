
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-brand-dark py-20 md:py-40 border-t border-white/5 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="max-w-[1100px] mx-auto bg-brand-greenLight/10 border border-white/5 p-8 md:p-16 rounded-sm shadow-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            
            <div className="order-2 lg:order-1">
               <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.5em] mb-6 block italic">Premium Access</span>
               <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8 font-serif text-white">
                 Selective <br/><span className="italic font-normal text-white/10">Engagement</span>
               </h2>
               <p className="text-white/40 leading-relaxed mb-10 text-[17px] font-bold">
                 We operate as a high-trust extension of your leadership. Limited to six strategic partnerships annually.
               </p>
               <div className="space-y-5">
                  {[
                    'Guaranteed 5+ Tier-1 Intro Sequences',
                    'Bi-Weekly Principal Advisory Intel',
                    'Full Category Exclusivity Protocols',
                    'Direct Principal Escalation Access'
                  ].map(t => (
                    <div key={t} className="flex items-center gap-4 text-[14px] text-white/80 font-black uppercase tracking-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-glow"></div>
                      {t}
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="bg-brand-black/40 p-10 md:p-14 text-center rounded-sm border border-brand-gold/20 shadow-glow group">
                 <p className="text-[10px] uppercase tracking-widest text-white/20 mb-4 font-black">Capital Investment</p>
                 <div className="text-7xl md:text-8xl font-serif font-normal italic mb-4 leading-none text-white group-hover:text-brand-gold transition-colors duration-700">$12k</div>
                 <p className="text-[12px] text-white/30 mb-10 tracking-[0.2em] font-black uppercase">Retainer / Quarterly</p>
                 <a href="#hero" className="block w-full bg-brand-gold text-brand-dark font-black py-5 md:py-6 text-[12px] tracking-[0.2em] uppercase hover:scale-[1.03] transition-all duration-500 rounded-full shadow-premium">
                   Apply for Q2
                 </a>
                 <div className="mt-8 text-[9px] text-brand-gold/60 font-black uppercase tracking-[0.3em] italic">Validated Network Entry Only</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
