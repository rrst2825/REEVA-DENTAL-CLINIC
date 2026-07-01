import { useState } from "react";
import { SERVICES } from "../data";
import { DentalService } from "../types";
import { Sparkles, CalendarDays, Calculator, Flame, CheckCircle, Ticket } from "lucide-react";

interface CostEstimatorProps {
  initialService: DentalService | null;
  onBookDirect: (treatmentName: string) => void;
}

export default function CostEstimator({ initialService, onBookDirect }: CostEstimatorProps) {
  const [selectedService, setSelectedService] = useState<DentalService>(initialService || SERVICES[0]);
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoError, setPromoError] = useState("");

  const handleApplyPromo = () => {
    setPromoError("");
    if (promoCode.trim().toUpperCase() === "SMILE2026") {
      setDiscountApplied(true);
    } else {
      setPromoError("Invalid code. Try 'SMILE2026' for First-Visit waiver.");
    }
  };

  const calculateTotal = () => {
    // Extract base number from estimate like "₹1,200 - ₹2,500"
    const text = selectedService.priceEstimate;
    if (text === "Individualized") return "Consultation Required";
    
    const matches = text.replace(/,/g, "").match(/\d+/g);
    if (!matches) return text;
    
    const minPrice = parseInt(matches[0]);
    const maxPrice = matches[1] ? parseInt(matches[1]) : minPrice;
    
    const midPrice = Math.floor((minPrice + maxPrice) / 2);
    const discount = discountApplied ? 500 : 0;
    
    return `₹${midPrice - discount} (Est. Average)`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 font-sans">
      {/* Left Column: Selector (5 cols) */}
      <div className="md:col-span-5 border-r border-white/5 pr-0 md:pr-4 space-y-2">
        <h4 className="text-xs font-bold text-white/50 font-mono tracking-wider uppercase mb-3">Select Treatment</h4>
        <div className="space-y-1.5 max-h-[50vh] overflow-y-auto pr-1">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedService(s)}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border flex items-center justify-between cursor-pointer ${
                selectedService.id === s.id
                  ? "bg-sky-500/10 border-sky-500/40 text-sky-400"
                  : "bg-white/5 border-transparent text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>{s.name}</span>
              <span className="text-[10px] opacity-50 font-mono">{s.duration}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Column: Calculator & Detailed Stats (7 cols) */}
      <div className="md:col-span-7 flex flex-col justify-between space-y-4 text-left">
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <h3 className="text-lg font-extrabold text-white">{selectedService.name}</h3>
            <span className="text-[11px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
              {selectedService.duration}
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            {selectedService.description}
          </p>

          {/* Benefits */}
          <div className="space-y-1.5 pt-1">
            <h5 className="text-[10px] font-mono tracking-widest text-white/40 uppercase font-bold">Key Benefits</h5>
            <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-300 font-semibold">
              {selectedService.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle size={12} className="text-emerald-400 flex-shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines */}
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-300 flex items-start gap-2.5">
            <Flame size={15} className="text-amber-400 flex-shrink-0 mt-0.5 animate-pulse" />
            <div className="text-[11px] leading-relaxed">
              <span className="font-bold text-white block">Pre-Appointment Guideline:</span>
              Avoid solid foods for 2 hours before treatment. Bring any active medical prescriptions.
            </div>
          </div>
        </div>

        {/* Pricing Calculator Interface */}
        <div className="pt-4 border-t border-white/5 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">Estimated cost</span>
              <span className="text-lg font-mono font-extrabold text-white">
                {calculateTotal()}
              </span>
              <span className="block text-[9px] text-white/30 font-mono">Based on Surat local market value</span>
            </div>

            {/* Promo Code Input */}
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase mb-1">First-Visit Code?</span>
              <div className="flex gap-1.5">
                <input
                  type="text"
                  placeholder="SMILE2026"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="px-2 py-1 rounded-md bg-slate-950 border border-white/10 text-[11px] font-mono text-white focus:outline-none w-24 text-center placeholder:text-white/20 uppercase"
                />
                <button
                  onClick={handleApplyPromo}
                  className="bg-white/5 border border-white/10 text-[10px] hover:bg-sky-500 hover:text-white hover:border-sky-500 px-2.5 py-1 rounded-md font-bold transition-all duration-150 cursor-pointer flex items-center gap-1"
                >
                  <Ticket size={11} />
                  APPLY
                </button>
              </div>
              {promoError && <span className="text-[9px] text-rose-400 mt-0.5">{promoError}</span>}
              {discountApplied && <span className="text-[9px] text-emerald-400 mt-0.5">Waiver applied! Saved ₹500</span>}
            </div>
          </div>

          {/* Book Direct Button */}
          <button
            onClick={() => onBookDirect(selectedService.name)}
            className="w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs tracking-wider flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all"
          >
            <CalendarDays size={14} />
            RESERVE {selectedService.name.toUpperCase()} SLOT
          </button>
        </div>
      </div>
    </div>
  );
}
