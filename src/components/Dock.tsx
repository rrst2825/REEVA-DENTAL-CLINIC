import React from "react";
import { motion } from "motion/react";
import { 
  Home, 
  Info, 
  Stethoscope, 
  HeartHandshake, 
  Users, 
  MessageSquare, 
  Images, 
  CalendarDays, 
  MapPin 
} from "lucide-react";

interface DockItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
}

export default function Dock() {
  const dockItems: DockItem[] = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: Info },
    { name: "Services", href: "#services", icon: Stethoscope },
    { name: "Why Us", href: "#why-choose-us", icon: HeartHandshake },
    { name: "Doctors", href: "#doctors", icon: Users },
    { name: "Reviews", href: "#reviews", icon: MessageSquare },
    { name: "Gallery", href: "#gallery", icon: Images },
    { name: "Booking", href: "#booking", icon: CalendarDays },
    { name: "Location", href: "#contact", icon: MapPin },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[95vw]">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="flex items-center gap-1.5 sm:gap-3.5 px-3 sm:px-5 py-2.5 bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-3xl relative"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className="relative group flex flex-col items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(item.href);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              {/* Tooltip */}
              <div className="absolute bottom-14 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 pointer-events-none transition-all duration-200 bg-slate-950/90 text-[10px] text-white font-semibold py-1 px-2.5 rounded-md shadow-lg border border-white/10 whitespace-nowrap z-50">
                {item.name}
              </div>

              {/* Icon Container with Magnify Zoom */}
              <motion.div
                whileHover={{ 
                  scale: 1.25, 
                  y: -8, 
                  backgroundColor: "rgba(14, 165, 233, 0.25)",
                  borderColor: "rgba(14, 165, 233, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-sky-300 shadow-sm transition-colors cursor-pointer"
              >
                <Icon size={18} className="sm:size-[21px]" />
              </motion.div>

              {/* Indicator Dot */}
              <div className="w-1 h-1 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150 mt-1" />
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}
