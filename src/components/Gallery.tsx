import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, Image as ImageIcon } from "lucide-react";
import { GALLERY } from "../data";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = ["All", "Reception", "Treatment Room", "Dental Chair", "Equipment", "Happy Patients", "Doctors at Work"];

  const filteredItems = selectedCategory === "All"
    ? GALLERY
    : GALLERY.filter(item => item.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(item.category.toLowerCase()));

  return (
    <section id="gallery" className="py-24 bg-slate-950 relative overflow-hidden px-4 md:px-8 border-t border-white/5">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-sky-400 font-mono tracking-widest uppercase mb-3"
          >
            Virtual Visit
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Clinic Gallery
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Category Filter Pills (macOS segment control style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-3xl mx-auto bg-white/5 p-1 rounded-xl border border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest style Masonry Grid with auto animations */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="break-inside-avoid relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 group cursor-pointer shadow-lg"
                onClick={() => setLightboxImage(item.image)}
              >
                {/* Image element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.04]"
                  referrerPolicy="no-referrer"
                />

                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-left">
                  <div className="w-full flex justify-end">
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase font-bold">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-extrabold text-white mt-1">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
              <div className="absolute inset-0" onClick={() => setLightboxImage(null)} />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative max-w-4xl max-h-[85vh] rounded-2xl border border-white/15 bg-slate-900 p-2 z-50 overflow-hidden shadow-3xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/70 border border-white/10 flex items-center justify-center text-white hover:bg-sky-500 hover:text-white transition-colors cursor-pointer z-50 shadow-lg active:scale-90"
                >
                  <X size={16} />
                </button>
                
                <img
                  src={lightboxImage}
                  alt="High resolution dental gallery inspect"
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
