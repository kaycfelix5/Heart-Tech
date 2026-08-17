"use client";

import { useState, useEffect } from "react";

export default function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if app is already running in standalone mode (installed)
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    ) {
      setIsStandalone(true);
      return;
    }

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  if (!showBanner || isStandalone) return null;

  return (
    <aside
      aria-label="Instalação do aplicativo"
      className="bg-gradient-to-r from-[#55B7A8] to-[#3E9788] text-white px-4 py-2.5 flex items-center justify-between shadow-md relative z-40 text-xs sm:text-sm"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-lg flex-shrink-0">
          📲
        </div>
        <div>
          <p className="font-bold leading-tight">Instalar App Heart-Tec</p>
          <p className="text-white/85 text-[11px] leading-tight">
            Acesso rápido direto da sua tela inicial
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleInstall}
          className="px-3 py-1.5 rounded-full bg-white text-[#3E9788] font-bold text-xs shadow hover:bg-gray-100 transition-colors cursor-pointer"
        >
          Instalar
        </button>
        <button
          onClick={() => setShowBanner(false)}
          className="w-6 h-6 rounded-full hover:bg-white/20 text-white/80 flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          ✕
        </button>
      </div>
    </aside>
  );
}
