"use client";

import { useApp } from "../context/AppContext";

export default function MobileBottomNav({ currentScreen, onNavigate }) {
  const { soundEnabled, t } = useApp();

  const items = [
    { key: "home", label: t.navHome, icon: "🏠" },
    { key: "caregiver", label: t.navCaregiver, icon: "👤" },
    { key: "wearer", label: t.navWearer, icon: "🧒" },
    { key: "map", label: t.navMap, icon: "📍", badge: "GPS" },
    { key: "data", label: t.navData, icon: "📊" },
    { key: "settings", label: t.navSettings, icon: "⚙️" },
  ];

  const handleNav = (key) => {
    if (typeof window !== "undefined" && "vibrate" in navigator && soundEnabled) {
      try {
        navigator.vibrate(10);
      } catch (e) {}
    }
    onNavigate(key);
  };

  return (
    <nav
      aria-label="Navegação inferior do aplicativo"
      className="mobile-bottom-nav px-2 pt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] dark:bg-zinc-900/95 dark:border-zinc-800"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {items.map((item) => {
          const isActive = currentScreen === item.key;
          return (
            <button
              key={item.key}
              id={`mobile-tab-${item.key}`}
              onClick={() => handleNav(item.key)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-2 rounded-2xl transition-all duration-200 min-w-[52px] cursor-pointer ${
                isActive
                  ? "text-[#55B7A8] dark:text-[#8DDDD0] font-extrabold scale-105"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium"
              }`}
            >
              {/* Active Indicator Bubble */}
              {isActive && (
                <span
                  className="absolute inset-0 bg-[#E6F7F4] dark:bg-zinc-800 rounded-2xl -z-10 animate-fade-in"
                  style={{ transform: "scale(0.95)" }}
                />
              )}

              {/* Icon Container with Badge */}
              <div className="relative flex items-center justify-center">
                <span className="text-lg leading-none">{item.icon}</span>
                {item.badge && (
                  <span className="absolute -top-1 -right-2 px-1 py-0.2 bg-[#55B7A8] text-white text-[7px] font-black rounded-full animate-pulse leading-none">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Text Label */}
              <span
                className={`text-[9px] mt-1 tracking-tight leading-none ${
                  isActive ? "text-[#3E9788] dark:text-[#8DDDD0] font-bold" : "text-zinc-500 dark:text-zinc-400"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
