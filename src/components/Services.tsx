import React, { useState } from "react";
import { AppWindow, CheckCircle2, ChevronRight, Code, Eye, Laptop, LifeBuoy, Search, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  deliverables: string[];
  techUsed: string[];
}

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: "business-sites",
      title: "Custom Business Websites",
      description: "Scalable enterprise and corporate digital presence, designed specifically to establish authority and generate customer trust.",
      longDescription: "Our custom business website service builds bespoke solutions for small-to-mid businesses looking to establish robust credibility, capture inquiries, and synchronize company messaging across the web.",
      icon: <Laptop size={20} />,
      deliverables: ["Custom UI/UX Architecture", "Responsive Corporate Layouts", "Lead Generation Funnels", "CMS Integration"],
      techUsed: ["Vite + React", "Tailwind CSS", "Headless CMS", "Node.js"],
    },
    {
      id: "portfolio-sites",
      title: "Portfolio Websites",
      description: "Visual-first hubs for creators, models, architects, photographers, and actors looking to stand out and secure high-value gigs.",
      longDescription: "Our portfolio design couples rich typography with custom layouts, staggered loading animation screens, and smooth media galleries to ensure your best work takes center stage with high responsive density.",
      icon: <Sparkles size={20} />,
      deliverables: ["Interactive Work Galleries", "Typography Pairing System", "Fluid Screen Transitions", "Downloadable Resumes & Assets"],
      techUsed: ["Framer Motion", "CSS Grid", "SVG Illustrations", "Light Gallery"],
    },
    {
      id: "landing-pages",
      title: "Landing Pages",
      description: "High-converting, single-page marketing funnels optimized for SaaS pre-launches, lead capture, or product promotions.",
      longDescription: "A great landing page has one job: conversion. We eliminate user cognitive load by crafting targeted copy hooks, glowing CTA elements, and rapid responsive inputs that convert traffic into revenue.",
      icon: <AppWindow size={20} />,
      deliverables: ["Structured Copy Layout", "A/B Testing Framework Readiness", "Optimized Input Forms", "Instant Loading Speed"],
      techUsed: ["React Hook Form", "Lighthouse optimization", "Tailwind v4", "Analytics Hook"],
    },
    {
      id: "ecommerce-sites",
      title: "E-commerce Websites",
      description: "Custom shopfronts featuring catalog filtering, custom checkout, and integrations to facilitate secure global shopping.",
      longDescription: "We build custom, blazing-fast shopfronts that sidestep sluggish off-the-shelf template restrictions, enabling customized checkout logic and seamless Stripe/PayPal merchant gateway coordination.",
      icon: <Code size={20} />,
      deliverables: ["Rapid Product Filtering", "Bespoke Cart & Checkout Drawer", "Stripe API Proxy Routes", "Product Content Sync"],
      techUsed: ["Stripe SDK", "Context API State", "Tailwind CSS", "Serverless Proxies"],
    },
    {
      id: "redesign",
      title: "Website Redesign",
      description: "Transform outdated, slow, or low-performing sites into modern, high-converting platforms without losing your established SEO rank.",
      longDescription: "We conduct audit mappings of your existing site, identify usability bottlenecks, preserve your Google indexing ranking structure, and rebuild the interface from scratch to deliver a 5x boost in UX and speed.",
      icon: <Eye size={20} />,
      deliverables: ["Full UX Usability Auditing", "SEO Redirect Mapping Matrix", "Modern Aesthetic Uplift", "Interactive Re-Platforming"],
      techUsed: ["Lighthouse Audits", "React 19 Re-build", "CSS Optimization", "Structured Data Schema"],
    },
    {
      id: "support",
      title: "Maintenance & Support",
      description: "Continuous server monitoring, weekly package upgrades, hosting maintenance, and content changes to keep your site fresh.",
      longDescription: "Your website is a living machine. Our monthly retainer package guarantees we monitor your platform, apply NPM security updates, resolve hosting anomalies, and process content adjustments in hours.",
      icon: <LifeBuoy size={20} />,
      deliverables: ["24/7 Hosting Uptime Tracking", "Weekly NPM Security Patching", "Rapid Content Edits SLA", "Cloud Run Container Scaling"],
      techUsed: ["GitHub Actions", "Docker Containers", "Sentry Logging", "Vercel Analytics"],
    },
    {
      id: "seo",
      title: "SEO Optimization",
      description: "Deep crawl architecture mapping, schema markup, and metadata optimization to drive steady organic traffic to your brand.",
      longDescription: "SEO is not a checklist—it is code architecture. We configure semantic hierarchy, write automated structured JSON-LD data schemas, optimize mobile core web vitals, and index your sitemap.",
      icon: <Search size={20} />,
      deliverables: ["Semantic Heading Structures", "JSON-LD Rich Schema Tags", "Google Search Console Setup", "Sitemap & Robots Mapping"],
      techUsed: ["SEO Meta Tags", "Semantic HTML5", "Schema.org", "PageSpeed Metrics"],
    },
    {
      id: "performance",
      title: "Performance Optimization",
      description: "Accelerate slow pages to achieve 98+ scores on Lighthouse audits, improving user retention and lowering ad acquisition costs.",
      longDescription: "Millisecond delays cost customers. We optimize existing systems by minifying bundle scripts, compiling images to next-gen WebP/AVIF formats, eliminating render-blocking imports, and leveraging client caches.",
      icon: <CheckCircle2 size={20} />,
      deliverables: ["Dynamic Asset Lazy Loading", "Image Format Conversion", "Bundle Size Shrinking", "Critical Path CSS rendering"],
      techUsed: ["Vite Bundle Analyzer", "WebP Assets", "Edge CDNs", "Gzip/Brotli Compression"],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-[#FFF8F0] dark:bg-[#0F1117] overflow-hidden border-t border-gray-200/40 dark:border-white/5"
    >
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
            <Sparkles size={12} className="text-[#FF7A00]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF7A00]">
              What We Offer
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Precision Services. <span className="text-[#FF7A00]">Exceptional Execution.</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl font-sans text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We cover the entire digital lifecycle. Every line of code we compile is tailored to expand user conversion, speed metrics, and long-term search discoverability.
          </motion.p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl glass-card border border-gray-200/50 dark:border-white/5 p-6 shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Highlight Gradient hover background */}
              <div className="absolute top-0 right-0 h-20 w-20 rounded-full bg-gradient-to-bl from-[#FF7A00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Icon Container */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF7A00]/10 text-[#FF7A00] mb-5 group-hover:bg-[#FF7A00] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#FF7A00] transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="font-sans text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Learn More Button CTA */}
              <button
                onClick={() => setSelectedService(service)}
                className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-[#FF7A00] hover:text-[#FF9D2E] transition-colors cursor-pointer group/btn uppercase tracking-wider"
              >
                Learn More
                <ChevronRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Slide-Sheet / Interactive Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              className="absolute inset-0 bg-[#0F1117]/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            />

            {/* Modal Card */}
            <motion.div
              className="relative w-full max-w-lg rounded-3xl bg-[#FFF8F0] dark:bg-[#171923] p-6 sm:p-8 border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden z-10"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={15} />
              </button>

              {/* Icon & Title */}
              <div className="flex items-center gap-3.5 mb-5 border-b border-gray-200/50 dark:border-white/5 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF7A00] text-white">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-black text-gray-900 dark:text-white leading-tight">
                    {selectedService.title}
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF7A00] font-bold">
                    Optify Capability
                  </span>
                </div>
              </div>

              {/* Service Detailed Overview */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-2">
                    Service Overview
                  </h4>
                  <p className="font-sans text-xs text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                    {selectedService.longDescription}
                  </p>
                </div>

                {/* Deliverables Bullet List */}
                <div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-2.5">
                    What we deliver:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-sans text-xs text-gray-700 dark:text-gray-300">
                        <CheckCircle2 size={13} className="text-[#FF7A00] shrink-0" />
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Tag */}
                <div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#FF7A00] mb-2">
                    Our Stack Choice
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedService.techUsed.map((tech, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-[#FF7A00]/10 text-[#FF7A00]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footnote Close CTA */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full text-center rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#FF9D2E] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-[0_0_15px_rgba(255,122,0,0.3)] transition-all"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
