import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import SystemFlowSection from "./components/SystemFlowSection";
import HardwareSection from "./components/HardwareSection";
import FeaturesSection from "./components/FeaturesSection";
import TechStackSection from "./components/TechStackSection";
import ArchitectureDataSection from "./components/ArchitectureDataSection";
import ScopeSection from "./components/ScopeSection";
import DevelopmentTimelineSection from "./components/DevelopmentTimelineSection";
import KanbanSection from "./components/KanbanSection";
import MetricsSection from "./components/MetricsSection";
import RisksViabilitySection from "./components/RisksViabilitySection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c14] text-gray-100 selection:bg-red-500 selection:text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <SystemFlowSection />
        <HardwareSection />
        <FeaturesSection />
        <TechStackSection />
        <ArchitectureDataSection />
        <ScopeSection />
        <DevelopmentTimelineSection />
        <KanbanSection />
        <MetricsSection />
        <RisksViabilitySection />
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
}