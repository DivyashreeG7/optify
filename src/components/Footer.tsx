import React, { useState } from "react";
import { ArrowRight, Dribbble, Github, Heart, Linkedin, Twitter, Zap } from "lucide-react";
import { motion } from "motion/react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#FFF8F0] dark:bg-[#0F1117] pt-20 pb-10 overflow-hidden border-t border-gray-200/50 dark:border-white/5">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[#FF7A00]/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Top block: Branding + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-gray-200/50 dark:border-white/5">
          {/* Logo & Pitch (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <a
              href="#home"
              className="flex items-center space-x-2 font-display text-3xl font-black tracking-wider text-gray-900 dark:text-white"
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF7A00] to-[#FF9D2E] text-white shadow-[0_0_15px_rgba(255,122,0,0.4)]">
                <span className="text-base font-black">O</span>
              </div>
              <span className="tracking-tight">
                PTIFY<span className="text-[#FF7A00]">.</span>
              </span>
            </a>

            <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-sm">
              We engineer beautiful, sub-second loading web applications that help startups attract high-value clients and dominate their market. Direct developers, pure code.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-500 hover:text-[#FF7A00] hover:border-[#FF7A00]/40 dark:hover:bg-white/10 transition-colors"
                aria-label="Optify GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-500 hover:text-[#FF7A00] hover:border-[#FF7A00]/40 dark:hover:bg-white/10 transition-colors"
                aria-label="Optify Twitter"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-500 hover:text-[#FF7A00] hover:border-[#FF7A00]/40 dark:hover:bg-white/10 transition-colors"
                aria-label="Optify LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-500 hover:text-[#FF7A00] hover:border-[#FF7A00]/40 dark:hover:bg-white/10 transition-colors"
                aria-label="Optify Dribbble"
              >
                <Dribbble size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links / Navigation & Services (3 Cols) */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#FF7A00]">
                Optify Hub
              </h4>
              <ul className="space-y-2.5 font-sans text-xs text-gray-500 dark:text-gray-400">
                <li>
                  <a href="#home" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-gray-900 dark:hover:text-white transition-colors">Services</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Portfolio</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#FF7A00]">
                Core Sectors
              </h4>
              <ul className="space-y-2.5 font-sans text-xs text-gray-500 dark:text-gray-400">
                <li>
                  <a href="#services" className="hover:text-gray-900 dark:hover:text-white transition-colors">Business Sites</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-gray-900 dark:hover:text-white transition-colors">Web Apps</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-gray-900 dark:hover:text-white transition-colors">Custom Shops</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-gray-900 dark:hover:text-white transition-colors">SEO & Speed</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#FF7A00]">
              Subscribe to Optify Intel
            </h4>
            <p className="font-sans text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              No spam. Get weekly deep-dives on CSS, compiling speeds, and conversion strategies.
            </p>

            <form onSubmit={handleSubscribe} className="relative max-w-sm flex items-center">
              <input
                type="email"
                required
                placeholder="developer@studio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubscribed}
                className="w-full rounded-xl bg-white/40 dark:bg-white/5 border border-gray-200 dark:border-white/5 px-4 py-3.5 pr-12 text-xs text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-[#FF7A00] dark:focus:border-[#FF7A00] transition-colors"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="absolute right-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-[#FF7A00] to-[#FF9D2E] text-white hover:shadow-[0_0_10px_rgba(255,122,0,0.4)] disabled:opacity-75 transition-all"
                aria-label="Submit newsletter subscription"
              >
                <ArrowRight size={14} />
              </button>
            </form>

            {isSubscribed && (
              <p className="font-mono text-[10px] font-bold text-emerald-500">
                ✓ Welcome aboard! Optify newsletters will land soon.
              </p>
            )}
          </div>
        </div>

        {/* Bottom copyright blocks */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-gray-400 dark:text-gray-500">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} Optify Agency LLC. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1.5 uppercase font-mono text-[9px] tracking-wider">
            <span>Made with</span>
            <Heart size={11} className="text-[#FF7A00] animate-pulse" fill="currentColor" />
            <span>by Team Optify</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
