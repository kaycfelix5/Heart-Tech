"use client";

import { useState, useEffect } from "react";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ForgotScreen from "./screens/ForgotScreen";
import HomeScreen from "./screens/HomeScreen";
import CaregiverScreen from "./screens/CaregiverScreen";
import WearerScreen from "./screens/WearerScreen";
import MapScreen from "./screens/MapScreen";
import DataScreen from "./screens/DataScreen";
import SettingsScreen from "./screens/SettingsScreen";
import HeartTecLogo from "./HeartTecLogo";

export default function FigmaApp() {
  const [screen, setScreen] = useState("landing");
  const [uiScale, setUiScale] = useState("normal");
  const [brightness, setBrightness] = useState(100);
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    document.documentElement.setAttribute("data-ui-scale", uiScale);
  }, [uiScale]);

  const navigate = (to) => setScreen(to);

  const settingsProps = {
    navigate,
    uiScale,
    setUiScale,
    brightness,
    setBrightness,
    language,
    setLanguage,
  };

  const screenMap = {
    landing: <LandingScreen navigate={navigate} />,
    login: <LoginScreen navigate={navigate} />,
    register: <RegisterScreen navigate={navigate} />,
    forgot: <ForgotScreen navigate={navigate} />,
    home: <HomeScreen navigate={navigate} />,
    caregiver: <CaregiverScreen navigate={navigate} />,
    wearer: <WearerScreen navigate={navigate} />,
    map: <MapScreen navigate={navigate} />,
    data: <DataScreen navigate={navigate} />,
    settings: <SettingsScreen {...settingsProps} />,
  };

  const currentScreen = screenMap[screen] ?? screenMap["landing"];

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#EBF5F3] md:bg-gradient-to-br md:from-[#55B7A8] md:to-[#3E9788] md:p-6"
      style={{ filter: `brightness(${brightness}%)` }}
    >
      {/* Elemento Decorativo no Computador (Lateral Esquerda) */}
      <div className="hidden lg:flex flex-col items-center gap-4 text-white mr-12 select-none">
        <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center p-3 shadow-lg">
          <HeartTecLogo size={70} />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-widest uppercase">
            HEART-TEC
          </h1>
          <p className="text-white/80 text-xs mt-0.5">
            Monitoramento Inteligente
          </p>
        </div>
      </div>

      {/* Frame / Container Principal (Celular: 100% largura / Desktop: Card Centralizado e Bem Proporcionado) */}
      <div className="w-full md:max-w-sm min-h-screen md:min-h-[640px] md:max-h-[860px] bg-white md:rounded-3xl md:shadow-2xl overflow-hidden flex flex-col border border-black/5">
        {currentScreen}
      </div>
    </div>
  );
}
