import { motion } from "motion/react";
import {
  ArrowRight, Gamepad2, Youtube, Trophy, Code2,
  Users, MonitorPlay, BookOpen, MessageCircle, Wrench,
  Tv, Film, Image as ImageIcon, Music, Headphones,
  Play, Smartphone,
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

const categorias = [
  { icon: Gamepad2, title: "Games", desc: "Conteúdo sobre os principais jogos, gameplay, dicas e estratégias." },
  { icon: Trophy, title: "EA SPORTS FC", desc: "Conteúdo especializado sobre o maior simulador de futebol do mundo." },
  { icon: Wrench, title: "Mods", desc: "Modificações e personalizações para transformar a experiência dos jogos." },
  { icon: Code2, title: "Ferramentas", desc: "Ferramentas e utilitários para gamers e criadores de conteúdo." },
  { icon: Film, title: "Conteúdo", desc: "Vídeos, lives e conteúdo multimídia sobre o universo gamer." },
  { icon: Smartphone, title: "Tecnologia", desc: "Hardware, periféricos e inovações tecnológicas para gamers." },
];

const projetosGamer = [
  { icon: Trophy, title: "Escudos Personalizados", desc: "Criação de escudos personalizados para clubes e ligas no EA SPORTS FC." },
  { icon: MonitorPlay, title: "Uniformes", desc: "Design de uniformes personalizados com identidade visual única." },
  { icon: Wrench, title: "Mods", desc: "Modificações para aprimorar a experiência de jogo." },
  { icon: Code2, title: "Ferramentas", desc: "Utilitários e aplicativos para auxiliar a comunidade gamer." },
  { icon: Globe, title: "Sites", desc: "Desenvolvimento de sites e plataformas para projetos gamers." },
  { icon: BookOpen, title: "Projetos Futuros", desc: "Novas ideias e projetos em desenvolvimento para a comunidade." },
];

const redes = [
  { icon: Youtube, name: "YouTube", href: "https://www.youtube.com/@Caique.O.Castaldeli", filled: true },
  { icon: Tv, name: "Instagram", href: "https://www.instagram.com/caique.o.castaldeli/", filled: false },
  { icon: Music, name: "TikTok", href: "https://www.tiktok.com/@caique.o.castaldeli", filled: false },
  { icon: Headphones, name: "Twitch", href: "https://twitch.tv", filled: false },
  { icon: MessageCircle, name: "Discord", href: "https://discord.com", filled: false },
];

function Globe({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

const NEGO_STATS = [
  { icon: Trophy, label: "Projetos Gamer", key: "projetosGamer" as const },
  { icon: Film, label: "Conteúdos", key: "conteudos" as const },
  { icon: Gamepad2, label: "Horas Jogadas", key: "horasJogadas" as const },
  { icon: Code2, label: "Horas de Desenvolvimento", key: "horasDev" as const },
];

export default function NegoCaos() {
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
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 45%, rgba(179,0,27,0.12) 0%, rgba(179,0,27,0.03) 40%, transparent 70%)",
            }}
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
                  Conteúdo Gamer
                </span>
              </div>
              <h1
                className="mb-4"
                style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.92, color: "#F5F5F5" }}
              >
                Nego <span style={{ color: "#B3001B" }}>CaOS</span>
              </h1>
              <p className="text-xl mx-auto max-w-2xl leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A" }}>
                Conteúdo Gamer • Futebol Virtual • Tecnologia
              </p>
              <p className="mt-4 mx-auto max-w-xl" style={{ fontFamily: "Inter, sans-serif", color: "rgba(138,138,138,0.7)", fontSize: "0.95rem" }}>
                Onde a paixão pelos games encontra a tecnologia.
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
                  Games, Criatividade e{" "}
                  <span style={{ color: "#B3001B" }}>Tecnologia</span>
                </h2>
                <p className="leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                  Nego CaOS é meu projeto gamer que une criatividade, jogos e desenvolvimento.
                  Aqui compartilho minha paixão por games, principalmente futebol virtual, criação
                  de conteúdo e tecnologia.
                </p>
                <p className="leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                  Do EA SPORTS FC aos mods e ferramentas, exploro o universo gamer com uma perspectiva
                  única que combina entretenimento, conhecimento técnico e inovação.
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
                      <Gamepad2 size={24} style={{ color: "#B3001B" }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 700, fontSize: "1.1rem" }}>
                        Nego CaOS
                      </p>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.8rem" }}>
                        Games & Tecnologia
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Criatividade e inovação",
                      "Futebol virtual especializado",
                      "Mods e personalizações",
                      "Ferramentas exclusivas",
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

        {/* Categorias */}
        <section className="py-24" style={{ background: "#050505" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center mb-16">
              <SectionLabel>Categorias</SectionLabel>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5" }}>
                Áreas de{" "}
                <span style={{ color: "#B3001B" }}>Atuação</span>
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categorias.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <FadeIn key={i} delay={i * 0.06}>
                    <div
                      className="p-6 rounded-2xl flex items-start gap-5 transition-all duration-300"
                      style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.12)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.45)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(179,0,27,0.1)" }}>
                        <Icon size={22} style={{ color: "#B3001B" }} />
                      </div>
                      <div>
                        <h3 style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "1rem", marginBottom: 4 }}>{cat.title}</h3>
                        <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.85rem", lineHeight: 1.6 }}>{cat.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projetos Gamer */}
        <section className="py-24" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center mb-16">
              <SectionLabel>Projetos Gamer</SectionLabel>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5" }}>
                Meus{" "}
                <span style={{ color: "#B3001B" }}>Projetos</span>
              </h2>
              <p className="mt-4 mx-auto max-w-xl" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                Escudos personalizados, uniformes, mods e muito mais.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projetosGamer.map((proj, i) => {
                const Icon = proj.icon;
                return (
                  <FadeIn key={i} delay={i * 0.07}>
                    <div
                      className="p-6 rounded-2xl transition-all duration-300"
                      style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.12)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.4)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                    >
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(179,0,27,0.1)" }}>
                        <Icon size={20} style={{ color: "#B3001B" }} />
                      </div>
                      <h3 style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "0.95rem", marginBottom: 6 }}>{proj.title}</h3>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.85rem", lineHeight: 1.6 }}>{proj.desc}</p>
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
                Imagens e{" "}
                <span style={{ color: "#B3001B" }}>Vídeos</span>
              </h2>
              <p className="mt-4 mx-auto max-w-xl" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                Registros visuais do projeto e conteúdo criado.
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((_, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div
                    className="aspect-square rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.12)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.4)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.12)"; }}
                  >
                    {i === 0 ? (
                      <Play size={32} style={{ color: "rgba(179,0,27,0.3)" }} />
                    ) : (
                      <ImageIcon size={32} style={{ color: "rgba(179,0,27,0.3)" }} />
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Vídeos */}
        <section className="py-24" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center mb-16">
              <SectionLabel>Vídeos</SectionLabel>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5" }}>
                Conteúdo no{" "}
                <span style={{ color: "#B3001B" }}>YouTube</span>
              </h2>
              <p className="mt-4 mx-auto max-w-xl" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                Vídeos, gameplays e tutoriais em breve.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((_, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div
                    className="aspect-video rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.12)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.4)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.12)"; }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background: "rgba(179,0,27,0.1)" }}>
                        <Youtube size={28} style={{ color: "#B3001B" }} />
                      </div>
                      <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.85rem" }}>
                        Vídeo em breve
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20" style={{ background: "#050505", borderTop: "1px solid rgba(179,0,27,0.1)", borderBottom: "1px solid rgba(179,0,27,0.1)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {NEGO_STATS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <FadeIn key={i} delay={i * 0.08} className="text-center">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(179,0,27,0.1)" }}>
                      <Icon size={22} style={{ color: "#B3001B" }} />
                    </div>
                    <div className="text-3xl font-bold mb-1" style={{ fontFamily: "Sora, sans-serif", color: "#B3001B", textShadow: "0 0 30px rgba(179,0,27,0.4)" }}>
                      <StatCounter target={stats[s.key]} suffix="+" />
                    </div>
                    <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.8rem" }}>{s.label}</p>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Redes Sociais */}
        <section className="py-32" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <FadeIn className="text-center">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ background: "rgba(179,0,27,0.08)", border: "1px solid rgba(179,0,27,0.25)" }}
              >
                <MessageCircle size={14} style={{ color: "#B3001B" }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#B3001B", fontFamily: "Inter, sans-serif" }}>
                  Redes Sociais
                </span>
              </div>
              <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F5F5F5", marginBottom: 16 }}>
                Faça Parte da{" "}
                <span style={{ color: "#B3001B" }}>Comunidade</span>
              </h2>
              <p className="mx-auto max-w-xl mb-10" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                Siga o Nego CaOS nas redes sociais e fique por dentro de todo conteúdo,
                lives e novidades do mundo gamer.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {redes.map((r, i) => {
                  const Icon = r.icon;
                  return r.filled ? (
                    <a
                      key={i}
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300"
                      style={{ background: "#B3001B", color: "#F5F5F5", fontFamily: "Inter, sans-serif", textDecoration: "none" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 34px rgba(179,0,27,0.5)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                    >
                      <Icon size={16} /> {r.name}
                    </a>
                  ) : (
                    <a
                      key={i}
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300"
                      style={{ color: "#F5F5F5", fontFamily: "Inter, sans-serif", textDecoration: "none", border: "1px solid rgba(179,0,27,0.3)", background: "transparent" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#B3001B"; (e.currentTarget as HTMLElement).style.background = "rgba(179,0,27,0.08)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.3)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                    >
                      <Icon size={16} /> {r.name}
                    </a>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
