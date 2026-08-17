"use client";

import Image from "next/image";

export default function HomeScreen({ navigate }) {
  return (
    <div className="flex flex-col min-h-screen sm:min-h-[640px] bg-[#F4F6F6]">
      {/* Header */}
      <div className="figma-header-bar">
        <span className="text-lg tracking-widest uppercase font-bold">HEART-TEC</span>
        <button
          id="home-settings-btn"
          onClick={() => navigate("settings")}
          className="text-white hover:opacity-75 transition-opacity p-1 cursor-pointer"
          aria-label="Configurações"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>
      </div>

      {/* Foto do Portador */}
      <div className="relative w-full h-48 sm:h-52 bg-[#8DDDD0] overflow-hidden">
        <Image
          src="/images/child_portador.jpg"
          alt="Paulo Miranda"
          fill
          sizes="(max-width: 768px) 100vw, 440px"
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="font-bold text-lg leading-tight">Paulo Miranda</p>
          <p className="text-xs text-white/85">Portador · 12 anos</p>
        </div>
      </div>

      {/* Saudação */}
      <div className="px-6 pt-4 pb-2">
        <h2 className="text-[#222] font-bold text-lg">Olá, Acompanhante! 👋</h2>
        <p className="text-[#666] text-xs mt-0.5">O que deseja fazer hoje?</p>
      </div>

      {/* 4 Botões Principais em Grid 2x2 */}
      <div className="grid grid-cols-2 gap-3.5 px-6 py-3 flex-1">
        <button
          id="home-caregiver-btn"
          onClick={() => navigate("caregiver")}
          className="flex flex-col items-center justify-center gap-2 py-6 rounded-2xl bg-white border-2 border-[#8DDDD0] shadow-xs hover:bg-[#E6F7F4] transition-colors cursor-pointer"
        >
          <span className="text-3xl">👤</span>
          <span className="font-bold text-[#222] text-xs">Acompanhante</span>
        </button>

        <button
          id="home-wearer-btn"
          onClick={() => navigate("wearer")}
          className="flex flex-col items-center justify-center gap-2 py-6 rounded-2xl bg-white border-2 border-[#8DDDD0] shadow-xs hover:bg-[#E6F7F4] transition-colors cursor-pointer"
        >
          <span className="text-3xl">🧒</span>
          <span className="font-bold text-[#222] text-xs">Portador</span>
        </button>

        <button
          id="home-map-btn"
          onClick={() => navigate("map")}
          className="flex flex-col items-center justify-center gap-2 py-6 rounded-2xl bg-[#55B7A8] text-white shadow-xs hover:bg-[#46A192] transition-colors cursor-pointer"
        >
          <span className="text-3xl">📍</span>
          <span className="font-bold text-white text-xs">Mapa</span>
        </button>

        <button
          id="home-data-btn"
          onClick={() => navigate("data")}
          className="flex flex-col items-center justify-center gap-2 py-6 rounded-2xl bg-[#55B7A8] text-white shadow-xs hover:bg-[#46A192] transition-colors cursor-pointer"
        >
          <span className="text-3xl">📊</span>
          <span className="font-bold text-white text-xs">Dados</span>
        </button>
      </div>

      {/* Botão Sair */}
      <div className="px-6 pb-6 pt-2">
        <button
          id="home-logout-btn"
          onClick={() => navigate("landing")}
          className="w-full py-3 rounded-full border border-[#D5DFDC] bg-white text-[#666] text-xs font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
