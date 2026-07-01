import { useState, useEffect } from "react";
import { Activity, Wifi, Battery, MapPin, Clock, Calendar, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function MenuBar() {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isStatusOpen, setIsStatusOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Determine if clinic is currently open (9 AM to 8 PM)
  const isClinicOpen = () => {
    const hours = new Date().getHours();
    return hours >= 9 && hours < 20;
  };

  const menuItems = [
    { name: "About Reeva", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Meet Our Doctors", href: "#doctors" },
    { name: "Patient Reviews", href: "#reviews" },
    { name: "Clinic Gallery", href: "#gallery" },
    { name: "Book Appointment", href: "#booking" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-slate-950/45 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 text-xs font-medium text-white/95 select-none font-sans">
      {/* Left section: Clinic Brand Dropdown */}
      <div className="flex items-center gap-4 relative">
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setIsStatusOpen(false);
          }}
          className="flex items-center gap-1.5 hover:bg-white/10 px-2.5 py-1 rounded transition-colors duration-150 cursor-pointer active:scale-95"
          id="brand-menu-btn"
        >
          <span className="text-sky-400 text-sm font-semibold"></span>
          <span className="font-semibold tracking-wide">Reeva OS</span>
        </button>

        {/* Brand Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 top-7 w-52 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl p-1.5 z-50 flex flex-col gap-0.5"
                id="brand-menu-dropdown"
              >
                <div className="px-2.5 py-1.5 text-[10px] text-white/40 uppercase tracking-wider border-b border-white/5 font-bold mb-1">
                  Reeva Dental Clinic
                </div>
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-left px-2.5 py-1.5 rounded text-white/80 hover:bg-sky-500 hover:text-white transition-all duration-150 block"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="border-t border-white/5 my-1" />
                <div className="px-2.5 py-1.5 text-[10px] text-white/50 flex flex-col gap-0.5">
                  <span className="font-semibold">Version 3.2 (Apple UI)</span>
                  <span>Surat, Gujarat, India</span>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Live Clinic Status */}
        <button
          onClick={() => {
            setIsStatusOpen(!isStatusOpen);
            setIsMenuOpen(false);
          }}
          className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-150 cursor-pointer text-[11px]"
          id="clinic-status-btn"
        >
          <span
            className={`w-2 h-2 rounded-full ${
              isClinicOpen() ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
            }`}
          />
          <span className="text-white/80">
            {isClinicOpen() ? "Clinic Open" : "Clinic Closed"}
          </span>
        </button>

        {/* Status Dropdown */}
        <AnimatePresence>
          {isStatusOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsStatusOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="absolute left-24 top-7 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl p-3 z-50 flex flex-col gap-2.5"
                id="status-dropdown"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="font-semibold text-white">Working Hours</span>
                  <span
                    className={`px-1.5 py-0.5 text-[10px] rounded font-bold ${
                      isClinicOpen()
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-amber-500/20 text-amber-300"
                    }`}
                  >
                    {isClinicOpen() ? "Open Now" : "Closed Now"}
                  </span>
                </div>
                <div className="text-[11px] text-white/70 flex flex-col gap-1.5">
                  <div className="flex justify-between">
                    <span>Morning Session:</span>
                    <span className="font-mono text-white">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Evening Session:</span>
                    <span className="font-mono text-white">4:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between border-t border-white/5 pt-1.5 text-white/40">
                    <span>Days:</span>
                    <span>Monday to Saturday</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] bg-sky-500/10 text-sky-300 p-2 rounded border border-sky-500/20">
                  <Clock size={12} />
                  <span>Call +91 97142 56006 for emergencies</span>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Right section: OS Controls */}
      <div className="flex items-center gap-3">
        {/* Location Tag */}
        <div className="hidden md:flex items-center gap-1 text-white/70 hover:text-white transition-colors duration-150">
          <MapPin size={12} className="text-sky-400" />
          <span>Udhana, Surat</span>
        </div>

        {/* Separator */}
        <span className="hidden md:block text-white/10">|</span>

        {/* Network & Battery Icons */}
        <div className="flex items-center gap-2 text-white/80">
          <Wifi size={12} className="text-emerald-400" />
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-mono opacity-60">100%</span>
            <Battery size={14} className="text-emerald-400 rotate-0" />
          </div>
        </div>

        {/* Separator */}
        <span className="text-white/10">|</span>

        {/* Live Date and Time */}
        <div className="flex items-center gap-2 text-white hover:text-sky-300 transition-colors duration-150 font-mono">
          <Calendar size={11} className="opacity-70" />
          <span className="hidden sm:inline">{date}</span>
          <span className="font-semibold text-sky-400">{time}</span>
        </div>
      </div>
    </div>
  );
}
