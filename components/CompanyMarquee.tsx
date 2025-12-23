
import React from 'react';

const CompanyMarquee: React.FC = () => {
  const companies = [
    "AstraGen Systems",
    "Vesper Aerospace",
    "Quantum Life Sciences",
    "Helix Enterprise",
    "Orion Pharma",
    "Syntho Dynamics",
    "Cobalt Infrastructure",
    "Meridian Biotech"
  ];

  const doubledCompanies = [...companies, ...companies];

  return (
    <div className="w-full bg-white border-y border-brand-dark/5 py-14 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-6 mb-6 text-center">
        <span className="text-[10px] font-bold text-brand-dark/20 uppercase tracking-[0.6em]">Strategic Network Affiliations</span>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-32 py-4" style={{ transform: 'translate3d(0,0,0)' }}>
          {doubledCompanies.map((name, index) => (
            <span 
              key={index} 
              className="text-[22px] md:text-[26px] font-bold text-brand-dark/10 hover:text-brand-gold transition-all duration-700 cursor-default uppercase tracking-[0.35em] font-serif italic"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyMarquee;
