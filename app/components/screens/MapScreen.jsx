"use client";
import { useState } from "react";

const SAFE_RADIUS = 100; // metros

export default function MapScreen({ navigate }) {
  const [signalSent, setSignalSent] = useState(false);
  const [editingLimit, setEditingLimit] = useState(false);
  const [radius, setRadius] = useState(SAFE_RADIUS);
  const distance = 67;

  const handleSignal = () => {
    setSignalSent(true);
    setTimeout(() => setSignalSent(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-full bg-[#F4F6F6]">
      {/* Header */}
      <div className="figma-header-bar">
        <button
          id="map-back-btn"
          onClick={() => navigate("home")}
          className="text-white hover:opacity-70 transition-opacity"
          aria-label="Voltar"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="text-xl tracking-widest uppercase">Mapa</span>
        <div className="w-6" />
      </div>

      {/* Mapa Simulado */}
      <div className="relative flex-1 min-h-64 bg-[#E8F4F0] overflow-hidden">
        {/* Fundo tipo mapa */}
        <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 350" preserveAspectRatio="xMidYMid slice">
          {/* Grid de ruas */}
          <rect width="400" height="350" fill="#E8F4F0" />
          {/* Blocos */}
          <rect x="20" y="20" width="80" height="60" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="120" y="20" width="100" height="60" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="240" y="20" width="90" height="60" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="340" y="20" width="50" height="60" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="20" y="110" width="70" height="80" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="140" y="110" width="120" height="80" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="280" y="110" width="110" height="80" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="20" y="220" width="100" height="70" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="140" y="220" width="80" height="70" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          <rect x="240" y="220" width="150" height="70" rx="4" fill="#D4ECE7" stroke="#B8DFD8" strokeWidth="1" />
          {/* Ruas */}
          <rect x="0" y="90" width="400" height="14" fill="#C8DDD8" opacity="0.6"/>
          <rect x="0" y="198" width="400" height="14" fill="#C8DDD8" opacity="0.6"/>
          <rect x="100" y="0" width="14" height="350" fill="#C8DDD8" opacity="0.6"/>
          <rect x="220" y="0" width="14" height="350" fill="#C8DDD8" opacity="0.6"/>
          <rect x="330" y="0" width="14" height="350" fill="#C8DDD8" opacity="0.6"/>

          {/* Círculo de geofencing */}
          <circle
            cx="200"
            cy="160"
            r={radius * 0.65}
            fill="rgba(85, 183, 168, 0.15)"
            stroke="#55B7A8"
            strokeWidth="2"
            strokeDasharray="8 4"
          />

          {/* Marcador do acompanhante (ponto azul fixo) */}
          <circle cx="200" cy="160" r="8" fill="#4A9ACB" stroke="white" strokeWidth="2.5" />
          <circle cx="200" cy="160" r="16" fill="rgba(74, 154, 203, 0.2)" />

          {/* Marcador do portador (ícone de pin) */}
          <path
            d="M 240 130 C 240 118, 228 108, 218 108 C 208 108, 198 118, 198 130 C 198 148, 218 170, 218 170 C 218 170, 240 148, 240 130 Z"
            fill="#E55353"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="218" cy="128" r="7" fill="white" />

          {/* Linha de distância */}
          <line x1="200" y1="160" x2="218" y2="128" stroke="#4A9ACB" strokeWidth="1.5" strokeDasharray="4 3" />
        </svg>

        {/* Legenda */}
        <div className="absolute top-3 right-3 bg-white/90 rounded-xl px-3 py-2 shadow-sm text-xs flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#4A9ACB] block" />
            <span className="text-[#333]">Você</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E55353] block" />
            <span className="text-[#333]">Paulo</span>
          </div>
        </div>
      </div>

      {/* Painel inferior */}
      <div className="px-5 py-4 bg-white border-t border-[#E5E5E5] flex flex-col gap-4">
        {/* Distância */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#55B7A8] flex items-center justify-center shadow-sm">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
              </svg>
            </div>
            <div>
              <p className="text-[#777] text-xs">Distância</p>
              <p className="text-[#222] font-bold text-xl">{distance} metros</p>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${distance < radius ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
            {distance < radius ? "Zona segura" : "Fora da zona"}
          </div>
        </div>

        {/* Editar Limite */}
        {editingLimit && (
          <div className="figma-card-tint flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#444] font-medium">Raio da zona segura</span>
              <span className="text-[#55B7A8] font-bold">{radius}m</span>
            </div>
            <input
              id="map-radius-slider"
              type="range"
              min="50"
              max="500"
              step="10"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="w-full accent-[#55B7A8]"
            />
            <div className="flex justify-between text-xs text-[#777]">
              <span>50m</span><span>500m</span>
            </div>
            <button
              id="map-save-limit-btn"
              onClick={() => setEditingLimit(false)}
              className="figma-btn-primary py-2 text-sm w-full"
            >
              Salvar limite
            </button>
          </div>
        )}

        {/* Botões */}
        <div className="flex gap-3">
          <button
            id="map-signal-btn"
            onClick={handleSignal}
            className={`flex-1 py-4 rounded-full font-semibold text-sm border-2 transition-all ${
              signalSent
                ? "bg-[#E55353] border-[#E55353] text-white"
                : "bg-[#FDE8E8] border-[#F28B8B] text-[#C0392B]"
            }`}
          >
            {signalSent ? "✓ Sinalizado!" : "📢 Sinalizar"}
          </button>
          <button
            id="map-edit-limit-btn"
            onClick={() => setEditingLimit(!editingLimit)}
            className="flex-1 py-4 rounded-full border-2 border-[#55B7A8] text-[#55B7A8] font-semibold text-sm hover:bg-[#E6F7F4] transition-colors"
          >
            📐 Editar Limite
          </button>
        </div>

        <button
          id="map-back-bottom-btn"
          onClick={() => navigate("home")}
          className="w-full py-3 rounded-full border border-[#E5E5E5] bg-[#F4F6F6] text-[#555] text-sm font-medium hover:bg-[#EAEAEA] transition-colors"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
