import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface CTASectionProps {
  onTalkClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onTalkClick }) => {
  return (
    <section className="relative py-16 bg-[#FFF8F0] dark:bg-[#0F1117] overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glowing floating banner */}
        <motion.div
          className="relative rounded-3xl bg-gradient-to-br from-[#171923] to-[#0F1117] p-8 sm:p-12 border border-[#FF7A00]/20 shadow-xl text-center space-y-6 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle background glow blobs */}
          <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7A00]/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center space-y-4">
            
            {/* Tag badge */}
            <div className="inline-flex items-center space-x-1.5 rounded-full bg-[#FF7A00]/10 px-3 py-1 border border-[#FF7A00]/20">
              <Sparkles size={11} className="text-[#FF7A00] animate-pulse" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#FF7A00]">
                Let's Partner
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight max-w-xl">
              Ready to Accelerate Your <span className="text-[#FF7A00]">Online Authority?</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-gray-400 font-light max-w-md leading-relaxed">
              Don't compromise on templates or slow servers. Build a custom, premium web platform with Aidan, Julian, and Marcus.
            </p>

            <div className="pt-4 w-full sm:w-auto">
              <button
                onClick={onTalkClick}
                className="w-full sm:w-auto relative group overflow-hidden rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF9D2E] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg hover:shadow-[0_0_20px_rgba(255,122,0,0.4)] transition-all cursor-pointer"
              >
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  Book Free Consultation{" "}
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#FF9D2E] to-[#FF7A00] transition-transform duration-300 ease-out -z-10" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
