
import React from 'react';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-rc-black/80 backdrop-blur-md border-b border-rc-silver/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="font-mono text-2xl font-bold tracking-tighter cursor-pointer text-rc-silver"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          RuleClear
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-mono tracking-widest text-rc-silver/60">
          <button onClick={() => scrollTo('features')} className="hover:text-rc-silver transition-colors">技術架構</button>
          <button onClick={() => scrollTo('protocols')} className="hover:text-rc-silver transition-colors">規則清算</button>
          <button onClick={() => scrollTo('legal')} className="hover:text-rc-silver transition-colors">法律合規</button>
        </div>

        <div>
          <button 
            onClick={() => scrollTo('contact')}
            className="border border-rc-silver/30 px-6 py-2 text-sm font-mono hover:bg-rc-silver hover:text-rc-black transition-all duration-300 border-glow"
          >
            [預約技術說明]
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
