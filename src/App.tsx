import { ThemeProvider } from "./components/ThemeContext";
import { Loader } from "./components/Loader";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { Navbar } from "./components/Navbar";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - 80; // Sticky navbar height offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <ThemeProvider>
      {/* Premium custom loading intro screen */}
      <Loader />

      {/* Hardware-accelerated trailing desktop mouse glow */}
      <CustomCursor />

      {/* Top progress indicator & floating Back to Top button */}
      <ScrollProgress />

      {/* Main Container */}
      <div className="relative min-h-screen bg-[#FFF8F0] dark:bg-[#0F1117] text-gray-900 dark:text-white overflow-x-hidden selection:bg-[#FF7A00]/20 selection:text-[#FF7A00]">
        
        {/* Animated fluid blobs and grid vector background */}
        <AnimatedBackground />

        {/* Sticky navigation bar */}
        <Navbar onLetTalkClick={() => scrollToSection("contact")} />

        {/* Hero Section */}
        <Hero
          onStartProjectClick={() => scrollToSection("contact")}
          onViewWorkClick={() => scrollToSection("projects")}
        />

        {/* Statistics Section */}
        <Stats />

        {/* About Section */}
        <About />

        {/* Grid Benefits Section */}
        <WhyChooseUs />

        {/* Services / Deliverables List */}
        <Services />

        {/* Timelines / Methodology Section */}
        <Process />

        {/* Projects Filter Grid & Sandboxes */}
        <Projects />

        {/* Star testimonials slider */}
        <Testimonials />

        {/* Collapsible FAQ accordion list */}
        <FAQ />

        {/* Workbook Contact Forms & details */}
        <Contact />

        {/* Floating CTA Banner */}
        <CTASection onTalkClick={() => scrollToSection("contact")} />

        {/* Structured Footer & Newsletter */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
