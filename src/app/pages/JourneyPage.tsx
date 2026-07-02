import { motion } from "motion/react";
import { Shield, BookOpen, FileCode2, Palette, Braces, Code2, Atom, Zap, Server, Bot } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { SectionLabel } from "../components/SectionLabel";
import { Particles } from "../components/Particles";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import { BackToTop } from "../layout/BackToTop";
import { ScrollProgress } from "../layout/ScrollProgress";

const iconMap: Record<string, React.ElementType> = {
  Shield, BookOpen, FileCode2, Palette, Braces, Code2, Atom, Zap, Server, Bot,
};

const steps = [
  { title: "Segurança Patrimonial", desc: "Minha trajetória começou na segurança patrimonial, onde desenvolvi disciplina, responsabilidade e visão estratégica — habilidades que hoje aplico no desenvolvimento de software.", icon: "Shield" },
  { title: "Primeiros Estudos", desc: "Decidi migrar para tecnologia e comecei a estudar programação por conta própria. Descobri um novo mundo de possibilidades.", icon: "BookOpen" },
  { title: "HTML", desc: "Dominei a estruturação semântica de páginas web, aprendendo a criar bases sólidas e acessíveis para qualquer projeto.", icon: "FileCode2" },
  { title: "CSS", desc: "Aprendi estilização avançada, animações, responsividade e frameworks como Tailwind. O design ganhou vida.", icon: "Palette" },
  { title: "JavaScript", desc: "Mergulhei na linguagem que trouxe vida às minhas aplicações. Lógica, eventos, async, e todo o ecossistema.", icon: "Braces" },
  { title: "TypeScript", desc: "Adicionei tipagem robusta aos meus projetos, garantindo mais segurança, escalabilidade e código autodocumentado.", icon: "Code2" },
  { title: "React", desc: "Dominei o ecossistema React, criando interfaces modernas, componentizadas e com experiências fluidas para o usuário.", icon: "Atom" },
  { title: "Projetos Reais", desc: "Construí aplicações completas do zero ao deploy, aplicando na prática tudo que aprendi e resolvendo problemas reais.", icon: "Zap" },
  { title: "Desenvolvedor Full Stack", desc: "Integro front-end e back-end com eficiência, criando soluções completas, escaláveis e de alto valor.", icon: "Server" },
  { title: "Especialização em IA", desc: "Utilizo Inteligência Artificial como aliada estratégica para ampliar produtividade, acelerar aprendizado e inovar.", icon: "Bot" },
];

export default function JourneyPage() {
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
                  Timeline
                </span>
              </div>
              <h1
                className="mb-4"
                style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.92, color: "#F5F5F5" }}
              >
                Minha{" "}
                <span style={{ color: "#B3001B" }}>Jornada</span>
              </h1>
              <p className="text-xl mx-auto max-w-2xl leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A" }}>
                Da segurança patrimonial ao desenvolvimento full stack com IA.
              </p>
              <p className="mt-4 mx-auto max-w-xl" style={{ fontFamily: "Inter, sans-serif", color: "rgba(138,138,138,0.7)", fontSize: "0.95rem" }}>
                Cada passo me trouxe até aqui. Cada desafio me preparou para o próximo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Vertical */}
        <section className="py-24" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center mb-20">
              <SectionLabel>Trajetória</SectionLabel>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5" }}>
                Do Início ao{" "}
                <span style={{ color: "#B3001B" }}>Full Stack</span>
              </h2>
            </FadeIn>

            <div className="relative max-w-4xl mx-auto">
              <div
                className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
                style={{ background: "linear-gradient(to bottom, transparent, #B3001B 5%, rgba(179,0,27,0.3) 95%, transparent)" }}
              />

              <div className="space-y-12">
                {steps.map((step, i) => {
                  const Icon = iconMap[step.icon];
                  const isLeft = i % 2 === 0;
                  return (
                    <FadeIn key={i} delay={i * 0.06} x={isLeft ? -20 : 20} y={0}>
                      <div className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                        <div className={`flex-1 ${isLeft ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                          <div
                            className="p-6 rounded-2xl transition-all duration-300"
                            style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.12)" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.4)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.12)"; }}
                          >
                            <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(179,0,27,0.1)" }}>
                                {Icon && <Icon size={18} style={{ color: "#B3001B" }} />}
                              </div>
                              <h3 style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "1.05rem" }}>
                                {step.title}
                              </h3>
                            </div>
                            <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.875rem", lineHeight: 1.65 }}>
                              {step.desc}
                            </p>
                          </div>
                        </div>

                        <div
                          className="hidden md:flex items-center justify-center w-16 h-16 rounded-full flex-shrink-0 z-10 relative"
                          style={{ background: "#050505", border: "2px solid #B3001B", boxShadow: "0 0 25px rgba(179,0,27,0.35)" }}
                        >
                          <motion.div
                            className="w-3 h-3 rounded-full"
                            style={{ background: "#B3001B" }}
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>

                        <div className="flex-1 hidden md:block" />
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32" style={{ background: "#050505" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ background: "rgba(179,0,27,0.08)", border: "1px solid rgba(179,0,27,0.25)" }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: "#FF1744", boxShadow: "0 0 8px #FF1744" }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#B3001B", fontFamily: "Inter, sans-serif" }}>
                  Próximo Capítulo
                </span>
              </div>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5", marginBottom: 16 }}>
                Esta Jornada Está{" "}
                <span style={{ color: "#B3001B" }}>Apenas Começando</span>
              </h2>
              <p className="mx-auto max-w-xl mb-10" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                Estou em busca da minha primeira oportunidade como Desenvolvedor Full Stack. 
                Se você busca um profissional dedicado, criativo e em constante evolução, 
                vamos conversar.
              </p>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
