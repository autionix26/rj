
import React from 'react';
import Separator from './Separator';

const Sectors: React.FC = () => {
  const industries = [
    "Biotechnology & Life Sciences",
    "Pharmaceutical Services & Platforms",
    "Aerospace & Advanced Manufacturing",
    "Recruitment & Specialized Staffing",
    "Enterprise Technology & Infrastructure"
  ];

  return (
    <section className="bg-[#F9F9F9] py-20 md:py-[80px]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-[60px]">
        <Separator className="mb-8" />
        
        <h2 className="text-[32px] md:text-[42px] font-bold text-black mb-8">
          Who We Work With
        </h2>
        
        <p className="text-[16px] font-semibold text-black mb-7">
          We partner with established B2B companies operating in:
        </p>
        
        <div className="ml-8 mb-12 space-y-4">
          {industries.map((industry) => (
            <div key={industry} className="flex items-start gap-3">
              <span className="text-[18px] leading-tight text-black">✓</span>
              <span className="text-[16px] font-semibold text-black">{industry}</span>
            </div>
          ))}
        </div>
        
        <p className="text-[14px] text-[#666666] leading-[1.6]">
          Our network includes senior buyers, operators, and commercial 
          leaders across these sectors.
        </p>
      </div>
    </section>
  );
};

export default Sectors;
