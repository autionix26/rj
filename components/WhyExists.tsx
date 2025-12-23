
import React from 'react';
import Separator from './Separator';

const WhyExists: React.FC = () => {
  return (
    <section className="bg-[#F9F9F9] py-20 md:py-[80px]">
      <div className="max-w-[800px] mx-auto px-6 md:px-[60px]">
        <Separator className="mb-10" />
        
        <h2 className="text-[32px] md:text-[42px] font-bold text-black mb-10">
          Why This Model Exists
        </h2>
        
        <div className="max-w-[700px] space-y-5">
          <p className="text-[16px] text-[#444444] leading-[1.7]">
            Most companies don't need more leads. They need the right conversations 
            at the right time.
          </p>
          <p className="text-[16px] text-[#444444] leading-[1.7]">
            AccessDeal exists to remove noise, inefficiency, and randomness from 
            B2B growth — replacing it with controlled access and trusted introductions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyExists;
