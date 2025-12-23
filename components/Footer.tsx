
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-32 pb-16 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 pb-32">
          <div className="lg:col-span-5">
            <a href="#hero" className="flex items-center gap-6 mb-10 group">
              <div className="w-8 h-8 fill-brand-gold/60 group-hover:fill-brand-gold transition-colors duration-500">
                <svg viewBox="0 0 100 100">
                  <path d="M45 27 L52 27 L52 41 L43 38 Z" />
                  <path d="M54 36 L68 36 L64 41 L54 41 Z" />
                  <path d="M55 43 L69 49 L55 49 Z" />
                  <path d="M54 50 L64 50 L64 61 L54 58 Z" />
                </svg>
              </div>
              <span className="text-[16px] font-bold tracking-[0.5em] uppercase">ACCESSDEAL</span>
            </a>
            <p className="text-[16px] text-white/40 max-w-[400px] leading-relaxed font-light mb-12">
              Private B2B facilitation for high-stakes enterprise transactions. Limited to six strategic partnerships annually.
            </p>
            <div className="flex gap-10">
               <a href="https://linkedin.com" className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/20 hover:text-brand-gold transition-colors duration-500">LinkedIn</a>
               <a href="mailto:partnerships@accessdeal.com" className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/20 hover:text-brand-gold transition-colors duration-500">Email</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20 mb-10">Explore</h4>
            <ul className="space-y-6 text-[12px] font-bold tracking-[0.2em] uppercase">
              <li><a href="#testimonials" className="text-white/40 hover:text-brand-gold transition-colors">Results</a></li>
              <li><a href="#process" className="text-white/40 hover:text-brand-gold transition-colors">Methodology</a></li>
              <li><a href="#pricing" className="text-white/40 hover:text-brand-gold transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20 mb-10">Compliance</h4>
            <ul className="space-y-6 text-[12px] font-bold tracking-[0.2em] uppercase">
              <li><a href="#" className="text-white/40 hover:text-brand-gold transition-colors">Privacy</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-gold transition-colors">NDA Model</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-gold transition-colors">Ethics</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="p-8 border border-white/5 bg-brand-dark/40">
               <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-6">HQ Inquiry</h4>
               <p className="text-[15px] text-white/60 font-light mb-6 leading-relaxed">
                 Principal-led inquiries regarding Q3 2025 openings:
               </p>
               <a href="mailto:partnerships@accessdeal.com" className="text-[13px] font-bold text-white hover:text-brand-gold transition-colors">partnerships@accessdeal.com</a>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">© 2025 AccessDeal Facilition Inc.</p>
          <div className="flex items-center gap-10">
             <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Network Secured</span>
             </div>
             <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 hidden md:block">Boutique // Selective // Trusted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
