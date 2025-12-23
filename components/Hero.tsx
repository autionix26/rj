
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-40 bg-brand-dark overflow-hidden">
      {/* Dynamic Layering */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-brand-black/40 via-transparent to-transparent -z-10 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-8">
            <header className="inline-flex items-center gap-5 mb-12 group">
              <div className="w-12 h-[1px] bg-brand-gold shadow-soft-glow"></div>
              <p className="text-[10px] font-black text-brand-gold uppercase tracking-pro-wide">Private B2B Facilitation Protocol</p>
            </header>
            
            <h1 className="text-[60px] sm:text-[88px] md:text-[110px] lg:text-[130px] font-black leading-[0.85] mb-14 tracking-pro-tight reveal-h1">
              Access is the <br />
              <span className="italic font-serif text-brand-gold font-normal">New Currency.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-24">
              <div className="max-w-[480px]">
                <p className="text-[18px] md:text-[20px] text-white/50 leading-relaxed font-semibold mb-12">
                  We eliminate commercial friction by surgically connecting innovative solutions with elite institutional principals in Biotech, Aerospace, and PE.
                </p>
                <div className="flex flex-wrap gap-8">
                   <a 
                    href="#process" 
                    className="group flex items-center gap-6 text-[12px] font-black tracking-widest uppercase text-white hover:text-brand-gold transition-all duration-500"
                   >
                     Explore Methodology
                     <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-brand-dark group-hover:scale-110 transition-all duration-700">
                       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                         <path d="M5 12h14M12 5l7 7-7 7" />
                       </svg>
                     </div>
                   </a>
                </div>
              </div>

              <div className="hidden md:block w-px h-40 bg-white/5 self-center"></div>

              <div className="max-w-[260px]">
                 <p className="text-[9px] font-black uppercase tracking-pro-wide text-white/20 mb-6 italic">Strategic Deployment State</p>
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-soft-glow"></div>
                    <span className="text-[14px] font-extrabold text-white uppercase tracking-widest">2 Partners Open</span>
                 </div>
                 <p className="text-[12px] text-white/30 font-bold leading-relaxed uppercase tracking-tighter">
                   Current intake cycle concluding April 15th for Q2 2025 placements.
                 </p>
              </div>
            </div>
          </div>

          {/* Featured Visual Element */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative p-2 border border-white/5 bg-brand-surface/20 rounded-sm shadow-depth group">
              <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
                <img 
                  src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?fm=webp&q=80&w=800" 
                  alt="Institutional Intelligence Architecture" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                   <div className="h-[1px] w-12 bg-brand-gold mb-8 shadow-soft-glow"></div>
                   <p className="text-brand-gold text-[9px] font-black uppercase tracking-pro-wide mb-4">Institutional Mapping</p>
                   <h3 className="text-white text-3xl font-serif font-normal italic leading-none">Institutional <br/>Velocity</h3>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-brand-black/90 backdrop-blur-2xl p-10 border border-white/10 shadow-soft-glow">
                 <p className="text-brand-gold text-5xl font-serif italic leading-none mb-1">94.8<span className="text-xl font-sans font-black ml-1">%</span></p>
                 <p className="text-white/30 text-[8px] uppercase tracking-widest font-black">Intel Accuracy Index</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
