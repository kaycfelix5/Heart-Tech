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
    <div className="flex flex-col min-h-full bg-[#F4F6F6]">
      {/* Header */}
      <div className="figma-header-bar">
        <button
          id="caregiver-back-btn"
          onClick={() => navigate("home")}
          className="text-white hover:opacity-70 transition-opacity"
          aria-label="Voltar"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="text-xl tracking-widest uppercase">Acompanhando</span>
        <div className="w-6" />
      </div>

      <div className="flex flex-col items-center px-6 py-6 gap-5">
        {/* Perfil do acompanhante */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#55B7A8] shadow-md">
            <Image
              src="/images/caregiver_avatar.jpg"
              alt="Ana Miranda - Acompanhante"
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-[#222] font-bold text-lg">Ana Miranda</h2>
            <p className="text-[#555] text-sm">Mãe / Acompanhante</p>
          </div>
        </div>

        {/* Informações pessoais */}
        <div className="w-full figma-card-white">
          <h3 className="text-[#55B7A8] font-bold text-sm uppercase tracking-wide mb-3">
            Informações de Contato
          </h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="text-lg">📞</span>
              <div>
                <p className="text-xs text-[#777]">Celular</p>
                <p className="text-[#222] font-medium text-sm">(11) 98765-4321</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">📧</span>
              <div>
                <p className="text-xs text-[#777]">E-mail</p>
                <p className="text-[#222] font-medium text-sm">ana.miranda@email.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">🏠</span>
              <div>
                <p className="text-xs text-[#777]">Endereço</p>
                <p className="text-[#222] font-medium text-sm">Rua das Flores, 123 - SP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Características importantes */}
        <div className="w-full">
          <h3 className="text-[#222] font-bold text-sm uppercase tracking-wide mb-3">
            Características do Portador
          </h3>
          <div className="flex flex-col gap-2">
            {characteristics.map((item, i) => (
              <div
                key={i}
                className="figma-card-tint flex items-center gap-3 py-3 px-4"
              >
                <span className="text-[#55B7A8]">✓</span>
                <span className="text-[#222] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Observações */}
        <div className="w-full figma-card-white">
          <h3 className="text-[#55B7A8] font-bold text-sm uppercase tracking-wide mb-2">
            Observações Importantes
          </h3>
          <p className="text-[#333] text-sm leading-relaxed">
            Em caso de crise, falar calmamente e manter contato visual. Evitar aglomerações.
            Contato de emergência adicional: Pai — (11) 91234-5678.
          </p>
        </div>

        {/* Botão Voltar */}
        <button
          id="caregiver-back-bottom-btn"
          onClick={() => navigate("home")}
          className="figma-btn-primary w-full mt-2 py-4"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
