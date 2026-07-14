import React from "react";
import { Coffee, Code, Eye, Rocket, Search, Sparkles, Terminal } from "lucide-react";
import { motion } from "motion/react";

interface StepItem {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

export const Process: React.FC = () => {
  const steps: StepItem[] = [
    {
      step: "01",
      title: "Requirement Discussion",
      description: "We host an in-depth kickoff meeting to outline goals, mapping out visual moods, user workflows, budget benchmarks, and custom feature scopes.",
      icon: <Coffee size={16} />,
      gradient: "from-[#FF7A00] to-[#FF9D2E]",
    },
    {
      step: "02",
      title: "Research & Planning",
      description: "Team Optify audits your direct competitors, defines a technical architecture stack, structures an SEO keyword sitemap, and maps navigation flows.",
      icon: <Search size={16} />,
      gradient: "from-[#FF5E00] to-[#FF7A00]",
    },
    {
      step: "03",
      title: "UI/UX Design",
      description: "We craft high-fidelity static prototypes, mapping visual elements, typography combinations, and responsive glass-card wireframes.",
      icon: <Sparkles size={16} />,
      gradient: "from-[#FF9D2E] to-[#FFB75E]",
    },
    {
      step: "04",
      title: "Development",
      description: "We compile pristine, modular TypeScript. Utilizing Vite, React, and Tailwind, we build the front-end to operate at blistering sub-second speed.",
      icon: <Code size={16} />,
      gradient: "from-[#FF7A00] to-[#FF9D2E]",
    },
    {
      step: "05",
      title: "Testing & Refinement",
      description: "We run rigid testing scripts, checking mobile cross-compatibility, verifying forms sanitization, auditing accessibility, and validating meta metadata.",
      icon: <Eye size={16} />,
      gradient: "from-[#FF5E00] to-[#FF7A00]",
    },
    {
      step: "06",
      title: "Launch & Support",
      description: "We deploy the application container to secure edge nodes, hook Google Search Console indexing channels, and kickstart a supportive retainer.",
      icon: <Rocket size={16} />,
      gradient: "from-[#FF9D2E] to-[#FFB75E]",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#FFF8F0] dark:bg-[#0F1117] overflow-hidden border-t border-gray-200/40 dark:border-white/5">
      {/* Background visual graphics */}
      <div className="absolute top-[30%] left-[10%] h-[400px] w-[400px] rounded-full bg-[#FF7A00]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <motion.div
            className="inline-flex items-center space-x-1.5 rounded-full bg-[#FF7A00]/10 px-3 py-1 border border-[#FF7A00]/20"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Terminal size={12} className="text-[#FF7A00]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF7A00]">
              Our Methodology
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How We Build. <span className="text-[#FF7A00]">From Idea to Production.</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl font-sans text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A streamlined, collaborative project flow that guarantees full architectural alignment, rapid execution speeds, and bulletproof security.
          </motion.p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative mt-16">
          {/* Vertical central connector track line (visible on desktop - hidden on mobile for cleaner card stacks) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-white/10 -translate-x-1/2 hidden lg:block" />

          {/* Staggered Cards List */}
          <div className="space-y-12 lg:space-y-24">
            {steps.map((stepItem, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={stepItem.step}
                  className={`flex flex-col lg:flex-row items-center justify-between relative ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* central connecting node bubble */}
                  <div className="absolute left-1/2 top-1/2 h-8 w-8 rounded-full border border-[#FF7A00]/20 bg-[#FFF8F0] dark:bg-[#0F1117] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FF7A00] animate-pulse" />
                  </div>

                  {/* Active Step Card Block (50% width on large screens) */}
                  <motion.div
                    className="w-full lg:w-[45%] rounded-2xl glass-card border border-gray-200/50 dark:border-white/5 p-6 sm:p-8 shadow-sm relative group overflow-hidden"
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.05 }}
                    whileHover={{ y: -4 }}
                  >
                    {/* Corner gradient accents */}
                    <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-[#FF7A00]/5 to-transparent pointer-events-none" />

                    {/* Badge showing Step number and icon */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr ${stepItem.gradient} text-white text-xs`}>
                        {stepItem.icon}
                      </div>
                      <span className="font-mono text-xs font-bold text-[#FF7A00]">
                        STEP {stepItem.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                      {stepItem.title}
                    </h3>

                    {/* Step Description */}
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                      {stepItem.description}
                    </p>
                  </motion.div>

                  {/* Empty balance spacer panel to maintain grid alignment (visible only on desktop) */}
                  <div className="hidden lg:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
