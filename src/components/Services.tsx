import { motion } from "motion/react";
import { 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Smile, 
  Activity, 
  Palette, 
  Baby, 
  Scissors, 
  ArrowUpRight 
} from "lucide-react";
import { SERVICES } from "../data";
import { DentalService } from "../types";

interface ServicesProps {
  onServiceSelect: (service: DentalService) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  // Map string to Lucide React components
  const iconMap: Record<string, any> = {
    Stethoscope: Stethoscope,
    Sparkles: Sparkles,
    ShieldAlert: ShieldCheck, // Using ShieldCheck for safety
    Layers: Layers,
    Smile: Smile,
    HeartPulse: Activity,
    Activity: Activity,
    Palette: Palette,
    Baby: Baby,
    Scissors: Scissors,
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden px-4 md:px-8 border-t border-white/5">
      {/* Background radial atmosphere */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-sky-400 font-mono tracking-widest uppercase mb-3"
          >
            Clinical Offerings
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Premium Dental Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm text-slate-400 mt-3 max-w-xl mx-auto font-sans"
          >
            Every treatment is guided by computerized dental robotics, micro-magnification loops, and biocompatible materials.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SERVICES.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Stethoscope;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ 
                  y: -8, 
                  borderColor: "rgba(14, 165, 233, 0.45)",
                  backgroundColor: "rgba(15, 23, 42, 0.5)"
                }}
                className="p-5 rounded-2xl bg-slate-900/20 backdrop-blur-md border border-white/5 shadow-md flex flex-col justify-between items-start text-left group transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow reflect background */}
                <div className="absolute -inset-y-full inset-x-0 bg-gradient-to-b from-sky-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="w-full">
                  {/* Card Icon & Action link */}
                  <div className="w-full flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                      <IconComponent size={20} />
                    </div>
                    <button
                      onClick={() => onServiceSelect(service)}
                      className="text-white/30 group-hover:text-sky-400 transition-colors cursor-pointer"
                      title="View Cost Planner"
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-sky-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Micro Action Button */}
                <button
                  onClick={() => onServiceSelect(service)}
                  className="mt-2 w-full py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono tracking-wider text-white/80 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-200 cursor-pointer active:scale-95"
                >
                  ESTIMATE COST & INFO
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
