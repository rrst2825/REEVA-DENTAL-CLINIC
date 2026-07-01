import { motion } from "motion/react";
import { Users, Sparkles, Heart, ShieldCheck, CheckCircle2, Leaf } from "lucide-react";
import { ABOUT_HIGHLIGHTS } from "../data";

export default function About() {
  const iconMap: Record<string, any> = {
    UsersRound: Users,
    BedDouble: Leaf,
    Sparkles: Sparkles,
    Heart: Heart,
    Activity: ShieldCheck,
  };

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden px-4 md:px-8 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-sky-400 font-mono tracking-widest uppercase mb-3"
          >
            Luxury Dental Care
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Redefining Dental Wellness
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Showcase Luxury Card (Spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-white/10 flex flex-col justify-between shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight">Our Philosophy</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                At Reeva Dental Clinic, we believe dental treatments shouldn't feel clinic-like, they should feel comfortable and premium. Inspired by structural elegance and pristine safety, our clinic combines digital smile simulation, ultra-precise dental implant technology, and high-hospitality care to give you the perfect smile you deserve.
              </p>
            </div>

            {/* List of custom bullet seals */}
            <div className="space-y-3 pt-6 border-t border-white/5 text-left text-xs font-medium text-white/80">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Award-winning medical team in Surat</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Class-B multi-stage steam autoclaves</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Painless clinical rotary diagnostics</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights Cards (Spans 7 cols, grids inside) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {ABOUT_HIGHLIGHTS.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Users;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, borderColor: "rgba(14, 165, 233, 0.4)" }}
                  className="p-6 rounded-2xl bg-slate-900/30 backdrop-blur-sm border border-white/5 flex flex-col justify-start items-start text-left shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 mb-4 group-hover:bg-sky-500/10 group-hover:text-sky-300 transition-all duration-300">
                    <IconComp size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
