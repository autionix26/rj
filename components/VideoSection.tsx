
import React, { useState } from 'react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-brand-light pb-20 md:pb-32 relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
        <div className="relative group max-w-[1100px] mx-auto">
          {/* Subtle connecting line from Hero */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-brand-dark/10 hidden md:block"></div>

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-6">
            <div className="max-w-[500px]">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
                 <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.5em] opacity-80">Operational Sequence // 001</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-normal text-brand-dark font-serif leading-tight tracking-tight">
                Watch the <span className="italic text-brand-dark/30">Facilitation Blueprint.</span>
              </h2>
            </div>
            <div className="flex items-center gap-4 group/doc cursor-pointer">
               <span className="text-brand-dark/20 text-[9px] uppercase tracking-[0.3em] font-bold group-hover/doc:text-brand-gold transition-colors">EST. 2025 // SECURE_FEED</span>
               <div className="h-[1px] w-12 bg-brand-dark/10 group-hover/doc:w-20 group-hover/doc:bg-brand-gold/40 transition-all duration-700"></div>
            </div>
          </div>

          {/* Player Container */}
          <div className="relative aspect-video rounded-sm overflow-hidden border border-brand-dark/5 shadow-2xl bg-white group/player">
            {!isPlaying ? (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=webp&q=80&w=1200" 
                  alt="Architecture Overview" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-transform duration-[4s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
                
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="relative z-20 group/btn flex flex-col items-center gap-6 outline-none"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-brand-dark/5 bg-white/80 backdrop-blur-md flex items-center justify-center transition-all duration-1000 group-hover/btn:scale-110 group-hover/btn:bg-brand-dark group-hover/btn:border-brand-dark group-hover/btn:shadow-2xl">
                    <svg className="w-7 h-7 text-brand-dark transition-colors duration-700 group-hover/btn:text-white translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-bold text-brand-dark uppercase tracking-[0.5em] transition-all duration-700 group-hover/btn:tracking-[0.7em]">
                      Initiate Playback
                    </span>
                    <span className="text-[8px] text-brand-dark/20 uppercase tracking-widest font-medium">Approx. 2:40 Duration</span>
                  </div>
                </button>
              </div>
            ) : (
              <div className="absolute inset-0 bg-brand-dark flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-1000">
                 <div className="max-w-md">
                   <div className="w-3 h-3 rounded-full bg-brand-gold animate-pulse mx-auto mb-8"></div>
                   <h3 className="text-2xl font-serif italic text-white mb-4">Connecting to Secure Buffer...</h3>
                   <button 
                    onClick={() => setIsPlaying(false)}
                    className="text-[10px] font-bold text-white/30 hover:text-brand-gold transition-all duration-500 uppercase tracking-[0.4em] border-b border-white/5 pb-1"
                   >
                     Terminate Link
                   </button>
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
