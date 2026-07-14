import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first item

  const faqs: FAQItem[] = [
    {
      question: "How long does a custom project take from start to launch?",
      answer: "A standard custom business website or portfolio takes about 2 to 3 weeks. Complex, multi-page e-commerce or large SaaS applications requiring customized database tables and API integrations typically take between 4 to 6 weeks. We use agile sprints, updating you twice a week.",
    },
    {
      question: "Do you redesign existing websites built on templates or old setups?",
      answer: "Yes, we specialize in high-performance website redesigns. We conduct a full structural audit of your legacy site, preserve your established SEO Google indexed rankings, restructure layouts, compress media files, and rebuild the interface in clean React to boost speeds by up to 500%.",
    },
    {
      question: "Do you provide hosting setups and ongoing maintenance support?",
      answer: "Yes! We set up ultra-secure, containerized Cloud Run or Vercel edge node hostings. With our monthly retainer package, we handle framework security updates, weekly NPM package patches, server scaling audits, sitemap indexing checkups, and provide dedicated hours for monthly content changes.",
    },
    {
      question: "Can I request revisions during design and engineering?",
      answer: "Absolutely. We are fully committed to your exact vision. During the UI/UX prototyping stage (Step 3), we have unlimited design rounds until you approve the precise mockups. During the active coding phase, we coordinate previews, enabling minor adjustments before production compile launch.",
    },
    {
      question: "Who owns the code and final design ownership rights?",
      answer: "You own 100% of everything. Once final payments are processed, the complete source code, custom graphics, vector sitemaps, domains, and compiled container structures belong strictly to you. We transfer everything to your personal GitHub repository and web hosting directories.",
    },
    {
      question: "How do project payments work for custom builds?",
      answer: "We offer structured milestones to keep projects aligned and safe. Typically, we require a 50% mobilization deposit before kickoff discussions begin. The remaining 50% is invoiced after the Testing phase (Step 5) is completed and you approve the production sandbox right before the final launch.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#FFF8F0] dark:bg-[#0F1117] overflow-hidden border-t border-gray-200/40 dark:border-white/5">
      {/* Background graphics */}
      <div className="absolute top-[10%] left-[5%] h-[300px] w-[300px] rounded-full bg-[#FF7A00]/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <motion.div
            className="inline-flex items-center space-x-1.5 rounded-full bg-[#FF7A00]/10 px-3 py-1 border border-[#FF7A00]/20"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <HelpCircle size={12} className="text-[#FF7A00]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF7A00]">
              Inquiries
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked <span className="text-[#FF7A00]">Questions.</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl font-sans text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Got questions about timelines, payments, or ownership? Here is how Team Optify ensures a clear, professional engagement structure.
          </motion.p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                className="rounded-2xl glass-panel border border-gray-200/50 dark:border-white/5 overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                {/* Header Toggle Clickable Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-display font-bold text-gray-900 dark:text-white hover:text-[#FF7A00] transition-colors cursor-pointer text-sm sm:text-base leading-snug"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`h-7 w-7 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200/40 dark:border-white/10 flex items-center justify-center shrink-0 ml-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#FF7A00]/10 border-[#FF7A00]/20 text-[#FF7A00]" : "text-gray-400"
                    }`}
                  >
                    <ChevronDown size={14} />
                  </span>
                </button>

                {/* Answer collapsing panel using AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-gray-100 dark:border-white/5 font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
