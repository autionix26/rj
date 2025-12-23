
import React from 'react';

const Comparison: React.FC = () => {
  const generic = [
    { title: "Volume Drift", desc: "Broad outreach sequences that fail to resonate with high-level stakeholders." },
    { title: "Budget Erosion", desc: "Capital drain on broad advertising with low intent and high noise floors." },
    { title: "Static Reports", desc: "Standardized data dumps lacking actionable principal intelligence." }
  ];

  const accessDeal = [
    { title: "Surgical Intent", desc: "Every engagement speaks directly to organizational pain points and mandates." },
    { title: "Institutional Trust", desc: "Utilizing deep, vetted relationships to bypass gatekeepers instantly." },
    { title: "Velocity Loop", desc: "Accelerating sales cycles by 40% through high-intent principal introductions." },
  ];

  return (
    <div className="bg-brand-dark py-24 md:py-40 border-t border-white/5 scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-black mb-14 leading-tight font-serif text-white tracking-pro-tight">
              Why <span className="text-white/5 italic font-normal">"Lead Gen"</span> <br />
              is Failing You.
            </h2>
            <div className="space-y-12">
              {generic.map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/20 font-black text-xs">
                      ✕
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-black mb-2 text-white/60 uppercase tracking-widest">{item.title}</h4>
                    <p className="text-[14px] text-white/30 leading-relaxed font-bold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-surface/20 p-12 md:p-20 rounded-sm border border-white/5 shadow-depth relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[100px] pointer-events-none"></div>
            
            <header className="inline-flex items-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-brand-gold shadow-soft-glow"></div>
              <span className="text-[11px] font-black text-brand-gold uppercase tracking-pro-wide italic">The Model</span>
            </header>
            
            <h2 className="text-5xl md:text-7xl font-black mb-16 leading-tight text-white font-serif tracking-pro-tight">
              The <span className="italic font-normal text-brand-gold">AccessDeal</span> Way
            </h2>
            
            <div className="space-y-12">
              {accessDeal.map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark shadow-soft-glow">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-black mb-2 text-white uppercase tracking-widest">{item.title}</h4>
                    <p className="text-[14px] text-white/60 leading-relaxed font-bold group-hover:text-white transition-colors duration-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
