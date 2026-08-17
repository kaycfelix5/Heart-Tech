import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://heart-tech.vercel.app"),
  title: {
    default: "Heart-Tech | Sistema Inteligente de Monitoramento",
    template: "%s | Heart-Tech",
  },
  description:
    "Sistema Inteligente de Monitoramento para Pessoas com Deficiência Cognitiva — pulseira vestível com GPS/GSM e aplicativo móvel de geofencing em tempo real.",
  keywords: [
    "Heart-Tech",
    "GPS",
    "Geofencing",
    "Deficiência Cognitiva",
    "TEA",
    "Alzheimer",
    "ESP32",
    "SIM800L",
    "Tecnologia Assistiva",
    "Monitoramento",
    "React Native",
  ],
  authors: [{ name: "Heart-Tech Team" }],
  creator: "Heart-Tech",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://heart-tech.vercel.app",
    siteName: "Heart-Tech",
    title: "Heart-Tech | Monitoramento Inteligente para Deficiência Cognitiva",
    description:
      "Pulseira vestível com GPS/GSM e aplicativo de geofencing para monitoramento seguro de pessoas com TEA, deficiência intelectual e Alzheimer.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Heart-Tech – Sistema de Monitoramento Assistivo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heart-Tech | Sistema Inteligente de Monitoramento",
    description:
      "Pulseira GPS/GSM com geofencing para cuidadores de pessoas com deficiência cognitiva.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://heart-tech.vercel.app",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased bg-[#080c14] text-gray-100 min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}