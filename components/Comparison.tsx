
import React from 'react';

const Comparison: React.FC = () => {
  const standard = [
    { title: "Generic Volume", desc: "Outdated mass-outreach sequences that fail to resonate with high-level stakeholders." },
    { title: "Wasted Capital", desc: "Excessive budget drain on broad advertising with inflated CPAs and low intent." },
    { title: "Static Reports", desc: "Standardized data dumps without context or actionable executive intelligence." }
  ];

  const accessDeal = [
    { title: "Surgical Personalization", desc: "Every engagement speaks directly to verified organizational pain points and mandates." },
    { title: "Institutional Trust", desc: "Leveraging 15 years of vetted relationships to bypass gatekeepers instantly." },
    { title: "Accelerated Velocity", desc: "Reducing sales cycles by 40% through high-intent introductions at the principal level." },
    { title: "Category Exclusivity", desc: "We only partner with one firm per niche. No internal competition for access." }
  ];

  return (
    <section id="comparison" className="bg-brand-light py-24 md:py-56 border-t border-brand-dark/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-stretch">
          
          {/* Left Side: Standard Agencies */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-16 leading-tight font-serif text-brand-dark">
              Why <span className="text-brand-dark/20 italic font-normal">"Lead Gen"</span> <br />
              Is Failing You.
            </h2>
            <div className="space-y-12">
              {standard.map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full border-2 border-brand-dark flex items-center justify-center text-brand-dark font-black text-sm">
                      ✕
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[20px] font-black mb-3 text-brand-dark uppercase tracking-tight">{item.title}</h4>
                    <p className="text-[17px] text-brand-dark leading-relaxed font-bold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The AccessDeal Way */}
          <div className="bg-black p-12 md:p-20 rounded-sm shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 blur-[100px] pointer-events-none"></div>
            
            <div className="inline-flex items-center gap-4 mb-10">
              <div className="w-12 h-[3px] bg-brand-gold"></div>
              <span className="text-[13px] font-black text-brand-gold uppercase tracking-[0.5em]">The Solution</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-16 leading-tight text-white font-serif">
              The <span className="italic font-normal text-brand-gold">AccessDeal</span> Way
            </h2>
            
            <div className="space-y-12">
              {accessDeal.map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-black shadow-[0_0_20px_rgba(184,134,11,0.5)]">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[21px] font-black mb-3 text-white uppercase tracking-tight">{item.title}</h4>
                    <p className="text-[17px] text-white/90 leading-relaxed font-bold group-hover:text-white transition-colors duration-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
