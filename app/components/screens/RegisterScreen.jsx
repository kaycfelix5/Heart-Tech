"use client";
import { useState } from "react";
import HeartTecLogo from "../HeartTecLogo";

export default function RegisterScreen({ navigate }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("login");
  };

  return (
    <div className="flex flex-col min-h-full bg-[#F4F6F6]">
      {/* Header faixa verde */}
      <div className="figma-header-bar">
        <span className="text-xl tracking-widest uppercase">HEART-TEC</span>
        <span className="text-sm opacity-80">Cadastro</span>
      </div>

      <div className="flex flex-col items-center px-8 py-6 gap-5 flex-1">
        <HeartTecLogo size={110} />

        <h2 className="text-xl font-bold text-[#222] -mt-2">Cadastre-se</h2>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 max-w-xs">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#444]" htmlFor="reg-name">
              Nome
            </label>
            <input
              id="reg-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              className="figma-input"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#444]" htmlFor="reg-password">
              Senha
            </label>
            <input
              id="reg-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Crie uma senha"
              className="figma-input"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#444]" htmlFor="reg-confirm">
              Confirmar senha
            </label>
            <input
              id="reg-confirm"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Repita a senha"
              className="figma-input"
            />
          </div>

          <button
            id="reg-submit-btn"
            type="submit"
            className="figma-btn-primary w-full mt-2 py-4 text-base"
          >
            Cadastre-se
          </button>
        </form>

        <div className="flex items-center gap-2 text-sm text-[#555]">
          <span>Já tem conta?</span>
          <button
            id="reg-login-link"
            onClick={() => navigate("login")}
            className="text-[#55B7A8] font-semibold underline hover:opacity-70 transition-opacity"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
