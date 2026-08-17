"use client";

export default function SettingsScreen({
  navigate,
  uiScale,
  setUiScale,
  brightness,
  setBrightness,
  language,
  setLanguage,
}) {
  const scales = [
    { key: "normal", label: "Padrão", desc: "100%" },
    { key: "large", label: "Grande", desc: "115%" },
    { key: "extra-large", label: "Muito Grande", desc: "130%" },
  ];

  const languages = [
    { key: "pt", label: "🇧🇷 Português" },
    { key: "en", label: "🇺🇸 English" },
    { key: "es", label: "🇪🇸 Español" },
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#F4F6F6]">
      {/* Header */}
      <div className="figma-header-bar">
        <button
          id="settings-back-btn"
          onClick={() => navigate("home")}
          className="text-white hover:opacity-70 transition-opacity"
          aria-label="Voltar"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="text-xl tracking-widest uppercase">Configurações</span>
        <div className="w-6" />
      </div>

      <div className="flex flex-col px-5 py-5 gap-5">
        {/* Perfil do usuário */}
        <div className="figma-card-white flex items-center gap-4 px-5 py-4">
          <div className="w-14 h-14 rounded-full bg-[#8DDDD0] flex items-center justify-center text-2xl flex-shrink-0">
            👤
          </div>
          <div>
            <p className="text-[#222] font-bold">Ana Miranda</p>
            <p className="text-[#555] text-sm">Acompanhante</p>
          </div>
        </div>

        {/* Tamanho da interface */}
        <div className="figma-card-white flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🔠</span>
            <h3 className="text-[#222] font-bold text-sm">Tamanho da Interface</h3>
          </div>
          <div className="flex flex-col gap-2">
            {scales.map((s) => (
              <button
                key={s.key}
                id={`settings-scale-${s.key}`}
                onClick={() => setUiScale(s.key)}
                className={`flex items-center justify-between px-4 py-3 rounded-full border-2 transition-all text-sm font-medium ${
                  uiScale === s.key
                    ? "border-[#55B7A8] bg-[#E6F7F4] text-[#222]"
                    : "border-[#E5E5E5] bg-white text-[#555] hover:bg-[#F5F5F5]"
                }`}
              >
                <span>{s.label}</span>
                <span className={`text-xs ${uiScale === s.key ? "text-[#55B7A8] font-bold" : "text-[#999]"}`}>
                  {uiScale === s.key ? "✓ " : ""}{s.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Idioma */}
        <div className="figma-card-white flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🌐</span>
            <h3 className="text-[#222] font-bold text-sm">Idioma</h3>
          </div>
          <div className="flex flex-col gap-2">
            {languages.map((l) => (
              <button
                key={l.key}
                id={`settings-lang-${l.key}`}
                onClick={() => setLanguage(l.key)}
                className={`flex items-center justify-between px-4 py-3 rounded-full border-2 transition-all text-sm font-medium ${
                  language === l.key
                    ? "border-[#55B7A8] bg-[#E6F7F4] text-[#222]"
                    : "border-[#E5E5E5] bg-white text-[#555] hover:bg-[#F5F5F5]"
                }`}
              >
                {l.label}
                {language === l.key && <span className="text-[#55B7A8] font-bold text-xs">✓ Ativo</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Brilho */}
        <div className="figma-card-white flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">☀️</span>
              <h3 className="text-[#222] font-bold text-sm">Brilho</h3>
            </div>
            <span className="text-[#55B7A8] font-bold text-sm">{brightness}%</span>
          </div>
          <input
            id="settings-brightness-slider"
            type="range"
            min="50"
            max="100"
            step="5"
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="w-full accent-[#55B7A8]"
          />
          <div className="flex justify-between text-xs text-[#999]">
            <span>🌑 Baixo</span>
            <span>☀️ Alto</span>
          </div>
        </div>

        {/* Suporte */}
        <button
          id="settings-support-btn"
          className="figma-card-white flex items-center justify-between px-5 py-4 hover:bg-[#F0F0F0] transition-colors w-full text-left"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">🆘</span>
            <div>
              <p className="text-[#222] font-semibold text-sm">Suporte</p>
              <p className="text-[#777] text-xs">Precisa de ajuda?</p>
            </div>
          </div>
          <svg width="18" height="18" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Sair */}
        <button
          id="settings-logout-btn"
          onClick={() => navigate("landing")}
          className="w-full py-4 rounded-full border-2 border-[#F28B8B] bg-[#FDE8E8] text-[#C0392B] font-bold text-base hover:bg-[#FBDBDB] transition-colors"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
