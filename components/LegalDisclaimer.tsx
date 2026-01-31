
import React from 'react';

const LegalDisclaimer: React.FC = () => {
  return (
    <section id="legal" className="py-24 px-6 bg-rc-black">
      <div className="max-w-4xl mx-auto">
        <div className="bg-rc-gray p-10 border-l-4 border-rc-silver/40">
          <div className="flex items-center space-x-3 mb-6">
            <svg className="w-6 h-6 text-rc-silver/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h3 className="font-mono text-lg font-bold text-rc-silver uppercase tracking-widest">法律防火牆 // LEGAL FIREWALL</h3>
          </div>
          
          <div className="space-y-6 text-rc-silver/60 font-sans leading-relaxed text-sm">
            <p className="text-rc-silver font-bold">獨立性聲明：</p>
            <p>
              RuleClear 與所有硬體供應商保持技術中立。本平台不參與任何形式的搭售，亦不介入客戶之採購決策。我們僅提供純粹的數據清算與驗證服務。
            </p>
            <p>
              本協議設計與執行嚴格符合 <span className="text-rc-silver">GDPR</span>、<span className="text-rc-silver">2026 數位市場法 (Digital Markets Act)</span> 以及歐盟與美洲主要經濟區之跨境數據傳輸規範。
            </p>
            <div className="pt-6 border-t border-rc-silver/10 flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em]">
              <span>Compliance Certified // RC-L-2026</span>
              <span className="text-rc-green">Verified SEC-Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimer;
