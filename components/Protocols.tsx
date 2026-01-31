
import React from 'react';

const protocols = [
  "EU CBAM v1.0",
  "TSMC GREEN 2.0",
  "Tesla AI5 Ready",
  "SGS Digital-Link",
  "ISO 14067-2026",
  "Apple Supply Chain Verified",
  "SEC Climate Disclosure v2",
  "CDP Global Partner"
];

const Protocols: React.FC = () => {
  return (
    <section id="protocols" className="py-20 bg-rc-black overflow-hidden border-b border-rc-silver/5">
      <div className="max-w-7xl mx-auto px-6 mb-12">
         <h2 className="text-xs font-mono text-rc-silver/40 tracking-[0.3em] uppercase mb-2">Supported Protocols</h2>
         <div className="text-xl font-mono text-rc-silver">支援協議與標準</div>
      </div>

      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="flex items-center">
              {protocols.map((protocol, idx) => (
                <div 
                  key={idx} 
                  className="mx-8 flex items-center space-x-4 border border-rc-silver/10 px-8 py-3 bg-rc-gray/20 hover:border-rc-green transition-colors cursor-default"
                >
                  <div className="w-2 h-2 bg-rc-green rounded-full animate-pulse"></div>
                  <span className="font-mono text-sm tracking-widest text-rc-silver/80">{protocol}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Protocols;
