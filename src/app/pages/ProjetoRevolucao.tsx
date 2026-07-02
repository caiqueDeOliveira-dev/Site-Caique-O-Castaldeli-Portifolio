import { motion } from "motion/react";
import {
  ArrowRight, BookOpen, Target, Shield, Share2, Lightbulb,
  Clock, BarChart3, Instagram, Heart, Users,
  Globe, Sparkles, FileText, Camera,
} from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { SectionLabel } from "../components/SectionLabel";
import { StatCounter } from "../components/StatCounter";
import { useStats } from "../hooks/useStats";
import { Particles } from "../components/Particles";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import { BackToTop } from "../layout/BackToTop";
import { ScrollProgress } from "../layout/ScrollProgress";

import imgFranzFannon from "../../assets/images/Franz Fannon.jpg";
import imgPatriceLumumba from "../../assets/images/Patrice Lumumba.jpg";
import imgSalvadorAllende from "../../assets/images/Salvador Allende - Presidente do Chile.jpg";
import imgThomasSankara from "../../assets/images/Thomas Sankara.jpg";

const objetivos = [
  { icon: BookOpen, title: "Educar", desc: "Tornar o conhecimento histórico acessível a todos, independentemente da formação acadêmica." },
  { icon: Shield, title: "Conscientizar", desc: "Promover a reflexão sobre justiça social, direitos humanos e a importância da memória coletiva." },
  { icon: Share2, title: "Compartilhar", desc: "Divulgar histórias pouco conhecidas e eventos históricos que merecem ser lembrados." },
  { icon: Lightbulb, title: "Inspirar", desc: "Mostrar como as lutas e conquistas do passado podem nos inspirar a construir um futuro melhor." },
];

const topicos = [
  { icon: Globe, title: "História da Escravidão", desc: "Análise aprofundada do período escravocrata e suas consequências na sociedade contemporânea." },
  { icon: Heart, title: "Resistência Negra", desc: "Histórias de resistência, luta e superação do povo negro ao longo dos séculos." },
  { icon: BookOpen, title: "Abolicionismo", desc: "O movimento que lutou pelo fim da escravidão e seus principais protagonistas." },
  { icon: Users, title: "Povos Indígenas", desc: "A história e a cultura dos povos originários e sua luta por direitos e reconhecimento." },
  { icon: Shield, title: "Direitos Humanos", desc: "A evolução dos direitos humanos e as personalidades que dedicaram suas vidas a esta causa." },
];

const timeline = [
  { year: "2023", title: "A Ideia", desc: "Nasceu a visão de compartilhar conhecimento histórico de forma acessível e envolvente nas redes sociais." },
  { year: "2024", title: "Primeiros Posts", desc: "Conteúdo começou a ganhar tração com posts educativos sobre períodos históricos marcantes." },
  { year: "2025", title: "Crescimento", desc: "Expansão para múltiplas plataformas com formato próprio de storytelling histórico." },
  { year: "2026", title: "Reconhecimento", desc: "Projeto consolidado com centenas de conteúdos publicados e comunidade engajada." },
];

const conteudos = [
  { icon: FileText, title: "Posts Educativos", desc: "Conteúdo visual com informações históricas verificadas e linguisticamente acessível." },
  { icon: Camera, title: "Documentários", desc: "Séries de vídeos curtos contando histórias marcantes de luta e resistência." },
  { icon: Sparkles, title: "Curiosidades", desc: "Fatos históricos pouco conhecidos que surpreendem e enriquecem o conhecimento." },
];

export default function ProjetoRevolucao() {
  const { stats } = useStats();
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
                  Histórias Esquecidas
                </span>
              </div>
              <h1
                className="mb-4"
                style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.92, color: "#F5F5F5" }}
              >
                Projeto{" "}
                <span style={{ color: "#B3001B" }}>Revolução</span>
              </h1>
              <p className="text-xl mx-auto max-w-2xl leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A" }}>
                Conhecimento, memória e transformação através da história.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sobre */}
        <section className="py-24" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <SectionLabel>Sobre</SectionLabel>
                <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5", marginBottom: 24 }}>
                  Conhecimento, Memória e{" "}
                  <span style={{ color: "#B3001B" }}>Transformação</span>
                </h2>
                <p className="leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                  O Projeto Revolução nasceu da paixão por história e da crença de que conhecer o passado
                  é essencial para construir o futuro. Meu objetivo é compartilhar conteúdos educativos
                  de forma acessível e responsável, abordando temas que marcaram a humanidade.
                </p>
                <p className="leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                  Através de conteúdo visual e storytelling cuidadoso, exploro eventos, personagens e
                  períodos históricos, conectando o passado com questões contemporâneas e dando voz
                  a histórias que merecem ser lembradas.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div
                  className="p-8 rounded-3xl"
                  style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.15)" }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(179,0,27,0.12)" }}>
                      <BookOpen size={24} style={{ color: "#B3001B" }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 700, fontSize: "1.1rem" }}>
                        Projeto Revolução
                      </p>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.8rem" }}>
                        Divulgação histórica
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Conteúdo educativo e acessível",
                      "Histórias pouco conhecidas",
                      "Responsabilidade histórica",
                      "Impacto social",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#B3001B", boxShadow: "0 0 6px #B3001B" }} />
                        <span style={{ fontFamily: "Inter, sans-serif", color: "#F5F5F5", fontSize: "0.9rem" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Objetivos */}
        <section className="py-24" style={{ background: "#050505" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center mb-16">
              <SectionLabel>Objetivos</SectionLabel>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5" }}>
                Minha <span style={{ color: "#B3001B" }}>Missão</span>
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {objetivos.map((obj, i) => {
                const Icon = obj.icon;
                return (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div
                      className="p-8 rounded-2xl text-center transition-all duration-300"
                      style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.12)" }}
                    >
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(179,0,27,0.1)" }}>
                        <Icon size={26} style={{ color: "#B3001B" }} />
                      </div>
                      <h3 style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 700, fontSize: "1.05rem", marginBottom: 8 }}>{obj.title}</h3>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.87rem", lineHeight: 1.65 }}>{obj.desc}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Conteúdos */}
        <section className="py-24" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center mb-16">
              <SectionLabel>Conteúdos</SectionLabel>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5" }}>
                Temas{" "}
                <span style={{ color: "#B3001B" }}>Abordados</span>
              </h2>
              <p className="mt-4 mx-auto max-w-xl" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                O projeto aborda temas fundamentais para a compreensão da nossa história e sociedade.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {topicos.slice(0, 3).map((tema, i) => {
                const Icon = tema.icon;
                return (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div
                      className="p-6 rounded-2xl transition-all duration-300"
                      style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.12)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.4)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                    >
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(179,0,27,0.1)" }}>
                        <Icon size={20} style={{ color: "#B3001B" }} />
                      </div>
                      <h3 style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "0.95rem", marginBottom: 6 }}>{tema.title}</h3>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.85rem", lineHeight: 1.6 }}>{tema.desc}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {topicos.slice(3).map((tema, i) => {
                const Icon = tema.icon;
                return (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div
                      className="p-6 rounded-2xl transition-all duration-300"
                      style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.12)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.4)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                    >
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(179,0,27,0.1)" }}>
                        <Icon size={20} style={{ color: "#B3001B" }} />
                      </div>
                      <h3 style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "0.95rem", marginBottom: 6 }}>{tema.title}</h3>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.85rem", lineHeight: 1.6 }}>{tema.desc}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="py-24" style={{ background: "#050505" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center mb-16">
              <SectionLabel>Galeria</SectionLabel>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5" }}>
                Registros{" "}
                <span style={{ color: "#B3001B" }}>Visuais</span>
              </h2>
              <p className="mt-4 mx-auto max-w-xl" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                Imagens que contam histórias e registram a trajetória do projeto.
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: imgFranzFannon, alt: "Franz Fannon" },
                { src: imgPatriceLumumba, alt: "Patrice Lumumba" },
                { src: imgSalvadorAllende, alt: "Salvador Allende" },
                { src: imgThomasSankara, alt: "Thomas Sankara" },
              ].map((img, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div
                    className="aspect-square rounded-2xl overflow-hidden transition-all duration-300"
                    style={{ border: "1px solid rgba(179,0,27,0.12)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.4)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.12)"; }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      style={{ transition: "transform 0.4s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center mb-16">
              <SectionLabel>Linha do Tempo</SectionLabel>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5" }}>
                Nossa <span style={{ color: "#B3001B" }}>Evolução</span>
              </h2>
            </FadeIn>
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full" style={{ background: "#B3001B", boxShadow: "0 0 14px rgba(179,0,27,0.5)" }} />
                      {i < timeline.length - 1 && <div className="w-px flex-1" style={{ background: "rgba(179,0,27,0.2)", minHeight: 40 }} />}
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

        {/* Conteúdos Publicados */}
        <section className="py-24" style={{ background: "#050505" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center mb-16">
              <SectionLabel>Conteúdos</SectionLabel>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5" }}>
                Publicações{" "}
                <span style={{ color: "#B3001B" }}>Futuras</span>
              </h2>
              <p className="mt-4 mx-auto max-w-xl" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                Conteúdos preparados para compartilhar conhecimento histórico de qualidade.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {conteudos.map((c, i) => {
                const Icon = c.icon;
                return (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div
                      className="p-6 rounded-2xl transition-all duration-300"
                      style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.12)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.4)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                    >
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(179,0,27,0.1)" }}>
                        <Icon size={20} style={{ color: "#B3001B" }} />
                      </div>
                      <h3 style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "0.95rem", marginBottom: 6 }}>{c.title}</h3>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.85rem", lineHeight: 1.6 }}>{c.desc}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20" style={{ background: "#050505", borderTop: "1px solid rgba(179,0,27,0.1)", borderBottom: "1px solid rgba(179,0,27,0.1)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: FileText, label: "Posts Publicados", key: "posts" as const },
                { icon: Heart, label: "Seguidores", key: "seguidores" as const },
                { icon: BookOpen, label: "Conteúdos Criados", key: "conteudos" as const },
                { icon: BarChart3, label: "Alcance", key: "alcance" as const },
              ].map((s, i) => {
                const Icon = s.icon;
                const val = stats[s.key];
                return (
                  <FadeIn key={i} delay={i * 0.08} className="text-center">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(179,0,27,0.1)" }}>
                      <Icon size={22} style={{ color: "#B3001B" }} />
                    </div>
                    <div className="text-3xl font-bold mb-1" style={{ fontFamily: "Sora, sans-serif", color: "#B3001B", textShadow: "0 0 30px rgba(179,0,27,0.4)" }}>
                      <StatCounter target={val} suffix="+" />
                    </div>
                    <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.8rem" }}>{s.label}</p>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ background: "rgba(179,0,27,0.08)", border: "1px solid rgba(179,0,27,0.25)" }}
              >
                <Instagram size={14} style={{ color: "#B3001B" }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#B3001B", fontFamily: "Inter, sans-serif" }}>
                  Siga no Instagram
                </span>
              </div>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5", marginBottom: 16 }}>
                Acompanhe o{" "}
                <span style={{ color: "#B3001B" }}>Projeto</span>
              </h2>
              <p className="mx-auto max-w-xl mb-10" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                Siga o Projeto Revolução nas redes sociais e mergulhe na história com conteúdo
                exclusivo, curiosidades e muito aprendizado.
              </p>
              <a
                href="https://www.instagram.com/caique.o.castaldeli/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{ background: "#B3001B", color: "#F5F5F5", fontFamily: "Inter, sans-serif", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 34px rgba(179,0,27,0.5)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              >
                <Instagram size={16} /> Acompanhar Projeto <ArrowRight size={16} />
              </a>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
