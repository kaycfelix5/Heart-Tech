"use client";
import Image from "next/image";

export default function HomeScreen({ navigate }) {
  return (
    <div className="flex flex-col min-h-full bg-[#F4F6F6]">
      {/* Header — visível no mobile, oculto no desktop via sidebar */}
      <div className="figma-header-bar md:rounded-t-2xl">
        <span className="text-xl tracking-widest uppercase">HEART-TEC</span>
        <button
          id="home-settings-btn"
          onClick={() => navigate("settings")}
          className="text-white opacity-80 hover:opacity-100 transition-opacity md:hidden"
          aria-label="Configurações"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>
      </div>

      {/* Foto do portador */}
      <div className="relative w-full h-52 md:h-64 bg-[#8DDDD0] overflow-hidden">
        <Image
          src="/images/child_portador.jpg"
          alt="Paulo Miranda - Portador"
          fill
          sizes="(max-width: 768px) 100vw, 672px"
          className="object-cover object-top"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-4">
          <p className="text-white font-bold text-lg">Paulo Miranda</p>
          <p className="text-white/80 text-sm">Portador · 12 anos</p>
        </div>
      </div>

      {/* Saudação */}
      <div className="px-6 pt-5 pb-2">
        <h2 className="text-[#222] font-bold text-xl">Olá, Acompanhante! 👋</h2>
        <p className="text-[#555] text-sm mt-1">O que deseja fazer hoje?</p>
      </div>

      {/* Botões — grid 2 col no mobile, 4 col no desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-4">
        <button
          id="home-caregiver-btn"
          onClick={() => navigate("caregiver")}
          className="flex flex-col items-center justify-center gap-3 py-7 rounded-2xl bg-white border-2 border-[#8DDDD0] shadow-sm hover:bg-[#E6F7F4] transition-colors"
        >
          <span className="text-4xl">👤</span>
          <span className="font-semibold text-[#222] text-sm">Acompanhante</span>
        </button>

        <button
          id="home-wearer-btn"
          onClick={() => navigate("wearer")}
          className="flex flex-col items-center justify-center gap-3 py-7 rounded-2xl bg-white border-2 border-[#8DDDD0] shadow-sm hover:bg-[#E6F7F4] transition-colors"
        >
          <span className="text-4xl">🧒</span>
          <span className="font-semibold text-[#222] text-sm">Portador</span>
        </button>

        <button
          id="home-map-btn"
          onClick={() => navigate("map")}
          className="flex flex-col items-center justify-center gap-3 py-7 rounded-2xl bg-[#55B7A8] border-2 border-[#3E9788] shadow-sm hover:bg-[#46A192] transition-colors"
        >
          <span className="text-4xl">📍</span>
          <span className="font-semibold text-white text-sm">Mapa</span>
        </button>

        <button
          id="home-data-btn"
          onClick={() => navigate("data")}
          className="flex flex-col items-center justify-center gap-3 py-7 rounded-2xl bg-[#55B7A8] border-2 border-[#3E9788] shadow-sm hover:bg-[#46A192] transition-colors"
        >
          <span className="text-4xl">📊</span>
          <span className="font-semibold text-white text-sm">Dados</span>
        </button>
      </div>

      {/* Sair — só no mobile (no desktop a sidebar tem o botão) */}
      <div className="px-6 pb-6 mt-auto md:hidden">
        <button
          id="home-logout-btn"
          onClick={() => navigate("landing")}
          className="w-full py-3 rounded-full border-2 border-[#E5E5E5] bg-white text-[#555] text-sm font-medium hover:bg-[#F0F0F0] transition-colors"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
