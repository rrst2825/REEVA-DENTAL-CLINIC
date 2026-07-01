import { Appointment } from "../types";
import { CheckCircle2, QrCode, ShieldCheck, MapPin, Printer, ClipboardCheck } from "lucide-react";

interface AppointmentPassProps {
  appointment: Appointment;
}

export default function AppointmentPass({ appointment }: AppointmentPassProps) {
  return (
    <div className="max-w-md mx-auto bg-slate-900/50 backdrop-blur-2xl p-6 rounded-[2.5rem] border border-white/15 shadow-3xl text-left font-sans relative overflow-hidden">
      {/* Decorative pass cutout dots to simulate Apple Wallet Ticket */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950 z-20" />
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-950 z-20" />
      
      {/* Laser color accent ring */}
      <div className="absolute -top-12 -left-12 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b-2 border-dashed border-white/10 mb-5 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="text-sky-400 font-extrabold text-base"></span>
          <span className="font-extrabold text-xs tracking-wider uppercase text-white/90">Reeva Dental Care</span>
        </div>
        <div className="text-right">
          <span className="text-[9px] font-mono tracking-widest text-white/40 block">TICKET ID</span>
          <span className="font-mono text-xs font-bold text-sky-400">{appointment.id}</span>
        </div>
      </div>

      {/* Patient & Clinic confirmation */}
      <div className="space-y-4 mb-6 relative z-10">
        <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm mb-1.5">
          <CheckCircle2 size={16} />
          <span>Appointment Seat Confirmed!</span>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-2.5">
          <div>
            <span className="text-[9px] font-mono text-white/40 block tracking-widest uppercase">Patient</span>
            <span className="text-xs text-white font-extrabold truncate block">{appointment.name}</span>
          </div>

          <div>
            <span className="text-[9px] font-mono text-white/40 block tracking-widest uppercase">Treatment Type</span>
            <span className="text-xs text-white font-extrabold truncate block">{appointment.treatment}</span>
          </div>

          <div>
            <span className="text-[9px] font-mono text-white/40 block tracking-widest uppercase">Preferred date</span>
            <span className="text-xs text-white font-extrabold block">{appointment.preferredDate}</span>
          </div>

          <div>
            <span className="text-[9px] font-mono text-white/40 block tracking-widest uppercase">Scheduled hours</span>
            <span className="text-xs text-sky-400 font-mono font-bold block">{appointment.preferredTime}</span>
          </div>
        </div>

        {/* Location Shortcut */}
        <div className="pt-3 border-t border-white/5 flex items-start gap-2">
          <MapPin size={13} className="text-indigo-400 flex-shrink-0 mt-0.5" />
          <div className="text-[10px] text-slate-300 leading-relaxed font-semibold">
            <span>Udhana, Surat, Gujarat (Tulsi Plaza, near Sarvottam Restaurant)</span>
          </div>
        </div>
      </div>

      {/* Barcode & Interactive Print mock (lower section of ticket) */}
      <div className="pt-5 border-t-2 border-dashed border-white/10 flex flex-col items-center justify-center relative z-10">
        {/* Mock visual barcode graphic */}
        <div className="w-full bg-white/5 p-3 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-1.5 mb-4 group hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-0.5 h-10 w-full max-w-[200px] justify-center text-white/70">
            {/* Custom line patterns to draw an authentic looking barcode */}
            {[2, 4, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 4, 2, 3, 1, 4].map((width, idx) => (
              <span
                key={idx}
                className="h-full bg-current"
                style={{ width: `${width}px`, opacity: idx % 3 === 0 ? 0.4 : 0.85 }}
              />
            ))}
          </div>
          <span className="text-[9px] font-mono text-white/40 tracking-[0.2em]">{appointment.id}</span>
        </div>

        {/* Micro Guidelines checklist */}
        <div className="w-full flex items-center justify-between text-[10px] text-slate-400 font-semibold mb-3">
          <span className="flex items-center gap-1">
            <ShieldCheck size={11} className="text-emerald-400" />
            Arrive 10m early
          </span>
          <span className="flex items-center gap-1">
            <ClipboardCheck size={11} className="text-sky-400" />
            Bring active ID
          </span>
        </div>

        {/* Print / Save button */}
        <button
          onClick={() => alert("Digital Reeva Clinic Pass saved successfully to device storage! A confirmation receipt has also been transmitted to: " + appointment.email)}
          className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-sky-500 hover:border-sky-500 text-white/80 hover:text-white font-semibold text-xs tracking-wide transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
        >
          <Printer size={13} />
          SAVE PASS TO REEVA APPS
        </button>
      </div>
    </div>
  );
}
