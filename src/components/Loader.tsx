import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1.8 seconds to showcase the premium intro animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="optify-loader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F1117] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* Animated Glow in background */}
          <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7A00]/10 blur-[100px]" />

          <div className="relative flex flex-col items-center">
            {/* Logo Mark Animation */}
            <motion.div
              className="relative mb-6 h-16 w-16"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: 0.1,
              }}
            >
              {/* Spinning gradient rings */}
              <div className="absolute inset-0 rounded-full border-2 border-[#FF7A00]/20" />
              <motion.div
                className="absolute inset-0 rounded-full border-t-2 border-[#FF7A00]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
              
              {/* Inner glowing core */}
              <div className="absolute inset-3 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#FF7A00] to-[#FF9D2E] shadow-[0_0_20px_rgba(255,122,0,0.5)]">
                <span className="font-display text-sm font-bold tracking-tighter text-white">O</span>
              </div>
            </motion.div>

            {/* Logo Text Animation */}
            <div className="flex items-center space-x-1 overflow-hidden">
              {["O", "P", "T", "I", "F", "Y"].map((letter, index) => (
                <motion.span
                  key={index}
                  className={`font-display text-3xl font-extrabold tracking-widest ${
                    letter === "O" ? "text-[#FF7A00]" : "text-white"
                  }`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.2 + index * 0.08,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Glowing Tagline or line indicator */}
            <motion.p
              className="mt-3 font-sans text-xs tracking-[0.2em] text-[#FF9D2E]/80 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Three Developers • Infinite Scope
            </motion.p>
          </div>

          {/* Loader bar */}
          <div className="absolute bottom-16 left-1/2 h-[1px] w-32 -translate-x-1/2 bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF7A00] to-[#FF9D2E]"
              initial={{ left: "-100%", width: "0%" }}
              animate={{ left: "0%", width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
