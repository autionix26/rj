
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Process', href: '#process' },
    { name: 'Results', href: '#testimonials' },
    { name: 'Comparison', href: '#comparison' },
    { name: 'Model', href: '#exclusivity' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'glass-header py-4 shadow-depth' : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-4 group" aria-label="AccessDeal Home">
          <div className="relative w-9 h-9 flex items-center justify-center text-brand-gold">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full fill-current filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:rotate-12"
            >
              {/* Top Piece */}
              <path d="M44 27 h8 v14 l-9 -3 z" />
              {/* Top Right Piece */}
              <path d="M54 36 h14 l-4 6 h-10 z" />
              {/* Right Piece */}
              <path d="M55 43 l14 6 h-14 z" />
              {/* Bottom Right Piece */}
              <path d="M54 50 h10 v11 l-10 -3 z" />
              {/* Bottom Piece */}
              <path d="M50 58 v13 l-6 -8 z" />
              {/* Bottom Left Piece */}
              <path d="M38 56 l11 -8 v8 l-11 7 z" />
              {/* Left Piece */}
              <path d="M27 48 h17 l-7 8 z" />
              {/* Top Left Piece */}
              <path d="M35 35 l11 10 v2 l-11 2 z" />
              {/* Center Piece */}
              <path d="M48 43 h12 l-7 6 z" />
            </svg>
          </div>
          <span className="text-[14px] font-black tracking-pro-wide text-white uppercase group-hover:text-brand-gold transition-colors duration-300">
            AccessDeal
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="relative text-[11px] font-bold text-white/60 hover:text-white transition-all tracking-[0.2em] uppercase nav-link-underline"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-8">
          <a href="#faq" className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors">
            Inquire
          </a>
          <a 
            href="#pricing" 
            className="bg-brand-gold text-brand-dark text-[11px] font-black tracking-widest px-10 py-4 rounded-full hover:shadow-soft-glow hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 uppercase"
          >
            Get Started
          </a>
        </div>

        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle Menu"
        >
          <div className={`w-8 h-[2px] bg-white transition-all mb-2 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
          <div className={`w-6 h-[2px] bg-white ml-auto transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[2px] w-8' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-2xl z-40 lg:hidden transition-transform duration-500 flex flex-col p-12 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="mt-20 flex flex-col gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-5xl font-serif italic text-white/20 hover:text-brand-gold transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
