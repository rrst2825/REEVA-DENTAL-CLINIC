import { motion } from "motion/react";
import { Award, GraduationCap, Calendar, Clock, ArrowRight } from "lucide-react";
import { DOCTORS } from "../data";
import { Doctor } from "../types";

interface DoctorsProps {
  onDoctorSelect: (doctor: Doctor) => void;
}

export default function Doctors({ onDoctorSelect }: DoctorsProps) {
  return (
    <section id="doctors" className="py-24 bg-slate-950 relative overflow-hidden px-4 md:px-8 border-t border-white/5">
      {/* Background visual light leakage */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-sky-400 font-mono tracking-widest uppercase mb-3"
          >
            Medical Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Meet Our Doctors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm text-slate-400 mt-3 max-w-xl mx-auto font-sans"
          >
            Surgical pioneers bringing advanced microscopic accuracy and painless root canal rotary engines to Surat.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Doctor profiles - Double layout column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {DOCTORS.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-3xl bg-slate-900/35 backdrop-blur-md border border-white/10 flex flex-col md:flex-row items-center gap-6 shadow-2xl relative overflow-hidden group hover:border-sky-500/30 transition-all duration-300 text-left"
            >
              {/* Profile Photo - Round with Elegant Hover Effects */}
              <div className="relative flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-sky-400/30 p-1 bg-slate-950 flex items-center justify-center relative group-hover:border-sky-400 transition-colors duration-300"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                {/* Micro tech green pulsing badge */}
                <span className="absolute bottom-2 right-2 w-4.5 h-4.5 rounded-full bg-slate-950 border border-white/20 flex items-center justify-center z-10 shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </span>
              </div>

              {/* Doctor Details */}
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight mb-1 group-hover:text-sky-300 transition-colors">
                    {doctor.name}
                  </h3>
                  <div className="text-xs font-semibold text-sky-400 tracking-wide uppercase mb-3 font-mono">
                    {doctor.role}
                  </div>

                  {/* Specialty Bullet list */}
                  <div className="space-y-2 mb-4 text-xs font-medium text-slate-400">
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-sky-400" />
                      <span>{doctor.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap size={14} className="text-indigo-400" />
                      <span className="truncate">{doctor.education}</span>
                    </div>
                  </div>
                </div>

                {/* Open Dossier Button */}
                <button
                  onClick={() => onDoctorSelect(doctor)}
                  className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors duration-150 cursor-pointer active:scale-95 group/btn"
                >
                  View Profile & Hours
                  <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
