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
    <div className="flex flex-col min-h-full bg-[#F4F6F6]">
      {/* Header faixa verde */}
      <div className="figma-header-bar">
        <span className="text-xl tracking-widest uppercase">HEART-TEC</span>
        <span className="text-sm opacity-80">Recuperar</span>
      </div>

      <div className="flex flex-col items-center px-8 py-8 gap-6 flex-1">
        <HeartTecLogo size={110} />

        <h2 className="text-xl font-bold text-[#222] -mt-2">Recuperar Senha</h2>

        {sent ? (
          <div className="figma-card-tint w-full max-w-xs text-center py-6">
            <p className="text-[#222] font-medium">E-mail enviado!</p>
            <p className="text-sm text-[#555] mt-1">
              Verifique sua caixa de entrada para redefinir a senha.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 max-w-xs">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#444]" htmlFor="forgot-email">
                E-mail
              </label>
              <input
                id="forgot-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="figma-input"
                required
              />
            </div>

            <button
              id="forgot-submit-btn"
              type="submit"
              className="figma-btn-primary w-full mt-2 py-4 text-base"
            >
              Recuperar
            </button>
          </form>
        )}

        <button
          id="forgot-back-link"
          onClick={() => navigate("login")}
          className="text-[#4A9ACB] text-sm underline hover:opacity-70 transition-opacity"
        >
          ← Voltar ao Login
        </button>
      </div>
    </div>
  );
}
