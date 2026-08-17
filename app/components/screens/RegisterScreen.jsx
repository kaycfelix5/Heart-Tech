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
              Cadastro de Acompanhante
            </p>
          </div>
        </div>

        {/* Lado Direito: Formulário */}
        <div className="p-8 sm:p-12 flex flex-col justify-center max-w-md mx-auto w-full">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-[#222]">Criar Conta</h2>
            <p className="text-sm text-[#666] mt-0.5">Preencha seus dados para cadastro</p>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3.5">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[#555]" htmlFor="reg-name">
                Nome Completo
              </label>
              <input
                id="reg-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome completo"
                className="figma-input text-sm"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[#555]" htmlFor="reg-password">
                Senha
              </label>
              <input
                id="reg-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Crie uma senha"
                className="figma-input text-sm"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[#555]" htmlFor="reg-confirm">
                Confirmar Senha
              </label>
              <input
                id="reg-confirm"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Repita a senha"
                className="figma-input text-sm"
                required
              />
            </div>

            <button
              id="reg-submit-btn"
              type="submit"
              className="figma-btn-primary w-full mt-2 py-3.5 text-sm font-semibold cursor-pointer"
            >
              Cadastrar-se
            </button>
          </form>

          <div className="flex items-center justify-center gap-1 text-xs mt-6 text-[#666]">
            <span>Já tem conta?</span>
            <button
              id="reg-login-link"
              onClick={() => navigate("login")}
              className="text-[#55B7A8] font-bold hover:underline cursor-pointer"
            >
              Fazer Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
