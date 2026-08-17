"use client";

import HeartTecLogo from "./HeartTecLogo";
import { useApp } from "../context/AppContext";

export default function MobileAppHeader({ onNavigate, title, showBack = false, backTarget = "home" }) {
  const { battery, setNotificationDrawerOpen, notifications } = useApp();
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-4 py-2.5 flex items-center justify-between sticky top-0 z-40 shadow-xs transition-colors">
      <div className="flex items-center gap-2.5">
        {showBack ? (
          <button
            onClick={() => onNavigate(backTarget)}
            className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center hover:bg-[#E6F7F4] hover:text-[#55B7A8] transition-colors cursor-pointer"
            aria-label="Voltar"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        ) : (
          <div className="w-8 h-8 rounded-xl bg-[#E6F7F4] dark:bg-zinc-800 flex items-center justify-center">
            <HeartTecLogo size={22} />
          </div>
        )}

        <div>
          <span className="text-xs font-extrabold tracking-wider uppercase text-zinc-900 dark:text-zinc-100">
            {title || (
              <>
                <span className="text-[#55B7A8]">HEART</span>-TEC
              </>
            )}
          </span>
          <div className="flex items-center gap-1.5 leading-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] text-zinc-500 dark:text-zinc-400 font-medium">ESP32 Conectado</span>
          </div>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2">
        {/* Telemetry pill */}
        <button
          onClick={() => onNavigate("data")}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold transition-colors cursor-pointer"
          title="Telemetria"
        >
          <span>🔋</span>
          <span>{battery}%</span>
        </button>

        {/* Notification Bell */}
        <button
          onClick={() => setNotificationDrawerOpen(true)}
          className="relative w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 cursor-pointer"
          aria-label="Notificações"
        >
          <span>🔔</span>
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 text-white text-[8px] font-bold flex items-center justify-center animate-pulse">
              {unreadCount}
            </span>
          )}
        </button>

        {/* Settings button */}
        <button
          onClick={() => onNavigate("settings")}
          className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 cursor-pointer"
          aria-label="Configurações"
        >
          ⚙️
        </button>
      </div>
    </header>
  );
}
