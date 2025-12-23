
import React, { useState, useEffect, useRef } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 40);
        rafRef.current = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const navLinks = [
    { name: 'Process', href: '#process' },
    { name: 'Results', href: '#testimonials' },
    { name: 'Approach', href: '#comparison' },
    { name: 'Models', href: '#exclusivity' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const contactEmail = "mailto:partnerships@accessdeal.com";

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? 'glass-header py-4' : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-6 group">
          {/* Precise Geometric Logo Recreation */}
          <div className="relative w-10 h-10 flex items-center justify-center animate-heartbeat">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full fill-brand-gold"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top Piece */}
              <path d="M45 27 L52 27 L52 41 L43 38 Z" />
              {/* Top Right Piece */}
              <path d="M54 36 L68 36 L64 41 L54 41 Z" />
              {/* Middle Right Piece */}
              <path d="M55 43 L69 49 L55 49 Z" />
              {/* Bottom Right Piece */}
              <path d="M54 50 L64 50 L64 61 L54 58 Z" />
              {/* Bottom Piece */}
              <path d="M50 58 L58 71 L50 71 Z" />
              {/* Bottom Left Piece */}
              <path d="M38 56 L46 64 L38 72 Z" />
              {/* Mid Left Piece */}
              <path d="M27 48 L46 48 L38 56 Z" />
              {/* Top Left Piece */}
              <path d="M35 35 L46 47 L35 47 Z" />
              {/* Central triangle */}
              <path d="M47 42 L59 43 L51 49 Z" className="opacity-90" />
            </svg>
          </div>
          
          <span className="text-[14px] font-bold tracking-[0.4em] text-white uppercase group-hover:text-brand-gold transition-colors duration-700">
            AccessDeal
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-14">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-[10px] font-semibold text-white/40 hover:text-white transition-all duration-500 tracking-[0.25em] uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-10">
          <a href={contactEmail} className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 hover:text-brand-gold transition-colors duration-500">
            Inquire
          </a>
          <a href={contactEmail} className="relative overflow-hidden bg-brand-gold text-brand-dark text-[10px] font-bold tracking-[0.3em] px-10 py-4 rounded-full hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-700 uppercase group/btn">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
          </a>
        </div>

        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <div className="w-8 h-[1px] bg-current mb-2"></div>
          <div className="w-5 h-[1px] bg-current ml-auto"></div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-brand-dark z-[100] flex flex-col p-12 animate-in fade-in duration-700">
          <div className="flex justify-between items-center mb-24">
            <span className="text-[14px] font-bold tracking-[0.4em] text-white uppercase">ACCESSDEAL</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white/40 hover:text-white transition-colors">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-6xl font-serif text-white/30 hover:text-brand-gold hover:translate-x-6 transition-all duration-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
