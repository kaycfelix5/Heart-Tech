"use client";

import Image from "next/image";

export default function CaregiverScreen({ navigate }) {
  const characteristics = [
    "Gosta de lugares calmos",
    "Pode se agitar com barulho alto",
    "Fica feliz ouvindo música",
    "Prefere rotina bem definida",
    "Gosta de brincar com Lego",
  ];

  return (
    <div className="flex flex-col min-h-screen sm:min-h-[640px] bg-[#F4F6F6]">
      {/* Header */}
      <div className="figma-header-bar">
        <button
          id="caregiver-back-btn"
          onClick={() => navigate("home")}
          className="text-white hover:opacity-75 transition-opacity cursor-pointer p-1"
          aria-label="Voltar"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="text-lg font-bold tracking-widest uppercase text-white">
          Acompanhante
        </span>
        <div className="w-6" />
      </div>

      <div className="flex flex-col items-center px-6 py-5 gap-4 flex-1 max-w-md mx-auto w-full">
        {/* Perfil */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-3 border-[#55B7A8] shadow-sm">
            <Image
              src="/images/caregiver_avatar.jpg"
              alt="Ana Miranda"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-[#222] font-bold text-base">Ana Miranda</h2>
            <p className="text-[#666] text-xs">Mãe / Acompanhante</p>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="w-full figma-card-white space-y-2.5">
          <h3 className="text-[#55B7A8] font-bold text-xs uppercase tracking-wider">
            Informações de Contato
          </h3>
          <div className="flex flex-col gap-2 text-xs">
            <div className="flex items-center gap-2.5">
              <span>📞</span>
              <div>
                <p className="text-[#777] text-[10px]">Celular</p>
                <p className="text-[#222] font-semibold">(11) 98765-4321</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span>📧</span>
              <div>
                <p className="text-[#777] text-[10px]">E-mail</p>
                <p className="text-[#222] font-semibold">ana.miranda@email.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span>🏠</span>
              <div>
                <p className="text-[#777] text-[10px]">Endereço</p>
                <p className="text-[#222] font-semibold">Rua das Flores, 123 - SP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Características do Portador */}
        <div className="w-full space-y-2">
          <h3 className="text-[#222] font-bold text-xs uppercase tracking-wider">
            Características do Portador
          </h3>
          <div className="flex flex-col gap-1.5">
            {characteristics.map((item, i) => (
              <div key={i} className="figma-card-tint py-2 px-3 flex items-center gap-2 text-xs">
                <span className="text-[#55B7A8] font-bold">✓</span>
                <span className="text-[#222]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Observações */}
        <div className="w-full figma-card-white">
          <h3 className="text-[#55B7A8] font-bold text-xs uppercase tracking-wider mb-1">
            Observações Importantes
          </h3>
          <p className="text-[#444] text-xs leading-relaxed">
            Em caso de crise, falar calmamente e manter contato visual. Evitar aglomerações.
            Contato de emergência: Pai — (11) 91234-5678.
          </p>
        </div>

        {/* Botão Voltar */}
        <button
          id="caregiver-back-bottom-btn"
          onClick={() => navigate("home")}
          className="figma-btn-primary w-full py-3 text-xs font-semibold mt-auto cursor-pointer"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
