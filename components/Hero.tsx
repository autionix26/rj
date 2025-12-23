
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 md:pt-64 md:pb-48 bg-brand-light overflow-hidden">
      {/* Structural Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-stone/50 -z-10"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-4 mb-10 group">
              <div className="w-12 h-[2px] bg-brand-gold"></div>
              <span className="text-[11px] font-bold text-brand-dark uppercase tracking-[0.6em]">Private Network Access</span>
            </div>
            
            <h1 className="text-[48px] sm:text-[72px] md:text-[96px] lg:text-[110px] xl:text-[128px] font-semibold text-brand-dark leading-[0.95] mb-12 tracking-tighter">
              Access is the <br />
              <span className="italic font-serif text-brand-gold">New Currency.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-32">
              <div className="max-w-[560px]">
                <p className="text-[18px] sm:text-[21px] md:text-[24px] text-brand-dark/80 leading-relaxed font-medium mb-12">
                  Facilitating mission-critical connections between innovative enterprise solutions and elite institutional budget-holders.
                </p>
                <div className="flex items-center gap-8">
                   <a href="#process" className="group flex items-center gap-6 text-[13px] font-bold tracking-[0.3em] uppercase text-brand-dark hover:text-brand-gold transition-colors duration-500">
                     View Methodology
                     <div className="w-16 h-16 rounded-full border-2 border-brand-dark flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all duration-700">
                       <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                         <path d="M5 12h14M12 5l7 7-7 7" />
                       </svg>
                     </div>
                   </a>
                </div>
              </div>

              <div className="w-full md:w-px h-px md:h-32 bg-brand-dark/10"></div>

              <div className="max-w-[220px]">
                 <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark/40 mb-6">Status Update</div>
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse"></div>
                    <span className="text-[14px] font-bold text-brand-dark uppercase tracking-widest">2 Slots Open</span>
                 </div>
                 <p className="text-[13px] text-brand-dark/60 font-semibold leading-relaxed">
                   Accepting Q2 partnership applications until April 15th.
                 </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative">
              <div className="aspect-[3/4] bg-white rounded-sm overflow-hidden shadow-premium transform hover:-rotate-1 transition-transform duration-1000 border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?fm=webp&q=80&w=800" 
                  alt="Elite Business Environment" 
                  className="w-full h-full object-cover transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-brand-dark/5"></div>
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="h-1 w-12 bg-brand-gold mb-6"></div>
                   <h3 className="text-white text-3xl font-serif font-medium leading-tight mb-4 drop-shadow-md">Verified <br/>Intelligence</h3>
                   <p className="text-white/90 text-[15px] font-semibold leading-relaxed drop-shadow-sm">
                     Proprietary mapping of clinical intent and capital flows.
                   </p>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 bg-brand-dark p-10 shadow-2xl">
                 <div className="text-brand-gold text-6xl font-serif italic mb-1">94.8%</div>
                 <div className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">Accuracy Index</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
