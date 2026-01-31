
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-rc-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono text-rc-green tracking-[0.5em] uppercase mb-4">Request Access</h2>
          <div className="text-4xl font-mono font-bold text-rc-silver mb-4">預約技術說明</div>
          <p className="text-rc-silver/40 font-mono text-sm uppercase tracking-wider mb-2">Our engineers will respond within 24 operational hours.</p>
          <div className="text-rc-silver/60 font-mono text-xs tracking-widest mt-4">
            DIRECT INQUIRY: <a href="mailto:access@ruleclear.com" className="text-rc-silver hover:text-rc-green transition-colors underline decoration-rc-silver/20 underline-offset-4">access@ruleclear.com</a>
          </div>
        </div>

        <div className="bg-rc-gray/30 border border-rc-silver/10 p-8 md:p-12 relative">
          {status === 'success' ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rc-green/10 text-rc-green mb-6 border border-rc-green/30">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-mono font-bold text-rc-silver mb-4 uppercase tracking-widest">Protocol Accepted</h3>
              <p className="text-rc-silver/60 max-w-sm mx-auto">我們已收到您的請求，技術團隊將安排專屬視訊會議。請查收企業郵箱中的驗證郵件。</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 font-mono text-rc-green text-sm underline hover:text-rc-silver transition-colors"
              >
                發送另一份申請
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase tracking-widest text-rc-silver/40">姓名 / Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Alan Chen"
                    className="w-full bg-rc-black/50 border border-rc-silver/20 px-4 py-3 text-rc-silver font-mono focus:outline-none focus:border-rc-green transition-colors placeholder:text-rc-silver/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase tracking-widest text-rc-silver/40">企業郵箱 / Business Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="name@corporation.com"
                    className="w-full bg-rc-black/50 border border-rc-silver/20 px-4 py-3 text-rc-silver font-mono focus:outline-none focus:border-rc-green transition-colors placeholder:text-rc-silver/20"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block font-mono text-xs uppercase tracking-widest text-rc-silver/40">感興趣的協議 / Interested Protocols</label>
                <select className="w-full bg-rc-black/50 border border-rc-silver/20 px-4 py-3 text-rc-silver font-mono focus:outline-none focus:border-rc-green transition-colors appearance-none">
                  <option value="cbam">EU CBAM v1.0 (Carbon Border Adjustment)</option>
                  <option value="tsmc">TSMC GREEN 2.0 (Supply Chain Excellence)</option>
                  <option value="tesla">Tesla AI5 / FSD Compliance</option>
                  <option value="sgs">SGS Digital-Link Integration</option>
                  <option value="other">其他客製化規則清算</option>
                </select>
              </div>

              <div className="pt-4">
                <button 
                  disabled={status === 'sending'}
                  type="submit"
                  className="w-full bg-rc-silver text-rc-black font-mono font-bold py-4 hover:bg-rc-green transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-rc-black border-t-transparent"></div>
                      <span>PROCESSING...</span>
                    </>
                  ) : (
                    <span>[ 啟動技術對接流程 ]</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
