import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { REVIEWS } from "../data";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startTimer();
    } else {
      stopTimer();
    }
    return () => stopTimer();
  }, [currentIndex, isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-slate-950 relative overflow-hidden px-4 md:px-8 border-t border-white/5">
      {/* Background glow spot */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-sky-400 font-mono tracking-widest uppercase mb-3"
          >
            Patient Logs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Verified Patient Reviews
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Testimonial Active Display Window */}
        <div 
          className="relative px-6 py-12 md:p-12 rounded-[2rem] bg-slate-900/40 backdrop-blur-md border border-white/10 shadow-3xl overflow-hidden min-h-[300px] flex flex-col justify-between"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Subtle decor grid */}
          <div className="absolute top-6 right-8 text-sky-500/10 pointer-events-none">
            <Quote size={120} className="transform rotate-185" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col flex-1 justify-between text-left relative z-10"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Testimonial Review Text */}
                <p className="text-lg md:text-xl font-medium text-white leading-relaxed mb-8 italic">
                  "{activeReview.text}"
                </p>
              </div>

              {/* Author & Treatment Tag */}
              <div className="flex items-center justify-between border-t border-white/5 pt-6 flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  {/* Glass style Avatar initials */}
                  <div className="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 font-extrabold text-sm uppercase">
                    {activeReview.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">{activeReview.name}</h4>
                    <p className="text-[10px] font-mono text-white/40">{activeReview.date}</p>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-mono tracking-wider uppercase font-semibold">
                  {activeReview.treatment}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Manual Controls */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2 z-20">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-sky-500/10 border border-white/10 hover:border-sky-500/30 text-white/70 hover:text-sky-400 flex items-center justify-center cursor-pointer transition-all active:scale-90"
              title="Previous Review"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-sky-500/10 border border-white/10 hover:border-sky-500/30 text-white/70 hover:text-sky-400 flex items-center justify-center cursor-pointer transition-all active:scale-90"
              title="Next Review"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Page Indicators */}
          <div className="absolute bottom-8 left-12 flex items-center gap-1.5 z-20 hidden md:flex">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-6 bg-sky-400" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
