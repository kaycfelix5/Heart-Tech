

import { HeartIcon, ArrowRightIcon, GithubIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function Footer() {
  return (
    <footer className="bg-[#05080e] border-t border-white/10 pt-16 pb-12 relative text-gray-400 text-sm">
      
      {/* Final CTA Banner */}
      <div className="container mb-16">
        <div className="glass-card p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-950/40 via-[#0f1626] to-cyan-950/40 border border-red-500/30 text-center space-y-6 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 mx-auto shadow-lg shadow-red-500/20 animate-pulse">
            <HeartIcon className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
            Inovação Tecnológica Assistiva para Quem Mais Precisa
          </h2>

          <p className="text-gray-300 text-base max-w-xl mx-auto">
            Conheça o andamento do desenvolvimento do Heart-Tech e acompanhe os próximos passos das Sprints de hardware e software.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#kanban"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs tracking-wide shadow-xl shadow-red-600/30 hover:scale-105 transition-all"
            >
              <span>Acompanhar Kanban do Projeto</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
        
        {/* Brand Info */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center text-white">
              <HeartIcon className="w-4 h-4" />
            </div>
            <span className="font-bold text-xl text-white">
              HEART<span className="text-red-500">-TECH</span>
            </span>
          </div>
          
          <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
            {projectInfo.fullName}. Projeto voltado ao monitoramento de pessoas com TEA, deficiência intelectual e Alzheimer.
          </p>

          <div className="text-xs font-mono text-cyan-400">
            {projectInfo.academicContext}
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider">Navegação Rápida</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <a href="#inicio" className="hover:text-white transition-colors">Início</a>
            <a href="#problema" className="hover:text-white transition-colors">O Problema</a>
            <a href="#solucao" className="hover:text-white transition-colors">Solução</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#hardware" className="hover:text-white transition-colors">Hardware</a>
            <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#tecnologias" className="hover:text-white transition-colors">Tecnologias</a>
            <a href="#desenvolvimento" className="hover:text-white transition-colors">Desenvolvimento</a>
            <a href="#kanban" className="hover:text-white transition-colors">Kanban</a>
            <a href="#metricas" className="hover:text-white transition-colors">Métricas</a>
          </div>
        </div>

        {/* Academic Details */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider">Detalhes Acadêmicos</h4>
          <div className="text-xs text-gray-400 space-y-1 font-mono">
            <div>Orientador: {projectInfo.professor}</div>
            <div>Turma: {projectInfo.turma}</div>
            <div>Scrum Sprints: 3 Sprints Planejadas</div>
            <div>Metodologia: Kanban / Agile</div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="container pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <div>
          © {new Date().getFullYear()} Heart-Tech. Todos os direitos reservados.
        </div>
        <div className="flex items-center gap-4">
          <span>Sistema Inteligente de Monitoramento</span>
          <span>•</span>
          <span>Tecnologia Assistiva</span>
        </div>
      </div>

    </footer>
  );
}