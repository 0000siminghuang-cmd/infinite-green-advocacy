import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EPR: React.FC = () => {
  return (
    <div className="pt-32 pb-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#2F81F7] transition-colors mb-12 font-medium group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Return to Command Center
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-mono text-[#2F81F7] uppercase tracking-widest mb-4">// Strategic Lever</h2>
            <h3 className="text-4xl font-semibold mb-6">Extended Producer Responsibility</h3>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Shifting the financial burden of plastic waste from BC taxpayers back to the original producers.
            </p>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-[#2F81F7] font-mono text-sm">01</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Linear to Circular Transition</h4>
                  <p className="text-gray-400 text-sm">Mandating product lifecycle accountability to neutralize end-of-life toxic externalities.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-[#2F81F7] font-mono text-sm">02</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Supply Chain Compliance & ROI</h4>
                  <p className="text-gray-400 text-sm">Redesigning economic incentives. Compliant enterprises realize operational efficiency; non-compliant entities face structural tariffs.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-[#2F81F7] font-mono text-sm">03</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Taxpayer Relief</h4>
                  <p className="text-gray-400 text-sm">Ending the public subsidy of corporate waste management in British Columbia through robust municipal cost-recovery mechanisms.</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Abstract UI representation of Linear vs Circular */}
          <div className="bg-[#161B22] border border-white/5 rounded-2xl p-8 relative overflow-hidden h-[500px] flex flex-col justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent"></div>
            
            <div className="relative z-10 space-y-12">
              {/* Linear */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono text-gray-500">
                  <span>LINEAR ECONOMY</span>
                  <span className="text-red-400">HIGH TOXICITY</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-1/4 bg-gray-700 rounded-full"></div>
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                  <div className="h-2 w-1/4 bg-gray-600 rounded-full"></div>
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                  <div className="h-2 w-2/4 bg-red-500/20 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-500 w-full opacity-50"></div>
                  </div>
                </div>
              </div>
              
              {/* Circular */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono text-gray-500">
                  <span>CIRCULAR EPR</span>
                  <span className="text-[#2F81F7]">SYSTEM OPTIMIZED</span>
                </div>
                <div className="h-40 w-40 border-2 border-dashed border-[#2F81F7]/30 rounded-full mx-auto relative animate-[spin_20s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#2F81F7] rounded-full shadow-[0_0_15px_rgba(47,129,247,0.5)]"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPR;
