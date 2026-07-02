import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { SectionLabel } from "../components/SectionLabel";
import { PROJECTS } from "../data/data";

export function Projects() {
  const [active, setActive] = useState("todos");
  const cats = [
    { id: "todos", label: "Todos" },
    { id: "web", label: "Web" },
    { id: "ia", label: "IA" },
  ];
  const filtered = active === "todos" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projetos" className="py-32" style={{ background: "#080808" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <FadeIn className="text-center mb-12">
          <SectionLabel>Projetos</SectionLabel>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#F5F5F5" }}>
            Meu <span style={{ color: "#B3001B" }}>Trabalho</span>
          </h2>
          <p className="mt-4 mx-auto" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", maxWidth: 480, fontSize: "0.95rem" }}>
            Projetos que demonstram capacidade técnica, criatividade e atenção aos detalhes.
          </p>
        </FadeIn>

        <FadeIn className="flex justify-center gap-3 mb-12">
          {cats.map((cat) => (
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
                    {proj.category}
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
  );
}
