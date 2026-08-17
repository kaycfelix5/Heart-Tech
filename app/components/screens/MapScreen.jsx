"use client";

import { useState } from "react";

export default function MapScreen({ navigate }) {
  const [signalSent, setSignalSent] = useState(false);
  const [editingLimit, setEditingLimit] = useState(false);
  const [radius, setRadius] = useState(100);
  const distance = 67;

  const handleSignal = () => {
    setSignalSent(true);
    setTimeout(() => setSignalSent(false), 2500);
  };

  return (
    <div className="flex flex-col min-h-screen sm:min-h-[640px] bg-[#F4F6F6]">
      {/* Header */}
      <div className="figma-header-bar">
        <button
          id="map-back-btn"
          onClick={() => navigate("home")}
          className="text-white hover:opacity-75 transition-opacity cursor-pointer p-1"
          aria-label="Voltar"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="text-lg font-bold tracking-widest uppercase text-white">
          Mapa
        </span>
        <div className="w-6" />
      </div>

      {/* Mapa Visual Simulado */}
      <div className="relative flex-1 min-h-[280px] bg-[#E8F4F0] overflow-hidden">
        <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="320" fill="#E8F4F0" />
          
          {/* Quadras */}
          <rect x="20" y="20" width="80" height="60" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="120" y="20" width="100" height="60" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="240" y="20" width="90" height="60" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="345" y="20" width="45" height="60" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />

          <rect x="20" y="105" width="70" height="85" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="140" y="105" width="120" height="85" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="280" y="105" width="105" height="85" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />

          <rect x="20" y="215" width="100" height="85" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="140" y="215" width="80" height="85" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="240" y="215" width="145" height="85" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />

          {/* Ruas */}
          <rect x="0" y="85" width="400" height="14" fill="#C8DDD8" opacity="0.6"/>
          <rect x="0" y="195" width="400" height="14" fill="#C8DDD8" opacity="0.6"/>
          <rect x="105" y="0" width="14" height="320" fill="#C8DDD8" opacity="0.6"/>
          <rect x="225" y="0" width="14" height="320" fill="#C8DDD8" opacity="0.6"/>

          {/* Círculo da cerca virtual */}
          <circle
            cx="200"
            cy="160"
            r={radius * 0.7}
            fill="rgba(85, 183, 168, 0.15)"
            stroke="#55B7A8"
            strokeWidth="2"
            strokeDasharray="6 4"
          />

          {/* Você (Acompanhante) */}
          <circle cx="200" cy="160" r="8" fill="#4A9ACB" stroke="white" strokeWidth="2.5" />
          <circle cx="200" cy="160" r="16" fill="rgba(74, 154, 203, 0.2)" />

          {/* Paulo (Portador) */}
          <path
            d="M 240 130 C 240 118, 228 108, 218 108 C 208 108, 198 118, 198 130 C 198 148, 218 170, 218 170 C 218 170, 240 148, 240 130 Z"
            fill="#E55353"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="218" cy="128" r="6" fill="white" />

          <line x1="200" y1="160" x2="218" y2="128" stroke="#4A9ACB" strokeWidth="1.5" strokeDasharray="4 3" />
        </svg>

        {/* Legenda */}
        <div className="absolute top-3 right-3 bg-white/90 rounded-2xl px-3 py-2 shadow-xs text-xs flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4A9ACB]" />
            <span className="text-[#333]">Você</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E55353]" />
            <span className="text-[#333]">Paulo</span>
          </div>
        </div>
      </div>

      {/* Painel Inferior */}
      <div className="px-6 py-4 bg-white border-t border-[#E5E5E5] flex flex-col gap-3 max-w-md mx-auto w-full">
        {/* Distância */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#55B7A8] flex items-center justify-center text-white text-xl">
              📍
            </div>
            <div>
              <p className="text-[#777] text-xs font-medium">Distância</p>
              <p className="text-[#222] font-bold text-xl leading-none mt-0.5">{distance} metros</p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
            Zona segura
          </div>
        </div>

        {/* Slider de Limite */}
        {editingLimit && (
          <div className="figma-card-tint flex flex-col gap-2 p-3">
            <div className="flex justify-between text-xs font-semibold text-[#333]">
              <span>Raio da zona segura</span>
              <span className="text-[#55B7A8] font-bold">{radius}m</span>
            </div>
            <input
              type="range"
              min="50"
              max="300"
              step="10"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="w-full accent-[#55B7A8] cursor-pointer"
            />
            <button
              onClick={() => setEditingLimit(false)}
              className="figma-btn-primary py-2 text-xs font-semibold w-full mt-1 cursor-pointer"
            >
              Salvar Limite
            </button>
          </div>
        )}

        {/* Botões de Ação */}
        <div className="flex gap-2.5">
          <button
            onClick={handleSignal}
            className={`flex-1 py-3 rounded-2xl font-bold text-xs border transition-all cursor-pointer ${
              signalSent
                ? "bg-[#E55353] border-[#E55353] text-white"
                : "bg-[#FDE8E8] border-[#F28B8B] text-[#C0392B]"
            }`}
          >
            {signalSent ? "✓ Sinalizado!" : "📢 Sinalizar"}
          </button>
          <button
            onClick={() => setEditingLimit(!editingLimit)}
            className="flex-1 py-3 rounded-2xl border border-[#55B7A8] text-[#55B7A8] font-bold text-xs hover:bg-[#E6F7F4] transition-colors cursor-pointer"
          >
            📐 Editar Limite
          </button>
        </div>

        <button
          onClick={() => navigate("home")}
          className="w-full py-2.5 rounded-full border border-[#D5DFDC] bg-white text-[#666] text-xs font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
