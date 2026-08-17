"use client";

import { useApp } from "../context/AppContext";

export default function NotificationDrawer() {
  const {
    notifications,
    setNotifications,
    notificationDrawerOpen,
    setNotificationDrawerOpen,
    t,
  } = useApp();

  if (!notificationDrawerOpen) return null;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-fade-in">
      <div
        className="w-full max-w-sm bg-white dark:bg-zinc-900 h-full shadow-2xl flex flex-col border-l border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100"
        style={{ animation: "slideLeft 0.25s ease-out" }}
      >
        {/* Header */}
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔔</span>
            <h3 className="font-bold text-base">{t.notifications}</h3>
            {notifications.filter((n) => !n.read).length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-[#55B7A8] text-white text-[10px] font-extrabold">
                {notifications.filter((n) => !n.read).length} novas
              </span>
            )}
          </div>
          <button
            onClick={() => setNotificationDrawerOpen(false)}
            className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Action Bar */}
        {notifications.length > 0 && (
          <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
            <button
              onClick={markAllAsRead}
              className="hover:text-[#55B7A8] font-medium"
            >
              Marcar lidas
            </button>
            <button
              onClick={clearAll}
              className="hover:text-red-500 font-medium"
            >
              {t.clearAll}
            </button>
          </div>
        )}

        {/* List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {notifications.length === 0 ? (
            <div className="h-48 flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 text-xs text-center gap-2">
              <span className="text-3xl">📭</span>
              <p>{t.noNotifications}</p>
            </div>
          ) : (
            notifications.map((item) => {
              const borderCol = {
                emergency: "border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20",
                success: "border-l-4 border-l-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20",
                info: "border-l-4 border-l-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/20",
              }[item.type] || "border-l-4 border-l-zinc-400";

              return (
                <div
                  key={item.id}
                  className={`p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800 ${borderCol} transition-all`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs font-semibold leading-snug">{item.title}</p>
                    {!item.read && (
                      <span className="w-2 h-2 rounded-full bg-[#55B7A8] flex-shrink-0 mt-1" />
                    )}
                  </div>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block mt-1">
                    {item.time}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <button
            onClick={() => setNotificationDrawerOpen(false)}
            className="w-full py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-bold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
