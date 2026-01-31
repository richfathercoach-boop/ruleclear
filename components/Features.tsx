
import React from 'react';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  content: string;
  number: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, subtitle, content, number }) => (
  <div className="group border border-rc-silver/10 bg-rc-gray/30 p-8 hover:bg-rc-gray/50 transition-all duration-500 hover:border-rc-green/30">
    <div className="font-mono text-rc-green/40 text-xs mb-8 tracking-widest">LAYER_{number}</div>
    <h3 className="text-2xl font-bold text-rc-silver mb-2 font-mono">{title}</h3>
    <div className="text-rc-green text-xs font-mono mb-6 uppercase tracking-widest">{subtitle}</div>
    <p className="text-rc-silver/60 leading-relaxed text-sm">
      {content}
    </p>
    <div className="mt-8 h-[1px] w-0 group-hover:w-full bg-rc-green transition-all duration-700"></div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 border-y border-rc-silver/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-xs font-mono text-rc-green tracking-[0.5em] uppercase mb-4">Core Principles</h2>
          <div className="text-4xl font-mono font-bold text-rc-silver">三大核心支柱</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            number="01"
            title="數位轉譯"
            subtitle="Digital Translation"
            content="將複雜製程數據映射至標準化格式，規避人工補件延遲。透過自動化 Mapping 技術，確保每一組數據皆具備全球互通性。"
          />
          <FeatureCard 
            number="02"
            title="判定即焚"
            subtitle="TEE Verification"
            content="原始數據進入加密黑盒 (Trusted Execution Environment) 判定，結果產出後立即物理焚毀。除結果外，不留存任何客戶原始資產。"
          />
          <FeatureCard 
            number="03"
            title="技術中立"
            subtitle="Neutral Protocol"
            content="不介入採購、不提供評分，專注於提升資料的可採信度。RuleClear 作為數位世界的公證秤盤，僅負責驗證資料的合規性。"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
