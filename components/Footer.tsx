
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24">
          <div className="lg:col-span-5">
            <a href="#top" className="flex items-center gap-4 mb-8 group" aria-label="Back to Top">
              <div className="w-8 h-8 fill-brand-gold group-hover:scale-110 transition-transform duration-700">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full fill-current filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
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
              <span className="text-[14px] font-black tracking-pro-wide uppercase text-white group-hover:text-brand-gold transition-colors">ACCESSDEAL</span>
            </a>
            <p className="text-[15px] text-white/40 max-w-[340px] leading-relaxed font-bold mb-10">
              Boutique facilitation for high-stakes enterprise transactions. Limited to six strategic partnership intake cycles annually.
            </p>
            <nav className="flex gap-8" aria-label="Social Links">
               <a href="#" className="text-[10px] font-black tracking-widest uppercase text-brand-gold hover:text-white transition-all underline underline-offset-8 decoration-brand-gold/20">LinkedIn</a>
               <a href="mailto:partnerships@accessdeal.com" className="text-[10px] font-black tracking-widest uppercase text-brand-gold hover:text-white transition-all underline underline-offset-8 decoration-brand-gold/20">Protocol</a>
            </nav>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[9px] uppercase tracking-pro-wide font-black text-white/20 mb-8 italic">Architecture</h4>
            <ul className="space-y-4 text-[11px] font-black tracking-widest uppercase">
              <li><a href="#testimonials" className="text-white/40 hover:text-brand-gold transition-colors">Results</a></li>
              <li><a href="#process" className="text-white/40 hover:text-brand-gold transition-colors">Methodology</a></li>
              <li><a href="#pricing" className="text-white/40 hover:text-brand-gold transition-colors">Capital</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[9px] uppercase tracking-pro-wide font-black text-white/20 mb-8 italic">Security</h4>
            <ul className="space-y-4 text-[11px] font-black tracking-widest uppercase">
              <li><a href="#" className="text-white/40 hover:text-brand-gold transition-colors">NDA Model</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-gold transition-colors">Compliance</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-gold transition-colors">Privacy</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="p-8 border border-white/5 bg-white/[0.02] rounded-sm">
               <h4 className="text-[9px] uppercase tracking-pro-wide font-black text-brand-gold mb-6">Principal Inquiry</h4>
               <p className="text-[13px] text-white/40 font-bold mb-6 leading-relaxed uppercase tracking-tighter">
                 Direct inquiry concerning Q3 2025:
               </p>
               <a href="mailto:partnerships@accessdeal.com" className="text-[12px] font-black text-white border-b border-brand-gold/40 pb-1 hover:text-brand-gold hover:border-brand-gold transition-all block truncate">partnerships@accessdeal.com</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] font-black uppercase tracking-pro-wide text-white/10">© 2025 AccessDeal Facilitation Inc. All Property Protected.</p>
          <div className="flex items-center gap-8">
             <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-soft-glow"></div>
               <span className="text-[9px] font-black uppercase tracking-widest text-white/30">Network Secured</span>
             </div>
             <div className="h-4 w-[1px] bg-white/5"></div>
             <span className="text-[9px] font-black uppercase tracking-widest text-white/10">Boutique // Selective // Trusted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
