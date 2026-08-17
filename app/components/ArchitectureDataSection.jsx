"use client";

import { useState } from "react";
import { CodeIcon, ServerIcon, DatabaseIcon, ShieldIcon, CheckCircleIcon, CopyIcon, LockIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function ArchitectureDataSection() {
  const [copied, setCopied] = useState(false);
  const { dataPayload, security } = projectInfo;

  const jsonString = JSON.stringify(dataPayload.example, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="arquitetura" className="py-20 bg-grid-pattern relative">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="tech-badge">
            <CodeIcon className="w-3.5 h-3.5 text-red-400" />
            <span>Dados & Segurança de Software</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Arquitetura de Software & Telemetria
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            Estrutura de payload padronizada em JSON e pipeline seguro de backend para processamento de localização em tempo real.
          </p>
        </div>

        {/* 2 Column Layout: Left JSON Payload Inspector | Right Fields Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Left Column: Live JSON Telemetry Viewer */}
          <div className="lg:col-span-6 glass-card p-6 bg-[#090e18] border border-cyan-500/30 font-mono text-sm relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs text-gray-400">
              <span className="flex items-center gap-2 text-cyan-400 font-bold">
                <CodeIcon className="w-4 h-4" />
                POST /api/v1/telemetry (Payload)
              </span>
              <button
                onClick={handleCopy}
                className="px-2.5 py-1 rounded bg-white/10 text-white hover:bg-white/20 text-[11px] transition-colors"
              >
                {copied ? "✓ Copiado!" : "Copiar JSON"}
              </button>
            </div>

            <pre className="text-emerald-400 bg-black/50 p-4 rounded-xl overflow-x-auto leading-relaxed border border-emerald-500/20 text-xs sm:text-sm">
              <code>{jsonString}</code>
            </pre>

            {/* Protocol Tags */}
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
              {dataPayload.protocolInfo.map((p, i) => (
                <div key={i} className="p-2 rounded bg-white/[0.03] border border-white/5">
                  <div className="text-gray-500 text-[10px] uppercase font-bold">{p.label}</div>
                  <div className="text-cyan-300 font-medium">{p.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Fields Breakdown */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ServerIcon className="w-5 h-5 text-cyan-400" />
              <span>Especificação dos Campos de Telemetria</span>
            </h3>

            <div className="space-y-3">
              {dataPayload.fields.map((f, idx) => (
                <div key={idx} className="glass-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded border border-red-500/20">
                      {f.name}
                    </span>
                    <span className="text-xs font-mono text-gray-500">
                      ({f.type})
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm sm:text-right">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Security & Privacy Highlight Box */}
        <div className="glass-card p-8 bg-gradient-to-r from-red-950/20 via-[#0f1626] to-[#080c14] border border-red-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <LockIcon className="w-6 h-6 text-red-400" />
            <span>Segurança e Diretrizes de Privacidade</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {security.map((sec, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircleIcon className="w-5 h-5 text-red-400 shrink-0" />
                  <h4 className="font-bold text-white text-base">{sec.title}</h4>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pl-8">
                  {sec.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-gray-400 flex items-center gap-2">
            <ShieldIcon className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Conformidade com a LGPD e ANPD considerada como requisito de arquitetura e diretriz central do projeto.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
