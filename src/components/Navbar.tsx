import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import { Menu, Moon, Sun, X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface NavbarProps {
  onLetTalkClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLetTalkClick }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Blur navbar when scrolling
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      setIsMobileMenuOpen(false);
      const offsetPosition = element.offsetTop - 80; // height of sticky navbar
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFF8F0]/80 dark:bg-[#0F1117]/80 backdrop-blur-md border-b border-[#222]/5 dark:border-white/5 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 text-xl font-bold tracking-tighter text-gray-900 dark:text-white group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#FF9D2E] flex items-center justify-center shadow-[0_0_15px_rgba(255,122,0,0.4)] transition-all group-hover:scale-105">
                <div className="w-3 h-3 bg-[#FFF8F0] dark:bg-[#0F1117] rounded-full transition-colors"></div>
              </div>
              <span>OPTIFY</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 rounded-full px-1.5 py-1 glass-card bg-white/20 dark:bg-white/5">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 font-sans text-xs font-medium uppercase tracking-wider rounded-full transition-colors ${
                    activeSection === item.id
                      ? "text-[#FF7A00] dark:text-[#FF7A00]"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/80 dark:bg-white/5 rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions: Theme Toggle & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Glowing CTA Button */}
              <button
                onClick={onLetTalkClick}
                className="px-6 py-2.5 bg-[#FF7A00] hover:bg-[#FF8A15] text-sm font-bold rounded-full shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:scale-105 transition-all text-white cursor-pointer"
              >
                Let's Talk
              </button>
            </div>

            {/* Mobile Actions Overlay */}
            <div className="flex md:hidden items-center space-x-3">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden bg-[#FFF8F0] dark:bg-[#0F1117] pt-24 px-6 flex flex-col justify-between pb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Grid Pattern in Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="flex flex-col space-y-5 relative z-10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-display text-2xl font-bold border-b border-gray-100 dark:border-white/5 pb-3 transition-colors ${
                    activeSection === item.id
                      ? "text-[#FF7A00]"
                      : "text-gray-800 dark:text-gray-200 hover:text-[#FF7A00]"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-gray-400">
                      0{index + 1}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="space-y-4 relative z-10">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLetTalkClick();
                }}
                className="w-full text-center rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF9D2E] py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-md active:scale-95 transition-transform"
              >
                Let's Talk
              </button>
              <div className="text-center text-xs font-mono text-gray-400 uppercase tracking-widest">
                Team Optify • © {new Date().getFullYear()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
