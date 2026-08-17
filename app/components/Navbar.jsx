"use client";

import { useState, useEffect } from "react";
import { HeartIcon, MenuIcon, XIcon, ArrowRightIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return; // already scheduled — skip
      rafId = requestAnimationFrame(() => {
        rafId = null;
        setScrolled(window.scrollY > 40);

        const sections = [
          "inicio", "problema", "solucao", "como-funciona",
          "funcionalidades", "hardware", "tecnologias", "arquitetura",
          "desenvolvimento", "kanban", "metricas", "equipe"
        ];

        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "O Projeto", href: "#problema" },
    { name: "Solução", href: "#solucao" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Hardware", href: "#hardware" },
    { name: "Funcionalidades", href: "#funcionalidades" },
    { name: "Tecnologias", href: "#tecnologias" },
    { name: "Desenvolvimento", href: "#desenvolvimento" },
    { name: "Kanban", href: "#kanban" },
    { name: "Métricas", href: "#metricas" },
    { name: "Equipe", href: "#equipe" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#080c14]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl" 
        : "bg-transparent py-5"
    }`}>
      <div className="container flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:scale-105 transition-transform">
            <HeartIcon className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
          </div>
          <div>
            <span className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
              HEART<span className="text-red-500">-TECH</span>
            </span>
            <span className="text-[10px] text-gray-400 block -mt-1 font-mono uppercase tracking-widest">
              Smart Care GPS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0f1626]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-500/20"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#kanban"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-semibold text-xs tracking-wide shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Ver Kanban</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Alternar Menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden p-2 rounded-xl bg-[#0f1626] border border-white/10 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500/50"
        >
          {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Menu mobile"
          className="lg:hidden absolute top-full left-0 right-0 bg-[#080c14]/95 border-b border-white/10 backdrop-blur-xl p-5 shadow-2xl transition-all"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-gray-500 text-xs">→</span>
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2">
              <a
                href="#kanban"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold text-sm shadow-lg shadow-red-600/30"
              >
                <span>Ver Kanban do Projeto</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
