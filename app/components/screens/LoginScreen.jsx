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
              Plataforma de Monitoramento
            </p>
          </div>
        </div>

        {/* Lado Direito: Formulário */}
        <div className="p-8 sm:p-12 flex flex-col justify-center max-w-md mx-auto w-full">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#222]">Login</h2>
            <p className="text-sm text-[#666] mt-0.5">Entre com seu nome e senha</p>
          </div>

          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[#555]" htmlFor="login-name">
                Nome
              </label>
              <input
                id="login-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="figma-input text-sm"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[#555]" htmlFor="login-password">
                Senha
              </label>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sua senha"
                className="figma-input text-sm"
                required
              />
            </div>

            <button
              id="login-submit-btn"
              type="submit"
              className="figma-btn-primary w-full mt-2 py-3.5 text-sm font-semibold cursor-pointer"
            >
              Entrar
            </button>
          </form>

          <div className="flex items-center justify-between text-xs mt-6 text-[#666]">
            <button
              id="login-forgot-link"
              onClick={() => navigate("forgot")}
              className="text-[#4A9ACB] hover:underline cursor-pointer"
            >
              Esqueci a senha
            </button>

            <div className="flex items-center gap-1">
              <span>Não tem conta?</span>
              <button
                id="login-register-link"
                onClick={() => navigate("register")}
                className="text-[#55B7A8] font-bold hover:underline cursor-pointer"
              >
                Cadastre-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
