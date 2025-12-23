
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
    <div className="w-full bg-brand-dark border-y border-white/5 py-20 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-6 mb-10 text-center">
        <span className="text-[11px] font-bold text-white/20 uppercase tracking-[0.6em]">Strategic Network Affiliations</span>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-40 py-4">
          {doubledCompanies.map((name, index) => (
            <span 
              key={index} 
              className="text-[32px] md:text-[42px] font-bold text-white/[0.05] hover:text-brand-gold transition-all duration-700 cursor-default uppercase tracking-[0.25em] font-serif italic"
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
