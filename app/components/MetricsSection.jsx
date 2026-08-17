

import { ActivityIcon, TargetIcon, AlertCircleIcon, ShieldIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function MetricsSection() {
  const metrics = projectInfo.metrics;

  return (
    <section id="metricas" className="py-20 bg-grid-pattern relative">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="tech-badge tech-badge-blue">
            <TargetIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Indicadores de Desempenho</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Métricas Técnicas de Validação
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            Metas de homologação estabelecidas para orientar os testes do protótipo e garantir confiabilidade operacional.
          </p>
        </div>

        {/* Validation Disclaimer Notice */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs sm:text-sm text-cyan-200 flex items-center gap-3">
          <AlertCircleIcon className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>
            <strong>Nota Importante:</strong> Todos os valores apresentados nesta seção constituem <strong>metas técnicas planejadas para a etapa de testes (Sprint 3)</strong>, não representando resultados já aferidos em laboratório.
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="glass-card p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-[#131d33] transition-all group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-gray-400 font-semibold">{m.name}</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[10px] font-mono border border-cyan-500/20">
                    {m.status}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-white font-mono group-hover:text-cyan-400 transition-colors mb-2">
                  {m.target}
                </div>

                <p className="text-gray-400 text-xs leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>Indicador Técnico</span>
                <span>Meta MVP</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
