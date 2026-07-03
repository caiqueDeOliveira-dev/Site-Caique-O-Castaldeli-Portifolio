import { motion } from "motion/react";
import { Download, CheckCircle2, Briefcase, GraduationCap, Star } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { SectionLabel } from "../components/SectionLabel";
import { Particles } from "../components/Particles";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import { BackToTop } from "../layout/BackToTop";
import { ScrollProgress } from "../layout/ScrollProgress";
import { CURRICULO } from "../data/data";

export default function Curriculo() {
  return (
    <div style={{ background: "#050505", minHeight: "100vh" }}>
      <Particles />
      <ScrollProgress />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden" style={{ paddingTop: 100 }}>
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
                  Currículo
                </span>
              </div>
              <h1
                className="mb-4"
                style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.92, color: "#F5F5F5" }}
              >
                Currículo
              </h1>
              <p className="text-xl mx-auto max-w-2xl leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A" }}>
                Caique O Castaldeli • Desenvolvedor Full Stack
              </p>
            </motion.div>
          </div>
        </section>

        {/* Download Button */}
        <section style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 24px" }}>
            <FadeIn className="text-center">
              <a
                href="/Curriculo-Caiquedeoliveira.dev.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{ background: "#B3001B", color: "#F5F5F5", fontFamily: "Inter, sans-serif", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 34px rgba(179,0,27,0.5)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              >
                <Download size={16} /> Baixar Currículo (PDF)
              </a>
            </FadeIn>
          </div>
        </section>

        {/* Resumo */}
        <section className="py-24" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn>
              <div
                className="p-8 rounded-3xl relative overflow-hidden mb-12"
                style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.15)" }}
              >
                <div
                  className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(179,0,27,0.08) 0%, transparent 70%)" }}
                />
                <SectionLabel>Resumo</SectionLabel>
                <p className="mt-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem", maxWidth: 800 }}>
                  {CURRICULO.summary}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div
                className="p-8 rounded-3xl relative overflow-hidden mb-12"
                style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.15)" }}
              >
                <SectionLabel>Objetivo Profissional</SectionLabel>
                <p className="mt-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem", maxWidth: 800 }}>
                  {CURRICULO.objective}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Experiência */}
        <section className="py-24" style={{ background: "#050505" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="mb-12">
              <SectionLabel>Experiência</SectionLabel>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5", marginTop: 8 }}>
                Trajetória <span style={{ color: "#B3001B" }}>Profissional</span>
              </h2>
            </FadeIn>
            <div className="space-y-6">
              {CURRICULO.experience.map((exp, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div
                    className="p-6 rounded-2xl flex items-start gap-5 transition-all duration-300"
                    style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.12)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.45)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(179,0,27,0.1)" }}>
                      <Briefcase size={22} style={{ color: "#B3001B" }} />
                    </div>
                    <div>
                      <span style={{ fontFamily: "Inter, sans-serif", color: "#B3001B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em" }}>
                        {exp.period}
                      </span>
                      <h3 style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "1rem", marginTop: 4, marginBottom: 6 }}>{exp.title}</h3>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.85rem", lineHeight: 1.6 }}>{exp.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Hard & Soft Skills */}
        <section className="py-24" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <FadeIn>
                <SectionLabel>Hard Skills</SectionLabel>
                <h2 className="mb-8" style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "#F5F5F5" }}>
                  Competências <span style={{ color: "#B3001B" }}>Técnicas</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CURRICULO.hardSkills.map((skill, i) => (
                    <FadeIn key={i} delay={Math.min(i * 0.03, 0.3)}>
                      <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.1)" }}>
                        <CheckCircle2 size={14} style={{ color: "#B3001B", flexShrink: 0 }} />
                        <span style={{ fontFamily: "Inter, sans-serif", color: "#F5F5F5", fontSize: "0.85rem" }}>{skill}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <SectionLabel>Soft Skills</SectionLabel>
                <h2 className="mb-8" style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "#F5F5F5" }}>
                  Competências <span style={{ color: "#B3001B" }}>Comportamentais</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CURRICULO.softSkills.map((skill, i) => (
                    <FadeIn key={i} delay={Math.min(i * 0.03, 0.3)}>
                      <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.1)" }}>
                        <Star size={14} style={{ color: "#B3001B", flexShrink: 0 }} />
                        <span style={{ fontFamily: "Inter, sans-serif", color: "#F5F5F5", fontSize: "0.85rem" }}>{skill}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Cursos */}
        <section className="py-24" style={{ background: "#050505" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="mb-12">
              <SectionLabel>Formação</SectionLabel>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5", marginTop: 8 }}>
                Cursos & <span style={{ color: "#B3001B" }}>Certificados</span>
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CURRICULO.courses.map((course, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div
                    className="p-5 rounded-2xl transition-all duration-300"
                    style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.12)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.4)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "rgba(179,0,27,0.1)" }}>
                      <GraduationCap size={18} style={{ color: "#B3001B" }} />
                    </div>
                    <h3 style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "0.9rem", marginBottom: 4 }}>
                      {course.name}
                    </h3>
                    <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.78rem" }}>
                      {course.provider} • {course.year}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
