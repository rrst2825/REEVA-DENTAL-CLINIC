import { motion } from "motion/react";
import { 
  Award, 
  Cpu, 
  Heart, 
  Coins, 
  ShieldCheck, 
  Users, 
  Clock, 
  HandHeart 
} from "lucide-react";
import { WHY_CHOOSE_US } from "../data";

export default function WhyChooseUs() {
  // Map icons
  const iconMap: Record<string, any> = {
    Award: Award,
    Cpu: Cpu,
    Heart: Heart,
    IndianRupee: Coins, // Using Coins for robust fallback
    ShieldCheck: ShieldCheck,
    Users: Users,
    Clock: Clock,
    HeartHandshake: HandHeart,
  };

  return (
    <section id="why-choose-us" className="py-24 bg-slate-950 relative overflow-hidden px-4 md:px-8 border-t border-white/5">
      {/* Background glow lines */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-sky-400 font-mono tracking-widest uppercase mb-3"
          >
            Clinical Standards
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Dynamic Card Grid with cascading staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ 
                  y: -6, 
                  borderColor: "rgba(14, 165, 233, 0.4)",
                  backgroundColor: "rgba(15, 23, 42, 0.4)"
                }}
                className="p-6 rounded-2xl bg-slate-900/30 backdrop-blur-sm border border-white/5 flex flex-col justify-start items-start text-left hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
              >
                {/* Micro tech decor bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Card Icon */}
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 mb-4 shadow-inner">
                  <IconComponent size={20} />
                </div>

                {/* Index badge */}
                <span className="absolute top-4 right-4 text-[10px] font-mono text-white/15 group-hover:text-sky-400/20 font-bold transition-colors">
                  0{idx + 1}
                </span>

                {/* Title & Description */}
                <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
