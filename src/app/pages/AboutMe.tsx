import { motion } from "motion/react";
import { Code2, Bot, Target, Heart, Lightbulb, Users } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { SectionLabel } from "../components/SectionLabel";
import { Particles } from "../components/Particles";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import { BackToTop } from "../layout/BackToTop";
import { ScrollProgress } from "../layout/ScrollProgress";
import { ABOUT_TIMELINE, ABOUT_VALUES } from "../data/data";

const valuesIcons = [Code2, Target, Bot, Users, Heart, Lightbulb];

export default function AboutMe() {
  return (
    <div style={{ background: "#050505", minHeight: "100vh" }}>
      <Particles />
      <ScrollProgress />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden" style={{ paddingTop: 100 }}>
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
                  Sobre Mim
                </span>
              </div>
              <h1
                className="mb-4"
                style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.92, color: "#F5F5F5" }}
              >
                Minha{" "}
                <span style={{ color: "#B3001B" }}>História</span>
              </h1>
              <p className="text-xl mx-auto max-w-2xl leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A" }}>
                Desenvolvedor Full Stack • Criador de Soluções com IA
              </p>
              <p className="mt-4 mx-auto max-w-xl" style={{ fontFamily: "Inter, sans-serif", color: "rgba(138,138,138,0.7)", fontSize: "0.95rem" }}>
                Transformando ideias em experiências digitais através de código, criatividade e Inteligência Artificial.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Minha História */}
        <section className="py-24" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <SectionLabel>Trajetória</SectionLabel>
                <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5", marginBottom: 24 }}>
                  De onde{" "}
                  <span style={{ color: "#B3001B" }}>Venho</span>
                </h2>
                <p className="leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                  Minha jornada na tecnologia começou em 2022, movido por uma curiosidade genuína sobre 
                  como as coisas funcionam e o poder de criar através do código. Antes disso, atuei na 
                  segurança patrimonial, onde desenvolvi disciplina, responsabilidade e visão estratégica 
                  — habilidades que hoje aplico no desenvolvimento de software.
                </p>
                <p className="leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                  A transição de carreira foi desafiadora, mas cada obstáculo superado me fortaleceu. 
                  Dediquei horas intermináveis de estudo, construí projetos reais e mergulhei de cabeça 
                  no ecossistema web. Hoje, domino React, TypeScript, Node.js e integro Inteligência 
                  Artificial como aliada estratégica em meus projetos.
                </p>
                <p className="leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                  Acredito que tecnologia é, acima de tudo, sobre pessoas. Cada linha de código que 
                  escrevo carrega intenção, cuidado e o desejo de criar soluções que realmente fazem 
                  a diferença na vida de quem as utiliza.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div
                  className="p-8 rounded-3xl relative overflow-hidden"
                  style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.15)" }}
                >
                  <div
                    className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(179,0,27,0.08) 0%, transparent 70%)" }}
                  />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(179,0,27,0.12)" }}>
                      <Code2 size={24} style={{ color: "#B3001B" }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 700, fontSize: "1.1rem" }}>
                        Caique O Castaldeli
                      </p>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.8rem" }}>
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#B3001B", boxShadow: "0 0 6px #B3001B" }} />
                      <span style={{ fontFamily: "Inter, sans-serif", color: "#F5F5F5", fontSize: "0.9rem" }}>Transição de carreira para tecnologia</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#B3001B", boxShadow: "0 0 6px #B3001B" }} />
                      <span style={{ fontFamily: "Inter, sans-serif", color: "#F5F5F5", fontSize: "0.9rem" }}>Especialização em React & TypeScript</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#B3001B", boxShadow: "0 0 6px #B3001B" }} />
                      <span style={{ fontFamily: "Inter, sans-serif", color: "#F5F5F5", fontSize: "0.9rem" }}>Integração com Inteligência Artificial</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#B3001B", boxShadow: "0 0 6px #B3001B" }} />
                      <span style={{ fontFamily: "Inter, sans-serif", color: "#F5F5F5", fontSize: "0.9rem" }}>Mentalidade de aprendizado contínuo</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Objetivo e Filosofia */}
        <section className="py-24" style={{ background: "#050505" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <FadeIn>
                <SectionLabel>Objetivo</SectionLabel>
                <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5", marginBottom: 24 }}>
                  Propósito{" "}
                  <span style={{ color: "#B3001B" }}>Profissional</span>
                </h2>
                <p className="leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                  Meu objetivo é conquistar minha primeira oportunidade como Desenvolvedor Full Stack, 
                  contribuindo com dedicação, criatividade e uma perspectiva única de quem entende que 
                  tecnologia é, acima de tudo, sobre pessoas.
                </p>
                <p className="leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                  Busco um ambiente onde possa crescer, aprender com profissionais experientes e 
                  contribuir com soluções que gerem impacto real. Acredito no poder da colaboração e 
                  na importância de construir produtos que resolvam problemas genuínos.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div
                  className="relative p-8 rounded-3xl"
                  style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.15)" }}
                >
                  <div
                    className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(179,0,27,0.1) 0%, transparent 70%)" }}
                  />
                  <span style={{ fontFamily: "Sora, sans-serif", color: "#B3001B", fontSize: "4rem", lineHeight: 1 }}>"</span>
                  <p className="mt-2 leading-relaxed" style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontSize: "1.25rem", fontWeight: 600 }}>
                    Tecnologia é a arte de transformar imaginação em realidade.
                  </p>
                  <p className="mt-4" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.85rem" }}>
                    Cada desafio é uma oportunidade de aprender, evoluir e criar algo que faça diferença.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* IA como Aliada */}
        <section className="py-24" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn x={-30} y={0}>
                <div
                  className="p-8 rounded-3xl relative overflow-hidden"
                  style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.15)" }}
                >
                  <div
                    className="absolute -top-20 -left-20 w-60 h-60 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(179,0,27,0.08) 0%, transparent 70%)" }}
                  />
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "rgba(179,0,27,0.12)" }}>
                    <Bot size={26} style={{ color: "#B3001B" }} />
                  </div>
                  <h3 style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 700, fontSize: "1.2rem", marginBottom: 12 }}>
                    IA como <span style={{ color: "#B3001B" }}>Aliada</span>
                  </h3>
                  <p className="leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.9rem" }}>
                    Utilizo Inteligência Artificial como ferramenta estratégica para ampliar minha 
                    produtividade, acelerar aprendizado e criar soluções mais inovadoras.
                  </p>
                  <p className="leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.9rem" }}>
                    De assistência na escrita de código a otimização de fluxos de trabalho, a IA me 
                    permite entregar resultados de maior qualidade em menos tempo — sem nunca substituir 
                    o pensamento crítico e a criatividade humana.
                  </p>
                </div>
              </FadeIn>
              <FadeIn x={30} y={0} delay={0.12}>
                <SectionLabel>Filosofia</SectionLabel>
                <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5", marginBottom: 24 }}>
                  Inteligência{" "}
                  <span style={{ color: "#B3001B" }}>Amplificada</span>
                </h2>
                <p className="leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                  Acredito que o futuro do desenvolvimento não é sobre ser substituído pela IA, 
                  mas sobre saber utilizá-la como amplificadora de capacidades humanas.
                </p>
                <p className="leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                  Minha abordagem combina conhecimento técnico sólido com uso estratégico de 
                  ferramentas de IA, resultando em código mais limpo, decisões mais informadas 
                  e entregas mais rápidas.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Tecnologias Favoritas */}
        <section className="py-24" style={{ background: "#050505" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center mb-16">
              <SectionLabel>Stack</SectionLabel>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5" }}>
                Tecnologias <span style={{ color: "#B3001B" }}>Favoritas</span>
              </h2>
              <p className="mt-4 mx-auto max-w-lg" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                Ferramentas que mais utilizo e com as quais tenho maior afinidade.
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: "React", desc: "UI declarativa e componentizada" },
                { name: "TypeScript", desc: "Tipagem robusta e escalável" },
                { name: "Node.js", desc: "Runtime server-side eficiente" },
                { name: "Next.js", desc: "Framework full-stack completo" },
                { name: "Tailwind CSS", desc: "Estilização utilitária rápida" },
                { name: "Motion", desc: "Animações fluidas e cinematográficas" },
                { name: "PostgreSQL", desc: "Banco de dados relacional" },
                { name: "Git", desc: "Controle de versão e colaboração" },
              ].map((tech, i) => (
                <FadeIn key={tech.name} delay={Math.min(i * 0.04, 0.4)}>
                  <div
                    className="p-5 rounded-2xl flex flex-col items-center text-center gap-3 transition-all duration-300 cursor-default"
                    style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.1)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(179,0,27,0.5)";
                      el.style.boxShadow = "0 0 28px rgba(179,0,27,0.1)";
                      el.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(179,0,27,0.1)";
                      el.style.boxShadow = "none";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <div>
                      <p style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "0.85rem" }}>
                        {tech.name}
                      </p>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.72rem", marginTop: 2, lineHeight: 1.4 }}>
                        {tech.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-24" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center mb-16">
              <SectionLabel>Valores</SectionLabel>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5" }}>
                Meus <span style={{ color: "#B3001B" }}>Princípios</span>
              </h2>
              <p className="mt-4 mx-auto max-w-lg" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                O que me guia como profissional e como pessoa.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ABOUT_VALUES.map((v, i) => {
                const Icon = valuesIcons[i];
                return (
                  <FadeIn key={i} delay={i * 0.07}>
                    <div
                      className="p-6 rounded-2xl h-full transition-all duration-300"
                      style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.12)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.45)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                    >
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(179,0,27,0.1)" }}>
                        <Icon size={20} style={{ color: "#B3001B" }} />
                      </div>
                      <h3 style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "0.95rem", marginBottom: 6 }}>{v.title}</h3>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.85rem", lineHeight: 1.6 }}>{v.desc}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24" style={{ background: "#050505" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center mb-16">
              <SectionLabel>Linha do Tempo</SectionLabel>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5" }}>
                Minha <span style={{ color: "#B3001B" }}>Evolução</span>
              </h2>
              <p className="mt-4 mx-auto max-w-lg" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                Cada ano marcou um passo importante na minha jornada.
              </p>
            </FadeIn>
            <div className="space-y-8 max-w-3xl mx-auto">
              {ABOUT_TIMELINE.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full" style={{ background: "#B3001B", boxShadow: "0 0 14px rgba(179,0,27,0.5)" }} />
                      {i < ABOUT_TIMELINE.length - 1 && <div className="w-px flex-1" style={{ background: "rgba(179,0,27,0.2)", minHeight: 40 }} />}
                    </div>
                    <div className="pb-8">
                      <span style={{ fontFamily: "Inter, sans-serif", color: "#B3001B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em" }}>
                        {item.year}
                      </span>
                      <h3 style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "1.1rem", marginTop: 4 }}>{item.title}</h3>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.875rem", marginTop: 4 }}>{item.desc}</p>
                    </div>
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
