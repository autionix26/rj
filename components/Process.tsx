
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { number: "01", title: "Audit & Analysis", desc: "A rigorous evaluation of your solution's market differentiation to pinpoint high-value triggers for institutional decision-makers." },
    { number: "02", title: "Target Architecture", desc: "Surgical identification of budget cycles, organizational mandates, and pain points within our verified network." },
    { number: "03", title: "Facilitated Access", desc: "Execution of deliberate, executive-level introductions directly to the commercial principals who own the P&L." },
    { number: "04", title: "Velocity Loop", desc: "Deep-level feedback and sequence optimization to ensure your narrative remains perfectly aligned with buyer requirements." }
  ];

  return (
    <section id="process" className="bg-brand-stone/40 py-24 md:py-56 border-y border-brand-dark/5 relative scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-40">
             <div className="flex items-center gap-6 mb-12">
                <div className="w-12 h-[2px] bg-brand-gold"></div>
                <span className="text-brand-dark font-bold text-[11px] tracking-[0.5em] uppercase">Core Methodology</span>
             </div>
             <h2 className="text-5xl sm:text-7xl lg:text-8xl font-semibold leading-[1] text-brand-dark mb-10 font-serif tracking-tight">
               Deliberate <br/><span className="italic text-brand-dark/40">Facilitation.</span>
             </h2>
             <p className="text-brand-dark/80 text-[18px] sm:text-[20px] leading-relaxed mb-12 font-medium max-w-[480px]">
               We replace random outreach with institutional certainty. Our process is engineered to bridge the gap between innovation and capital.
             </p>
             <a href="#contact" className="inline-block text-[12px] font-bold tracking-[0.4em] uppercase text-brand-dark hover:text-brand-gold transition-colors border-b-2 border-brand-dark/20 pb-2">
               Request Strategy Deck
             </a>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-10">
              {steps.map((step, i) => (
                <div key={i} className="group flex flex-col md:flex-row gap-8 md:gap-16 p-10 md:p-14 bg-white shadow-premium hover:shadow-premium-hover transition-all duration-700 hover:-translate-y-2 border-l-4 border-transparent hover:border-brand-gold">
                  <div className="text-[18px] font-bold text-brand-gold tracking-widest leading-none mt-1">
                    {step.number} //
                  </div>
                  <div className="max-w-[520px]">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 font-serif tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[16px] md:text-[18px] text-brand-dark/70 leading-relaxed font-medium group-hover:text-brand-dark transition-colors duration-500">
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
