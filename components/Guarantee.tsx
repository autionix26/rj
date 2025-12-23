
import React from 'react';
import Separator from './Separator';

const Guarantee: React.FC = () => {
  const points = [
    "Five high-quality, decision-maker-level clients",
    "Qualified based on relevance, timing, and buying intent",
    "Introduced directly — not passed through SDR layers",
    "If alignment is not met, we continue working until it is"
  ];

  return (
    <section className="bg-white py-20 md:py-[80px]">
      <div className="max-w-[900px] mx-auto px-6 md:px-[60px]">
        <Separator className="mb-8" />
        
        <h2 className="text-[32px] md:text-[42px] font-bold text-black mb-8">
          Outcome-Based Commitment
        </h2>
        
        <div className="border border-[#E8E8E8] bg-[#FAFAFA] p-10">
          <p className="text-[16px] font-semibold text-black mb-6">
            Each engagement includes a six-month guarantee:
          </p>
          
          <ul className="ml-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-4 text-[16px] text-[#444444] leading-[1.8]">
                <span className="text-black font-bold">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
