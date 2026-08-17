

import { AlertTriangleIcon, ActivityIcon, ShieldIcon, CheckCircleIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function RisksViabilitySection() {
  const { risks, prototypeCost } = projectInfo;

  return (
    <section id="viabilidade" className="py-20 bg-grid-pattern relative">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="tech-badge">
            <AlertTriangleIcon className="w-3.5 h-3.5 text-red-400" />
            <span>Engenharia & Viabilidade</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Análise de Riscos & Custos do Protótipo
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            Mapeamento preventivo de falhas de hardware/software e estimativa financeira para construção do protótipo (MVP).
          </p>
        </div>

        {/* 2 Column Layout: Left Risks Matrix | Right Costs Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Risk Matrix */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <AlertTriangleIcon className="w-6 h-6 text-amber-400" />
              <span>Matriz de Riscos & Mitigações</span>
            </h3>

            <div className="space-y-4">
              {risks.map((item, idx) => (
                <div key={idx} className="glass-card p-5 border border-white/10 hover:border-amber-500/30 transition-all">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="font-bold text-white text-base">{item.risk}</h4>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      Impacto: {item.impact}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pt-2 border-t border-white/5">
                    <strong className="text-cyan-400 font-mono">Mitigação Planejada:</strong> {item.mitigation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Prototype Cost Table */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 bg-gradient-to-b from-[#0f1626] to-[#080c14] border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <ActivityIcon className="w-6 h-6 text-cyan-400" />
              <span>Custo do Protótipo (MVP)</span>
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Orçamento estimado de componentes para a montagem da unidade experimental.
            </p>

            <div className="space-y-3 mb-6">
              {prototypeCost.items.map((row, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 text-sm">
                  <span className="text-gray-300">{row.item}</span>
                  <span className="font-mono font-bold text-cyan-300">R$ {row.cost.toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Total Highlight */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/40 via-red-900/30 to-rose-950/40 border border-red-500/40 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-gray-400 font-bold uppercase block">Total Estimado</span>
                <span className="text-xs text-red-300">Valores de Componentes</span>
              </div>
              <div className="text-2xl font-black text-white font-mono">
                R$ {prototypeCost.rangeMin} – R$ {prototypeCost.rangeMax}
              </div>
            </div>

            <p className="text-[11px] text-gray-400 italic mt-4">
              * Nota: {prototypeCost.note}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
