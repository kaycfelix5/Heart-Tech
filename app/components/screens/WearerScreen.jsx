"use client";

import Image from "next/image";

export default function WearerScreen({ navigate }) {
  const info = [
    { label: "Nome", value: "Paulo Miranda" },
    { label: "Idade", value: "12 anos" },
    { label: "Diagnóstico", value: "TEA - Grau 1" },
    { label: "Escola", value: "E.M. Jardim das Rosas" },
    { label: "Turno", value: "Manhã" },
  ];

  const characteristics = [
    "Sensível a sons altos",
    "Prefere ambientes iluminados",
    "Adora animais",
    "Comunica-se por gestos",
    "Rotina bem definida ajuda",
  ];

  return (
    <div className="flex flex-col min-h-screen sm:min-h-[640px] bg-[#F4F6F6]">
      {/* Header */}
      <div className="figma-header-bar">
        <button
          id="wearer-back-btn"
          onClick={() => navigate("home")}
          className="text-white hover:opacity-75 transition-opacity cursor-pointer p-1"
          aria-label="Voltar"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="text-lg font-bold tracking-widest uppercase text-white">
          Portador
        </span>
        <div className="w-6" />
      </div>

      <div className="flex flex-col items-center px-6 py-5 gap-4 flex-1 max-w-md mx-auto w-full">
        {/* Foto do portador */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-22 h-22 rounded-full overflow-hidden border-3 border-[#55B7A8] shadow-sm">
            <Image
              src="/images/child_portador.jpg"
              alt="Paulo Miranda"
              fill
              sizes="88px"
              className="object-cover object-top"
            />
          </div>
          <div className="text-center">
            <h2 className="text-[#222] font-bold text-base">Paulo Miranda</h2>
            <p className="text-[#666] text-xs">Portador da pulseira</p>
          </div>
        </div>

        {/* Informações Básicas */}
        <div className="w-full figma-card-white space-y-2">
          <h3 className="text-[#55B7A8] font-bold text-xs uppercase tracking-wider">
            Informações Básicas
          </h3>
          <div className="flex flex-col gap-1.5 text-xs">
            {info.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-1 border-b border-[#F0F0F0] last:border-none">
                <span className="text-[#777]">{item.label}</span>
                <span className="text-[#222] font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Características */}
        <div className="w-full space-y-2">
          <h3 className="text-[#222] font-bold text-xs uppercase tracking-wider">
            Perfil e Características
          </h3>
          <div className="flex flex-col gap-1.5">
            {characteristics.map((item, i) => (
              <div key={i} className="figma-card-tint py-2 px-3 flex items-center gap-2 text-xs">
                <span className="text-[#55B7A8] font-bold">★</span>
                <span className="text-[#222]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status da Pulseira */}
        <div className="w-full figma-card-tint flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⌚</span>
            <div>
              <p className="text-[#222] font-bold text-xs">Pulseira Conectada</p>
              <p className="text-[#666] text-[11px]">ESP32 • Bateria 84%</p>
            </div>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
        </div>

        {/* Botão Voltar */}
        <button
          id="wearer-back-bottom-btn"
          onClick={() => navigate("home")}
          className="figma-btn-primary w-full py-3 text-xs font-semibold mt-auto cursor-pointer"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
