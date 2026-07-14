import React, { useState } from "react";
import { ExternalLink, Eye, FolderGit2, Github, Globe, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  filterCategory: "web" | "app" | "shop" | "portfolio";
  description: string;
  tech: string[];
  gradient: string;
  mockUrl: string;
  livePreviewContent: {
    heroTitle: string;
    heroSubtitle: string;
    primaryColor: string;
    interactiveLabel: string;
    features: string[];
  };
}

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeDemo, setActiveDemo] = useState<ProjectItem | null>(null);

  // Dynamic state for mock live site simulations
  const [mockLikes, setMockLikes] = useState<number>(104);
  const [selectedMockItem, setSelectedMockItem] = useState<string>("");

  const projects: ProjectItem[] = [
    {
      id: "restaurant",
      title: "Gourmet Grill & Lounge",
      category: "Bespoke Gastronomy Site",
      filterCategory: "web",
      description: "A fast-loading, highly immersive visual restaurant platform featuring digital reservation requests and animated menus.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
      gradient: "from-amber-600 to-orange-500",
      mockUrl: "gourmet-grill",
      livePreviewContent: {
        heroTitle: "Savor the Craft",
        heroSubtitle: "Handcrafted firewood steaks, organic seasonal ingredients, and select cocktails.",
        primaryColor: "#FF7A00",
        interactiveLabel: "Select Your Entrée",
        features: ["Ribeye Steak", "Atlantic Salmon", "Wild Mushroom Risotto", "Truffle Fries"],
      },
    },
    {
      id: "gym",
      title: "IronPulse Fitness Hub",
      category: "High Density Gym Site",
      filterCategory: "web",
      description: "A bold, dark-themed portal for premium health clubs. Integrates custom class schedules and membership registration flows.",
      tech: ["React v19", "Tailwind CSS", "Lucide React", "Sentry"],
      gradient: "from-red-600 to-zinc-900",
      mockUrl: "iron-pulse",
      livePreviewContent: {
        heroTitle: "Forge Your Legacy",
        heroSubtitle: "High-intensity training modules, world-class athletic facilities, and direct coaching metrics.",
        primaryColor: "#DC2626",
        interactiveLabel: "Choose Daily Session",
        features: ["CrossFit Power Hour", "HIIT Cardio Sprints", "Heavy Powerlifting Lab", "Mobility & Flow Yoga"],
      },
    },
    {
      id: "hospital",
      title: "CarePoint Hospital Network",
      category: "Secure Clinical Portal",
      filterCategory: "app",
      description: "A HIPAA-aligned interface featuring clinical department navigation, doctor roster search, and secure consultation requests.",
      tech: ["React 19", "Node.js", "Express API", "PostgreSQL"],
      gradient: "from-sky-500 to-emerald-500",
      mockUrl: "care-point",
      livePreviewContent: {
        heroTitle: "Compassionate Modern Care",
        heroSubtitle: "Access board-certified specialists, download clinical test results, and schedule physical appointments.",
        primaryColor: "#0EA5E9",
        interactiveLabel: "Book Department Consultation",
        features: ["Cardiovascular Science", "Pediatrics & Neonatal", "Neurological Diagnostics", "General Orthopedics"],
      },
    },
    {
      id: "realestate",
      title: "Havenly Premium Estates",
      category: "Relational Property App",
      filterCategory: "app",
      description: "An ultra-premium property catalog browser. Facilitates localized filter parameters and dynamic inquiries.",
      tech: ["Vite", "Tailwind CSS", "D3.js Charts", "Mapbox SDK"],
      gradient: "from-indigo-600 to-blue-500",
      mockUrl: "havenly",
      livePreviewContent: {
        heroTitle: "Find Your Sanctuary",
        heroSubtitle: "Curated collection of coastal villas, high-rise architectural penthouses, and suburban estates.",
        primaryColor: "#4F46E5",
        interactiveLabel: "Select Estate Location",
        features: ["Pacific Palisades Estate", "Manhattan Skyscraper Penthouse", "Kyoto Bamboo Forest Retreat", "Geneva Lakeside Villa"],
      },
    },
    {
      id: "fashion",
      title: "VogueSphere Boutique",
      category: "High-End E-Commerce Hub",
      filterCategory: "shop",
      description: "Blazing-fast online apparel store. Includes product filters, structured checkouts, and responsive product sheets.",
      tech: ["React", "Stripe API", "Context State", "Brotli Compression"],
      gradient: "from-pink-600 to-rose-400",
      mockUrl: "voguesphere",
      livePreviewContent: {
        heroTitle: "Autumn Silhouette 2026",
        heroSubtitle: "Hand-threaded cotton, relaxed Italian wool outerwear, and recycled accessory sets.",
        primaryColor: "#E11D48",
        interactiveLabel: "Select Size & Checkout",
        features: ["Italian Cashmere Overcoat", "Organic Ribbed Knit Sweater", "Recycled Canvas Tote", "Leather Combat Boots"],
      },
    },
    {
      id: "education",
      title: "EduLearn Classrooms",
      category: "Digital Learning Platform",
      filterCategory: "app",
      description: "SaaS platform supporting remote course modules, student discussion metrics, and customizable grades dashboards.",
      tech: ["TypeScript", "React", "Recharts", "Node.js"],
      gradient: "from-violet-600 to-purple-500",
      mockUrl: "edulearn",
      livePreviewContent: {
        heroTitle: "Unleash Intelligent Scope",
        heroSubtitle: "Interactive coding bootcamps, validated engineering curriculum, and directly certified milestones.",
        primaryColor: "#7C3AED",
        interactiveLabel: "Enroll in Bootcamp",
        features: ["Full-Stack Engineering Boot", "Data Science & Python", "Modern UI/UX Figma Cohort", "System Architecture & Scaling"],
      },
    },
    {
      id: "booking",
      title: "TableQuick Reservist",
      category: "Live Concierge Web App",
      filterCategory: "app",
      description: "Real-time table allocation widget for restaurants. Uses micro-states to prevent double reservation collisions.",
      tech: ["React State", "Tailwind CSS", "Framer Motion", "WebSocket"],
      gradient: "from-emerald-600 to-teal-500",
      mockUrl: "tablequick",
      livePreviewContent: {
        heroTitle: "Direct Concierge Booking",
        heroSubtitle: "Reserve premium lounge booths, custom VIP rooms, and direct chef-table sessions instantly.",
        primaryColor: "#059669",
        interactiveLabel: "Choose Booking Category",
        features: ["Chef's Tasting Table (4 Pax)", "VIP Cocktail Lounge Couch", "Main Dinning Hall Window", "Rooftop Garden Cabana"],
      },
    },
    {
      id: "photography",
      title: "FocusGlass Retrospective",
      category: "Minimalist Photo Portfolio",
      filterCategory: "portfolio",
      description: "A modular, visual-first grid showcasing modern architecture and travel portraits. Fast lazy loading assets.",
      tech: ["React 19", "Vite", "Intersection Observer", "Tailwind CSS"],
      gradient: "from-[#222] to-neutral-700",
      mockUrl: "focusglass",
      livePreviewContent: {
        heroTitle: "Capturing Silent Light",
        heroSubtitle: "A retrospection of minimalist brutalist architecture and cinematic street documentary frames.",
        primaryColor: "#171717",
        interactiveLabel: "View Retrospective Series",
        features: ["Brutalist Concrete Slabs - Berlin", "Neo-Noir Shadows - Tokyo", "Subtle Horizons - Iceland", "Silent Monoliths - Desert"],
      },
    },
  ];

  const filters = [
    { label: "All Works", value: "all" },
    { label: "Business Sites", value: "web" },
    { label: "Web Applications", value: "app" },
    { label: "E-Commerce", value: "shop" },
    { label: "Portfolios", value: "portfolio" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.filterCategory === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-[#FFF8F0] dark:bg-[#0F1117] overflow-hidden border-t border-gray-200/40 dark:border-white/5"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            className="inline-flex items-center space-x-1.5 rounded-full bg-[#FF7A00]/10 px-3 py-1 border border-[#FF7A00]/20"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FolderGit2 size={12} className="text-[#FF7A00]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF7A00]">
              Our Portfolio
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Bespoke Creations. <span className="text-[#FF7A00]">Zero Templates.</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl font-sans text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Browse real, high-performance web systems we have crafted for early-stage startups and creative professionals. Click Live Demo on any project to simulate its interface in real-time!
          </motion.p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`relative px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
                activeFilter === tab.value
                  ? "bg-[#FF7A00] border-[#FF7A00] text-white shadow-md shadow-[#FF7A00]/20"
                  : "bg-white/40 dark:bg-white/5 border-gray-200/60 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with Framer Motion Animate Presence */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl glass-card border border-gray-200/50 dark:border-white/5 shadow-md overflow-hidden flex flex-col justify-between"
              >
                {/* Simulated Device Frame Top / Colored Header */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center">
                  {/* Subtle inner grid overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                  {/* High Quality Gradient Artwork simulating the project logo branding */}
                  <div className={`absolute h-32 w-32 rounded-full bg-gradient-to-tr ${project.gradient} blur-xl opacity-30 group-hover:scale-125 transition-transform duration-700`} />
                  
                  {/* Visual mockup representation */}
                  <div className={`relative px-6 py-4 rounded-xl border border-white/20 bg-gradient-to-tr ${project.gradient} text-white shadow-xl max-w-[200px] text-center select-none group-hover:scale-105 transition-transform duration-500`}>
                    <Sparkles className="absolute -top-2 -right-2 text-white animate-pulse" size={16} />
                    <h4 className="font-display text-sm font-black tracking-tight leading-tight uppercase">
                      {project.title.split(" ")[0]}
                    </h4>
                    <p className="font-mono text-[8px] opacity-70 tracking-widest uppercase">
                      Optify Deploy
                    </p>
                  </div>
                </div>

                {/* Info and action blocks */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#FF7A00]">
                        {project.category}
                      </span>
                      <span className="font-mono text-[9px] text-gray-400">
                        Optify v1.2
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-black text-gray-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>

                    <p className="font-sans text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology labels */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="font-mono text-[8px] font-semibold px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 border-t border-gray-100 dark:border-white/5 pt-4">
                      <button
                        onClick={() => {
                          setSelectedMockItem("");
                          setActiveDemo(project);
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#FF9D2E] py-2.5 text-xs font-semibold text-white shadow-sm hover:shadow-[0_0_15px_rgba(255,122,0,0.3)] transition-all cursor-pointer"
                      >
                        <Eye size={12} /> Live Demo
                      </button>

                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center justify-center h-9 w-9 rounded-xl border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-[#FF7A00] hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                        title="View Source Code"
                      >
                        <Github size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Mockup Site Modal Sandbox */}
      <AnimatePresence>
        {activeDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop Blur */}
            <motion.div
              className="absolute inset-0 bg-[#0F1117]/85 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDemo(null)}
            />

            {/* Sandbox Mockup Window */}
            <motion.div
              className="relative w-full max-w-2xl rounded-3xl bg-[#FFF8F0] dark:bg-[#171923] border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden z-10 flex flex-col h-[85vh] max-h-[600px]"
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              {/* Sandbox Top Browser Bar */}
              <div className="flex items-center justify-between bg-white dark:bg-[#0F1117] border-b border-gray-200 dark:border-white/10 px-5 py-3">
                <div className="flex items-center space-x-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/5 px-4 py-1 text-xs font-mono text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                  <Globe size={11} className="text-[#FF7A00]" /> optify.client/{activeDemo.mockUrl}
                </div>
                {/* Close Button */}
                <button
                  onClick={() => setActiveDemo(null)}
                  className="h-7 w-7 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-[#FF7A00]/10 hover:text-[#FF7A00] transition-colors"
                  aria-label="Close Sandbox"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Sandbox Live Site Body simulation */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 relative no-scrollbar">
                {/* Live simulation banner flag */}
                <div className="absolute top-2 right-2 rounded-full border border-[#FF7A00]/20 bg-[#FF7A00]/10 px-2.5 py-0.5 text-[9px] font-mono font-black uppercase text-[#FF7A00] tracking-wider animate-pulse">
                  Sandbox Active
                </div>

                {/* Miniature Site Hero */}
                <div className="space-y-3 text-center sm:text-left">
                  <span
                    className="font-mono text-[9px] font-bold px-2.5 py-1 rounded-full text-white tracking-widest uppercase"
                    style={{ backgroundColor: activeDemo.livePreviewContent.primaryColor }}
                  >
                    {activeDemo.title}
                  </span>
                  <h1 className="font-display text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-tight">
                    {activeDemo.livePreviewContent.heroTitle}
                  </h1>
                  <p className="font-sans text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-lg">
                    {activeDemo.livePreviewContent.heroSubtitle}
                  </p>
                </div>

                {/* INTERACTIVE DEMO SANDBOX AREA */}
                <div className="rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/2 p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-3">
                    <h3 className="font-display text-xs font-extrabold text-gray-800 dark:text-white uppercase tracking-wider">
                      {activeDemo.livePreviewContent.interactiveLabel}
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-gray-500 dark:text-gray-400">
                      <span>Interactive Module</span>
                    </div>
                  </div>

                  {/* Choices list click simulation */}
                  <div className="grid grid-cols-2 gap-2">
                    {activeDemo.livePreviewContent.features.map((feature, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedMockItem(feature);
                          setMockLikes((prev) => prev + 1);
                        }}
                        className={`text-left px-4 py-3 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                          selectedMockItem === feature
                            ? "border-[#FF7A00] bg-[#FF7A00]/5 text-[#FF7A00]"
                            : "border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {feature}
                      </button>
                    ))}
                  </div>

                  {/* Feedback response simulation */}
                  <AnimatePresence mode="wait">
                    {selectedMockItem ? (
                      <motion.div
                        className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 flex items-center justify-between text-emerald-600 dark:text-emerald-400"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <span className="font-sans text-xs">
                          ✓ Successfully selected <strong>{selectedMockItem}</strong>!
                        </span>
                        <span className="font-mono text-[10px] font-bold">
                          Likes: {mockLikes}
                        </span>
                      </motion.div>
                    ) : (
                      <div className="text-center py-4 font-sans text-xs text-gray-400 font-light italic">
                        Click one of the mock options above to trigger live sandbox simulation events.
                      </div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Trust and capabilities info */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-white/2 border border-gray-200/50 dark:border-white/5">
                    <span className="font-mono text-xs font-extrabold text-emerald-500">99.9%</span>
                    <p className="font-sans text-[9px] text-gray-400">Uptime</p>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-white/2 border border-gray-200/50 dark:border-white/5">
                    <span className="font-mono text-xs font-extrabold text-emerald-500">&lt;240ms</span>
                    <p className="font-sans text-[9px] text-gray-400">Response</p>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-white/2 border border-gray-200/50 dark:border-white/5">
                    <span className="font-mono text-xs font-extrabold text-emerald-500">100/100</span>
                    <p className="font-sans text-[9px] text-gray-400">Lighthouse</p>
                  </div>
                </div>
              </div>

              {/* Close Button at bottom */}
              <div className="bg-white dark:bg-[#0F1117] border-t border-gray-200 dark:border-white/10 p-4 flex items-center justify-end">
                <button
                  onClick={() => setActiveDemo(null)}
                  className="rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#FF9D2E] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-[0_0_15px_rgba(255,122,0,0.35)]"
                >
                  Return to Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
