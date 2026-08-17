"use client";

import { AlertTriangleIcon, UsersIcon, ClockIcon, ShieldIcon, ActivityIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function ProblemSection() {
  const { problem } = projectInfo;

  return (
    <section id="problema" className="py-20 relative bg-[#0b0f19] border-t border-white/5">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="tech-badge">
            <AlertTriangleIcon className="w-3.5 h-3.5 text-red-400" />
            <span>Contexto & Problema Social</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {problem.title}
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            Em ambientes urbanos e cotidianos, a vulnerabilidade e desorientação espaço-temporal representam uma preocupação constante para famílias e cuidadores.
          </p>
        </div>

        {/* Highlight Stats Banner */}
        <div className="glass-card glass-card-red p-8 sm:p-10 mb-16 relative overflow-hidden bg-gradient-to-r from-red-950/40 via-[#0f1626] to-[#0b0f19] border border-red-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Stat Number */}
            <div className="lg:col-span-5 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
              <div className="text-5xl sm:text-6xl font-black text-red-500 font-mono tracking-tight">
                {problem.statsMain}
              </div>
              <div className="text-gray-300 text-sm sm:text-base font-medium mt-2">
                {problem.statsSub}
              </div>
            </div>

            {/* Conditions Chips */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                Condições de Maior Vulnerabilidade e Risco de Desorientação:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {problem.conditions.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-red-500/30 transition-colors">
                    <div className="font-bold text-red-400 text-sm mb-1">{item.label}</div>
                    <div className="text-gray-400 text-xs">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Risks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problem.risks.map((risk, index) => (
            <div key={index} className="glass-card p-6 flex flex-col justify-between hover:border-red-500/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4 font-bold font-mono">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {risk.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {risk.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-red-400">
                <AlertTriangleIcon className="w-3.5 h-3.5" />
                <span>Desafio a ser Mitigado</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
