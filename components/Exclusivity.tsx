
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
    <section id="exclusivity" className="bg-brand-dark py-16 md:py-32 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        <div className="text-center mb-16 max-w-[700px] mx-auto">
          <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Infrastructure</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-[0.9] mb-8 font-serif">
            Selective <br/><span className="italic text-white/10 font-normal">Engagement.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/50 leading-relaxed font-medium">
            We limit our portfolio to six strategic partners annually to ensure absolute category exclusivity and high-velocity results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-white/5 group overflow-hidden transition-all duration-700 rounded-sm border border-white/5 hover:bg-white/[0.08]">
              <div className="aspect-[16/10] overflow-hidden bg-brand-black relative">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover opacity-50 grayscale transition-transform duration-[3s] group-hover:scale-105 group-hover:opacity-80"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[9px] font-bold text-brand-gold uppercase tracking-[0.2em]">{card.subtitle}</span>
                  <span className="text-[8px] font-bold px-2 py-0.5 bg-white/5 text-white/40 uppercase tracking-widest rounded-full">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-[20px] font-bold text-white leading-tight font-serif mb-4 group-hover:text-brand-gold transition-colors italic">{card.title}</h3>
                <p className="text-[13px] text-white/40 leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exclusivity;
