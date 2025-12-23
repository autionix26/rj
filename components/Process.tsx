
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { number: "01", title: "Intel Analysis", desc: "Rigorous evaluation of your market delta to pinpoint institutional decision triggers." },
    { number: "02", title: "Target Architecture", desc: "Surgical mapping of budget cycles and organizational mandates in our verified network." },
    { number: "03", title: "Facilitated Access", desc: "Deliberate introduction to commercial principals who maintain bottom-line authority." },
    { number: "04", title: "Velocity Loop", desc: "Sequence optimization to ensure narrative alignment with buyer operational requirements." }
  ];

  return (
    <div className="bg-brand-dark py-24 md:py-40 border-y border-white/5 scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          <header className="lg:col-span-5 lg:sticky lg:top-40">
             <div className="flex items-center gap-5 mb-10">
                <div className="w-10 h-[1px] bg-brand-gold shadow-soft-glow"></div>
                <span className="text-brand-gold font-black text-[10px] tracking-pro-wide uppercase">Core Methodology</span>
             </div>
             <h2 className="text-6xl md:text-8xl font-black leading-[0.9] text-white mb-10 font-serif tracking-pro-tight">
               Deliberate <br/><span className="italic text-white/10 font-normal">Facilitation.</span>
             </h2>
             <p className="text-white/40 text-[17px] leading-relaxed mb-10 font-bold max-w-[440px]">
               We replace random outreach with institutional certainty. Our process is engineered to bridge the gap between innovation and capital deployment.
             </p>
             <a href="#pricing" className="inline-block text-[11px] font-black tracking-widest uppercase text-brand-gold hover:text-white transition-all border-b border-brand-gold/20 pb-2">
               Request Process Audit
             </a>
          </header>
          
          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {steps.map((step, i) => (
              <article key={i} className="group flex flex-col md:flex-row gap-8 md:gap-14 p-10 bg-white/5 border border-white/5 hover:bg-brand-surface/40 hover:border-brand-gold/20 transition-all duration-700">
                <div className="text-[14px] font-black text-brand-gold tracking-widest leading-none mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                  {step.number} //
                </div>
                <div className="max-w-[500px]">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-serif group-hover:text-brand-gold transition-colors italic">
                    {step.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-white/40 leading-relaxed font-bold group-hover:text-white/70 transition-all duration-500">
                    {step.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
