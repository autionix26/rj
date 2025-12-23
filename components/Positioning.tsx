
import React from 'react';
import Separator from './Separator';

const Positioning: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-[80px]">
      <div className="max-w-[900px] mx-auto px-6 md:px-[60px]">
        <Separator className="mb-15 md:mb-[60px]" />
        
        <h2 className="text-[32px] md:text-[42px] font-bold text-black leading-[1.2] mb-8">
          We Are Connectors — Not Sellers
        </h2>
        
        <p className="text-[16px] font-semibold text-black mb-5">
          AccessDeal introduces qualified companies to relevant 
          decision-makers based on:
        </p>
        
        <ul className="ml-7 mb-8 space-y-3">
          {['real buying intent', 'active operational needs', 'timing and context'].map((item) => (
            <li key={item} className="text-[16px] text-[#444444] leading-[1.8] list-disc">
              {item}
            </li>
          ))}
        </ul>
        
        <p className="text-[16px] text-[#444444] leading-[1.7] space-y-3">
          We do not sell lists. We do not run mass outreach. We do not operate 
          as an agency.<br /><br />
          <span className="font-semibold text-black">Every connection is deliberate.</span>
        </p>
      </div>
    </section>
  );
};

export default Positioning;
