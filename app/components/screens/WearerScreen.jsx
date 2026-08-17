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
    <div className="flex flex-col min-h-full bg-[#F4F6F6]">
      {/* Header */}
      <div className="figma-header-bar">
        <button
          id="wearer-back-btn"
          onClick={() => navigate("home")}
          className="text-white hover:opacity-70 transition-opacity"
          aria-label="Voltar"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="text-xl tracking-widest uppercase">Portador</span>
        <div className="w-6" />
      </div>

      <div className="flex flex-col items-center px-6 py-6 gap-5">
        {/* Foto e nome do portador */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-[#55B7A8] shadow-md">
            <Image
              src="/images/child_portador.jpg"
              alt="Paulo Miranda - Portador"
              fill
              sizes="112px"
              className="object-cover object-top"
            />
          </div>
          <div className="text-center">
            <h2 className="text-[#222] font-bold text-xl">Paulo Miranda</h2>
            <p className="text-[#555] text-sm">Portador da pulseira</p>
          </div>
        </div>

        {/* Informações básicas */}
        <div className="w-full figma-card-white">
          <h3 className="text-[#55B7A8] font-bold text-sm uppercase tracking-wide mb-3">
            Informações Básicas
          </h3>
          <div className="flex flex-col gap-2">
            {info.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-1 border-b border-[#F0F0F0] last:border-none">
                <span className="text-[#777] text-sm">{item.label}</span>
                <span className="text-[#222] font-semibold text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Perfil e características */}
        <div className="w-full">
          <h3 className="text-[#222] font-bold text-sm uppercase tracking-wide mb-3">
            Perfil e Características
          </h3>
          <div className="flex flex-col gap-2">
            {characteristics.map((item, i) => (
              <div
                key={i}
                className="figma-card-tint flex items-center gap-3 py-3 px-4"
              >
                <span className="text-[#55B7A8]">★</span>
                <span className="text-[#222] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status da pulseira */}
        <div className="w-full figma-card-tint flex items-center gap-4 px-5 py-4">
          <div className="w-10 h-10 rounded-full bg-[#55B7A8] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-lg">⌚</span>
          </div>
          <div>
            <p className="text-[#222] font-semibold text-sm">Pulseira Ativa</p>
            <p className="text-[#555] text-xs">ESP32 conectado • Bateria 84%</p>
          </div>
          <div className="ml-auto w-3 h-3 rounded-full bg-green-500 shadow-sm" />
        </div>

        {/* Botão Voltar */}
        <button
          id="wearer-back-bottom-btn"
          onClick={() => navigate("home")}
          className="figma-btn-primary w-full mt-2 py-4"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
