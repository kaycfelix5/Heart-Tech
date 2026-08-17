"use client";

import Image from "next/image";
import { useApp } from "../context/AppContext";
import CaregiverScreen from "./screens/CaregiverScreen";
import WearerScreen from "./screens/WearerScreen";
import MapScreen from "./screens/MapScreen";
import DataScreen from "./screens/DataScreen";
import SettingsScreen from "./screens/SettingsScreen";

export default function DesktopDashboardView({ screen, onNavigate }) {
  const {
    caregiver,
    wearer,
    battery,
    distance,
    isInsideSafeZone,
    safeRadius,
    setSafeRadius,
    signalSent,
    triggerSignal,
    emergencyState,
    triggerEmergency,
    disarmEmergency,
    heartRate,
    bodyTemp,
    wearerPos,
    isAutoWalking,
    setIsAutoWalking,
    logout,
    t,
  } = useApp();

  const navItems = [
    { key: "home", label: t.navHome, icon: "🏠", desc: "Visão Geral do Sistema" },
    { key: "caregiver", label: t.navCaregiver, icon: "👤", desc: "Perfil e Contatos" },
    { key: "wearer", label: t.navWearer, icon: "🧒", desc: `${wearer.name} (${wearer.age})` },
    { key: "map", label: t.navMap, icon: "📍", desc: "Rastreamento em Tempo Real", badge: "GPS" },
    { key: "data", label: t.navData, icon: "📊", desc: "Sensores ESP32 / SOS" },
    { key: "settings", label: t.navSettings, icon: "⚙️", desc: "Acessibilidade e Ajustes" },
  ];

  return (
    <div className="flex-1 flex overflow-hidden bg-[#F4F6F6] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      
      {/* ── Left Sidebar ── */}
      <aside className="w-64 xl:w-72 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col flex-shrink-0 transition-colors">
        
        {/* User Card */}
        <div className="p-5 border-b border-zinc-100 dark:border-zinc-800 bg-[#FAFDFD] dark:bg-zinc-850">
          <div className="flex items-center gap-3.5">
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden border-2 border-[#55B7A8] shadow-xs flex-shrink-0">
              <Image
                src={caregiver.avatar || "/images/caregiver_avatar.jpg"}
                alt={caregiver.name}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 truncate">
                {caregiver.name}
              </h3>
              <p className="text-xs text-[#55B7A8] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="truncate">{caregiver.role.split("/")[0]}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav aria-label="Navegação da barra lateral" className="flex-1 p-3.5 flex flex-col gap-1.5 overflow-y-auto">
          <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider px-3 mb-1">
            Menu de Controle
          </p>

          {navItems.map((item) => {
            const isActive = screen === item.key;
            return (
              <button
                key={item.key}
                id={`desktop-sidebar-nav-${item.key}`}
                onClick={() => onNavigate(item.key)}
                className={`flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-left transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#E6F7F4] dark:bg-zinc-800 text-[#3E9788] dark:text-[#8DDDD0] font-extrabold shadow-xs border border-[#8DDDD0]/40 dark:border-zinc-700"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                <span className="text-xl w-7 text-center">{item.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold leading-tight">{item.label}</p>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 rounded-full bg-[#55B7A8] text-white text-[8px] font-extrabold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate leading-tight mt-0.5">
                    {item.desc}
                  </p>
                </div>
                {isActive && (
                  <span className="w-1.5 h-5 rounded-full bg-[#55B7A8] ml-auto flex-shrink-0" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Live Pulseira Widget at Sidebar Bottom */}
        <div className="p-4 m-3 bg-[#E6F7F4] dark:bg-zinc-800 rounded-3xl border border-[#8DDDD0]/40 dark:border-zinc-700 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Pulseira ESP32
            </span>
            <span className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400">{battery}%</span>
          </div>
          <p className="text-[10px] text-emerald-800 dark:text-emerald-400 leading-tight">
            Transmissão GPS/GSM ativa • Latência 38ms
          </p>
        </div>

        {/* Logout */}
        <div className="p-3 border-t border-zinc-100 dark:border-zinc-800">
          <button
            onClick={() => {
              logout();
              onNavigate("landing");
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 text-xs font-bold transition-colors cursor-pointer"
          >
            <span>🚪</span>
            <span>{t.logout}</span>
          </button>
        </div>
      </aside>

      {/* ── Main Workspace ── */}
      <main className="flex-1 overflow-y-auto p-6 lg:p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* SCREEN: HOME (Full Workstation Executive Dashboard) */}
          {screen === "home" && (
            <div className="space-y-6">
              
              {/* Top Banner with Quick Actions */}
              <div className="bg-gradient-to-r from-[#55B7A8] to-[#3E9788] rounded-3xl p-6 sm:p-7 text-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-2">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>{t.statusOnline}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                    {t.greeting} {caregiver.name} 👋
                  </h1>
                  <p className="text-white/85 text-xs sm:text-sm mt-1">
                    {wearer.name} está a {distance} metros da base • {isInsideSafeZone ? "Dentro da Zona Segura" : "ATENÇÃO: Fora da cerca!"}
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={triggerSignal}
                    className={`px-4 py-2.5 rounded-2xl font-bold text-xs shadow-md transition-all cursor-pointer ${
                      signalSent
                        ? "bg-white text-emerald-700 scale-105"
                        : "bg-white text-[#3E9788] hover:bg-gray-100"
                    }`}
                  >
                    {signalSent ? `✓ ${t.signalSent}` : `📢 ${t.signalBracelet}`}
                  </button>

                  <button
                    onClick={() => {
                      if (emergencyState === "active") disarmEmergency();
                      else triggerEmergency();
                    }}
                    className={`px-4 py-2.5 rounded-2xl font-bold text-xs shadow-md transition-all cursor-pointer ${
                      emergencyState === "active"
                        ? "bg-red-950 text-white border border-white animate-pulse"
                        : "bg-red-500/30 text-white border border-white/30 hover:bg-red-600"
                    }`}
                  >
                    {emergencyState === "active" ? "🚨 DESARMAR SOS" : "🚨 Disparo SOS"}
                  </button>
                </div>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6F7F4] dark:bg-zinc-800 flex items-center justify-center text-2xl flex-shrink-0">
                    🔋
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{t.battery}</p>
                    <p className="text-2xl font-black text-zinc-900 dark:text-zinc-100">{battery}%</p>
                    <span className="text-[10px] text-emerald-600 font-bold">~18h autonomia</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6F7F4] dark:bg-zinc-800 flex items-center justify-center text-2xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{t.distance}</p>
                    <p className="text-2xl font-black text-zinc-900 dark:text-zinc-100">{distance}m</p>
                    <span className={`text-[10px] font-bold ${isInsideSafeZone ? "text-emerald-600" : "text-red-500"}`}>
                      {isInsideSafeZone ? "Zona Segura" : "Fora do Raio!"}
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6F7F4] dark:bg-zinc-800 flex items-center justify-center text-2xl flex-shrink-0">
                    ❤️
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{t.heartRate}</p>
                    <p className="text-2xl font-black text-red-600">{heartRate} bpm</p>
                    <span className="text-[10px] text-emerald-600 font-bold">Ritmo Estável</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6F7F4] dark:bg-zinc-800 flex items-center justify-center text-2xl flex-shrink-0">
                    🌡️
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{t.temperature}</p>
                    <p className="text-2xl font-black text-amber-500">{bodyTemp}°C</p>
                    <span className="text-[10px] text-emerald-600 font-bold">Sensor Li-Po</span>
                  </div>
                </div>
              </div>

              {/* Main Dual Grid: Wearer Card + Interactive Map Studio */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left: Portador Card */}
                <div className="lg:col-span-5 bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                        <span>🧒</span>
                        <span>{wearer.name}</span>
                      </h2>
                      <button
                        onClick={() => onNavigate("wearer")}
                        className="text-xs text-[#55B7A8] font-bold hover:underline"
                      >
                        Ver Perfil →
                      </button>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 mb-4">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#55B7A8] shadow-sm flex-shrink-0">
                        <Image
                          src={wearer.avatar || "/images/child_portador.jpg"}
                          alt={wearer.name}
                          fill
                          sizes="80px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-zinc-900 dark:text-zinc-100">{wearer.name}</h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">{wearer.diagnosis} • {wearer.age}</p>
                        <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>Status: Calmo e Seguro</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5 mb-4">
                      <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                        {t.specialCare}
                      </p>
                      {wearer.characteristics?.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/60 p-2 rounded-xl border border-zinc-100 dark:border-zinc-800">
                          <span className="text-[#55B7A8] font-bold">✓</span>
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                    <button
                      onClick={() => onNavigate("map")}
                      className="py-2.5 rounded-xl bg-[#55B7A8] text-white font-bold text-xs hover:bg-[#46A192] transition-colors cursor-pointer"
                    >
                      📍 Abrir Mapa
                    </button>
                    <button
                      onClick={() => onNavigate("data")}
                      className="py-2.5 rounded-xl border border-[#55B7A8] text-[#3E9788] dark:text-[#8DDDD0] font-bold text-xs hover:bg-[#E6F7F4] dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      📊 Ver Sensores
                    </button>
                  </div>
                </div>

                {/* Right: Interactive Map Studio Preview */}
                <div className="lg:col-span-7 bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                        <span>🗺️</span>
                        <span>Geofencing & Localização em Tempo Real</span>
                      </h2>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        GPS NEO-6M • 8 Satélites • Precisão ±3.2m
                      </p>
                    </div>

                    <button
                      onClick={() => setIsAutoWalking(!isAutoWalking)}
                      className={`text-xs font-bold px-3 py-1 rounded-full transition-all cursor-pointer ${
                        isAutoWalking
                          ? "bg-amber-400 text-zinc-900 animate-pulse"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200"
                      }`}
                    >
                      {isAutoWalking ? `⏸️ ${t.stopWalk}` : `🚶 ${t.autoWalk}`}
                    </button>
                  </div>

                  {/* SVG Studio Canvas */}
                  <div className="relative flex-1 min-h-[260px] bg-[#E8F4F0] dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700">
                    <svg className="w-full h-full absolute inset-0" viewBox="0 0 500 300" preserveAspectRatio="xMidYMid slice">
                      <rect width="500" height="300" fill="#E8F4F0" className="dark:fill-zinc-800" />
                      
                      <rect x="20" y="20" width="100" height="70" rx="6" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" className="dark:fill-zinc-700 dark:stroke-zinc-600" />
                      <rect x="140" y="20" width="140" height="70" rx="6" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" className="dark:fill-zinc-700 dark:stroke-zinc-600" />
                      <rect x="300" y="20" width="180" height="70" rx="6" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" className="dark:fill-zinc-700 dark:stroke-zinc-600" />
                      
                      <rect x="20" y="120" width="110" height="150" rx="6" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" className="dark:fill-zinc-700 dark:stroke-zinc-600" />
                      <rect x="150" y="120" width="160" height="150" rx="6" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" className="dark:fill-zinc-700 dark:stroke-zinc-600" />
                      <rect x="330" y="120" width="150" height="150" rx="6" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" className="dark:fill-zinc-700 dark:stroke-zinc-600" />

                      <rect x="0" y="95" width="500" height="20" fill="#C8DDD8" opacity="0.6" className="dark:fill-zinc-650" />
                      <rect x="125" y="0" width="20" height="300" fill="#C8DDD8" opacity="0.6" className="dark:fill-zinc-650" />
                      <rect x="315" y="0" width="20" height="300" fill="#C8DDD8" opacity="0.6" className="dark:fill-zinc-650" />

                      {/* Círculo Geofence */}
                      <circle
                        cx="250"
                        cy="150"
                        r={safeRadius * 0.9}
                        fill={isInsideSafeZone ? "rgba(85, 183, 168, 0.18)" : "rgba(239, 68, 68, 0.15)"}
                        stroke={isInsideSafeZone ? "#55B7A8" : "#EF4444"}
                        strokeWidth="2.5"
                        strokeDasharray="6 4"
                      />

                      {/* Caregiver Base Pin */}
                      <circle cx="250" cy="150" r="10" fill="#4A9ACB" stroke="white" strokeWidth="3" />
                      <circle cx="250" cy="150" r="22" fill="rgba(74, 154, 203, 0.25)" />

                      {/* Wearer Pin */}
                      <g transform={`translate(${250 + (wearerPos.x - 200) * 1.1}, ${150 + (wearerPos.y - 160) * 1.1})`}>
                        {signalSent && (
                          <circle cx="0" cy="0" r="28" fill="rgba(239, 68, 68, 0.3)" className="animate-ping" />
                        )}
                        <path
                          d="M 0 -18 C -7 -18 -12 -12 -12 -5 C -12 4 0 16 0 16 C 0 16 12 4 12 -5 C 12 -12 7 -18 0 -18 Z"
                          fill={isInsideSafeZone ? "#E55353" : "#DC2626"}
                          stroke="white"
                          strokeWidth="2"
                        />
                        <circle cx="0" cy="-7" r="4" fill="white" />
                      </g>
                    </svg>

                    <div className="absolute bottom-3 right-3 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xs text-xs flex items-center gap-3">
                      <span className="flex items-center gap-1 text-[#4A9ACB] font-bold">
                        <span className="w-2 h-2 rounded-full bg-[#4A9ACB]" /> Você
                      </span>
                      <span className="flex items-center gap-1 text-[#E55353] font-bold">
                        <span className="w-2 h-2 rounded-full bg-[#E55353]" /> {wearer.name} ({distance}m)
                      </span>
                    </div>
                  </div>

                  {/* Geofence radius slider */}
                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">
                        <span>Raio da Cerca Virtual:</span>
                        <span className="text-[#3E9788] dark:text-[#8DDDD0]">{safeRadius} metros</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="300"
                        step="10"
                        value={safeRadius}
                        onChange={(e) => setSafeRadius(Number(e.target.value))}
                        className="w-full accent-[#55B7A8] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* SCREEN: MAP */}
          {screen === "map" && (
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs overflow-hidden">
              <MapScreen navigate={onNavigate} />
            </div>
          )}

          {/* SCREEN: DATA */}
          {screen === "data" && (
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs overflow-hidden">
              <DataScreen navigate={onNavigate} />
            </div>
          )}

          {/* SCREEN: CAREGIVER */}
          {screen === "caregiver" && (
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs overflow-hidden">
              <CaregiverScreen navigate={onNavigate} />
            </div>
          )}

          {/* SCREEN: WEARER */}
          {screen === "wearer" && (
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs overflow-hidden">
              <WearerScreen navigate={onNavigate} />
            </div>
          )}

          {/* SCREEN: SETTINGS */}
          {screen === "settings" && (
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs overflow-hidden">
              <SettingsScreen navigate={onNavigate} />
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
