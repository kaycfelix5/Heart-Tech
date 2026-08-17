"use client";

import { CpuIcon, RadioIcon, WifiIcon, BatteryIcon, ZapIcon, ShieldIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function HardwareSection() {
  const hardwareItems = projectInfo.hardware;

  const getHardwareIcon = (name) => {
    switch (name) {
      case "ESP32": return <CpuIcon className="w-7 h-7 text-red-400" />;
      case "GPS NEO-6M": return <RadioIcon className="w-7 h-7 text-cyan-400" />;
      case "SIM800L": return <WifiIcon className="w-7 h-7 text-blue-400" />;
      case "Li-Po 3.7V 1000mAh": return <BatteryIcon className="w-7 h-7 text-emerald-400" />;
      case "TP4056": return <ZapIcon className="w-7 h-7 text-amber-400" />;
      default: return <CpuIcon className="w-7 h-7 text-gray-400" />;
    }
  };

  return (
    <section id="hardware" className="py-20 bg-grid-pattern relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="tech-badge">
            <CpuIcon className="w-3.5 h-3.5 text-red-400" />
            <span>Arquitetura FÍSICA & Embarcada</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hardware da Pulseira
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            Módulos eletrônicos selecionados para compor o protótipo vestível com foco em eficiência energética e baixo custo.
          </p>
        </div>

        {/* Component Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hardwareItems.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 flex flex-col justify-between hover:border-red-500/40 hover:bg-[#131d33] transition-all group"
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getHardwareIcon(item.name)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[11px] font-mono">
                    {item.category}
                  </span>
                </div>

                {/* Component Name & Role */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {item.name}
                </h3>
                
                <div className="text-xs font-mono text-cyan-400 font-semibold mb-3">
                  {item.role}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer Status */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-gray-500 font-mono">Status do Componente:</span>
                <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-medium">
                  {item.status}
                </span>
              </div>
            </div>
          ))}

          {/* Gabinete 3D Feature Card */}
          <div className="glass-card p-6 bg-gradient-to-br from-red-950/20 via-[#0f1626] to-[#080c14] border border-red-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold">
                  3D
                </div>
                <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-[11px] font-mono">
                  Gabinete Físico
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Estrutura Impressa 3D</h3>
              <div className="text-xs font-mono text-rose-400 font-semibold mb-3">Ergonomia & Absorção de Impacto</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Carcaça personalizada em filamento resistente, projetada para suportar quedas de até 1 metro e garantir conforto na pele.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-gray-500 font-mono">Material Planejado:</span>
              <span className="text-gray-300 font-mono">PLA / ABS Flexível</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
