"use client";

import { HeartIcon, MapPinIcon, CpuIcon, WifiIcon, ShieldIcon, ArrowRightIcon, ZapIcon, ActivityIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      
      {/* Background Radial Glow Effects */}
      <div aria-hidden="true" className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div aria-hidden="true" className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Project Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>{projectInfo.academicContext}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              HEART<span className="text-red-500">-TECH</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-gray-200">
              "{projectInfo.tagline}"
            </p>

            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {projectInfo.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#problema"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-bold text-sm tracking-wide shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Conheça o Projeto</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <a
                href="#tecnologias"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0f1626] border border-white/15 text-gray-200 hover:text-white hover:border-white/30 font-semibold text-sm transition-all"
              >
                <CpuIcon className="w-4 h-4 text-cyan-400" />
                <span>Ver Tecnologias</span>
              </a>
            </div>

            {/* Metric Pills */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center lg:text-left">
                <div className="text-xs text-gray-400 font-medium">Precisão Meta</div>
                <div className="text-lg sm:text-xl font-bold text-cyan-400 font-mono">≤ ±5m</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center lg:text-left">
                <div className="text-xs text-gray-400 font-medium">Autonomia</div>
                <div className="text-lg sm:text-xl font-bold text-emerald-400 font-mono">≥ 24h</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center lg:text-left">
                <div className="text-xs text-gray-400 font-medium">Conectividade</div>
                <div className="text-lg sm:text-xl font-bold text-rose-400 font-mono">GPS/GSM</div>
              </div>
            </div>

          </div>

          {/* Right Concept Hardware / GPS Mockup Illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Glowing Circle Ring */}
            <div
              role="img"
              aria-label="Ilustração do dispositivo Heart-Tech: pulseira GPS/GSM com rastreamento em tempo real"
              className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-red-500/20 bg-gradient-to-br from-red-950/30 via-[#0f1626]/80 to-cyan-950/30 p-6 backdrop-blur-xl flex items-center justify-center shadow-2xl shadow-red-950/50"
            >
              
              {/* Radar Sweeping Rings */}
              <div aria-hidden="true" className="absolute inset-4 rounded-full border border-dashed border-red-500/30 animate-[spin_20s_linear_infinite]" />
              <div aria-hidden="true" className="absolute inset-12 rounded-full border border-cyan-500/20" />
              <div aria-hidden="true" className="absolute inset-20 rounded-full border border-red-500/20 animate-ping-slow" />
              
              {/* Central Smart Bracelet SVG Visual Concept */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-4">
                
                {/* Device Body Icon Graphic */}
                <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-2 border-red-500/50 shadow-2xl shadow-red-500/30 flex flex-col items-center justify-center p-3 mb-3">
                  <div className="w-full flex items-center justify-between px-1 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-mono text-cyan-400">ESP32 + GPS</span>
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  
                  <HeartIcon className="w-9 h-9 text-red-500 animate-pulse" />
                  
                  <div className="text-[10px] font-mono text-gray-300 font-semibold mt-1">
                    HT-PULSE
                  </div>

                  {/* Geofence Safe Ring Indicator */}
                  <div className="absolute -top-3 -right-3 px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-[9px] font-mono text-emerald-300">
                    SAFE ZONE
                  </div>
                </div>

                {/* Floating GPS Data Chip */}
                <div className="bg-[#0b0f19]/90 border border-white/10 rounded-xl px-4 py-2 text-xs font-mono text-gray-300 flex items-center gap-2 shadow-lg backdrop-blur-md">
                  <MapPinIcon className="w-4 h-4 text-cyan-400" />
                  <span>Lat: -20.1234 | Long: -51.1234</span>
                </div>

              </div>

              {/* Floating Orbit Widgets */}
              <div className="absolute -top-2 left-6 bg-[#0f1626] border border-red-500/30 text-red-400 text-[11px] font-mono px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                <ZapIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>Geofencing Ativo</span>
              </div>

              <div className="absolute -bottom-2 right-6 bg-[#0f1626] border border-cyan-500/30 text-cyan-300 text-[11px] font-mono px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                <WifiIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>SIM800L GSM Telemetria</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
