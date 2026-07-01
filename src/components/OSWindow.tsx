import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Minimize2, Maximize2, X, Move } from "lucide-react";

interface OSWindowProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  widthClass?: string;
  heightClass?: string;
}

export default function OSWindow({
  isOpen,
  onClose,
  title,
  children,
  widthClass = "max-w-xl",
  heightClass = "max-h-[85vh]",
}: OSWindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm">
          {/* Backdrop click closes window */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Window Frame */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: 0,
              width: isMaximized ? "100%" : "auto",
              height: isMaximized ? "100%" : "auto",
              maxWidth: isMaximized ? "100%" : "",
              maxHeight: isMaximized ? "100%" : ""
            }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className={`
              ${isMaximized ? "w-full h-full rounded-none" : `${widthClass} ${heightClass} rounded-2xl`}
              w-full bg-slate-900/80 backdrop-blur-2xl border border-white/15 
              shadow-3xl overflow-hidden flex flex-col z-50 select-none
            `}
          >
            {/* Title / Header Bar */}
            <div className="h-12 bg-slate-950/60 border-b border-white/10 flex items-center justify-between px-4 cursor-default relative">
              {/* Window Controls (macOS Dots) */}
              <div className="flex items-center gap-2 z-10">
                <button
                  onClick={onClose}
                  className="w-3.5 h-3.5 rounded-full bg-rose-500 hover:bg-rose-600 flex items-center justify-center group relative cursor-pointer active:scale-90 transition-all duration-100"
                  title="Close"
                >
                  <X size={8} className="text-rose-950 opacity-0 group-hover:opacity-100 font-bold transition-opacity" />
                </button>
                <button
                  onClick={onClose} // Just acts as quick close for convenience
                  className="w-3.5 h-3.5 rounded-full bg-amber-500 hover:bg-amber-600 flex items-center justify-center group relative cursor-pointer active:scale-90 transition-all duration-100"
                  title="Minimize"
                >
                  <Minimize2 size={8} className="text-amber-950 opacity-0 group-hover:opacity-100 font-bold transition-opacity" />
                </button>
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="w-3.5 h-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center group relative cursor-pointer active:scale-90 transition-all duration-100"
                  title="Maximize"
                >
                  <Maximize2 size={8} className="text-emerald-950 opacity-0 group-hover:opacity-100 font-bold transition-opacity" />
                </button>
              </div>

              {/* Title Text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-xs font-semibold text-white/80 tracking-wide font-sans flex items-center gap-1.5">
                  <Move size={11} className="opacity-40" />
                  {title}
                </span>
              </div>

              {/* Status Dot */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span className="text-[10px] text-sky-300 font-mono tracking-wider uppercase font-semibold">Active</span>
              </div>
            </div>

            {/* Window Content */}
            <div className="flex-1 overflow-y-auto p-5 text-white scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
