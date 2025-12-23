
import React from 'react';
import Separator from './Separator';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "We assess fit and market positioning",
      description: "Ensuring your solution addresses a critical, high-value problem in our target sectors."
    },
    {
      id: "02",
      title: "We define the exact buyer profile and timing signals",
      description: "Mapping the specific decision-makers and organizational triggers that signal intent."
    },
    {
      id: "03",
      title: "We activate our network and outbound intelligence",
      description: "Leveraging established relationships and market signals to find the right entry points."
    },
    {
      id: "04",
      title: "We introduce only when intent is confirmed",
      description: "Moving from connection to conversation only when there is documented operational need."
    }
  ];

  return (
    <section className="bg-[#F9F9F9] py-20 md:py-[80px]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-[60px]">
        <Separator className="mb-12" />
        
        <h2 className="text-[32px] md:text-[42px] font-bold text-black mb-12">
          How It Works
        </h2>
        
        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col md:flex-row md:items-start">
              <span className="text-[64px] font-bold text-[#EEEEEE] leading-none mb-3 md:mb-0 md:mr-6">
                {step.id}
              </span>
              <div className="max-w-[600px]">
                <h3 className="text-[20px] font-semibold text-black mb-3 leading-[1.3]">
                  {step.title}
                </h3>
                <p className="text-[15px] text-[#555555] leading-[1.6]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-[16px] text-[#666666] leading-[1.7] mt-[60px] italic">
          Your team focuses on conversations and closing. We handle access.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
