"use client";
import { useState } from "react";

function BatteryIcon({ level }) {
  const color = level > 50 ? "#55B7A8" : level > 20 ? "#F5A623" : "#E55353";
  return (
    <svg width="36" height="20" viewBox="0 0 36 20">
      <rect x="1" y="3" width="30" height="14" rx="3" fill="none" stroke={color} strokeWidth="2" />
      <rect x="31" y="7" width="4" height="6" rx="1.5" fill={color} />
      <rect x="3" y="5" width={Math.round(level / 100 * 26)} height="10" rx="2" fill={color} />
    </svg>
  );
}

export default function DataScreen({ navigate }) {
  const [emergencyState, setEmergencyState] = useState("idle"); // idle | confirm | active
  const battery = 84;
  const distance = 67;

  return (
    <div className="flex flex-col min-h-full bg-[#F4F6F6]">
      {/* Header */}
      <div className={`figma-header-bar transition-colors ${emergencyState === "active" ? "bg-[#E55353]" : ""}`}>
        <button
          id="data-back-btn"
          onClick={() => navigate("home")}
          className="text-white hover:opacity-70 transition-opacity"
          aria-label="Voltar"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="text-xl tracking-widest uppercase">Dados</span>
        <div className="w-6" />
      </div>

      <div className="flex flex-col px-5 py-5 gap-4">
        {/* Grid de status */}
        <div className="grid grid-cols-2 gap-3">
          {/* Bateria */}
          <div className="figma-card-white flex flex-col items-center gap-2 py-5">
            <BatteryIcon level={battery} />
            <p className="text-[#222] font-bold text-2xl">{battery}%</p>
            <p className="text-[#777] text-xs">Bateria</p>
          </div>

          {/* Distância */}
          <div className="figma-card-white flex flex-col items-center gap-2 py-5">
            <div className="w-10 h-10 rounded-full bg-[#E6F7F4] flex items-center justify-center">
              <svg width="22" height="22" fill="#55B7A8" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
              </svg>
            </div>
            <p className="text-[#222] font-bold text-2xl">{distance}m</p>
            <p className="text-[#777] text-xs">Distância</p>
          </div>

          {/* GPS */}
          <div className="figma-card-white flex flex-col items-center gap-2 py-5">
            <div className="w-10 h-10 rounded-full bg-[#E6F7F4] flex items-center justify-center">
              <span className="text-lg">📡</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <p className="text-[#222] font-bold text-sm">Ativo</p>
            </div>
            <p className="text-[#777] text-xs">GPS NEO-6M</p>
          </div>

          {/* GSM / Sinal */}
          <div className="figma-card-white flex flex-col items-center gap-2 py-5">
            <div className="w-10 h-10 rounded-full bg-[#E6F7F4] flex items-center justify-center">
              <span className="text-lg">📶</span>
            </div>
            <p className="text-[#222] font-bold text-sm">3 barras</p>
            <p className="text-[#777] text-xs">Sinal GSM</p>
          </div>
        </div>

        {/* Card da pulseira */}
        <div className="figma-card-tint flex items-center gap-4 px-5 py-4">
          <span className="text-3xl">⌚</span>
          <div>
            <p className="text-[#222] font-bold text-sm">Pulseira Heart-Tec</p>
            <p className="text-[#555] text-xs">ESP32 • SIM800L • NEO-6M</p>
            <p className="text-[#55B7A8] text-xs font-semibold mt-1">Online agora</p>
          </div>
          <div className="ml-auto flex flex-col items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm animate-pulse" />
            <span className="text-[10px] text-[#555]">ao vivo</span>
          </div>
        </div>

        {/* EMERGÊNCIA */}
        {emergencyState === "idle" && (
          <button
            id="data-emergency-btn"
            onClick={() => setEmergencyState("confirm")}
            className="w-full py-6 rounded-2xl bg-[#FDE8E8] border-2 border-[#F28B8B] text-[#C0392B] font-bold text-xl flex flex-col items-center gap-1 hover:bg-[#FBDBDB] transition-colors"
          >
            <span className="text-4xl">🚨</span>
            EMERGÊNCIA
            <span className="text-sm font-normal text-[#999] mt-1">Toque para acionar</span>
          </button>
        )}

        {/* Modal de confirmação */}
        {emergencyState === "confirm" && (
          <div className="w-full rounded-2xl border-2 border-[#F28B8B] bg-white p-5 flex flex-col gap-4">
            <div className="text-center">
              <span className="text-5xl">⚠️</span>
              <h3 className="text-[#222] font-bold text-lg mt-2">Acionar Emergência?</h3>
              <p className="text-[#555] text-sm mt-1">
                Deseja realmente acionar uma emergência?
                Todos os contatos serão notificados.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                id="emergency-cancel-btn"
                onClick={() => setEmergencyState("idle")}
                className="flex-1 py-3 rounded-full border-2 border-[#E5E5E5] text-[#555] font-semibold text-sm hover:bg-[#F5F5F5] transition-colors"
              >
                Cancelar
              </button>
              <button
                id="emergency-confirm-btn"
                onClick={() => setEmergencyState("active")}
                className="flex-1 py-3 rounded-full bg-[#E55353] text-white font-bold text-sm hover:bg-[#C0392B] transition-colors"
              >
                Confirmar
              </button>
            </div>
          </div>
        )}

        {/* Estado ativo de emergência */}
        {emergencyState === "active" && (
          <div className="w-full rounded-2xl border-2 border-[#E55353] bg-[#E55353] p-5 flex flex-col items-center gap-3">
            <span className="text-5xl animate-pulse">🚨</span>
            <h3 className="text-white font-bold text-xl">EMERGÊNCIA ATIVA</h3>
            <p className="text-white/80 text-sm text-center">
              Coordenadas enviadas. Acompanhantes notificados.
            </p>
            <button
              id="emergency-disarm-btn"
              onClick={() => setEmergencyState("idle")}
              className="w-full py-3 rounded-full bg-white text-[#E55353] font-bold text-sm hover:bg-gray-100 transition-colors"
            >
              Desarmar Emergência
            </button>
          </div>
        )}

        <button
          id="data-back-bottom-btn"
          onClick={() => navigate("home")}
          className="w-full py-3 rounded-full border border-[#E5E5E5] bg-[#F4F6F6] text-[#555] text-sm font-medium hover:bg-[#EAEAEA] transition-colors"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
