"use client";

import { CheckCircleIcon, ClockIcon, AlertTriangleIcon, ActivityIcon, ChevronRightIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function DevelopmentTimelineSection() {
  const { sprints, kanbanBoard } = projectInfo;
  const { summary } = kanbanBoard;

  return (
    <section id="desenvolvimento" className="py-20 bg-grid-pattern relative">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="tech-badge">
            <ClockIcon className="w-3.5 h-3.5 text-red-400" />
            <span>Metodologia Agile & Cronograma</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Desenvolvimento por Sprints
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            O projeto é gerenciado com metodologia Scrum e Kanban, estruturado estritamente em <strong>3 Sprints de desenvolvimento</strong>.
          </p>
        </div>

        {/* Status Geral / Executive Dashboard Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          
          <div className="glass-card p-4 text-center border-l-4 border-l-emerald-500">
            <div className="text-xs text-gray-400 font-mono">Sprint 1 (30/05)</div>
            <div className="text-lg font-bold text-emerald-400 mt-1 flex items-center justify-center gap-1">
              <CheckCircleIcon className="w-4 h-4" />
              <span>Concluída</span>
            </div>
            <div className="text-[10px] text-gray-500 mt-1">8 Tarefas Feitas</div>
          </div>

          <div className="glass-card p-4 text-center border-l-4 border-l-amber-500">
            <div className="text-xs text-gray-400 font-mono">Sprint 2 (15/07)</div>
            <div className="text-lg font-bold text-amber-400 mt-1">A Fazer</div>
            <div className="text-[10px] text-gray-500 mt-1">3 Tarefas Previstas</div>
          </div>

          <div className="glass-card p-4 text-center border-l-4 border-l-amber-500">
            <div className="text-xs text-gray-400 font-mono">Sprint 3 (30/09)</div>
            <div className="text-lg font-bold text-amber-400 mt-1">A Fazer</div>
            <div className="text-[10px] text-gray-500 mt-1">3 Tarefas Previstas</div>
          </div>

          <div className="glass-card p-4 text-center border-l-4 border-l-blue-500">
            <div className="text-xs text-gray-400 font-mono">Fazendo Agora</div>
            <div className="text-2xl font-black text-blue-400 mt-1 font-mono">{summary.doingCount}</div>
            <div className="text-[10px] text-gray-500">Em Andamento</div>
          </div>

          <div className="glass-card p-4 text-center border-l-4 border-l-red-500">
            <div className="text-xs text-gray-400 font-mono">Bloqueado</div>
            <div className="text-2xl font-black text-red-500 mt-1 font-mono flex items-center justify-center gap-1">
              <AlertTriangleIcon className="w-5 h-5 text-red-500 animate-pulse" />
              <span>{summary.blockedCount}</span>
            </div>
            <div className="text-[10px] text-red-400 font-medium">1 Card Externa</div>
          </div>

          <div className="glass-card p-4 text-center border-l-4 border-l-emerald-500">
            <div className="text-xs text-gray-400 font-mono">Concluídas</div>
            <div className="text-2xl font-black text-emerald-400 mt-1 font-mono">{summary.completedSprint1Count}</div>
            <div className="text-[10px] text-gray-500">Sprint 1 Finalizada</div>
          </div>

        </div>

        {/* 3 Sprints Interactive Timeline */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {sprints.map((sp) => {
            const isCompleted = sp.status === "CONCLUÍDA";
            return (
              <div
                key={sp.number}
                className={`glass-card p-6 sm:p-8 relative overflow-hidden transition-all ${
                  isCompleted 
                    ? "border-emerald-500/40 bg-gradient-to-r from-emerald-950/20 via-[#0f1626] to-[#080c14]" 
                    : "border-white/10 hover:border-amber-500/30"
                }`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-xl shrink-0 ${
                      isCompleted 
                        ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400" 
                        : "bg-amber-500/10 border border-amber-500/30 text-amber-400"
                    }`}>
                      S{sp.number}
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white">{sp.name}</h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold ${
                          isCompleted 
                            ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300" 
                            : "bg-amber-500/10 border border-amber-500/30 text-amber-300"
                        }`}>
                          {sp.status}
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                        {sp.focus}
                      </p>
                    </div>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-white/10 text-xs font-mono">
                    <span className="text-gray-500">Data Limite:</span>
                    <span className="text-cyan-400 font-bold text-sm">{sp.date}</span>
                    <span className="text-gray-400 mt-1">{sp.tasksCount} tarefas</span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
