
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

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? 'glass-header py-4 shadow-xl' : 'bg-transparent py-8 sm:py-12'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-5 group">
          <div className="relative w-12 h-12 flex items-center justify-center animate-heartbeat text-brand-dark">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M45 27 L52 27 L52 41 L43 38 Z" />
              <path d="M54 36 L68 36 L64 41 L54 41 Z" />
              <path d="M55 43 L69 49 L55 49 Z" />
              <path d="M54 50 L64 50 L64 61 L54 58 Z" />
            </svg>
          </div>
          <span className="text-[18px] font-black tracking-[0.4em] text-brand-dark uppercase group-hover:text-brand-gold transition-colors duration-500">
            AccessDeal
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-[12px] font-black text-brand-dark hover:text-brand-gold transition-all duration-300 tracking-[0.2em] uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-12">
          <a href="#faq" className="text-[12px] font-black tracking-[0.3em] uppercase text-brand-dark/80 hover:text-brand-dark transition-colors">
            Support
          </a>
          <a href="#pricing" className="relative overflow-hidden bg-brand-dark text-white text-[12px] font-black tracking-[0.3em] px-12 py-5 rounded-sm hover:bg-brand-gold transition-all duration-500 uppercase shadow-lg">
            Start Now
          </a>
        </div>

        <button 
          className="lg:hidden p-2 text-brand-dark flex flex-col items-end gap-2"
          onClick={() => setIsMenuOpen(true)}
        >
          <div className="w-10 h-[3px] bg-brand-dark"></div>
          <div className="w-7 h-[3px] bg-brand-dark"></div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col p-12 animate-in slide-in-from-right duration-500">
          <div className="flex justify-between items-center mb-24">
            <span className="text-[20px] font-black tracking-[0.4em] text-brand-dark uppercase">ACCESSDEAL</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-brand-dark">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <nav className="flex flex-col gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-6xl font-serif font-bold text-brand-dark/30 hover:text-brand-dark transition-all duration-500"
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
