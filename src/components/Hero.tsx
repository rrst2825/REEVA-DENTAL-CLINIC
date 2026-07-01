import { motion } from "motion/react";
import { Star, Award, Cpu, HandCoins, ArrowRight, Phone } from "lucide-react";
import { IMAGES } from "../images";

interface HeroProps {
  onBookClick: () => void;
  onCalculatorClick: () => void;
}

export default function Hero({ onBookClick, onCalculatorClick }: HeroProps) {
  // Floating animation configs for glass cards
  const floatAnimation = (delay: number) => ({
    y: ["0%", "-8%", "0%"],
    rotate: [0, 1.5, -1.5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center bg-slate-950 overflow-hidden px-4 md:px-8"
    >
      {/* Visual background atmospheric elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative premium coordinate grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Editorial Typography & Actions */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 font-mono text-[10px] tracking-widest uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Creating Healthy Smiles with Modern Care
          </motion.div>

          {/* Headline with premium color styling */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Smile With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400">
              Confidence
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed font-sans"
          >
            Premium dental treatments with advanced technology and experienced dentists. Discover a luxury experience designed to bring comfort, precision, and ultimate trust back to your dental care.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={onBookClick}
              className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold text-sm transition-all duration-200 active:scale-95 shadow-xl shadow-sky-500/20 cursor-pointer group"
            >
              Book Appointment
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:+919714256006"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Phone size={15} className="text-sky-400" />
              Call Now
            </a>

            {/* Interactive Calculator Portal trigger */}
            <button
              onClick={onCalculatorClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/20 text-xs font-semibold tracking-wide transition-all cursor-pointer mt-2 sm:mt-0"
            >
              <Cpu size={13} />
              Open Reeva OS Cost Estimator
            </button>
          </motion.div>
        </div>

        {/* Right Side: Immersive Portrait Frame and Floating Badges */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          
          {/* Main Hero Image in Apple Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md aspect-square sm:aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/15 bg-slate-900 p-3 shadow-3xl group"
          >
            {/* Soft border glows */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/15 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={IMAGES.hero}
              alt="Confident patient smiling warmly in modern clinic"
              className="w-full h-full object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* FLOATING GLASS CARD 1: 4.6 Rating */}
          <motion.div
            animate={floatAnimation(0)}
            className="absolute -top-4 -left-4 sm:left-4 p-3 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/10 shadow-2xl flex items-center gap-3 z-20 max-w-[180px]"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/25 flex items-center justify-center text-amber-400">
              <Star size={18} fill="currentColor" />
            </div>
            <div className="text-left">
              <div className="text-sm font-extrabold text-white">4.6 Rating</div>
              <div className="text-[10px] text-white/50">Google Verified</div>
            </div>
          </motion.div>

          {/* FLOATING GLASS CARD 2: 15+ Years Experience */}
          <motion.div
            animate={floatAnimation(1.5)}
            className="absolute top-1/3 -right-4 sm:right-4 p-3 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/10 shadow-2xl flex items-center gap-3 z-20 max-w-[190px]"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/25 flex items-center justify-center text-sky-400">
              <Award size={18} />
            </div>
            <div className="text-left">
              <div className="text-sm font-extrabold text-white">15+ Years</div>
              <div className="text-[10px] text-white/50">Clinical Experience</div>
            </div>
          </motion.div>

          {/* FLOATING GLASS CARD 3: Modern Equipment */}
          <motion.div
            animate={floatAnimation(0.8)}
            className="absolute bottom-1/4 -left-6 sm:left-0 p-3 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/10 shadow-2xl flex items-center gap-3 z-20 max-w-[180px]"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/25 flex items-center justify-center text-indigo-400">
              <Cpu size={18} />
            </div>
            <div className="text-left">
              <div className="text-sm font-extrabold text-white">Modern Tech</div>
              <div className="text-[10px] text-white/50">Digital Diagnostics</div>
            </div>
          </motion.div>

          {/* FLOATING GLASS CARD 4: Affordable Treatment */}
          <motion.div
            animate={floatAnimation(2.2)}
            className="absolute -bottom-4 right-2 sm:right-12 p-3 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/10 shadow-2xl flex items-center gap-3 z-20 max-w-[190px]"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/25 flex items-center justify-center text-emerald-400">
              <HandCoins size={18} />
            </div>
            <div className="text-left">
              <div className="text-sm font-extrabold text-white">Transparent</div>
              <div className="text-[10px] text-white/50">Affordable Pricing</div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
