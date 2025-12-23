
import React, { useState } from 'react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-brand-dark py-12 md:py-24 border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="relative group max-w-[1000px] mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-6">
            <div className="max-w-[440px]">
              <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.5em] mb-4 block opacity-60">Visual Sequence</span>
              <h2 className="text-3xl md:text-4xl font-normal text-white font-serif leading-tight">
                Architecting <span className="italic text-white/40">The Connection.</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
               <span className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-medium hidden sm:block">Facilitation Blueprint 01-A</span>
               <div className="h-[1px] w-12 bg-white/10"></div>
            </div>
          </div>

          {/* Player */}
          <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] bg-brand-black group/player">
            {!isPlaying ? (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=webp&q=80&w=1200" 
                  alt="Architecture" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale group-hover/player:scale-110 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80"></div>
                
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="relative z-20 group/btn flex flex-col items-center gap-6"
                >
                  <div className="w-20 h-20 rounded-full border border-brand-gold/20 bg-brand-dark/40 backdrop-blur-xl flex items-center justify-center transition-all duration-700 group-hover/btn:scale-110 group-hover/btn:bg-brand-gold group-hover/btn:border-brand-gold group-hover/btn:shadow-[0_0_40px_rgba(197,160,89,0.3)]">
                    <svg className="w-6 h-6 text-brand-gold transition-colors duration-500 group-hover/btn:text-brand-dark translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] transition-all duration-500 group-hover/btn:text-brand-gold group-hover/btn:tracking-[0.6em]">
                    Play Presentation
                  </span>
                </button>
              </div>
            ) : (
              <div className="absolute inset-0 bg-black flex flex-col items-center justify-center">
                 <div className="text-center">
                   <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse mx-auto mb-6"></div>
                   <p className="text-brand-gold font-serif italic text-2xl mb-4">Establishing Secure Feed...</p>
                   <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] mb-12">Encrypted Facilitation Protocol</p>
                   <button 
                    onClick={() => setIsPlaying(false)}
                    className="text-[10px] font-bold text-white/30 hover:text-white transition-colors uppercase tracking-[0.4em]"
                   >
                     Disconnect
                   </button>
                 </div>
              </div>
            )}

            <div className="absolute top-6 left-6 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-heartbeat"></div>
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Live System Feed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
