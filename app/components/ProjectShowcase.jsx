"use client";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import SolutionSection from "./SolutionSection";
import SystemFlowSection from "./SystemFlowSection";
import HardwareSection from "./HardwareSection";
import FeaturesSection from "./FeaturesSection";
import TechStackSection from "./TechStackSection";
import ArchitectureDataSection from "./ArchitectureDataSection";
import DevelopmentTimelineSection from "./DevelopmentTimelineSection";
import KanbanSection from "./KanbanSection";
import MetricsSection from "./MetricsSection";
import RisksViabilitySection from "./RisksViabilitySection";
import ScopeSection from "./ScopeSection";
import TeamSection from "./TeamSection";
import Footer from "./Footer";

export default function ProjectShowcase({ onOpenApp }) {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-red-500 selection:text-white">
      {/* Top Banner when navigated from App */}
      {onOpenApp && (
        <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white px-4 py-2.5 flex items-center justify-between text-xs sm:text-sm sticky top-0 z-50 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span className="font-semibold">Modo Site Institucional / Documentação Acadêmica do Projeto</span>
          </div>
          <button
            onClick={onOpenApp}
            className="px-3.5 py-1 bg-white text-red-700 font-bold rounded-full hover:bg-red-50 transition-colors shadow-sm cursor-pointer"
          >
            📱 Abrir Aplicativo / Dashboard
          </button>
        </div>
      )}

      {/* Main Showcase Navigation */}
      <Navbar />

      <main className="space-y-0">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <SystemFlowSection />
        <HardwareSection />
        <FeaturesSection />
        <TechStackSection />
        <ArchitectureDataSection />
        <DevelopmentTimelineSection />
        <KanbanSection />
        <MetricsSection />
        <RisksViabilitySection />
        <ScopeSection />
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
}
