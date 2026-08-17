

import { MapPinIcon, TargetIcon, AlertTriangleIcon, ClockIcon, BatteryIcon, ZapIcon, LayersIcon } from "./Icons";
import { projectInfo } from "../data/projectData";

export default function FeaturesSection() {
  const features = projectInfo.features;

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case "MapPin": return <MapPinIcon className="w-6 h-6 text-red-400" />;
      case "Target": return <TargetIcon className="w-6 h-6 text-cyan-400" />;
      case "AlertTriangle": return <AlertTriangleIcon className="w-6 h-6 text-amber-400" />;
      case "Clock": return <ClockIcon className="w-6 h-6 text-emerald-400" />;
      case "Battery": return <BatteryIcon className="w-6 h-6 text-blue-400" />;
      case "Zap": return <ZapIcon className="w-6 h-6 text-rose-400" />;
      default: return <LayersIcon className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <section id="funcionalidades" className="py-20 bg-[#0b0f19] border-t border-white/5 relative">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="tech-badge tech-badge-blue">
            <LayersIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Recursos da Plataforma</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Funcionalidades Previstas
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            Conjunto de ferramentas integradas ao aplicativo mobile para proporcionar autonomia ao usuário e tranquilidade aos cuidadores.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 border border-white/10 hover:border-cyan-500/40 hover:bg-[#131c30] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getFeatureIcon(feat.icon)}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {feat.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
