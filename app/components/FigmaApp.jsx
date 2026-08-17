"use client";

import { useState, useEffect } from "react";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ForgotScreen from "./screens/ForgotScreen";
import HomeScreen from "./screens/HomeScreen";
import CaregiverScreen from "./screens/CaregiverScreen";
import WearerScreen from "./screens/WearerScreen";
import MapScreen from "./screens/MapScreen";
import DataScreen from "./screens/DataScreen";
import SettingsScreen from "./screens/SettingsScreen";

const AUTH_SCREENS = ["landing", "login", "register", "forgot"];

const NAV_ITEMS = [
  { key: "home",      icon: "🏠", label: "Início" },
  { key: "caregiver", icon: "👤", label: "Acompanhante" },
  { key: "wearer",    icon: "🧒", label: "Portador" },
  { key: "map",       icon: "📍", label: "Mapa" },
  { key: "data",      icon: "📊", label: "Dados" },
  { key: "settings",  icon: "⚙️",  label: "Configurações" },
];

export default function FigmaApp() {
  const [screen, setScreen]       = useState("landing");
  const [uiScale, setUiScale]     = useState("normal");
  const [brightness, setBrightness] = useState(100);
  const [language, setLanguage]   = useState("pt");
  const [isMobile, setIsMobile]   = useState(true); // SSR-safe default

  useEffect(() => {
    document.documentElement.setAttribute("data-ui-scale", uiScale);
  }, [uiScale]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const navigate = (to) => setScreen(to);

  const settingsProps = {
    navigate, uiScale, setUiScale, brightness, setBrightness, language, setLanguage,
  };

  const screenMap = {
    landing:   <LandingScreen  navigate={navigate} />,
    login:     <LoginScreen    navigate={navigate} />,
    register:  <RegisterScreen navigate={navigate} />,
    forgot:    <ForgotScreen   navigate={navigate} />,
    home:      <HomeScreen     navigate={navigate} />,
    caregiver: <CaregiverScreen navigate={navigate} />,
    wearer:    <WearerScreen   navigate={navigate} />,
    map:       <MapScreen      navigate={navigate} />,
    data:      <DataScreen     navigate={navigate} />,
    settings:  <SettingsScreen {...settingsProps} />,
  };

  const current = screenMap[screen] ?? screenMap["landing"];
  const isAuth  = AUTH_SCREENS.includes(screen);

  /* ─── MOBILE ─── */
  if (isMobile) {
    return (
      <div
        className="min-h-screen flex flex-col bg-[#F4F6F6]"
        style={{ filter: `brightness(${brightness}%)` }}
      >
        {current}
      </div>
    );
  }

  /* ─── DESKTOP — telas de auth: card centralizado ─── */
  if (isAuth) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-[#55B7A8] px-4"
        style={{ filter: `brightness(${brightness}%)` }}
      >
        {/* Card branco central */}
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden">
          {current}
        </div>

        {/* Logo decorativa à esquerda */}
        <div className="hidden lg:flex flex-col items-center gap-6 absolute left-12 xl:left-20">
          <svg viewBox="0 0 200 200" width="110" height="110">
            <circle cx="100" cy="100" r="80" fill="rgba(255,255,255,0.15)" />
            <path
              d="M 50 100 L 78 100 L 88 75 L 102 125 L 114 90 L 124 100 L 145 100"
              fill="none" stroke="white" strokeWidth="5"
              strokeLinecap="round" strokeLinejoin="round"
            />
            <g transform="translate(125,125)">
              <rect width="42" height="42" rx="10" fill="rgba(255,255,255,0.3)" stroke="white" strokeWidth="2.5" />
              <path d="M21 10C16 5,8 10,12 16L21 26L30 16C34 10,26 5,21 10Z" fill="white" />
            </g>
          </svg>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-widest text-white uppercase">HEART-TEC</h1>
            <p className="text-white/70 text-sm mt-1">Monitoramento inteligente</p>
          </div>
        </div>
      </div>
    );
  }

  /* ─── DESKTOP — telas do app: sidebar + conteúdo ─── */
  return (
    <div
      className="min-h-screen flex bg-[#F0F4F3]"
      style={{ filter: `brightness(${brightness}%)` }}
    >
      {/* ── Sidebar ── */}
      <aside className="w-60 xl:w-64 flex-shrink-0 bg-white border-r border-[#E2ECEB] flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-[#E2ECEB]">
          <svg viewBox="0 0 200 200" width="38" height="38">
            <circle cx="100" cy="100" r="80" fill="#E6F7F4" />
            <path
              d="M 45 100 L 73 100 L 83 75 L 100 125 L 116 90 L 126 100 L 150 100"
              fill="none" stroke="#55B7A8" strokeWidth="12"
              strokeLinecap="round" strokeLinejoin="round"
            />
            <g transform="translate(128,128)">
              <rect width="38" height="38" rx="9" fill="#8DDDD0" stroke="#55B7A8" strokeWidth="3" />
              <path d="M19 9C15 4,7 9,11 15L19 24L27 15C31 9,23 4,19 9Z" fill="#55B7A8" />
            </g>
          </svg>
          <div>
            <span className="text-[#55B7A8] font-bold text-base tracking-widest uppercase leading-none">
              HEART
            </span>
            <span className="text-[#222] font-bold text-base tracking-widest uppercase leading-none">
              -TEC
            </span>
          </div>
        </div>

        {/* Perfil */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#F0F0F0]">
          <div className="w-9 h-9 rounded-full bg-[#8DDDD0] flex items-center justify-center text-lg flex-shrink-0">
            👤
          </div>
          <div className="min-w-0">
            <p className="text-[#222] font-semibold text-sm truncate">Ana Miranda</p>
            <p className="text-[#777] text-xs">Acompanhante</p>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-3 flex flex-col gap-1 px-3">
          {NAV_ITEMS.map((item) => {
            const active = screen === item.key;
            return (
              <button
                key={item.key}
                id={`sidebar-nav-${item.key}`}
                onClick={() => navigate(item.key)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium w-full text-left transition-all ${
                  active
                    ? "bg-[#E6F7F4] text-[#55B7A8] font-semibold"
                    : "text-[#555] hover:bg-[#F5F5F5] hover:text-[#222]"
                }`}
              >
                <span className="text-xl w-6 text-center">{item.icon}</span>
                {item.label}
                {active && (
                  <span className="ml-auto w-1.5 h-5 rounded-full bg-[#55B7A8]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Sair */}
        <div className="px-3 py-4 border-t border-[#F0F0F0]">
          <button
            id="sidebar-logout-btn"
            onClick={() => navigate("landing")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-left text-sm font-medium text-[#C0392B] hover:bg-[#FDE8E8] transition-colors"
          >
            <span className="text-xl w-6 text-center">🚪</span>
            Sair
          </button>
        </div>
      </aside>

      {/* ── Conteúdo principal ── */}
      <main className="flex-1 overflow-y-auto">
        <DesktopContent screen={screen} current={current} />
      </main>
    </div>
  );
}

/* Wrapper que expande o conteúdo de forma responsiva no desktop */
function DesktopContent({ screen, current }) {
  // Telas de mapa: full width sem padding
  if (screen === "map") {
    return <div className="h-full flex flex-col">{current}</div>;
  }

  // Telas com muito conteúdo: centralizado com max-width
  return (
    <div className="min-h-full flex flex-col items-start justify-start">
      <div className="w-full max-w-2xl mx-auto px-6 py-6">
        {/* Remove o header verde interno — a sidebar já cuida da nav no desktop */}
        <ScreenWithoutHeader screen={screen} current={current} />
      </div>
    </div>
  );
}

/* No desktop, os headers das telas são omitidos pois a sidebar já faz a nav */
function ScreenWithoutHeader({ screen, current }) {
  // Para o Mapa e Dados mantemos o layout completo
  if (["map", "data"].includes(screen)) return current;
  // Para o resto, wrappamos num card branco para dar aspecto desktop
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E8EDEC] overflow-hidden">
      {current}
    </div>
  );
}
