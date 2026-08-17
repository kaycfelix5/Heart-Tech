import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "HEART-TEC | Sistema Inteligente de Monitoramento",
  description:
    "Solução vestível e aplicativo móvel para acompanhamento seguro de pessoas com deficiência cognitiva.",
  icons: {
    icon: "/favicon.ico",
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
      <body className="antialiased bg-[#F4F6F6] text-[#222222] min-h-screen">
        {children}
      </body>
    </html>
  );
}