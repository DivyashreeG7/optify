import React from "react";
import { motion } from "motion/react";

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* CSS Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.45] dark:opacity-[0.25]" />

      {/* Radiant Gradient Blurs in Light/Dark */}
      <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-[#FF7A00]/10 to-[#FF9D2E]/5 blur-[80px] sm:blur-[120px] dark:from-[#FF7A00]/5 dark:to-[#FF9D2E]/2 animate-blob" />
      
      <div className="absolute bottom-[20%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-bl from-[#FF9D2E]/8 to-[#FF7A00]/5 blur-[90px] sm:blur-[140px] dark:from-[#FF9D2E]/4 dark:to-transparent animate-blob" 
        style={{ animationDelay: "4s" }} 
      />

      <div className="absolute top-[40%] right-[30%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-gradient-to-r from-[#FF7A00]/8 to-[#FF9D2E]/5 blur-[70px] sm:blur-[100px] dark:from-[#FF7A00]/3 dark:to-transparent animate-blob" 
        style={{ animationDelay: "7s" }} 
      />

      {/* Floating vector circles and crosses */}
      <div className="absolute inset-0">
        {/* Floating Circle 1 */}
        <motion.div
          className="absolute top-[15%] right-[15%] w-12 h-12 rounded-full border border-gray-300/30 dark:border-white/10"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Circle 2 */}
        <motion.div
          className="absolute bottom-[25%] left-[10%] w-20 h-20 rounded-full border border-gray-300/20 dark:border-white/5"
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Plus Accent 1 */}
        <motion.div
          className="absolute top-[60%] left-[20%] text-gray-300/40 dark:text-white/10 font-thin text-4xl font-mono select-none"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          +
        </motion.div>

        {/* Floating Plus Accent 2 */}
        <motion.div
          className="absolute top-[35%] right-[35%] text-gray-300/30 dark:text-white/10 font-thin text-3xl font-mono select-none"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          +
        </motion.div>
      </div>

      {/* Subtle bottom gradient to blend section transitions */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FFF8F0] dark:from-[#0F1117] to-transparent" />
    </div>
  );
};
