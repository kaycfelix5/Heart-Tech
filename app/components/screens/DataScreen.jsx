"use client";

import { useState } from "react";

export default function DataScreen({ navigate }) {
  const [emergencyState, setEmergencyState] = useState("idle");
  const battery = 84;
  const distance = 67;

  return (
    <div className="flex flex-col min-h-screen sm:min-h-[640px] bg-[#F4F6F6]">
      {/* Header */}
      <div className={`figma-header-bar transition-colors ${emergencyState === "active" ? "bg-[#E55353]" : ""}`}>
        <button
          id="data-back-btn"
          onClick={() => navigate("home")}
          className="text-white hover:opacity-75 transition-opacity cursor-pointer p-1"
          aria-label="Voltar"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="text-lg font-bold tracking-widest uppercase text-white">
          Dados
        </span>
        <div className="w-6" />
      </div>

      <div className="flex flex-col px-6 py-5 gap-3.5 flex-1 max-w-md mx-auto w-full">
        {/* Grid 2x2 de Status */}
        <div className="grid grid-cols-2 gap-3">
          {/* Bateria */}
          <div className="figma-card-white flex flex-col items-center gap-1.5 py-4">
            <span className="text-2xl">🔋</span>
            <p className="text-[#222] font-bold text-xl">{battery}%</p>
            <p className="text-[#777] text-xs">Bateria</p>
          </div>

          {/* Distância */}
          <div className="figma-card-white flex flex-col items-center gap-1.5 py-4">
            <span className="text-2xl">📍</span>
            <p className="text-[#222] font-bold text-xl">{distance}m</p>
            <p className="text-[#777] text-xs">Distância</p>
          </div>

          {/* GPS */}
          <div className="figma-card-white flex flex-col items-center gap-1.5 py-4">
            <span className="text-2xl">📡</span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <p className="text-[#222] font-bold text-sm">Ativo</p>
            </div>
            <p className="text-[#777] text-xs">GPS NEO-6M</p>
          </div>

          {/* GSM */}
          <div className="figma-card-white flex flex-col items-center gap-1.5 py-4">
            <span className="text-2xl">📶</span>
            <p className="text-[#222] font-bold text-sm">3 barras</p>
            <p className="text-[#777] text-xs">Sinal GSM</p>
          </div>
        </div>

        {/* Card da pulseira */}
        <div className="figma-card-tint flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⌚</span>
            <div>
              <p className="text-[#222] font-bold text-xs">Pulseira Heart-Tec</p>
              <p className="text-[#555] text-[11px]">ESP32 • SIM800L • NEO-6M</p>
            </div>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
        </div>

        {/* Emergência */}
        {emergencyState === "idle" && (
          <button
            onClick={() => setEmergencyState("confirm")}
            className="w-full py-5 rounded-2xl bg-[#FDE8E8] border-2 border-[#F28B8B] text-[#C0392B] font-bold text-lg flex flex-col items-center justify-center gap-1 hover:bg-[#FBDBDB] transition-colors cursor-pointer mt-auto"
          >
            <span className="text-3xl">🚨</span>
            EMERGÊNCIA
            <span className="text-xs font-normal text-[#888]">Toque para acionar</span>
          </button>
        )}

        {emergencyState === "confirm" && (
          <div className="w-full rounded-2xl border-2 border-[#F28B8B] bg-white p-4 flex flex-col gap-3 text-center mt-auto">
            <span className="text-3xl">⚠️</span>
            <h3 className="text-[#222] font-bold text-base">Acionar Emergência?</h3>
            <p className="text-[#666] text-xs">
              Todos os contatos cadastrados serão notificados com as coordenadas GPS.
            </p>
            <div className="flex gap-2.5">
              <button
                onClick={() => setEmergencyState("idle")}
                className="flex-1 py-2.5 rounded-full border border-[#D5DFDC] text-[#666] font-semibold text-xs hover:bg-gray-50 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={() => setEmergencyState("active")}
                className="flex-1 py-2.5 rounded-full bg-[#E55353] text-white font-bold text-xs hover:bg-[#C0392B] cursor-pointer"
              >
                Confirmar
              </button>
            </div>
          </div>
        )}

        {emergencyState === "active" && (
          <div className="w-full rounded-2xl bg-[#E55353] p-4 flex flex-col items-center gap-2 text-white text-center mt-auto">
            <span className="text-3xl animate-pulse">🚨</span>
            <h3 className="font-bold text-base">EMERGÊNCIA ATIVA</h3>
            <p className="text-xs text-white/85">
              Coordenadas enviadas. Acompanhantes notificados.
            </p>
            <button
              onClick={() => setEmergencyState("idle")}
              className="w-full py-2.5 rounded-full bg-white text-[#E55353] font-bold text-xs hover:bg-gray-100 cursor-pointer mt-1"
            >
              Desarmar Emergência
            </button>
          </div>
        )}

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
