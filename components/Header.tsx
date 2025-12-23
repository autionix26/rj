
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

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
              <path d="M44 27 h8 v14 l-9 -3 z" />
              <path d="M54 36 h14 l-4 6 h-10 z" />
              <path d="M55 43 l14 6 h-14 z" />
              <path d="M54 50 h10 v11 l-10 -3 z" />
              <path d="M50 58 v13 l-6 -8 z" />
              <path d="M38 56 l11 -8 v8 l-11 7 z" />
              <path d="M27 48 h17 l-7 8 z" />
              <path d="M35 35 l11 10 v2 l-11 2 z" />
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
          className="lg:hidden p-2 text-white flex flex-col items-end gap-1.5"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <div className="w-8 h-[2px] bg-white"></div>
          <div className="w-5 h-[2px] bg-white"></div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 bg-brand-dark/98 backdrop-blur-3xl z-[100] lg:hidden transition-all duration-500 ease-in-out flex flex-col p-12 ${
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="text-[12px] font-black tracking-pro-wide text-brand-gold uppercase">Navigation</span>
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-brand-gold hover:bg-brand-gold transition-all duration-500"
            aria-label="Close Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:text-brand-dark transition-colors">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="mt-20 flex flex-col gap-8">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-5xl sm:text-6xl font-serif italic text-white/10 hover:text-brand-gold transition-all duration-500 translate-y-4 opacity-0 animate-[fade-in-up_0.5s_forwards]"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="mt-auto pt-12 border-t border-white/5 flex flex-col gap-6">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Principal Inquiry</p>
           <a href="mailto:partnerships@accessdeal.com" className="text-xl font-bold text-white/60 hover:text-brand-gold transition-colors">
             partnerships@accessdeal.com
           </a>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
