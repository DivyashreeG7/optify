import React from "react";
import { CreditCard, Eye, Gauge, HeartHandshake, Layout, Rocket, Search, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { motion } from "motion/react";

interface BenefitCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const WhyChooseUs: React.FC = () => {
  const benefits: BenefitCard[] = [
    {
      title: "Fast Delivery",
      description: "We work efficiently with strict deadlines using agile sprints, ensuring your project launches on time without sacrificing quality.",
      icon: <Zap size={18} />,
    },
    {
      title: "Modern UI/UX Design",
      description: "Custom designed aesthetics inspired by Vercel and Apple. No templates—just pristine margins, balanced layout structures, and fluid animations.",
      icon: <Layout size={18} />,
    },
    {
      title: "SEO Friendly from Day One",
      description: "Optimized semantic markup, schema validation, and meta-tag structures to make sure search engine spiders prioritize index crawling.",
      icon: <Search size={18} />,
    },
    {
      title: "100% Fluid & Responsive",
      description: "Meticulously optimized across ultra-wide desktop monitors, tablets, and phones to guarantee zero visual anomalies.",
      icon: <Smartphone size={18} />,
    },
    {
      title: "Transparent & Flexible Pricing",
      description: "Bespoke pricing packages matching startup budgets up to complex custom corporate web applications.",
      icon: <CreditCard size={18} />,
    },
    {
      title: "Secure Code Infrastructure",
      description: "Adhering to security guidelines, sanitizing user inputs, installing HTTPS headers, and preventing client-side script execution leaks.",
      icon: <ShieldCheck size={18} />,
    },
    {
      title: "High Performance Metrics",
      description: "Scoring 95+ on Google Lighthouse. Lightweight bundled payloads, code-splitting, lazy loaded assets, and instant route loads.",
      icon: <Gauge size={18} />,
    },
    {
      title: "Ongoing Dev Support",
      description: "We don't leave you after the launch. Optify supports your scaling, handles server patches, updates frameworks, and adjusts content.",
      icon: <HeartHandshake size={18} />,
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#FFF8F0] dark:bg-[#0F1117] overflow-hidden">
      {/* Decorative Grid and Blob */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-[10%] right-[5%] h-80 w-80 rounded-full bg-[#FF7A00]/5 blur-[100px] pointer-events-none" />

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
            <Eye size={12} className="text-[#FF7A00]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF7A00]">
              Why Choose Optify
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Engineered to Stand Out. <span className="text-[#FF7A00]">Built to Perform.</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl font-sans text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We deploy advanced engineering strategies to ensure your website converts visitors into leads, loads in milliseconds, and remains stable indefinitely.
          </motion.p>
        </div>

        {/* 8-Grid of Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-2xl glass-card border border-gray-200/50 dark:border-white/5 p-6 shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#FF7A00]/0 via-[#FF7A00]/40 to-[#FF7A00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glowing Corner Circle on Hover */}
              <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-gradient-to-bl from-[#FF7A00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon Container */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF7A00]/10 text-[#FF7A00] mb-5 group-hover:bg-[#FF7A00] group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="font-display text-base font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                {benefit.title}
              </h3>
              
              <p className="font-sans text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
