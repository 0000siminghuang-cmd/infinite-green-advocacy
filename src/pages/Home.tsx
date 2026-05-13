import React, { useState } from 'react';
import { ShieldAlert, FileText, Anchor, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2F81F7]/10 via-[#0D1117]/0 to-transparent"></div>
        <div className="max-w-none w-screen relative z-10 grid md:grid-cols-2 gap-16 items-start text-left">
          <div className="max-w-none w-full px-[8vw] text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono mb-8 text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#2F81F7] animate-pulse"></span>
              2026 Policy Directive Active
            </div>
            <div className="max-w-none w-full mb-8 text-left">
              <h1 className="inline-block w-max text-[2.5vw] whitespace-nowrap font-extrabold tracking-tighter leading-[1.2] pb-[0.1em] bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent text-left">
                Plastics: The Silent Neuro-Pathological Crisis.
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#2F81F7] mb-6 tracking-widest uppercase">
              LESS PLASTIC, MORE LIFE.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-12 font-light text-left">
              Moving beyond cleanup. We advocate for systemic <strong className="text-white font-medium">EPR (Extended Producer Responsibility)</strong> frameworks to decouple industrial growth from toxic microplastic accumulation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/epr" className="px-8 py-4 bg-[#2F81F7] hover:bg-blue-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 group hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(47,129,247,0.3)]">
                View Policy Framework
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/pathology" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-lg font-medium border border-white/10 transition-all flex items-center justify-center hover:scale-105 active:scale-95">
                Clinical Data
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Call-to-Action */}
      <section id="coalition" className="py-24 px-6 border-t border-white/5 bg-[#161B22]/50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ShieldAlert className="w-12 h-12 text-[#2F81F7] mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">Strategic Coalition Assembly</h2>
          <p className="text-gray-400 text-lg">
            A united front is required to push EPR legislation forward. Select your mandate to engage with our policy engineering teams.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Form / Button 1 */}
          <div className="bg-[#0D1117] border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#2F81F7]/50 transition-colors group">
            <FileText className="w-8 h-8 text-white mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold mb-2">Policy Makers</h3>
            <p className="text-sm text-gray-400 mb-8 flex-grow">
              Access drafted legislative frameworks, economic impact reports, and toxicological data sets for BC jurisdictions.
            </p>
            <button 
              onClick={() => { setIsModalOpen(true); setIsVerifying(false); }}
              className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded font-medium border border-white/10 transition-all hover:scale-105 active:scale-95">
              Access Policy Portal
            </button>
          </div>
          
          {/* Form / Button 2 */}
          <div className="bg-[#0D1117] border border-[#2F81F7]/20 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#2F81F7]/50 transition-colors relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2F81F7] to-transparent opacity-50"></div>
            <Anchor className="w-8 h-8 text-[#2F81F7] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold mb-2">Industry Leaders</h3>
            <p className="text-sm text-gray-400 mb-8 flex-grow">
              Align your supply chain with upcoming compliance mandates. Partner with us to model sustainable EPR integration.
            </p>
            <button 
              onClick={() => { setIsModalOpen(true); setIsVerifying(false); }}
              className="w-full py-3 bg-[#2F81F7] hover:bg-blue-600 text-white rounded font-medium transition-all shadow-[0_0_10px_rgba(47,129,247,0.2)] hover:shadow-[0_0_20px_rgba(47,129,247,0.4)] hover:scale-105 active:scale-95">
              Initiate Alignment
            </button>
          </div>
        </div>
      </section>

      {/* Security Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#0D1117] border border-[#2F81F7] w-full max-w-md rounded-xl shadow-2xl relative overflow-hidden flex flex-col">
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2F81F7] to-transparent"></div>
            
            {/* Close Button */}
            <button 
              onClick={() => { setIsModalOpen(false); setIsVerifying(false); }}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-8">
              <h3 className="text-xl font-bold uppercase tracking-tighter text-[#2F81F7] mb-2">
                INSTITUTIONAL ACCESS REQUIRED
              </h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                This portal is restricted to registered Government Officials and Industry Stakeholders for INFINITE GREEN Policy Frameworks.
              </p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Organization Email</label>
                  <input type="email" placeholder="official@gov.bc.ca" className="w-full bg-[#161B22] border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#2F81F7] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Credential Key</label>
                  <input type="password" placeholder="••••••••••••" className="w-full bg-[#161B22] border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#2F81F7] transition-colors" />
                </div>
              </div>
              
              <button 
                onClick={() => setIsVerifying(true)}
                disabled={isVerifying}
                className="w-full py-3 bg-[#2F81F7] hover:bg-blue-600 text-white rounded font-medium transition-all shadow-[0_0_10px_rgba(47,129,247,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isVerifying ? "Verifying..." : "Verify Credentials"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
