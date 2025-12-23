
import React from 'react';

interface SeparatorProps {
  centered?: boolean;
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ centered = false, className = "" }) => {
  return (
    <div 
      className={`h-[0.5px] w-12 bg-brand-gold/40 ${centered ? 'mx-auto' : 'ml-0'} ${className}`}
      aria-hidden="true"
    />
  );
};

export default Separator;
