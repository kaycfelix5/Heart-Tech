"use client";

import { useState, useEffect } from "react";
import HeartTecLogo from "./HeartTecLogo";
import { useApp } from "../context/AppContext";

export default function DesktopHeader({
  phoneModel,
  setPhoneModel,
  phoneScale,
  setPhoneScale,
  isLandscape,
  setIsLandscape,
}) {
  const {
    caregiver,
    battery,
    viewMode,
    setViewMode,
    theme,
    setTheme,
    notifications,
    setNotificationDrawerOpen,
    t,
  } = useApp();

  const [time, setTime] = useState("");
  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-3 sticky top-0 z-30 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand & Project Status */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#E6F7F4] dark:bg-zinc-800 flex items-center justify-center shadow-xs">
            <HeartTecLogo size={28} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-wider uppercase text-zinc-900 dark:text-zinc-100">
                <span className="text-[#55B7A8]">HEART</span>-TEC
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#E6F7F4] dark:bg-zinc-800 text-[#3E9788] dark:text-[#8DDDD0] text-[10px] font-extrabold uppercase tracking-wider">
                Web & Mobile
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
              <span>{t.tagline}</span>
              <span>•</span>
              <span className="font-mono text-zinc-700 dark:text-zinc-300 font-semibold">{time || "15:00"}</span>
            </p>
          </div>
        </div>

        {/* Central Mode Switcher */}
        <nav aria-label="Seletor de modo" className="flex items-center p-1 bg-zinc-100 dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-inner">
          <button
            id="view-mode-dashboard"
            onClick={() => setViewMode("dashboard")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              viewMode === "dashboard"
                ? "bg-white dark:bg-zinc-900 text-[#3E9788] dark:text-[#8DDDD0] shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            }`}
          >
            <span>💻</span>
            <span>{t.webDashboard}</span>
          </button>

          <button
            id="view-mode-app"
            onClick={() => setViewMode("app")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              viewMode === "app"
                ? "bg-white dark:bg-zinc-900 text-[#3E9788] dark:text-[#8DDDD0] shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            }`}
          >
            <span>📱</span>
            <span>{t.mobileSim}</span>
          </button>

          <button
            id="view-mode-website"
            onClick={() => setViewMode("website")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              viewMode === "website"
                ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            }`}
          >
            <span>🌐</span>
            <span>{t.showcaseSite}</span>
          </button>
        </nav>

        {/* Right Controls / Telemetry Pills */}
        {viewMode === "app" ? (
          <div className="flex items-center gap-2">
            <select
              aria-label="Modelo do smartphone"
              value={phoneModel}
              onChange={(e) => setPhoneModel(e.target.value)}
              className="px-2.5 py-1.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 outline-none cursor-pointer"
            >
              <option value="iphone">iPhone 16 Pro</option>
              <option value="android">Galaxy S24</option>
              <option value="minimal">Sem Moldura</option>
            </select>

            <select
              aria-label="Escala do simulador"
              value={phoneScale}
              onChange={(e) => setPhoneScale(Number(e.target.value))}
              className="px-2.5 py-1.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 outline-none cursor-pointer"
            >
              <option value="0.85">85%</option>
              <option value="1">100%</option>
              <option value="1.1">110%</option>
            </select>

            <button
              onClick={() => setIsLandscape(!isLandscape)}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                isLandscape
                  ? "bg-[#E6F7F4] border-[#55B7A8] text-[#3E9788]"
                  : "bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-600 hover:bg-zinc-50"
              }`}
              title="Girar Orientação"
            >
              🔄
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {/* Status Pills */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ESP32 Conectado</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                <span>🔋 {battery}%</span>
              </div>
            </div>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
              title="Alternar Tema Claro / Escuro"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Notification Bell */}
            <button
              onClick={() => setNotificationDrawerOpen(true)}
              className="relative p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
              title="Notificações"
            >
              <span>🔔</span>
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Caregiver avatar pill */}
            <div className="flex items-center gap-2 pl-2 border-l border-zinc-200 dark:border-zinc-800">
              <div className="w-8 h-8 rounded-full bg-[#8DDDD0] flex items-center justify-center text-xs font-bold text-zinc-900">
                👤
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100 leading-tight">{caregiver.name}</p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-tight">Acompanhante</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
