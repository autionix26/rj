
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 bg-brand-dark overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-black/40 to-transparent -z-10"></div>
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[140px] -z-10 opacity-60"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-4 mb-10 group cursor-default">
              <span className="h-[1px] w-12 bg-brand-gold/40 group-hover:w-20 transition-all duration-700"></span>
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.5em]">Private B2B Facilitation</span>
            </div>
            
            <h1 className="text-[58px] md:text-[92px] lg:text-[124px] font-normal text-white leading-[0.85] mb-14 tracking-tight">
              Access is the <br />
              <span className="italic font-serif text-brand-gold opacity-90 block mt-4">New Currency.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-start gap-16 lg:gap-32">
              <div className="max-w-[520px]">
                <p className="text-[19px] md:text-[22px] text-white/70 leading-relaxed font-light mb-14">
                  We eliminate the friction between innovative solutions and elite decision-makers within Biotech, Aerospace, and Private Equity.
                </p>
                <div className="flex items-center gap-10">
                   <a href="mailto:partnerships@accessdeal.com" className="group flex items-center gap-6 text-[12px] font-bold tracking-[0.4em] uppercase text-white hover:text-brand-gold transition-colors duration-500">
                     Explore Partnerships
                     <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-brand-dark transition-all duration-700">
                       <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                         <path d="M5 12h14M12 5l7 7-7 7" />
                       </svg>
                     </div>
                   </a>
                </div>
              </div>

              <div className="hidden lg:block pt-4 border-l border-white/10 pl-14">
                 <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30 mb-6">Pipeline Health</div>
                 <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-[0_0_12px_rgba(197,160,89,0.5)]"></div>
                    <span className="text-[14px] font-medium text-white/80 uppercase tracking-widest">Only 2 Slots Open</span>
                 </div>
                 <p className="text-[12px] text-white/40 max-w-[180px] leading-relaxed font-medium">
                   Current cycle closing April 15th for Q2 deployments.
                 </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative group">
              <div className="aspect-[3/4] bg-brand-black rounded-sm overflow-hidden border border-white/10 shadow-3xl transform transition-transform duration-1000 group-hover:scale-[1.02]">
                <img 
                  src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?fm=webp&q=75&w=600" 
                  alt="Biotech Intelligence" 
                  className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                   <div className="h-[1px] w-12 bg-brand-gold/40 mb-6"></div>
                   <p className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Strategic Mapping</p>
                   <h3 className="text-white text-3xl font-serif italic mb-4">Institutional <br/>Velocity</h3>
                   <p className="text-white/40 text-[14px] leading-relaxed font-light">
                     Precision-mapping of clinical trial intent and private capital flows.
                   </p>
                </div>
              </div>
              
              {/* Floating Stat Widget */}
              <div className="absolute -bottom-10 -left-10 bg-brand p-10 shadow-4xl border border-white/5 backdrop-blur-xl">
                 <div className="text-brand-gold text-5xl font-serif italic mb-1">94.8<span className="text-2xl ml-1">%</span></div>
                 <div className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold">Accuracy Index</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
