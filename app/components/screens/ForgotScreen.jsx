"use client";

import { useState } from "react";
import HeartTecLogo from "../HeartTecLogo";

export default function ForgotScreen({ navigate }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F6F6] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-sm border border-[#E2E8E6] overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Lado Esquerdo: Banner */}
        <div className="bg-gradient-to-br from-[#55B7A8] to-[#3E9788] p-8 sm:p-12 text-white flex flex-col items-center justify-center text-center gap-4">
          <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center p-3 shadow-md">
            <HeartTecLogo size={70} />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-widest uppercase">
              HEART-TEC
            </h1>
            <p className="text-white/85 text-xs sm:text-sm mt-1">
              Recuperação de Acesso
            </p>
          </div>
        </div>

        {/* Lado Direito: Formulário */}
        <div className="p-8 sm:p-12 flex flex-col justify-center max-w-md mx-auto w-full">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-[#222]">Recuperar Senha</h2>
            <p className="text-sm text-[#666] mt-0.5">Informe seu e-mail cadastrado</p>
          </div>

          {sent ? (
            <div className="figma-card-tint text-center py-6">
              <p className="text-[#222] font-semibold text-sm">E-mail enviado!</p>
              <p className="text-xs text-[#666] mt-1">
                Verifique sua caixa de entrada para redefinir sua senha.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#555]" htmlFor="forgot-email">
                  E-mail
                </label>
                <input
                  id="forgot-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="figma-input text-sm"
                  required
                />
              </div>

              <button
                id="forgot-submit-btn"
                type="submit"
                className="figma-btn-primary w-full mt-2 py-3.5 text-sm font-semibold cursor-pointer"
              >
                Enviar Link
              </button>
            </form>
          )}

          <button
            id="forgot-back-link"
            onClick={() => navigate("login")}
            className="text-[#4A9ACB] text-xs font-semibold hover:underline mt-6 text-center cursor-pointer"
          >
            ← Voltar ao Login
          </button>
        </div>
      </div>
    </div>
  );
}
