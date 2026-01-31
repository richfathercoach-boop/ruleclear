
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg animate-grid-move opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-rc-black via-transparent to-rc-black"></div>
        <div className="absolute left-0 top-0 w-full h-1 bg-rc-green/20 animate-scanline blur-sm"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1 mb-6 border border-rc-green/40 text-rc-green text-xs font-mono tracking-[0.2em] uppercase bg-rc-green/5">
          Access Granted: Protocol 2026.v1
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold font-mono tracking-tight mb-8 text-rc-silver leading-none">
          Clearing Data,<br />
          <span className="text-glow">Unlocking Access.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-rc-silver/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          2026 全球供應鏈數據清算協議。提供 <span className="text-rc-silver">TEE 硬體級判定接口</span>，確保資料對齊全球自動化驗證標準。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-rc-silver text-rc-black font-mono px-10 py-4 font-bold hover:bg-rc-green transition-colors duration-300"
          >
            立即獲取技術白皮書
          </button>
          <button className="w-full sm:w-auto font-mono text-sm border-b border-rc-silver/30 py-2 hover:border-rc-green transition-colors">
            了解清算架構 ->
          </button>
        </div>
      </div>

      {/* Hero Footer Decoration */}
      <div className="absolute bottom-10 left-0 w-full px-6 flex justify-between items-end opacity-20 pointer-events-none font-mono text-[10px] uppercase tracking-widest">
        <div>STATUS: SYSTEM OPERATIONAL</div>
        <div>LATENCY: 1.4ms // GLOBAL NODES: 2,408</div>
      </div>
    </section>
  );
};

export default Hero;
