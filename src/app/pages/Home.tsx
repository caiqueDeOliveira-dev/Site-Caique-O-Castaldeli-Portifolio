import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Particles } from "../components/Particles";
import { LoadingScreen } from "../layout/LoadingScreen";
import { CustomCursor } from "../layout/CustomCursor";
import { ScrollProgress } from "../layout/ScrollProgress";
import { Navbar } from "../layout/Navbar";
import { BackToTop } from "../layout/BackToTop";
import { Footer } from "../layout/Footer";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Technologies } from "../sections/Technologies";
import { Projects } from "../sections/Projects";
import { Journey } from "../sections/Journey";
import { Stats } from "../sections/Stats";
import { Testimonials } from "../sections/Testimonials";
import { Contact } from "../sections/Contact";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.overflow = loaded ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [loaded]);

  return (
    <div style={{ background: "#050505", minHeight: "100vh" }}>
      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Particles />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Technologies />
            <Projects />
            <Journey />
            <Stats />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </motion.div>
      )}
    </div>
  );
}
