"use client";
import HeartTecLogo from "../HeartTecLogo";

export default function LandingScreen({ navigate }) {
  return (
    <div className="flex flex-col items-center justify-between min-h-full bg-white px-8 py-16">
      <div className="flex-1 flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <HeartTecLogo size={180} />
          <h1 className="text-4xl font-bold tracking-widest text-[#222222] uppercase">
            HEART-TEC
          </h1>
          <p className="text-[#555555] text-sm text-center">
            Monitoramento Inteligente com Amor
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-3 pb-4">
        <button
          id="landing-login-btn"
          onClick={() => navigate("login")}
          className="figma-btn-primary w-full max-w-xs text-lg py-4"
        >
          Login
        </button>
      </div>
    </div>
  );
}
