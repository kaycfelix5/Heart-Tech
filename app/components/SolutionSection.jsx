"use client";

import { TargetIcon, CheckCircleIcon, ShieldIcon, CpuIcon, HeartIcon, ZapIcon, AlertCircleIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function SolutionSection() {
  return (
    <section id="solucao" className="py-20 bg-grid-pattern relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="tech-badge tech-badge-blue">
            <TargetIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>A Solução Heart-Tech</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Objetivos & Proposta de Valor
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            Combinando hardware embarcado de baixo custo, conectividade celular e aplicativo móvel para garantir proteção contínua.
          </p>
        </div>

        {/* General Objective Hero Card */}
        <div className="glass-card glass-card-cyan p-8 sm:p-10 mb-16 relative overflow-hidden bg-gradient-to-br from-[#0f1626] via-[#131d33] to-[#080c14] border border-cyan-500/30">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <TargetIcon className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                Objetivo Geral do Projeto
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {projectInfo.generalObjective}
              </h3>
            </div>
          </div>
        </div>

        {/* Specific Objectives Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <CheckCircleIcon className="w-6 h-6 text-emerald-400" />
            <span>Objetivos Específicos</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectInfo.specificObjectives.map((obj, index) => (
              <div key={index} className="glass-card p-5 flex items-start gap-4 hover:border-emerald-500/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Justification & Differentials */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <ZapIcon className="w-6 h-6 text-rose-400" />
              <span>Diferenciais Propostos (Justificativa)</span>
            </h3>

            <div className="text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg flex items-center gap-2">
              <AlertCircleIcon className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Proposta/Planejamento Acadêmico</span>
            </div>
          </div>

          {/* Differentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {projectInfo.differentials.map((item, idx) => (
              <div key={idx} className="glass-card p-6 border-l-4 border-l-rose-500 hover:bg-[#152037] transition-all">
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Commercial Comparison Disclaimer Note */}
          <div className="p-6 rounded-2xl bg-[#0f1626]/90 border border-white/10 text-xs text-gray-400 space-y-3">
            <div className="font-bold text-gray-200 uppercase tracking-wider flex items-center gap-2">
              <ShieldIcon className="w-4 h-4 text-cyan-400" />
              <span>Comparativo de Referência de Mercado (Proposta vs Soluções Comerciais)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projectInfo.commercialComparison.competitors.map((comp, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="font-bold text-white text-sm mb-1">{comp.name}</div>
                  <div className="text-gray-400 text-xs">{comp.limit}</div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-400 italic pt-2 border-t border-white/5">
              * Nota: {projectInfo.commercialComparison.note}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
