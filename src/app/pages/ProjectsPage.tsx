import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { SectionLabel } from "../components/SectionLabel";
import { Particles } from "../components/Particles";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import { BackToTop } from "../layout/BackToTop";
import { ScrollProgress } from "../layout/ScrollProgress";
import { PROJECTS } from "../data/data";

const categories = [
  { id: "todos", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "ia", label: "IA" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("todos");
  const filtered = active === "todos" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div style={{ background: "#050505", minHeight: "100vh" }}>
      <Particles />
      <ScrollProgress />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden" style={{ paddingTop: 100 }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(179,0,27,0.1) 0%, transparent 70%)" }}
          />
          <div className="relative z-10 w-full" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ background: "rgba(179,0,27,0.08)", border: "1px solid rgba(179,0,27,0.25)" }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: "#FF1744", boxShadow: "0 0 8px #FF1744" }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#B3001B", fontFamily: "Inter, sans-serif" }}>
                  Portfólio
                </span>
              </div>
              <h1
                className="mb-4"
                style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.92, color: "#F5F5F5" }}
              >
                Meus{" "}
                <span style={{ color: "#B3001B" }}>Projetos</span>
              </h1>
              <p className="text-xl mx-auto max-w-2xl leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A" }}>
                Trabalhos que demonstram capacidade técnica, criatividade e atenção aos detalhes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filtros */}
        <section style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="flex justify-center gap-3 pb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className="px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    background: active === cat.id ? "#B3001B" : "#0D0D0D",
                    color: active === cat.id ? "#F5F5F5" : "#8A8A8A",
                    border: `1px solid ${active === cat.id ? "#B3001B" : "rgba(179,0,27,0.12)"}`,
                    boxShadow: active === cat.id ? "0 0 22px rgba(179,0,27,0.35)" : "none",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </FadeIn>
          </div>
        </section>

        {/* Projetos Grid */}
        <section className="py-24" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {filtered.map((proj, i) => (
                  <motion.div
                    key={proj.id}
                    className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 cursor-default"
                    style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.1)" }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(179,0,27,0.45)";
                      el.style.boxShadow = "0 8px 40px rgba(179,0,27,0.08)";
                      el.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(179,0,27,0.1)";
                      el.style.boxShadow = "none";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <div className="h-1" style={{ background: "linear-gradient(90deg, #B3001B, #FF1744, #B3001B)" }} />
                    <div className="p-6 flex flex-col flex-1">
                      <span style={{ fontFamily: "Inter, sans-serif", color: "#B3001B", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>
                        {proj.category === "web" ? "Web" : "Inteligência Artificial"}
                      </span>
                      <h3 className="mt-2 mb-3" style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 700, fontSize: "1.2rem" }}>
                        {proj.title}
                      </h3>
                      <p className="leading-relaxed flex-1" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.87rem" }}>
                        {proj.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-5 mb-5">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-lg font-medium"
                            style={{ background: "rgba(179,0,27,0.09)", color: "#B3001B", border: "1px solid rgba(179,0,27,0.2)", fontFamily: "Inter, sans-serif" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-4" style={{ borderTop: "1px solid rgba(179,0,27,0.1)" }}>
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm transition-colors duration-200" style={{ color: "#8A8A8A", fontFamily: "Inter, sans-serif", textDecoration: "none" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#F5F5F5"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8A8A8A"; }}
                        >
                          <Github size={14} /> GitHub
                        </a>
                        <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm transition-colors duration-200" style={{ color: "#8A8A8A", fontFamily: "Inter, sans-serif", textDecoration: "none" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#B3001B"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8A8A8A"; }}
                        >
                          <ExternalLink size={14} /> Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
