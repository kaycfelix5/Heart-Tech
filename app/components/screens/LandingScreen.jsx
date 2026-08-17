"use client";

import HeartTecLogo from "../HeartTecLogo";

export default function LandingScreen({ navigate }) {
  return (
    <div className="min-h-screen bg-[#F4F6F6] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-sm border border-[#E2E8E6] overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Lado Esquerdo: Banner Informativo */}
        <div className="bg-gradient-to-br from-[#55B7A8] to-[#3E9788] p-8 sm:p-12 text-white flex flex-col items-center justify-center text-center gap-6">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center p-4 shadow-lg">
            <HeartTecLogo size={110} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-widest uppercase">
              HEART-TEC
            </h1>
            <p className="text-white/85 text-sm sm:text-base mt-2 max-w-xs">
              Monitoramento inteligente e acompanhamento seguro de portadores.
            </p>
          </div>
        </div>

        {/* Lado Direito: Ação de Entrada */}
        <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center gap-6">
          <div>
            <h2 className="text-2xl font-bold text-[#222]">Bem-vindo(a)</h2>
            <p className="text-[#666] text-sm mt-1">
              Acesse a plataforma de acompanhamento
            </p>
          </div>

          <div className="w-full max-w-xs space-y-3">
            <button
              id="landing-login-btn"
              onClick={() => navigate("login")}
              className="figma-btn-primary w-full py-3.5 text-base font-semibold cursor-pointer shadow-md"
            >
              Fazer Login
            </button>
            <button
              onClick={() => navigate("register")}
              className="w-full py-3.5 rounded-full border border-[#D5DFDC] bg-white text-[#555] text-sm font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Criar Nova Conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
