"use client";
import { useState } from "react";
import HeartTecLogo from "../HeartTecLogo";

export default function LoginScreen({ navigate }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("home");
  };

  return (
    <div className="flex flex-col min-h-full bg-[#F4F6F6]">
      {/* Header faixa verde */}
      <div className="figma-header-bar">
        <span className="text-xl tracking-widest uppercase">HEART-TEC</span>
        <span className="text-sm opacity-80">Login</span>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col items-center px-8 py-8 gap-6 flex-1">
        {/* Logo */}
        <HeartTecLogo size={130} />

        {/* Formulário */}
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4 max-w-xs">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#444]" htmlFor="login-name">
              Nome
            </label>
            <input
              id="login-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="figma-input"
              autoComplete="username"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#444]" htmlFor="login-password">
              Senha
            </label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              className="figma-input"
              autoComplete="current-password"
            />
          </div>

          <button
            id="login-submit-btn"
            type="submit"
            className="figma-btn-primary w-full mt-2 py-4 text-base"
          >
            Entrar
          </button>
        </form>

        {/* Links auxiliares */}
        <div className="flex flex-col items-center gap-3 mt-2">
          <button
            id="login-forgot-link"
            onClick={() => navigate("forgot")}
            className="text-[#4A9ACB] text-sm underline hover:opacity-70 transition-opacity"
          >
            Esqueci a senha
          </button>
          <div className="flex items-center gap-2 text-sm text-[#555]">
            <span>Não tem conta?</span>
            <button
              id="login-register-link"
              onClick={() => navigate("register")}
              className="text-[#55B7A8] font-semibold underline hover:opacity-70 transition-opacity"
            >
              Cadastre-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
