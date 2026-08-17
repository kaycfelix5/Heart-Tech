"use client";

import { useState } from "react";
import { CpuIcon, RadioIcon, WifiIcon, ServerIcon, SmartphoneIcon, ChevronRightIcon, ActivityIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function SystemFlowSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = projectInfo.systemFlow;

  return (
    <section id="como-funciona" className="py-20 bg-[#080c14] border-t border-white/5 relative overflow-hidden">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="tech-badge tech-badge-blue">
            <ActivityIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Fluxo de Funcionamento</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Como o Sistema Funciona
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            Acompanhe o caminho percorrido pelos dados de telemetria desde o hardware embarcado até as notificações no aplicativo do cuidador.
          </p>
        </div>

        {/* Visual Pipeline Bar (Desktop & Mobile) */}
        <div className="relative mb-12">
          
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-cyan-500 to-emerald-500 -translate-y-1/2 z-0 opacity-40" />

          {/* Steps Nodes Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {steps.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl text-left transition-all backdrop-blur-md flex flex-col items-center text-center cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-b from-[#1a253e] to-[#0f1626] border-2 border-cyan-400 shadow-xl shadow-cyan-500/20 scale-105"
                      : "bg-[#0f1626]/80 border border-white/10 hover:border-white/20 hover:bg-[#131b2e]"
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs mb-3 ${
                    isActive
                      ? "bg-cyan-400 text-black shadow-md shadow-cyan-400/50"
                      : "bg-white/10 text-gray-300"
                  }`}>
                    0{item.step}
                  </div>

                  <div className={`mb-2 ${isActive ? "text-cyan-300" : "text-gray-400"}`}>
                    {item.name}
                  </div>

                  <div className="text-[11px] font-mono text-gray-400 line-clamp-1">
                    {item.tech}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Card Display */}
        <div className="glass-card glass-card-cyan p-8 sm:p-10 max-w-4xl mx-auto bg-gradient-to-r from-[#0f1626] via-[#152037] to-[#0b0f19] border border-cyan-500/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xl font-mono">
                0{steps[activeStep].step}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                  Etapa {steps[activeStep].step} do Fluxo
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {steps[activeStep].name}
                </h3>
              </div>
            </div>

            <div className="px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono">
              {steps[activeStep].tech}
            </div>
          </div>

          <div className="pt-6 space-y-4">
            <p className="text-gray-300 text-base leading-relaxed">
              {steps[activeStep].desc}
            </p>

            <div className="flex items-center justify-between pt-4 text-xs font-mono text-gray-400">
              <span>Status da Etapa: Planejada</span>
              <div className="flex items-center gap-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => prev - 1)}
                  className="px-3 py-1 rounded bg-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20"
                >
                  ← Anterior
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="px-3 py-1 rounded bg-cyan-500 text-black font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cyan-400"
                >
                  Próxima →
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
