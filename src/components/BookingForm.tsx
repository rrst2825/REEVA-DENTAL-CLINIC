import React, { useState } from "react";
import { motion } from "motion/react";
import { CalendarDays, User, Phone, Mail, FileText, ChevronDown, Check, Loader2 } from "lucide-react";
import { SERVICES } from "../data";
import { Appointment } from "../types";

interface BookingFormProps {
  onBookingSuccess: (appointment: Appointment) => void;
  defaultTreatment?: string;
}

export default function BookingForm({ onBookingSuccess, defaultTreatment = "" }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "10:00 AM",
    treatment: defaultTreatment || SERVICES[0].name,
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const timeSlots = [
    "09:30 AM", "10:30 AM", "11:30 AM", "12:30 PM",
    "04:30 PM", "05:30 PM", "06:30 PM", "07:30 PM", "08:30 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Minimal form validation
    if (!formData.name.trim()) return setErrorMsg("Full Name is required.");
    if (!formData.phone.trim() || formData.phone.length < 10) return setErrorMsg("Valid 10-digit Phone is required.");
    if (!formData.email.trim() || !formData.email.includes("@")) return setErrorMsg("Valid Email is required.");
    if (!formData.preferredDate) return setErrorMsg("Preferred Date is required.");

    setIsLoading(true);

    // Simulate luxury API response lag
    setTimeout(() => {
      const newAppointment: Appointment = {
        id: "RV-" + Math.floor(100000 + Math.random() * 900000),
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        treatment: formData.treatment,
        message: formData.message,
        status: "Confirmed",
        createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
      };

      setIsLoading(false);
      onBookingSuccess(newAppointment);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        preferredDate: "",
        preferredTime: "10:00 AM",
        treatment: SERVICES[0].name,
        message: ""
      });
    }, 1800);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-slate-900/40 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] border border-white/10 shadow-3xl text-left relative overflow-hidden">
      {/* Glow reflect decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Form Title & Icon */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
          <CalendarDays size={20} />
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-white">Interactive Booking Panel</h3>
          <p className="text-[10px] font-mono text-white/50">REEVA APPOINTMENT SCHEDULER</p>
        </div>
      </div>

      {errorMsg && (
        <div className="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono tracking-widest text-white/50 uppercase font-bold">
            Patient Name
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
              <User size={15} />
            </span>
            <input
              type="text"
              name="name"
              placeholder="e.g. Mukund Patel"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-xs font-medium text-white focus:outline-none focus:border-sky-500 transition-colors placeholder:text-white/20"
            />
          </div>
        </div>

        {/* Contact details: Phone and Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-mono tracking-widest text-white/50 uppercase font-bold">
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                <Phone size={15} />
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-xs font-medium text-white focus:outline-none focus:border-sky-500 transition-colors placeholder:text-white/20"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono tracking-widest text-white/50 uppercase font-bold">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                <Mail size={15} />
              </span>
              <input
                type="email"
                name="email"
                placeholder="m.patel@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-xs font-medium text-white focus:outline-none focus:border-sky-500 transition-colors placeholder:text-white/20"
              />
            </div>
          </div>
        </div>

        {/* Preferred Date and Time Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-mono tracking-widest text-white/50 uppercase font-bold">
              Appointment Date
            </label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-xs font-medium text-white focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono tracking-widest text-white/50 uppercase font-bold">
              Preferred Time slot
            </label>
            <div className="relative">
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full appearance-none px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-xs font-medium text-white focus:outline-none focus:border-sky-500 transition-colors"
              >
                {timeSlots.map(slot => (
                  <option key={slot} value={slot} className="bg-slate-900 text-white">
                    {slot}
                  </option>
                ))}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                <ChevronDown size={14} />
              </span>
            </div>
          </div>
        </div>

        {/* Treatment Selection dropdown */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono tracking-widest text-white/50 uppercase font-bold">
            Required Treatment
          </label>
          <div className="relative">
            <select
              name="treatment"
              value={formData.treatment}
              onChange={handleInputChange}
              className="w-full appearance-none px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-xs font-medium text-white focus:outline-none focus:border-sky-500 transition-colors"
            >
              {SERVICES.map(service => (
                <option key={service.id} value={service.name} className="bg-slate-900 text-white">
                  {service.name}
                </option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
              <ChevronDown size={14} />
            </span>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono tracking-widest text-white/50 uppercase font-bold">
            Medical Notes / Comments
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-white/40">
              <FileText size={15} />
            </span>
            <textarea
              name="message"
              placeholder="e.g. Any active pain, specific worries, or medical history..."
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-xs font-medium text-white focus:outline-none focus:border-sky-500 transition-colors placeholder:text-white/20 resize-none"
            />
          </div>
        </div>

        {/* Submit button with micro animation and loading indicator */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full relative py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 disabled:from-sky-800 disabled:to-blue-900 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-lg shadow-sky-500/10 cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              <span>TRANSMITTING APPOINTMENT DATA...</span>
            </>
          ) : (
            <>
              <span>CONFIRM RESERVATION SLOT</span>
              <Check size={14} className="text-sky-200" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
