
import React from 'react';

const Expertise: React.FC = () => {
  const sectors = [
    { title: "Biotech & Life Sciences", desc: "Connecting innovative solutions to R&D leaders." },
    { title: "Aerospace & Tech", desc: "Direct access to high-stakes engineering stakeholders." },
    { title: "Enterprise Platforms", desc: "Aligning SaaS infrastructure with CTO priorities." },
    { title: "Executive Search", desc: "Boutique recruitment at the board and VP level." }
  ];

  return (
    <section id="expertise" className="bg-[#F7F4F0] py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[80px]">
        <div className="text-center mb-20">
          <span className="text-[#123524] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">Expertise</span>
          <h2 className="text-[42px] md:text-[52px] font-normal leading-tight text-[#1A1A1A]">
            Expert consulting tailored to <br />
            <span className="italic">your business success</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sectors.map((sector, i) => (
            <div key={i} className="bg-white p-8 border border-gray-100 flex flex-col h-full shadow-sm">
              <div className="w-10 h-10 border border-[#123524]/10 flex items-center justify-center mb-6">
                <span className="text-[10px] font-bold text-[#123524]">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-[20px] font-semibold mb-3">{sector.title}</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-6">{sector.desc}</p>
              <div className="mt-auto pt-4 border-t border-gray-50">
                 <a href="#pricing" className="text-[12px] font-bold uppercase tracking-wider text-[#123524] hover:opacity-70 transition-opacity">Learn more</a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#comparison" className="inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-widest text-black group">
            Compare our approach
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Expertise;