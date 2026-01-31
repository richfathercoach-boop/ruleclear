
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-rc-silver/5 bg-rc-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-mono text-xl font-bold tracking-tighter text-rc-silver">RuleClear</div>
          <div className="text-[10px] font-mono text-rc-silver/30 uppercase tracking-[0.3em]">© 2026 RuleClear Protocol. All Rights Reserved.</div>
          <div className="text-[10px] font-mono text-rc-silver/60 uppercase tracking-widest mt-2">
            CONTACT: <a href="mailto:access@ruleclear.com" className="hover:text-rc-green transition-colors">access@ruleclear.com</a>
          </div>
        </div>

        <div className="flex space-x-8 text-[10px] font-mono text-rc-silver/40 uppercase tracking-widest">
          <a href="#" className="hover:text-rc-silver transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-rc-silver transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-rc-silver transition-colors">Audit Logs</a>
        </div>

        <div className="flex items-center space-x-3 bg-rc-gray/50 px-4 py-2 rounded-full border border-rc-silver/5">
          <div className="w-1.5 h-1.5 bg-rc-green rounded-full shadow-[0_0_8px_#00FF41]"></div>
          <span className="text-[10px] font-mono text-rc-silver/60 uppercase tracking-widest">Global Network Active</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
