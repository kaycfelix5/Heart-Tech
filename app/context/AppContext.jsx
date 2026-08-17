"use client";

import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { translations } from "../data/translations";

const AppContext = createContext(null);

const DEFAULT_CAREGIVER = {
  name: "Ana Miranda",
  role: "Mãe / Acompanhante Responsável",
  phone: "(11) 98765-4321",
  email: "ana.miranda@email.com",
  address: "Rua das Flores, 123 - São Paulo, SP",
  emergencyContactSecondary: "Carlos Miranda (Pai) - (11) 91234-5678",
  avatar: "/images/caregiver_avatar.jpg",
};

const DEFAULT_WEARER = {
  name: "Paulo Miranda",
  age: "12 anos",
  diagnosis: "TEA - Grau 1 (Autismo Leve)",
  school: "E.M. Jardim das Rosas",
  shift: "Manhã",
  avatar: "/images/child_portador.jpg",
  characteristics: [
    "Gosta de lugares calmos e previsíveis",
    "Sensível a ruídos altos e multidões",
    "Fica feliz ouvindo música ambiente",
    "Prefere rotinas bem estruturadas",
    "Comunica-se por gestos e frases curtas",
  ],
};

const DEFAULT_NOTIFICATIONS = [
  {
    id: 1,
    title: "Pulseira ESP32 conectada com sucesso",
    time: "há 5 min",
    type: "success",
    read: false,
  },
  {
    id: 2,
    title: "Geofencing ativo: Paulo está na Zona Segura",
    time: "há 12 min",
    type: "info",
    read: false,
  },
  {
    id: 3,
    title: "Bateria da pulseira em 84% (~18h restantes)",
    time: "há 30 min",
    type: "info",
    read: true,
  },
];

// Helper to synthesize soft web audio beeps
function playTone(freq, type = "sine", duration = 0.15) {
  try {
    if (typeof window === "undefined") return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Audio context not allowed without interaction
  }
}

export function AppProvider({ children }) {
  // Caregiver and Wearer state
  const [caregiver, setCaregiver] = useState(DEFAULT_CAREGIVER);
  const [wearer, setWearer] = useState(DEFAULT_WEARER);

  // Screen and navigation state
  const [screen, setScreen] = useState("landing");
  const [viewMode, setViewMode] = useState("dashboard"); // "dashboard" | "app" | "website"
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Settings
  const [theme, setTheme] = useState("light"); // "light" | "dark"
  const [uiScale, setUiScale] = useState("normal"); // "normal" | "large" | "extra-large"
  const [brightness, setBrightness] = useState(100);
  const [language, setLanguage] = useState("pt");
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Hardware & Telemetry simulation
  const [battery, setBattery] = useState(84);
  const [isCharging, setIsCharging] = useState(false);
  const [heartRate, setHeartRate] = useState(78);
  const [bodyTemp, setBodyTemp] = useState(36.4);
  const [safeRadius, setSafeRadius] = useState(100); // meters
  const [signalSent, setSignalSent] = useState(false);

  // Map simulation coords (Caregiver is at 200, 160)
  const [wearerPos, setWearerPos] = useState({ x: 238, y: 128 });
  const [isAutoWalking, setIsAutoWalking] = useState(false);
  const [walkAngle, setWalkAngle] = useState(0);

  // Emergency state: "idle" | "confirm" | "active"
  const [emergencyState, setEmergencyState] = useState("idle");

  // Notifications & Toasts
  const [notifications, setNotifications] = useState(DEFAULT_NOTIFICATIONS);
  const [toast, setToast] = useState(null);
  const [notificationDrawerOpen, setNotificationDrawerOpen] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("hearttech_caregiver");
      if (savedUser) setCaregiver(JSON.parse(savedUser));

      const savedWearer = localStorage.getItem("hearttech_wearer");
      if (savedWearer) setWearer(JSON.parse(savedWearer));

      const savedSettings = localStorage.getItem("hearttech_settings");
      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        if (parsed.theme) setTheme(parsed.theme);
        if (parsed.uiScale) setUiScale(parsed.uiScale);
        if (parsed.brightness) setBrightness(parsed.brightness);
        if (parsed.language) setLanguage(parsed.language);
        if (parsed.soundEnabled !== undefined) setSoundEnabled(parsed.soundEnabled);
      }

      const savedAuth = localStorage.getItem("hearttech_auth");
      if (savedAuth === "true") {
        setIsAuthenticated(true);
        setScreen("home");
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Save settings when changed
  useEffect(() => {
    try {
      localStorage.setItem(
        "hearttech_settings",
        JSON.stringify({ theme, uiScale, brightness, language, soundEnabled })
      );
    } catch (e) {}
  }, [theme, uiScale, brightness, language, soundEnabled]);

  // Apply dark mode class to document
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Apply UI scale
  useEffect(() => {
    document.documentElement.setAttribute("data-ui-scale", uiScale);
  }, [uiScale]);

  // Calculate real distance in meters based on map position
  const dx = wearerPos.x - 200;
  const dy = wearerPos.y - 160;
  const distance = Math.round(Math.sqrt(dx * dx + dy * dy) * 1.45);
  const isInsideSafeZone = distance <= safeRadius;

  // Show toast notification helper
  const showToast = useCallback((message, type = "info") => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, 3500);
  }, []);

  // Add a notification item
  const addNotification = useCallback((title, type = "info") => {
    const newItem = {
      id: Date.now(),
      title,
      time: "agora",
      type,
      read: false,
    };
    setNotifications((prev) => [newItem, ...prev.slice(0, 19)]);
  }, []);

  // Heart rate micro-oscillation
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.min(95, Math.max(70, prev + delta));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-walk map simulation
  useEffect(() => {
    if (!isAutoWalking) return;
    const interval = setInterval(() => {
      setWalkAngle((prevAngle) => {
        const nextAngle = prevAngle + 0.08;
        const radiusDist = 55 + Math.sin(nextAngle * 1.5) * 35;
        const newX = Math.round(200 + Math.cos(nextAngle) * radiusDist);
        const newY = Math.round(160 + Math.sin(nextAngle) * radiusDist);
        setWearerPos({ x: newX, y: newY });
        return nextAngle;
      });
    }, 400);
    return () => clearInterval(interval);
  }, [isAutoWalking]);

  // Trigger sound & toast when leaving safe zone
  const prevInsideZoneRef = useRef(isInsideSafeZone);
  useEffect(() => {
    if (prevInsideZoneRef.current && !isInsideSafeZone) {
      if (soundEnabled) {
        playTone(660, "sawtooth", 0.3);
        setTimeout(() => playTone(880, "sawtooth", 0.4), 200);
      }
      showToast(`⚠️ Alerta: ${wearer.name} saiu da zona segura (${distance}m)!`, "error");
      addNotification(`Alerta de Geofencing: ${wearer.name} saiu do perímetro de segurança (${distance}m)`, "emergency");
    }
    prevInsideZoneRef.current = isInsideSafeZone;
  }, [isInsideSafeZone, distance, wearer.name, soundEnabled, showToast, addNotification]);

  // Buzz / Signal bracelet handler
  const triggerSignal = useCallback(() => {
    setSignalSent(true);
    if (soundEnabled) {
      playTone(900, "sine", 0.1);
      setTimeout(() => playTone(1200, "sine", 0.15), 120);
    }
    showToast(`📢 Sinal sonoro e vibração enviados para a pulseira de ${wearer.name}!`, "success");
    addNotification(`Sinalização enviada para a pulseira de ${wearer.name}`, "info");
    setTimeout(() => setSignalSent(false), 3500);
  }, [soundEnabled, wearer.name, showToast, addNotification]);

  // Emergency SOS flow
  const triggerEmergency = useCallback(() => {
    setEmergencyState("active");
    if (soundEnabled) {
      playTone(800, "triangle", 0.5);
      setTimeout(() => playTone(1000, "triangle", 0.6), 300);
    }
    showToast("🚨 EMERGÊNCIA ACIONADA! Notificando contatos e transmitindo GPS...", "error");
    addNotification("🚨 Protocolo de EMERGÊNCIA ACIONADO por acompanhante", "emergency");
  }, [soundEnabled, showToast, addNotification]);

  const disarmEmergency = useCallback(() => {
    setEmergencyState("idle");
    showToast("✓ Protocolo de emergência desarmado com sucesso.", "success");
    addNotification("Protocolo de emergência desarmado", "success");
  }, [showToast, addNotification]);

  // Auth actions
  const login = useCallback((userName = "Ana Miranda") => {
    setIsAuthenticated(true);
    setScreen("home");
    try {
      localStorage.setItem("hearttech_auth", "true");
    } catch (e) {}
    showToast(`Bem-vindo(a) de volta, ${userName}!`, "success");
  }, [showToast]);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setScreen("landing");
    try {
      localStorage.removeItem("hearttech_auth");
    } catch (e) {}
    showToast("Sessão encerrada.", "info");
  }, [showToast]);

  // Save Caregiver
  const updateCaregiver = useCallback((data) => {
    setCaregiver((prev) => {
      const updated = { ...prev, ...data };
      try {
        localStorage.setItem("hearttech_caregiver", JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    showToast("✓ Informações do acompanhante salvas!", "success");
  }, [showToast]);

  // Save Wearer
  const updateWearer = useCallback((data) => {
    setWearer((prev) => {
      const updated = { ...prev, ...data };
      try {
        localStorage.setItem("hearttech_wearer", JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    showToast("✓ Perfil do portador atualizado!", "success");
  }, [showToast]);

  // Reset to demo defaults
  const resetDemoData = useCallback(() => {
    setCaregiver(DEFAULT_CAREGIVER);
    setWearer(DEFAULT_WEARER);
    setNotifications(DEFAULT_NOTIFICATIONS);
    setBattery(84);
    setSafeRadius(100);
    setWearerPos({ x: 238, y: 128 });
    setTheme("light");
    setLanguage("pt");
    setUiScale("normal");
    setBrightness(100);
    try {
      localStorage.clear();
    } catch (e) {}
    showToast("✓ Todos os dados foram restaurados para o padrão de demonstração.", "info");
  }, [showToast]);

  const t = translations[language] || translations.pt;

  const value = {
    // Auth & Navigation
    screen,
    setScreen,
    viewMode,
    setViewMode,
    isAuthenticated,
    login,
    logout,

    // Entities
    caregiver,
    updateCaregiver,
    wearer,
    updateWearer,

    // Telemetry & Hardware
    battery,
    setBattery,
    isCharging,
    setIsCharging,
    heartRate,
    bodyTemp,
    safeRadius,
    setSafeRadius,
    distance,
    isInsideSafeZone,
    wearerPos,
    setWearerPos,
    isAutoWalking,
    setIsAutoWalking,
    signalSent,
    triggerSignal,

    // Emergency
    emergencyState,
    setEmergencyState,
    triggerEmergency,
    disarmEmergency,

    // Settings
    theme,
    setTheme,
    uiScale,
    setUiScale,
    brightness,
    setBrightness,
    language,
    setLanguage,
    soundEnabled,
    setSoundEnabled,
    resetDemoData,

    // Notifications & Toasts
    notifications,
    setNotifications,
    addNotification,
    toast,
    setToast,
    showToast,
    notificationDrawerOpen,
    setNotificationDrawerOpen,

    // Translation helper
    t,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
