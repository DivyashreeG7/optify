import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, MessageSquare, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarLetter: string;
  quote: string;
  rating: number;
}

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews: TestimonialItem[] = [
    {
      id: "1",
      name: "Chef Raymond Chen",
      role: "Owner & Executive Chef",
      company: "Gourmet Grill & Lounge",
      avatarLetter: "R",
      quote: "Team Optify delivered our website in record time. Reservations skyrocketed by 40% in our first month because the reservation workflow is so simple and fast on mobile. Aidan is a wizard with design and interactions!",
      rating: 5,
    },
    {
      id: "2",
      name: "Elena Rostova",
      role: "Operations Director",
      company: "IronPulse Fitness Hub",
      avatarLetter: "E",
      quote: "Our gym members love the interactive scheduler Optify built. It functions perfectly on ultra-wide screens and mobile. Their transparency and ongoing technical support has been invaluable to our scaling strategy.",
      rating: 5,
    },
    {
      id: "3",
      name: "Marcus Vance",
      role: "Principal Broker",
      company: "Havenly Real Estate",
      avatarLetter: "M",
      quote: "We needed a premium visual-heavy sitemap and catalog browser, and Optify exceeded expectations. The Lighthouse performance scores on our property views sit at a comfortable 100/100. Absolutely spectacular!",
      rating: 5,
    },
    {
      id: "4",
      name: "Sofia Gabor",
      role: "Creative Director",
      company: "VogueSphere Boutique",
      avatarLetter: "S",
      quote: "Optify combined high-end fashion design language with robust Stripe shopping. Our checkout abandonment rates fell by half since moving off our old sluggish template system. They are true craftsmen.",
      rating: 5,
    },
  ];

  // Auto scroll testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#FFF8F0] dark:bg-[#0F1117] overflow-hidden border-t border-gray-200/40 dark:border-white/5">
      {/* Background graphics */}
      <div className="absolute top-[20%] right-[10%] h-[350px] w-[350px] rounded-full bg-[#FF7A00]/5 blur-[120px] pointer-events-none" />

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
              Endorsements
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trusted by Builders. <span className="text-[#FF7A00]">Approved by Clients.</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl font-sans text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Don't just take our word for it. Here is what leading founders and business operators have to say about partnering with Team Optify.
          </motion.p>
        </div>

        {/* Testimonial slider showcase */}
        <div className="max-w-3xl mx-auto relative px-4">
          <div className="relative min-h-[250px] flex items-center justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4 }}
                className="w-full rounded-3xl glass-panel p-8 sm:p-12 shadow-xl border border-gray-200/40 dark:border-white/5 relative"
              >
                {/* Visual Quotation marks */}
                <span className="absolute top-6 left-6 font-serif text-7xl text-[#FF7A00]/10 select-none pointer-events-none">
                  “
                </span>

                <div className="space-y-6 relative z-10">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(reviews[activeIndex].rating)].map((_, idx) => (
                      <Star key={idx} size={15} fill="currentColor" />
                    ))}
                  </div>

                  {/* Review Quote text */}
                  <p className="font-sans text-base sm:text-lg text-gray-800 dark:text-gray-200 font-light leading-relaxed italic">
                    "{reviews[activeIndex].quote}"
                  </p>

                  {/* Author Meta Details */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF7A00] to-[#FF9D2E] text-white font-display text-lg font-black shadow-md">
                      {reviews[activeIndex].avatarLetter}
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-gray-900 dark:text-white leading-tight">
                        {reviews[activeIndex].name}
                      </h4>
                      <p className="font-sans text-xs text-[#FF7A00] font-semibold">
                        {reviews[activeIndex].role}, <span className="opacity-80 text-gray-500 dark:text-gray-400 font-normal">{reviews[activeIndex].company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows for slider */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-[#FF7A00] hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Previous review"
            >
              <ArrowLeft size={16} />
            </button>
            
            {/* Slider Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === dotIdx ? "w-6 bg-[#FF7A00]" : "w-2 bg-gray-300 dark:bg-white/10"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-[#FF7A00] hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Next review"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
