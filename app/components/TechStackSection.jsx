"use client";

import { useState } from "react";
import { CpuIcon, ServerIcon, DatabaseIcon, SmartphoneIcon, LayoutIcon, CheckCircleIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0);
  const techCategories = projectInfo.techStack;

  const getCategoryIcon = (category) => {
    if (category.includes("Hardware")) return <CpuIcon className="w-5 h-5 text-red-400" />;
    if (category.includes("Backend")) return <ServerIcon className="w-5 h-5 text-cyan-400" />;
    if (category.includes("Banco")) return <DatabaseIcon className="w-5 h-5 text-emerald-400" />;
    if (category.includes("Aplicativo")) return <SmartphoneIcon className="w-5 h-5 text-purple-400" />;
    return <LayoutIcon className="w-5 h-5 text-amber-400" />;
  };

  return (
    <section id="tecnologias" className="py-20 bg-[#0b0f19] border-t border-white/5 relative">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="tech-badge tech-badge-blue">
            <CpuIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Stack de Desenvolvimento</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tecnologias Utilizadas & Planejadas
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            Ecossistema completo integrando hardware embarcado, comunicação de rede, serviços de backend e aplicação móvel.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {techCategories.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30"
                    : "bg-[#0f1626] text-gray-400 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {getCategoryIcon(cat.category)}
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Content */}
        <div className="glass-card p-8 sm:p-10 max-w-4xl mx-auto bg-gradient-to-b from-[#0f1626] to-[#080c14] border border-white/15">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                {getCategoryIcon(techCategories[activeTab].category)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {techCategories[activeTab].category}
                </h3>
                <span className="text-xs font-mono text-gray-400">
                  Especificação Técnica
                </span>
              </div>
            </div>

            <div className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
              Status: {techCategories[activeTab].status}
            </div>
          </div>

          {/* Items Chips Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techCategories[activeTab].items.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.06] transition-all flex items-center gap-3">
                <CheckCircleIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-sm font-semibold text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
