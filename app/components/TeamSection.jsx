"use client";

import { UsersIcon, GithubIcon, LinkedinIcon, CodeIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function TeamSection() {
  const { team } = projectInfo;

  return (
    <section id="equipe" className="py-20 bg-[#0b0f19] border-t border-white/5 relative">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="tech-badge tech-badge-blue">
            <UsersIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Integrantes & Desenvolvimento</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Equipe do Projeto
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            Estudantes e pesquisadores dedicados à concepção, engenharia e validação do sistema Heart-Tech.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="glass-card p-6 text-center flex flex-col items-center justify-between border border-white/10 hover:border-cyan-500/40 hover:bg-[#131d33] transition-all group"
            >
              <div className="flex flex-col items-center">
                {/* Avatar Placeholder Circle */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500/20 via-[#0f1626] to-cyan-500/20 border-2 border-white/10 group-hover:border-cyan-400 flex items-center justify-center text-gray-300 font-bold text-2xl font-mono mb-4 transition-colors shadow-lg">
                  {idx + 1}
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>

                <div className="text-xs font-mono text-cyan-400 font-semibold mb-2">
                  {member.role}
                </div>

                <p className="text-gray-400 text-xs mb-6">
                  {member.area}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5 w-full justify-center text-gray-400">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
