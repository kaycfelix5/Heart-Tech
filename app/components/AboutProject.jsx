"use client";
import { useState } from "react";

const kanbanData = {
  sprint1: {
    label: "Sprint 1",
    status: "Concluída",
    statusColor: "bg-green-100 text-green-700",
    cards: [
      "Modelo – Baixa Fidelidade",
      "Modelo – Média Fidelidade",
      "Documentação – Projeto",
      "Modelo – Alta Fidelidade",
      "Definir Personas S1",
      "Desenvolver – Apresentação S1",
      "Mapa da Empatia – Personas S1",
      "Desenvolver – Diagrama de Entidades S1",
    ],
    cardStyle: "bg-[#E6F7F4] border-[#8DDDD0] text-[#222]",
    icon: "✅",
  },
  sprint2: {
    label: "Sprint 2",
    status: "A Fazer",
    statusColor: "bg-blue-100 text-blue-700",
    cards: [
      "Banco de Dados S2",
      "Montar o Back End S2",
      "Montar o Front End S2",
    ],
    cardStyle: "bg-white border-[#D5DFDC] text-[#222]",
    icon: "🔜",
  },
  sprint3: {
    label: "Sprint 3",
    status: "A Fazer",
    statusColor: "bg-blue-100 text-blue-700",
    cards: [
      "Montar o Frame Work S3",
      "Alinhar ferramentas S3",
      "Testar Produto S3",
    ],
    cardStyle: "bg-white border-[#D5DFDC] text-[#222]",
    icon: "🔜",
  },
};

const techData = {
  hardware: [
    { name: "ESP32", icon: "🔌", desc: "Microcontrolador principal" },
    { name: "GPS NEO-6M", icon: "📡", desc: "Módulo de localização" },
    { name: "SIM800L", icon: "📶", desc: "Comunicação GSM/GPRS" },
    { name: "Bateria Li-Po", icon: "🔋", desc: "Alimentação portátil" },
    { name: "TP4056", icon: "⚡", desc: "Carregador de bateria" },
  ],
  software: [
    { name: "React Native", icon: "⚛️", desc: "App móvel" },
    { name: "Node.js", icon: "🟢", desc: "Ambiente backend" },
    { name: "Express", icon: "🚂", desc: "Framework web" },
    { name: "PostgreSQL", icon: "🐘", desc: "Banco de dados" },
    { name: "Sequelize", icon: "🔗", desc: "ORM" },
  ],
  tools: [
    { name: "Figma", icon: "🎨", desc: "Design de interfaces" },
    { name: "GitHub", icon: "🐙", desc: "Controle de versão" },
    { name: "VS Code", icon: "💻", desc: "Editor de código" },
    { name: "Postman", icon: "📮", desc: "Testes de API" },
    { name: "Kanban", icon: "📋", desc: "Gestão do projeto" },
  ],
};

const archSteps = [
  { label: "PULSEIRA", sub: "ESP32 + GPS NEO-6M + SIM800L", icon: "⌚", color: "bg-[#E6F7F4] border-[#8DDDD0]" },
  { label: "REDE GSM", sub: "Transmissão de dados", icon: "📡", color: "bg-[#E6F0F7] border-[#8DB4DD]" },
  { label: "BACKEND / API", sub: "Node.js + Express", icon: "🖥️", color: "bg-[#E6F7F4] border-[#8DDDD0]" },
  { label: "POSTGRESQL", sub: "Banco de dados", icon: "🐘", color: "bg-[#E6F0F7] border-[#8DB4DD]" },
  { label: "APP MOBILE", sub: "React Native", icon: "📱", color: "bg-[#E6F7F4] border-[#8DDDD0]" },
  { label: "ACOMPANHANTE", sub: "Usuário final", icon: "👤", color: "bg-[#E6F0F7] border-[#8DB4DD]" },
];

const currentStatus = {
  done: ["Protótipos", "Personas", "Mapa da Empatia", "Diagrama de Entidades", "Documentação", "Apresentação"],
  next: ["Banco de Dados", "Backend", "Frontend"],
  later: ["Framework", "Alinhamento das ferramentas", "Teste do produto"],
  blocked: ["Peças do projeto"],
};

export default function AboutProject() {
  const [activeTab, setActiveTab] = useState("kanban");

  const tabs = [
    { key: "kanban", label: "Kanban" },
    { key: "about", label: "Sobre" },
    { key: "tech", label: "Tecnologias" },
    { key: "arch", label: "Arquitetura" },
    { key: "status", label: "Status" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F6]">
      {/* Header */}
      <div className="figma-header-bar px-6">
        <span className="text-xl tracking-widest uppercase font-bold">HEART-TEC</span>
        <span className="text-sm opacity-80">Sobre o Projeto</span>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-[#E5E5E5] sticky top-0 z-10">
        <div className="flex overflow-x-auto gap-0 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              id={`about-tab-${tab.key}`}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.key
                  ? "border-[#55B7A8] text-[#55B7A8]"
                  : "border-transparent text-[#777] hover:text-[#444]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* KANBAN */}
        {activeTab === "kanban" && (
          <div className="flex flex-col gap-6">
            <h2 className="text-[#222] font-bold text-xl">Kanban do Projeto</h2>

            {/* Sprints */}
            {Object.values(kanbanData).map((sprint) => (
              <div key={sprint.label} className="figma-card-white flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{sprint.icon}</span>
                    <h3 className="text-[#222] font-bold">{sprint.label}</h3>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${sprint.statusColor}`}>
                    {sprint.status}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {sprint.cards.map((card, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border ${sprint.cardStyle}`}
                    >
                      {sprint.status === "Concluída" && (
                        <span className="text-green-500 text-sm flex-shrink-0">✓</span>
                      )}
                      <span className="text-sm">{card}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Bloqueado e Fazendo */}
            <div className="grid grid-cols-2 gap-4">
              <div className="figma-card-white flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🚫</span>
                  <h3 className="text-[#222] font-bold text-sm">Bloqueado</h3>
                </div>
                <div className="px-3 py-2.5 rounded-xl border border-[#F28B8B] bg-[#FDE8E8] text-sm text-[#C0392B]">
                  Professor – Peças do Projeto
                </div>
              </div>
              <div className="figma-card-white flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚙️</span>
                  <h3 className="text-[#222] font-bold text-sm">Fazendo</h3>
                </div>
                <div className="px-3 py-2.5 rounded-xl border border-[#E5E5E5] bg-[#F9F9F9] text-sm text-[#999] italic">
                  Nenhuma tarefa
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SOBRE */}
        {activeTab === "about" && (
          <div className="flex flex-col gap-4">
            <h2 className="text-[#222] font-bold text-xl">Sobre o Heart-Tec</h2>
            <div className="figma-card-tint">
              <h3 className="text-[#55B7A8] font-bold mb-2">Problema</h3>
              <p className="text-[#333] text-sm leading-relaxed">
                Pessoas com deficiência cognitiva como TEA, deficiência intelectual e Alzheimer
                frequentemente se perdem ou ficam em situações de risco, causando angústia
                para familiares e cuidadores.
              </p>
            </div>
            <div className="figma-card-white">
              <h3 className="text-[#55B7A8] font-bold mb-2">Objetivo</h3>
              <p className="text-[#333] text-sm leading-relaxed">
                Desenvolver uma pulseira vestível com ESP32, GPS e comunicação GSM que permite
                o rastreamento em tempo real do portador por meio de um aplicativo mobile,
                com alertas de geofencing e botão de emergência.
              </p>
            </div>
            <div className="figma-card-white">
              <h3 className="text-[#55B7A8] font-bold mb-2">Justificativa</h3>
              <p className="text-[#333] text-sm leading-relaxed">
                O Heart-Tec busca oferecer mais autonomia, segurança e tranquilidade tanto
                para os portadores quanto para seus acompanhantes, utilizando tecnologia
                acessível e de baixo custo.
              </p>
            </div>
          </div>
        )}

        {/* TECNOLOGIAS */}
        {activeTab === "tech" && (
          <div className="flex flex-col gap-5">
            <h2 className="text-[#222] font-bold text-xl">Tecnologias</h2>
            {[
              { key: "hardware", label: "🔧 Hardware" },
              { key: "software", label: "💻 Software" },
              { key: "tools", label: "🛠️ Ferramentas" },
            ].map(({ key, label }) => (
              <div key={key} className="figma-card-white flex flex-col gap-3">
                <h3 className="text-[#222] font-bold">{label}</h3>
                <div className="flex flex-col gap-2">
                  {techData[key].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-[#E5E5E5] bg-[#F9FBFB]"
                    >
                      <span className="text-xl w-8 text-center">{item.icon}</span>
                      <div>
                        <p className="text-[#222] font-semibold text-sm">{item.name}</p>
                        <p className="text-[#777] text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ARQUITETURA */}
        {activeTab === "arch" && (
          <div className="flex flex-col gap-5">
            <h2 className="text-[#222] font-bold text-xl">Arquitetura do Sistema</h2>
            <div className="figma-card-white flex flex-col items-center gap-0 py-4">
              {archSteps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center w-full max-w-xs">
                  <div className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border-2 w-full ${step.color}`}>
                    <span className="text-2xl">{step.icon}</span>
                    <div>
                      <p className="text-[#222] font-bold text-sm">{step.label}</p>
                      <p className="text-[#555] text-xs">{step.sub}</p>
                    </div>
                  </div>
                  {i < archSteps.length - 1 && (
                    <div className="flex flex-col items-center py-1">
                      <div className="w-0.5 h-4 bg-[#8DDDD0]" />
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                        <path d="M8 10L0 0h16L8 10z" fill="#8DDDD0" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STATUS */}
        {activeTab === "status" && (
          <div className="flex flex-col gap-4">
            <h2 className="text-[#222] font-bold text-xl">Estado Atual do Projeto</h2>
            <div className="figma-card-tint flex flex-col gap-2">
              <h3 className="text-green-700 font-bold text-sm flex items-center gap-2">
                ✅ Já Realizado
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentStatus.done.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="figma-card-white flex flex-col gap-2">
              <h3 className="text-blue-600 font-bold text-sm flex items-center gap-2">
                🔜 Próximo
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentStatus.next.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="figma-card-white flex flex-col gap-2">
              <h3 className="text-[#777] font-bold text-sm flex items-center gap-2">
                ⏳ Depois
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentStatus.later.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="figma-card-white flex flex-col gap-2">
              <h3 className="text-red-500 font-bold text-sm flex items-center gap-2">
                🚫 Bloqueado
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentStatus.blocked.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
