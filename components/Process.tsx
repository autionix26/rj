
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { number: "01", title: "Audit & Analysis", desc: "We deep-dive into your solution's differentiation to find the 'High-Value' hook that triggers decision-maker attention." },
    { number: "02", title: "Target Architecture", desc: "Identifying active budget cycles and organizational pain points within our proprietary institutional network." },
    { number: "03", title: "Facilitated Access", desc: "Executing deliberate, peer-level introductions directly to the commercial leaders who matter." },
    { number: "04", title: "Velocity Loop", desc: "Iterative feedback processing to ensure the narrative stays aligned with the buyer's shifting operational needs." }
  ];

  return (
    <section id="process" className="bg-brand-dark py-32 md:py-56 border-y border-white/5 relative">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          <div className="lg:col-span-5 sticky top-40">
             <div className="flex items-center gap-6 mb-10">
                <div className="w-10 h-[1px] bg-brand-gold/40"></div>
                <span className="text-brand-gold font-bold text-[10px] tracking-[0.5em] uppercase">The Methodology</span>
             </div>
             <h2 className="text-5xl md:text-8xl font-normal leading-[0.9] text-white mb-12 font-serif tracking-tight">
               Deliberate <br/><span className="italic text-white/30">Intelligence.</span>
             </h2>
             <p className="text-white/60 text-[18px] leading-relaxed mb-14 font-light max-w-[460px]">
               We replace the randomness of "Lead Gen" with the certainty of Facilitated Access. Our model is built on 15 years of institutional trust and verified intent.
             </p>
             <a href="mailto:partnerships@accessdeal.com" className="inline-block text-[11px] font-bold tracking-[0.4em] uppercase text-white/40 hover:text-brand-gold transition-colors duration-500 border-b border-white/10 pb-2">
               Request Architecture Deck
             </a>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-12 md:gap-24">
              {steps.map((step, i) => (
                <div key={i} className="group flex flex-col md:flex-row gap-10 md:gap-20 p-10 border border-white/5 bg-brand-black/20 hover:border-brand-gold/30 transition-all duration-700 hover:bg-brand-black/40">
                  <div className="text-[14px] font-bold text-brand-gold/40 group-hover:text-brand-gold transition-colors tracking-widest mt-1">
                    {step.number} //
                  </div>
                  <div className="max-w-[480px]">
                    <h3 className="text-3xl font-medium text-white mb-6 font-serif tracking-tight group-hover:translate-x-2 transition-transform duration-700">
                      {step.title}
                    </h3>
                    <p className="text-[16px] text-white/50 leading-relaxed font-light group-hover:text-white/80 transition-colors duration-700">
                      {step.desc}
                    </p>
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

export default Process;
