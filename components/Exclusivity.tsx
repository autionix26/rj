
import React from 'react';

const Exclusivity: React.FC = () => {
  const cards = [
    {
      title: "Market Intelligence",
      subtitle: "Institutional Mapping",
      description: "Proprietary tracking of 776+ records across funding rounds and investor intent signals.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?fm=webp&q=60&w=500",
      tag: "INTEL"
    },
    {
      title: "Direct Access Facilitation",
      subtitle: "Zero-Noise Protocol",
      description: "Proprietary facilitation architecture ensures your value reaches decision-makers with maximum context.",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?fm=webp&q=60&w=500",
      tag: "SMTP"
    },
    {
      title: "Global Sourcing Engine",
      subtitle: "Capital Visibility",
      description: "Deep-level visibility into private placements and Series B budgets within target sectors.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&q=60&w=500",
      tag: "DATA"
    },
    {
      title: "Partner Dashboard",
      subtitle: "Deal Velocity",
      description: "A secure, centralized command center for tracking engagement signals and connection health.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?fm=webp&q=60&w=500",
      tag: "SECURE"
    }
  ];

  return (
    <section id="exclusivity" className="bg-brand-black py-24 md:py-48">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-24 max-w-[800px] mx-auto">
          <span className="text-brand-gold text-[11px] font-bold uppercase tracking-[0.5em] mb-8 block">Exclusive Architecture</span>
          <h2 className="text-5xl md:text-7xl font-normal text-white leading-[1] mb-8 font-serif">
            Selective <span className="italic text-white/40">Engagement.</span>
          </h2>
          <p className="text-[19px] text-white/40 leading-relaxed font-light">
            We limit our portfolio to six partners annually to maintain the integrity of our network and the velocity of our introductions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-brand-dark/40 group overflow-hidden border border-white/5 transition-all hover:border-brand-gold/30 duration-700 rounded-sm">
              <div className="aspect-[4/3] overflow-hidden bg-brand-black">
                <img 
                  src={card.image} 
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 group-hover:scale-110 transition-all duration-1000"
                />
              </div>
              <div className="p-10">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em]">{card.subtitle}</span>
                    <span className="text-[9px] font-bold px-2.5 py-1 bg-white/5 text-white/40 uppercase tracking-widest rounded-full">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="text-[24px] font-medium text-white leading-tight font-serif italic">{card.title}</h3>
                </div>
                <p className="text-[15px] text-white/30 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#pricing" className="inline-flex items-center gap-4 text-[13px] font-bold uppercase tracking-[0.3em] text-white hover:text-brand-gold transition-colors group">
            View Partnership Tiers
            <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Exclusivity;
