
import React from 'react';

const Exclusivity: React.FC = () => {
  const cards = [
    {
      title: "Market Intel",
      subtitle: "Institutional Mapping",
      description: "Proprietary tracking of 776+ strategic records across funding rounds and investor intent signals.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?fm=webp&q=80&w=600",
      tag: "DATA"
    },
    {
      title: "Direct Access",
      subtitle: "Zero-Noise Protocol",
      description: "Deliberate facilitation architecture ensuring value reaches decision-makers with maximum context.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=webp&q=80&w=600",
      tag: "ACCESS"
    },
    {
      title: "Global Sourcing",
      subtitle: "Capital Visibility",
      description: "High-level visibility into private placements and Series B budgets within target sectors.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&q=80&w=600",
      tag: "SOURCE"
    },
    {
      title: "Partner Suite",
      subtitle: "Deal Velocity",
      description: "A secure command center for tracking engagement signals, intent health, and connection status.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fm=webp&q=80&w=600",
      tag: "SECURE"
    }
  ];

  return (
    <section id="exclusivity" className="bg-brand-light py-24 md:py-56">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        <div className="text-center mb-24 max-w-[840px] mx-auto">
          <span className="text-brand-gold text-[12px] font-bold uppercase tracking-[0.5em] mb-10 block">System Infrastructure</span>
          <h2 className="text-6xl md:text-8xl font-semibold text-brand-dark leading-[1] mb-10 font-serif">
            Selective <br/><span className="italic text-brand-dark/20">Engagement.</span>
          </h2>
          <p className="text-[20px] md:text-[24px] text-brand-dark/80 leading-relaxed font-medium">
            We limit our portfolio to six strategic partners annually to ensure absolute category exclusivity and high-velocity results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((card, i) => (
            <div key={i} className="bg-white group overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-700 rounded-sm border border-brand-dark/5">
              <div className="aspect-[4/3] overflow-hidden bg-brand-stone relative">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <div className="p-12">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">{card.subtitle}</span>
                  <span className="text-[9px] font-bold px-3 py-1 bg-brand-stone text-brand-dark/60 uppercase tracking-widest rounded-full">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-[30px] font-bold text-brand-dark leading-tight font-serif mb-6">{card.title}</h3>
                <p className="text-[16px] text-brand-dark/70 leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a href="#pricing" className="inline-flex items-center gap-6 text-[14px] font-bold uppercase tracking-[0.4em] text-brand-dark hover:text-brand-gold transition-colors group">
            Explore Partnership Tiers
            <div className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:border-brand-gold transition-colors">
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Exclusivity;
