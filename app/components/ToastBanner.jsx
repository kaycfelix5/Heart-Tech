"use client";

import { useApp } from "../context/AppContext";

export default function ToastBanner() {
  const { toast, setToast } = useApp();

  if (!toast) return null;

  const bgStyles = {
    success: "bg-emerald-600 text-white border-emerald-500",
    error: "bg-red-600 text-white border-red-500 animate-bounce",
    info: "bg-[#0f172a] text-slate-100 border-slate-700",
  }[toast.type] || "bg-[#0f172a] text-slate-100";

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-4 right-4 left-4 sm:left-auto sm:max-w-md z-50 flex items-center justify-between gap-3 px-4 py-3 rounded-2xl shadow-xl border backdrop-blur-md transition-all duration-300 animate-slide-in text-xs sm:text-sm font-medium"
      style={{ animation: "slideDown 0.3s ease-out" }}
    >
      <div className={`flex items-center gap-2.5 ${bgStyles} px-4 py-2.5 rounded-xl w-full shadow-lg`}>
        <span className="text-base flex-shrink-0">
          {toast.type === "success" ? "✓" : toast.type === "error" ? "⚠️" : "ℹ️"}
        </span>
        <span className="flex-1 leading-tight">{toast.message}</span>
        <button
          onClick={() => setToast(null)}
          className="w-5 h-5 rounded-full hover:bg-white/20 flex items-center justify-center text-xs opacity-75 hover:opacity-100 transition-opacity"
          aria-label="Fechar notificação"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
