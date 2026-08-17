"use client";

import { CheckCircleIcon, XIcon, ShieldIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function ScopeSection() {
  const { scope } = projectInfo;

  return (
    <section id="escopo" className="py-20 bg-[#080c14] border-t border-white/5 relative">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="tech-badge">
            <ShieldIcon className="w-3.5 h-3.5 text-red-400" />
            <span>Delimitação de Projeto</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Escopo de Desenvolvimento
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            Definição clara dos entregáveis acadêmicos (MVP) e dos limites operacionais do projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contempla Column */}
          <div className="glass-card p-8 border-l-4 border-l-emerald-500 bg-gradient-to-br from-emerald-950/20 via-[#0f1626] to-[#080c14]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircleIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">O que o Projeto CONTEMPLA</h3>
                <span className="text-xs text-emerald-400 font-mono">Entregáveis Oficiais do MVP</span>
              </div>
            </div>

            <ul className="space-y-4">
              {scope.included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Não Contempla Column */}
          <div className="glass-card p-8 border-l-4 border-l-red-500 bg-gradient-to-br from-red-950/20 via-[#0f1626] to-[#080c14]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <XIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">O que NÃO CONTEMPLA</h3>
                <span className="text-xs text-red-400 font-mono">Fora do Escopo Acadêmico</span>
              </div>
            </div>

            <ul className="space-y-4">
              {scope.excluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
