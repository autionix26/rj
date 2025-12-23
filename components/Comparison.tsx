
import React from 'react';

const Comparison: React.FC = () => {
  const standard = [
    { title: "Generic Outreach", desc: "Messaging is too broad and fails to resonate with prospect's unique pain points." },
    { title: "Missed Opportunities", desc: "You might overlook potential clients who need your help but don't fit the usual criteria." },
    { title: "Wasted Resources", desc: "Time and effort are spent on leads that aren't interested, leading to lost revenue." },
    { title: "Advertising Cost Spiral", desc: "When cold emails fail, companies panic-pivot to paid ads with inflated CPAs." }
  ];

  const accessDeal = [
    { title: "Personalized Messaging", desc: "We speak directly to the issues your prospects face, making them more relevant and timely." },
    { title: "Better Conversion Rates", desc: "Prospects are more likely to buy when they see you providing specific solutions." },
    { title: "No time wasted on prospection", desc: "We target leads that really need your services, making outreach effective." },
    { title: "Build Trust", desc: "Showing you understand their challenges helps build retainer-level relationships." },
    { title: "Faster Revenue Generation", desc: "Targeting only relevant prospects shortens the cycle, accelerating growth." }
  ];

  return (
    <section id="comparison" className="bg-brand-dark py-24 md:py-48 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center mb-16">
          
          {/* Left Side: Standard Agencies */}
          <div>
            <h2 className="text-4xl md:text-5xl font-normal mb-12 leading-tight font-serif text-white">
              What 99% of <br />
              <span className="text-white/30 italic">Lead Gen Agencies do</span>
            </h2>
            <div className="space-y-12">
              {standard.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="3">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold mb-2 text-white/80">{item.title}</h4>
                    <p className="text-[15px] text-white/40 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The AccessDeal Way */}
          <div className="bg-brand-black p-10 md:p-16 rounded-sm border border-white/5 shadow-4xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight text-white">
              The <span className="italic text-brand-gold">"AccessDeal Way"</span>
            </h2>
            <p className="text-white/40 mb-12 text-[16px] leading-relaxed font-light">
              We replace high-volume noise with high-context facilitation. We don't find "leads"—we build bridges to institutional budget holders.
            </p>
            <div className="space-y-10">
              {accessDeal.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center shadow-[0_0_15px_rgba(197,160,89,0.2)]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#051111" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold mb-2 text-white group-hover:text-brand-gold transition-colors">{item.title}</h4>
                    <p className="text-[15px] text-white/50 leading-relaxed font-light">{item.desc}</p>
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
