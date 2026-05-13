import React from 'react';
import { Brain, Activity, Droplet, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pathology: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-[#0D1117] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#2F81F7] transition-colors mb-12 font-medium group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Return to Command Center
        </Link>
        
        <div className="mb-16">
          <h2 className="text-sm font-mono text-[#2F81F7] uppercase tracking-widest mb-4">// Medical Diagnostic</h2>
          <h3 className="text-3xl font-semibold">Endocrine & Neurological Penetration</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#161B22] border border-white/5 p-8 rounded-xl hover:border-white/20 transition-colors">
            <Brain className="w-10 h-10 text-[#2F81F7] mb-6" strokeWidth={1.5} />
            <h4 className="text-lg font-semibold mb-3">Blood-Brain Barrier Compromise</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nanoplastics (&lt;1μm) demonstrate the capacity to bypass the blood-brain barrier, introducing industrial chemical signatures directly into neural tissues and disrupting synaptic integrity.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-[#161B22] border border-white/5 p-8 rounded-xl hover:border-white/20 transition-colors">
            <Activity className="w-10 h-10 text-red-400 mb-6" strokeWidth={1.5} />
            <h4 className="text-lg font-semibold mb-3">Endocrine Disruption</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Phthalates and BPA additives act as hormonal mimics. Their accumulation in human tissue correlates with significant alterations in metabolic and reproductive health trajectories.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-[#161B22] border border-white/5 p-8 rounded-xl hover:border-white/20 transition-colors">
            <Droplet className="w-10 h-10 text-emerald-400 mb-6" strokeWidth={1.5} />
            <h4 className="text-lg font-semibold mb-3">Systemic Bioaccumulation</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              A non-linear progression of toxic load. Current diagnostic models indicate permanent embedding of micro-polymers within the cardiovascular and respiratory systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pathology;
