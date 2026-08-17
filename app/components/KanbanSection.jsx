"use client";

import { useState } from "react";
import { LayoutIcon, AlertTriangleIcon, CheckCircleIcon, ClockIcon, LockIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function KanbanSection() {
  const [filter, setFilter] = useState("all");
  const { kanbanBoard } = projectInfo;
  const { columns } = kanbanBoard;

  const handleFilterClick = (filterType) => {
    setFilter(filterType);
  };

  const isTaskVisible = (task, colId) => {
    if (filter === "all") return true;
    if (filter === "sprint1") return task.sprint === "Sprint 1";
    if (filter === "sprint2") return task.sprint === "Sprint 2";
    if (filter === "sprint3") return task.sprint === "Sprint 3";
    if (filter === "blocked") return colId === "blocked";
    return true;
  };

  return (
    <section id="kanban" className="py-20 bg-[#080c14] border-t border-white/5 relative">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="tech-badge">
            <LayoutIcon className="w-3.5 h-3.5 text-red-400" />
            <span>Quadro Kanban Interativo</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kanban Atual do Projeto
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            Visualização completa das tarefas organizadas por estágio de execução e dependências.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => handleFilterClick("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
              filter === "all" ? "bg-red-600 text-white shadow-lg shadow-red-600/30" : "bg-[#0f1626] text-gray-400 border border-white/10 hover:text-white"
            }`}
          >
            Todas as Tarefas
          </button>
          <button
            onClick={() => handleFilterClick("sprint1")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
              filter === "sprint1" ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30" : "bg-[#0f1626] text-gray-400 border border-white/10 hover:text-white"
            }`}
          >
            Sprint 1 (Concluída)
          </button>
          <button
            onClick={() => handleFilterClick("sprint2")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
              filter === "sprint2" ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30" : "bg-[#0f1626] text-gray-400 border border-white/10 hover:text-white"
            }`}
          >
            Sprint 2 (Próxima)
          </button>
          <button
            onClick={() => handleFilterClick("sprint3")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
              filter === "sprint3" ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/30" : "bg-[#0f1626] text-gray-400 border border-white/10 hover:text-white"
            }`}
          >
            Sprint 3 (Final)
          </button>
          <button
            onClick={() => handleFilterClick("blocked")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
              filter === "blocked" ? "bg-red-700 text-white shadow-lg shadow-red-700/30 animate-pulse" : "bg-[#0f1626] text-gray-400 border border-white/10 hover:text-white"
            }`}
          >
            ⚠️ Bloqueadas (1)
          </button>
        </div>

        {/* Kanban Board Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-4 min-w-[1200px]">
            {columns.map((col) => {
              const visibleTasks = col.tasks.filter(t => isTaskVisible(t, col.id));
              const isBlockedCol = col.id === "blocked";
              
              return (
                <div
                  key={col.id}
                  className={`flex-1 min-w-[260px] rounded-2xl p-4 border flex flex-col ${
                    isBlockedCol
                      ? "bg-red-950/20 border-red-500/40 shadow-xl shadow-red-950/30"
                      : "bg-[#0f1626]/70 border-white/10"
                  }`}
                >
                  {/* Column Title Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <h3 className="font-bold text-xs uppercase tracking-wider text-white flex items-center gap-2">
                      {isBlockedCol && <LockIcon className="w-4 h-4 text-red-500 animate-pulse" />}
                      <span>{col.title}</span>
                    </h3>
                    <span className={`px-2 py-0.5 rounded-full font-mono text-[11px] font-bold ${
                      isBlockedCol
                        ? "bg-red-500/20 text-red-300 border border-red-500/40"
                        : "bg-white/10 text-gray-300"
                    }`}>
                      {visibleTasks.length}
                    </span>
                  </div>

                  {/* Task Cards List */}
                  <div className="space-y-3 flex-1">
                    {visibleTasks.length === 0 ? (
                      <div className="p-4 rounded-xl border border-dashed border-white/10 text-center text-xs text-gray-500 italic font-mono">
                        0 tarefas nesta coluna
                      </div>
                    ) : (
                      visibleTasks.map((task) => (
                        <div
                          key={task.id}
                          className={`p-4 rounded-xl border transition-all ${
                            isBlockedCol
                              ? "bg-red-950/40 border-red-500/50 hover:border-red-400"
                              : "bg-[#131d33] border-white/10 hover:border-cyan-500/30"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10">
                              {task.tag}
                            </span>
                            <span className="text-[10px] font-mono text-gray-400">
                              {task.sprint}
                            </span>
                          </div>

                          <h4 className="font-bold text-sm text-white mb-1 leading-snug">
                            {task.title}
                          </h4>

                          {task.desc && (
                            <p className="text-xs text-red-300/80 mt-2 pt-2 border-t border-red-500/20 leading-relaxed font-mono">
                              ⚠️ {task.desc}
                            </p>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
