import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Use motion values for smoother, hardware-accelerated movement
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Add spring configuration for natural trailing effect
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on desktop/pointing devices
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);

      // Set global CSS variables for custom cursor glow highlights (e.g. background grid tracking)
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add listeners for hover interaction with clickable items
    const addHoverListeners = () => {
      const clickables = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, .hover-target'
      );
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Initial setup and dynamic list updates
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Interactive trailing dot with glowing ring */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: isHovered ? 56 : 32,
          height: isHovered ? 56 : 32,
          border: "1.5px solid #FF7A00",
          backgroundColor: isHovered ? "rgba(255, 122, 0, 0.08)" : "transparent",
          boxShadow: isHovered
            ? "0 0 20px rgba(255, 122, 0, 0.3)"
            : "0 0 10px rgba(255, 122, 0, 0.1)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      {/* Small inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none rounded-full bg-[#FF7A00]"
        style={{
          x: cursorX,
          y: cursorY,
          width: 6,
          height: 6,
          transform: "translate(13px, 13px)", // Center it perfectly inside the 32px ring
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};
