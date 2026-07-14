import React, { useEffect, useState } from "react";
import { ArrowRight, Code, ExternalLink, Globe, Layout, Sparkles, TrendingUp } from "lucide-react";
import { motion, useMotionValue, useTransform } from "motion/react";

interface HeroProps {
  onStartProjectClick: () => void;
  onViewWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProjectClick, onViewWorkClick }) => {
  const [terminalText, setTerminalText] = useState("const project = await Optify.build();");
  const [typedChars, setTypedChars] = useState("");

  // Smooth typewriter effect for terminal box
  useEffect(() => {
    const fullText = "const startup = await Optify.launch({ scale: true });";
    let index = 0;
    const interval = setInterval(() => {
      setTypedChars(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        setTimeout(() => {
          index = 0;
        }, 3000); // Wait before re-typing
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:py-32 overflow-hidden bg-[#FFF8F0] dark:bg-[#0F1117]"
    >
      {/* Light-theme and dark-theme specific soft grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />

      {/* Decorative Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#FFF8F0_90%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_30%,#0F1117_95%)] pointer-events-none" />

      {/* Radiant Background Blur */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7A00]/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Content (Left) */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            {/* Tagline Badge */}
            <motion.div
              className="inline-flex self-center lg:self-start items-center gap-2 rounded-full border border-[#FF7A00]/20 bg-[#FF7A00]/5 px-3.5 py-1.5 text-xs font-semibold text-[#FF7A00] uppercase tracking-widest shadow-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7A00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7A00]"></span>
              </span>
              Available for Q4 Projects
            </motion.div>

            {/* Giant Title */}
            <div className="space-y-4">
              <motion.h1
                className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[0.95]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                We Build Websites <br />
                That <span className="text-[#FF7A00]">Grow</span> Businesses.
              </motion.h1>

              <motion.p
                className="mx-auto lg:mx-0 max-w-xl font-sans text-base sm:text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your Vision. Our Code. Endless Possibilities. We design fast, beautiful, and scalable websites that help you stand out.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Primary */}
              <button
                onClick={onStartProjectClick}
                className="w-full sm:w-auto px-8 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-150 text-white dark:text-black font-bold rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
              >
                Start Your Project
              </button>

              {/* Secondary */}
              <button
                onClick={onViewWorkClick}
                className="w-full sm:w-auto px-8 py-4 border border-gray-300 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-800 dark:text-gray-200 rounded-xl font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-all active:scale-98 cursor-pointer"
              >
                View Our Work
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-6 pt-4 border-t border-gray-200/50 dark:border-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="flex items-center space-x-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs text-gray-500 dark:text-gray-400">3 Devs Booking Projects</span>
              </div>
              <div className="text-gray-300 dark:text-white/10">•</div>
              <div className="font-sans text-xs text-gray-500 dark:text-gray-400">
                ⭐ 100% Client Satisfaction
              </div>
            </motion.div>
          </div>

          {/* Interactive Floating CSS Illustration (Right) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient background glow behind the illustration */}
            <div className="absolute h-72 w-72 rounded-full bg-[#FF7A00]/10 blur-[80px] pointer-events-none" />

            <motion.div
              className="relative w-full max-w-[450px]"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Parent Floating motion container */}
              <motion.div
                className="relative h-96 w-full flex items-center justify-center"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* 1. Browser Mockup */}
                <div className="absolute w-80 h-56 bg-[#171923] rounded-xl border border-white/10 shadow-2xl z-20 translate-x-4 -translate-y-4 overflow-hidden">
                  <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <div className="mx-auto rounded bg-white/5 px-3 py-0.5 text-[8px] font-mono text-gray-500 flex items-center gap-1">
                      <Globe size={8} /> optify.agency/your-site
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                      <span className="font-mono text-[8px] font-bold text-[#FF7A00]">+124%</span>
                    </div>
                    <div className="h-24 w-full bg-gradient-to-br from-[#FF7A00]/20 to-purple-500/20 rounded-lg flex flex-col items-center justify-center p-2 relative overflow-hidden">
                      {/* Interactive SVG path element */}
                      <svg viewBox="0 0 200 60" className="w-full h-full opacity-60">
                        <path d="M 0,55 Q 30,30 60,40 T 120,15 T 200,5" fill="none" stroke="#FF7A00" strokeWidth="2" />
                        <circle cx="200" cy="5" r="3" fill="#FF9D2E" className="animate-ping" />
                      </svg>
                      <Layout size={24} className="text-[#FF7A00] absolute" />
                    </div>
                  </div>
                </div>

                {/* 2. Code Snippet Card */}
                <motion.div
                  className="absolute w-68 h-48 bg-[#1a1c2e]/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl z-30 -translate-x-16 sm:-translate-x-20 translate-y-16 p-4 font-mono text-[10px]"
                  animate={{
                    y: [16, 22, 16],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <Code size={11} className="text-[#FF7A00]" />
                      <span className="text-gray-400 font-semibold text-[9px]">OptifyService.ts</span>
                    </div>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00]" />
                  </div>
                  <div className="leading-relaxed text-gray-300 text-[9px]">
                    <div className="text-orange-400 inline">const</div> <div className="inline text-blue-400">Optify</div> = () =&gt; {"{"}
                    <div className="pl-3 text-gray-500">return (</div>
                    <div className="pl-6 text-green-400">&lt;Growth /&gt;</div>
                    <div className="pl-3 text-gray-500">);</div>
                    <div>{"};"}</div>
                    <div className="mt-2 text-xs text-orange-400/80 truncate">
                      {typedChars}
                      <span className="animate-pulse">|</span>
                    </div>
                  </div>
                </motion.div>

                {/* 3. Lighthouse & Speed Badge (blended in dynamically) */}
                <motion.div
                  className="absolute -right-2 top-28 rounded-xl glass-card border border-[#FF7A00]/20 p-2.5 shadow-lg pointer-events-none flex items-center gap-2 z-40"
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-emerald-500">
                    <span className="font-mono text-[10px] font-extrabold text-emerald-500">100</span>
                  </div>
                  <div>
                    <h5 className="font-sans text-[8px] font-bold text-gray-800 dark:text-white leading-tight">Vite Build</h5>
                    <p className="font-sans text-[7px] text-gray-400 leading-none">Sub-second load</p>
                  </div>
                </motion.div>

                {/* Circle Glow Behind */}
                <div className="absolute w-64 h-64 bg-[#FF7A00] opacity-20 blur-[80px] rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
