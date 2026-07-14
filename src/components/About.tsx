import React from "react";
import { Coffee, Cpu, Globe, Rocket, Terminal } from "lucide-react";
import { motion } from "motion/react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarLetter: string;
  skills: string[];
  gradient: string;
}

export const About: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Aidan",
      role: "Frontend Architect & Designer",
      bio: "Crafts the soul of Optify. Obsessed with micro-interactions, responsive layouts, and rendering performance.",
      avatarLetter: "A",
      skills: ["React v19", "Framer Motion", "Tailwind CSS", "UI/UX Design"],
      gradient: "from-[#FF7A00] to-[#FF9D2E]",
    },
    {
      name: "Julian",
      role: "Backend & Systems Engineer",
      bio: "Engineers database architecture, API speed, and infrastructure. Ensures sites compile and load under 200ms.",
      avatarLetter: "J",
      skills: ["TypeScript", "Node.js", "PostgreSQL", "Cloud Run"],
      gradient: "from-[#FF5E00] to-[#FF7A00]",
    },
    {
      name: "Marcus",
      role: "Creative Developer & SEO",
      bio: "Translates marketing strategies into conversion machines. Specialized in web discovery, content structures, and optimization.",
      avatarLetter: "M",
      skills: ["SEO Strategy", "Analytics", "Performance Tuning", "A/B Testing"],
      gradient: "from-[#FF9D2E] to-[#FFB75E]",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[#FFF8F0] dark:bg-[#0F1117] overflow-hidden"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-[#FF7A00]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
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
              Our Story
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Three Minds. <span className="text-[#FF7A00]">One Creative Force.</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl font-sans text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We are a team of three passionate, hands-on developers who joined forces to solve actual business problems. We believe every business, regardless of size, deserves a premium, high-performing online presence.
          </motion.p>
        </div>

        {/* Content Grid: Story + Team cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Detailed Story (Left Column - 5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-display text-2xl font-extrabold text-gray-900 dark:text-white">
                Combining artistic vision with robust technology.
              </h3>

              <p className="font-sans text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                At Optify, we don't buy pre-made templates or use drag-and-drop web builders that produce heavy, slow websites. Every layout we deploy is written from scratch, optimized for performance, accessibility, and search engine discoverability.
              </p>

              <p className="font-sans text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                By maintaining a tiny, highly responsive core team of three developers, we eliminate project management bureaucracy. You work directly with the creators of your system.
              </p>
            </motion.div>

            {/* Quick value statements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-200/50 dark:border-white/5 bg-white/20 dark:bg-white/2">
                <Coffee size={16} className="text-[#FF7A00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold text-gray-900 dark:text-white">Pure Craftsmanship</h4>
                  <p className="font-sans text-[11px] text-gray-500 dark:text-gray-400 leading-normal">Tailored to fit your workflow needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-200/50 dark:border-white/5 bg-white/20 dark:bg-white/2">
                <Globe size={16} className="text-[#FF7A00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold text-gray-900 dark:text-white">Global Standards</h4>
                  <p className="font-sans text-[11px] text-gray-500 dark:text-gray-400 leading-normal">Optimized for rapid global edge nodes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Three Team Cards (Right Column - 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 rounded-2xl glass-card border border-gray-200/40 dark:border-white/5 shadow-sm overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Glowing line overlay */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#FF7A00] to-[#FF9D2E] opacity-70 group-hover:opacity-100 transition-opacity" />

                {/* Avatar Initial Circle */}
                <div className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr ${member.gradient} text-white shadow-md font-display text-2xl font-black`}>
                  {member.avatarLetter}
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-[#171923] bg-emerald-500" />
                </div>

                {/* Card Info */}
                <div className="flex-1 space-y-3">
                  <div>
                    <h4 className="font-display text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      {member.name}
                    </h4>
                    <p className="font-sans text-xs font-semibold text-[#FF7A00] uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>

                  <p className="font-sans text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills Tag block */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-gray-200/50 dark:bg-white/5 text-gray-600 dark:text-gray-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
