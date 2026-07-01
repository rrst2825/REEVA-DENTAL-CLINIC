import { Doctor } from "../types";
import { GraduationCap, Clock, Award, ShieldCheck, Heart, Star } from "lucide-react";

interface DoctorDossierProps {
  doctor: Doctor;
  onBookDirect: (treatmentName: string) => void;
}

export default function DoctorDossier({ doctor, onBookDirect }: DoctorDossierProps) {
  // Simulate active consulting state depending on hour
  const getSimulatedStatus = () => {
    const hours = new Date().getHours();
    if (hours >= 9 && hours < 13) return "Available in Cabin A";
    if (hours >= 13 && hours < 16) return "In Rest / Lunch Period";
    if (hours >= 16 && hours < 20) return "In Advanced Surgery Suite";
    return "Offline - Shift Closed";
  };

  const isStatusAvailable = () => {
    const status = getSimulatedStatus();
    return status.includes("Available") || status.includes("Surgery");
  };

  return (
    <div className="flex flex-col gap-6 text-left font-sans">
      {/* Dossier Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 border-b border-white/10 pb-5">
        <div className="w-24 h-24 rounded-full overflow-hidden border border-white/15 p-1 bg-slate-950 flex-shrink-0">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="text-center sm:text-left flex-1 space-y-1.5">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h3 className="text-xl font-extrabold text-white">{doctor.name}</h3>
            <span className={`px-2 py-0.5 text-[9px] font-mono tracking-wider rounded font-extrabold uppercase ${
              isStatusAvailable() ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20" : "bg-white/5 text-white/40"
            }`}>
              {getSimulatedStatus()}
            </span>
          </div>
          <p className="text-xs font-semibold text-sky-400 font-mono uppercase tracking-wide">
            {doctor.role}
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 text-slate-400 text-xs font-semibold">
            <span className="flex items-center gap-1">
              <Award size={13} className="text-sky-400" />
              {doctor.experience} Experience
            </span>
            <span className="flex items-center gap-1">
              <GraduationCap size={14} className="text-indigo-400" />
              M.D.S. Consultant
            </span>
          </div>
        </div>
      </div>

      {/* Grid: Bio and Timings */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Biography (7 cols) */}
        <div className="md:col-span-7 space-y-3.5">
          <div>
            <h4 className="text-[10px] font-mono tracking-widest text-white/40 uppercase font-bold mb-1">Professional Biography</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-semibold">
              {doctor.bio}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[10px] font-mono tracking-widest text-white/40 uppercase font-bold">Primary Clinical Focus</h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-white/80">{doctor.specialty}</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-white/80">Digital Guided Restorations</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-white/80">Facial Symmetries</span>
            </div>
          </div>
        </div>

        {/* Timings and Clinic details (5 cols) */}
        <div className="md:col-span-5 space-y-4 bg-slate-950/40 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-sky-400">
              <Clock size={14} />
              <h4 className="text-[10px] font-mono tracking-widest uppercase font-bold">Consultation Shifts</h4>
            </div>

            <div className="space-y-1.5 text-xs">
              {doctor.schedule.map((shift, i) => (
                <div key={i} className="flex justify-between font-semibold border-b border-white/5 pb-1 text-slate-300">
                  <span className="text-[10px]">Session {i + 1}:</span>
                  <span className="font-mono text-[11px] text-white">{shift}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1 text-[11px] text-slate-400 border-t border-white/5 pt-3">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
              <ShieldCheck size={13} />
              <span>Safety & Hygiene Certified</span>
            </div>
            <p className="text-[10px] leading-relaxed opacity-80 font-medium">
              Sterilized instruments, Class-B autoclave validation, single-use surgical kits for absolute safety.
            </p>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <Star size={14} className="text-amber-400 fill-amber-400" />
          <span>Surat Top-Rated Dentist (4.9/5 stars)</span>
        </div>
        <button
          onClick={() => onBookDirect("")}
          className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs tracking-wider cursor-pointer transition-all active:scale-95"
        >
          REQUEST APPOINTMENT SESSION
        </button>
      </div>
    </div>
  );
}
