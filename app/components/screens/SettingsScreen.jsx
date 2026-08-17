"use client";

export default function SettingsScreen({
  navigate,
  uiScale = "normal",
  setUiScale = () => {},
  brightness = 100,
  setBrightness = () => {},
  language = "pt",
  setLanguage = () => {},
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
    <div className="flex flex-col min-h-screen sm:min-h-[640px] bg-[#F4F6F6]">
      {/* Header */}
      <div className="figma-header-bar">
        <button
          id="settings-back-btn"
          onClick={() => navigate("home")}
          className="text-white hover:opacity-75 transition-opacity cursor-pointer p-1"
          aria-label="Voltar"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <span className="text-lg font-bold tracking-widest uppercase text-white">
          Configurações
        </span>
        <div className="w-6" />
      </div>

      <div className="flex flex-col px-6 py-5 gap-3.5 flex-1 max-w-md mx-auto w-full">
        {/* Perfil */}
        <div className="figma-card-white flex items-center gap-3.5 py-3.5 px-4">
          <div className="w-12 h-12 rounded-full bg-[#8DDDD0] flex items-center justify-center text-xl flex-shrink-0">
            👤
          </div>
          <div>
            <p className="text-[#222] font-bold text-sm">Ana Miranda</p>
            <p className="text-[#666] text-xs">Acompanhante</p>
          </div>
        </div>

        {/* Tamanho da Interface */}
        <div className="figma-card-white space-y-2 p-3.5">
          <h3 className="text-[#222] font-bold text-xs">Tamanho da Interface</h3>
          <div className="flex flex-col gap-1.5">
            {scales.map((s) => (
              <button
                key={s.key}
                onClick={() => setUiScale(s.key)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                  uiScale === s.key
                    ? "border-[#55B7A8] bg-[#E6F7F4] text-[#222] font-bold"
                    : "border-[#E5E5E5] bg-white text-[#555] hover:bg-gray-50"
                }`}
              >
                <span>{s.label}</span>
                <span className={`text-[11px] ${uiScale === s.key ? "text-[#55B7A8] font-bold" : "text-[#999]"}`}>
                  {uiScale === s.key ? "✓ " : ""}{s.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Idioma */}
        <div className="figma-card-white space-y-2 p-3.5">
          <h3 className="text-[#222] font-bold text-xs">Idioma</h3>
          <div className="flex flex-col gap-1.5">
            {languages.map((l) => (
              <button
                key={l.key}
                onClick={() => setLanguage(l.key)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                  language === l.key
                    ? "border-[#55B7A8] bg-[#E6F7F4] text-[#222] font-bold"
                    : "border-[#E5E5E5] bg-white text-[#555] hover:bg-gray-50"
                }`}
              >
                <span>{l.label}</span>
                {language === l.key && <span className="text-[#55B7A8] font-bold text-[11px]">✓ Ativo</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Brilho */}
        <div className="figma-card-white space-y-2 p-3.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#222] font-bold">Brilho da Tela</span>
            <span className="text-[#55B7A8] font-bold">{brightness}%</span>
          </div>
          <input
            type="range"
            min="50"
            max="100"
            step="5"
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="w-full accent-[#55B7A8] cursor-pointer"
          />
        </div>

        {/* Botão Sair */}
        <button
          onClick={() => navigate("landing")}
          className="w-full py-3 rounded-full border border-red-200 bg-red-50 text-red-600 font-bold text-xs hover:bg-red-100 transition-colors cursor-pointer mt-auto"
        >
          Sair da Conta
        </button>

        <button
          onClick={() => navigate("home")}
          className="w-full py-2.5 rounded-full border border-[#D5DFDC] bg-white text-[#666] text-xs font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
