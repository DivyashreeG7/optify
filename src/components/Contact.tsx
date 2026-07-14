import React, { useState } from "react";
import { useForm } from "react-hook-form";
import confetti from "canvas-confetti";
import { Clock, Mail, MapPin, MessageSquare, Phone, Send, Sparkles, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  projectType: string;
  budget: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionName, setSubmissionName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // Simulate API call and success transition
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setSubmissionName(data.name);
        setIsSubmitted(true);
        resolve();
        
        // Premium celebration touch: Orange and Gold confetti splash!
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#FF7A00", "#FF9D2E", "#FFF", "#FFA858"],
        });

        // Optional additional bursts for more dynamic celebration
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ["#FF7A00", "#FF9D2E"],
          });
        }, 200);

        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ["#FF7A00", "#FF9D2E"],
          });
        }, 400);

      }, 1200);
    });
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmissionName("");
    reset();
  };

  const projectTypes = [
    { label: "Business Website", value: "business" },
    { label: "Portfolio Website", value: "portfolio" },
    { label: "Marketing Landing Page", value: "landing" },
    { label: "E-Commerce Shop", value: "ecommerce" },
    { label: "Website Redesign", value: "redesign" },
    { label: "Custom App Dev", value: "custom" },
  ];

  const budgets = [
    { label: "Under $2k", value: "under-2k" },
    { label: "$2k - $5k", value: "2k-5k" },
    { label: "$5k - $10k", value: "5k-10k" },
    { label: "$10k - $25k", value: "10k-25k" },
    { label: "$25k+", value: "25k-plus" },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#FFF8F0] dark:bg-[#0F1117] overflow-hidden border-t border-gray-200/40 dark:border-white/5"
    >
      {/* Background graphics */}
      <div className="absolute top-[40%] right-[15%] h-[400px] w-[400px] rounded-full bg-[#FF7A00]/5 blur-[120px] pointer-events-none" />

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
            <MessageSquare size={12} className="text-[#FF7A00]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF7A00]">
              Kickstart
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Make Something <span className="text-[#FF7A00]">Exceptional.</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl font-sans text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Fill out the inquiry scope workbook below. Our average response time is under four hours during standard business days.
          </motion.p>
        </div>

        {/* Form and Info Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* LEFT: Project Workbook Input Form (7 Cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form-container"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl glass-panel p-6 sm:p-10 border border-gray-200/50 dark:border-white/5 shadow-lg relative"
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="font-display text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          autoComplete="name"
                          placeholder="Raymond Chen"
                          {...register("name", { required: "Name is required" })}
                          className={`w-full rounded-xl bg-white/40 dark:bg-white/2 border px-4 py-3 text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-[#FF7A00] dark:focus:border-[#FF7A00] transition-colors ${
                            errors.name ? "border-rose-500/50" : "border-gray-200 dark:border-white/5"
                          }`}
                        />
                        {errors.name && (
                          <p className="font-mono text-[9px] font-bold text-rose-500">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="font-display text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          autoComplete="email"
                          placeholder="raymond@gourmetgrill.com"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className={`w-full rounded-xl bg-white/40 dark:bg-white/2 border px-4 py-3 text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-[#FF7A00] dark:focus:border-[#FF7A00] transition-colors ${
                            errors.email ? "border-rose-500/50" : "border-gray-200 dark:border-white/5"
                          }`}
                        />
                        {errors.email && (
                          <p className="font-mono text-[9px] font-bold text-rose-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone input */}
                      <div className="space-y-2">
                        <label className="font-display text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          autoComplete="tel"
                          placeholder="+1 (555) 019-2834"
                          {...register("phone")}
                          className="w-full rounded-xl bg-white/40 dark:bg-white/2 border border-gray-200 dark:border-white/5 px-4 py-3 text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-[#FF7A00] dark:focus:border-[#FF7A00] transition-colors"
                        />
                      </div>

                      {/* Business Name input */}
                      <div className="space-y-2">
                        <label className="font-display text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                          Business / Brand Name
                        </label>
                        <input
                          type="text"
                          placeholder="Gourmet Grill Lounge"
                          {...register("businessName")}
                          className="w-full rounded-xl bg-white/40 dark:bg-white/2 border border-gray-200 dark:border-white/5 px-4 py-3 text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-[#FF7A00] dark:focus:border-[#FF7A00] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Project Type Selection dropdown */}
                      <div className="space-y-2">
                        <label className="font-display text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                          Project Type *
                        </label>
                        <select
                          {...register("projectType", { required: "Project type is required" })}
                          defaultValue=""
                          className={`w-full rounded-xl bg-white/40 dark:bg-[#171923] border px-4 py-3 text-sm text-gray-800 dark:text-white outline-none focus:border-[#FF7A00] dark:focus:border-[#FF7A00] transition-colors cursor-pointer appearance-none ${
                            errors.projectType ? "border-rose-500/50" : "border-gray-200 dark:border-white/5"
                          }`}
                        >
                          <option value="" disabled className="text-gray-400">Select scope...</option>
                          {projectTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <p className="font-mono text-[9px] font-bold text-rose-500">{errors.projectType.message}</p>
                        )}
                      </div>

                      {/* Budget Selection dropdown */}
                      <div className="space-y-2">
                        <label className="font-display text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                          Estimated Budget *
                        </label>
                        <select
                          {...register("budget", { required: "Budget is required" })}
                          defaultValue=""
                          className={`w-full rounded-xl bg-white/40 dark:bg-[#171923] border px-4 py-3 text-sm text-gray-800 dark:text-white outline-none focus:border-[#FF7A00] dark:focus:border-[#FF7A00] transition-colors cursor-pointer appearance-none ${
                            errors.budget ? "border-rose-500/50" : "border-gray-200 dark:border-white/5"
                          }`}
                        >
                          <option value="" disabled className="text-gray-400">Select budget range...</option>
                          {budgets.map((b) => (
                            <option key={b.value} value={b.value}>
                              {b.label}
                            </option>
                          ))}
                        </select>
                        {errors.budget && (
                          <p className="font-mono text-[9px] font-bold text-rose-500">{errors.budget.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Message Text area */}
                    <div className="space-y-2">
                      <label className="font-display text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                        Project Description *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your brand vision, custom sitemap, and design inspirations..."
                        {...register("message", { required: "Description is required" })}
                        className={`w-full rounded-xl bg-white/40 dark:bg-white/2 border px-4 py-3 text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-[#FF7A00] dark:focus:border-[#FF7A00] transition-colors resize-none ${
                          errors.message ? "border-rose-500/50" : "border-gray-200 dark:border-white/5"
                        }`}
                      />
                      {errors.message && (
                        <p className="font-mono text-[9px] font-bold text-rose-500">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Workbook CTA */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#FF9D2E] py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md hover:shadow-[0_0_20px_rgba(255,122,0,0.4)] disabled:opacity-75 transition-all cursor-pointer"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? "Compiling Scope..." : "Submit Workbook"}{" "}
                        <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#FF9D2E] to-[#FF7A00] transition-transform duration-300 ease-out -z-10" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                /* GORGEOUS SUCCESS BOARD */
                <motion.div
                  key="success-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-3xl glass-panel p-8 sm:p-12 border border-emerald-500/20 bg-emerald-500/5 shadow-xl text-center space-y-6"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <Zap size={24} className="animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-black text-gray-900 dark:text-white leading-tight">
                      Workbook Received!
                    </h3>
                    <p className="font-mono text-xs font-bold text-[#FF7A00] uppercase tracking-widest">
                      Congratulations {submissionName}
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-md mx-auto">
                    Your custom project inquiry has successfully initialized in our backlog queue. Aidan, Julian, and Marcus are assembling your project estimation briefing now. Expect a calendar session link in your email!
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleResetForm}
                      className="rounded-xl border border-gray-300 dark:border-white/10 bg-white/50 dark:bg-white/5 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: High-End Info Rail: WhatsApp, Email, Maps, Hours (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Links */}
            <div className="rounded-3xl glass-card border border-gray-200/50 dark:border-white/5 p-6 sm:p-8 shadow-sm space-y-5">
              <h3 className="font-display text-base font-bold text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-white/5">
                Immediate Channels
              </h3>

              {/* Email channel */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400">Direct Inquiries</span>
                  <p className="font-sans text-xs sm:text-sm font-bold text-gray-800 dark:text-white hover:text-[#FF7A00] transition-colors">
                    <a href="mailto:hello@optify.agency">hello@optify.agency</a>
                  </p>
                </div>
              </div>

              {/* Phone channel */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400">Hotline Phone</span>
                  <p className="font-sans text-xs sm:text-sm font-bold text-gray-800 dark:text-white hover:text-[#FF7A00] transition-colors">
                    <a href="tel:+15550192834">+1 (555) 019-2834</a>
                  </p>
                </div>
              </div>

              {/* WhatsApp Call to Action Button */}
              <a
                href="https://wa.me/15550192834"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-md hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Custom SVG Abstract Luxury Maps Placeholder */}
            <div className="rounded-3xl glass-card border border-gray-200/50 dark:border-white/5 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#FF7A00]">
                  San Francisco Monolith HQ
                </h4>
                <div className="flex items-center gap-1 font-mono text-[9px] text-gray-400">
                  <MapPin size={10} /> 37.7749° N, 122.4194° W
                </div>
              </div>

              {/* Gorgeous Abstract CSS Vector Map */}
              <div className="relative h-40 rounded-2xl bg-[#0F1117] overflow-hidden border border-white/5">
                {/* Simulated Street Grid Paths */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 100" preserveAspectRatio="none">
                  {/* Streets Grid */}
                  <line x1="0" y1="20" x2="200" y2="20" stroke="white" strokeWidth="1" />
                  <line x1="0" y1="50" x2="200" y2="50" stroke="white" strokeWidth="1" />
                  <line x1="0" y1="80" x2="200" y2="80" stroke="white" strokeWidth="1" />
                  <line x1="40" y1="0" x2="40" y2="100" stroke="white" strokeWidth="1" />
                  <line x1="100" y1="0" x2="100" y2="100" stroke="white" strokeWidth="1" />
                  <line x1="160" y1="0" x2="160" y2="100" stroke="white" strokeWidth="1" />
                  {/* Angled highway */}
                  <line x1="0" y1="10" x2="200" y2="90" stroke="#FF7A00" strokeWidth="2.5" strokeOpacity="0.4" />
                </svg>

                {/* Radar target waves emitting from Optify center pin */}
                <div className="absolute top-[45%] left-[48%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF7A00]/40 animate-ping opacity-30" />
                <div className="absolute top-[45%] left-[48%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF7A00]/50 animate-pulse opacity-50" />

                {/* Maps Pin */}
                <div className="absolute top-[45%] left-[48%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF7A00] to-[#FF9D2E] text-white shadow-lg animate-bounce">
                    <Sparkles size={11} className="text-white" />
                  </div>
                </div>

                {/* Small details badge */}
                <div className="absolute bottom-2 left-2 rounded bg-[#171923]/90 border border-white/5 px-2.5 py-1 text-[8px] font-mono text-gray-400">
                  Optify Studios • SOMA District
                </div>
              </div>
            </div>

            {/* Business Hours List */}
            <div className="rounded-3xl glass-card border border-gray-200/50 dark:border-white/5 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-100 dark:border-white/5">
                <Clock size={14} className="text-[#FF7A00]" />
                <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white">
                  Studio Operations
                </h3>
              </div>

              {/* Hours compact list */}
              <div className="space-y-2.5 font-sans text-xs">
                <div className="flex justify-between items-center text-gray-600 dark:text-gray-300">
                  <span>Monday - Friday</span>
                  <span className="font-mono font-bold text-[#FF7A00]">09:00 AM - 06:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center text-gray-500">
                  <span>Saturday</span>
                  <span className="font-mono">10:00 AM - 02:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span>Sunday</span>
                  <span className="font-mono text-rose-500/70">Closed / Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
