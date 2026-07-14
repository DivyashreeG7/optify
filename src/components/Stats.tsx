import React, { useEffect, useRef, useState } from "react";
import { Award, Code, Smile, Zap } from "lucide-react";
import { motion, useInView } from "motion/react";

interface StatItemProps {
  target: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const StatItem: React.FC<StatItemProps> = ({ target, suffix, label, description, icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Ease out quad formula for smooth decelerating count animation
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * target);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl glass-card border border-gray-200/50 dark:border-white/5 shadow-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Icon Circle */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF7A00]/10 text-[#FF7A00] mb-4">
        {icon}
      </div>

      {/* Number Display */}
      <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
        {count}
        <span className="text-[#FF7A00]">{suffix}</span>
      </h3>

      {/* Title */}
      <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-1">
        {label}
      </h4>

      {/* Short Subtext */}
      <p className="font-sans text-xs text-gray-500 dark:text-gray-400 font-light leading-snug">
        {description}
      </p>

      {/* Subtle Bottom Accent Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-16 rounded-full bg-[#FF7A00] transition-all duration-300" />
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  const statsData = [
    {
      target: 50,
      suffix: "+",
      label: "Projects Completed",
      description: "Delivered premium bespoke web systems",
      icon: <Code size={20} />,
    },
    {
      target: 30,
      suffix: "+",
      label: "Happy Clients",
      description: "Nurtured long-term growth partnerships",
      icon: <Smile size={20} />,
    },
    {
      target: 3,
      suffix: "",
      label: "Creative Developers",
      description: "Dedicated to building pixel-perfect code",
      icon: <Zap size={20} />,
    },
    {
      target: 100,
      suffix: "%",
      label: "Satisfaction Rate",
      description: "Committed to flawless project execution",
      icon: <Award size={20} />,
    },
  ];

  return (
    <section className="relative py-16 bg-[#FFF8F0] dark:bg-[#0F1117] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Border grid wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <StatItem
              key={idx}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Immersive UI Feature Pill Cards */}
        <div className="flex flex-wrap justify-center gap-4 mt-16 pt-10 border-t border-gray-200/50 dark:border-white/5">
          <div className="px-5 py-3 rounded-2xl bg-white/40 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 flex items-center gap-3 shadow-sm hover:scale-105 transition-transform">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="text-sm font-semibold text-gray-800 dark:text-white">Performance First</div>
          </div>
          <div className="px-5 py-3 rounded-2xl bg-white/40 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 flex items-center gap-3 shadow-sm hover:scale-105 transition-transform">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div className="text-sm font-semibold text-gray-800 dark:text-white">Modern UI/UX</div>
          </div>
          <div className="px-5 py-3 rounded-2xl bg-white/40 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 flex items-center gap-3 shadow-sm hover:scale-105 transition-transform">
            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <div className="text-sm font-semibold text-gray-800 dark:text-white">SEO Optimized</div>
          </div>
        </div>
      </div>
    </section>
  );
};
