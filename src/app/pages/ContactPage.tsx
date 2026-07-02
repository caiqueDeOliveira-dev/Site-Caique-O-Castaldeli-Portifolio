import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, Github, Linkedin, Instagram, Mail, MessageCircle, ArrowRight, Music } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { SectionLabel } from "../components/SectionLabel";
import { Particles } from "../components/Particles";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import { BackToTop } from "../layout/BackToTop";
import { ScrollProgress } from "../layout/ScrollProgress";
import { api } from "../config/api";

const socials = [
  { icon: Github, label: "GitHub", handle: "@caiqueDeOliveira-dev", href: "https://github.com/caiqueDeOliveira-dev" },
  { icon: Linkedin, label: "LinkedIn", handle: "/in/caique-deoliveira-dev", href: "https://www.linkedin.com/in/caique-deoliveira-dev/" },
  { icon: Instagram, label: "Instagram", handle: "@caique.o.castaldeli", href: "https://www.instagram.com/caique.o.castaldeli/" },
  { icon: Music, label: "TikTok", handle: "@caique.o.castaldeli", href: "https://www.tiktok.com/@caique.o.castaldeli" },
  { icon: MessageCircle, label: "WhatsApp", handle: "(11) 98251-4102", href: "https://wa.me/5511982514102" },
  { icon: Mail, label: "E-mail", handle: "caiquedeoliveira.dev@gmail.com", href: "mailto:caiquedeoliveira.dev@gmail.com" },
];

const fieldStyle: React.CSSProperties = {
  display: "block", width: "100%",
  background: "#0D0D0D",
  border: "1px solid rgba(179,0,27,0.15)",
  borderRadius: 12,
  padding: "14px 16px",
  color: "#F5F5F5",
  fontFamily: "Inter, sans-serif",
  fontSize: "0.875rem",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(api.messages, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        setError("Erro ao enviar. Tente novamente.");
      }
    } catch {
      setError("Erro de conexão. Verifique sua internet.");
    } finally {
      setLoading(false);
    }
  }

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
                  Contato
                </span>
              </div>
              <h1
                className="mb-4"
                style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.92, color: "#F5F5F5" }}
              >
                Vamos{" "}
                <span style={{ color: "#B3001B" }}>Conversar</span>
              </h1>
              <p className="text-xl mx-auto max-w-2xl leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A" }}>
                Aberto a oportunidades, colaborações e projetos interessantes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form + Social */}
        <section className="py-24" style={{ background: "#080808" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <FadeIn>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label style={{ display: "block", fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>
                      Nome
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Seu nome completo"
                      required
                      style={fieldStyle}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#B3001B"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(179,0,27,0.15)"; }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="seu@email.com"
                      required
                      style={fieldStyle}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#B3001B"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(179,0,27,0.15)"; }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>
                      Mensagem
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Conte sobre seu projeto ou oportunidade..."
                      required
                      rows={6}
                      style={{ ...fieldStyle, resize: "none" }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#B3001B"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(179,0,27,0.15)"; }}
                    />
                  </div>
                  {error && (
                    <p style={{ color: "#FF1744", fontSize: "0.8rem", fontFamily: "Inter, sans-serif" }}>
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm transition-all duration-300 disabled:opacity-60"
                    style={{ background: "#B3001B", color: "#F5F5F5", fontFamily: "Inter, sans-serif" }}
                    onMouseEnter={(e) => { if (!loading) { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 34px rgba(179,0,27,0.5)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.01)"; } }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                  >
                    {loading ? "Enviando..." : sent ? <><CheckCircle2 size={16} /> Mensagem Enviada!</> : <><Send size={16} /> Enviar Mensagem</>}
                  </button>
                </form>
              </FadeIn>

              <FadeIn delay={0.18}>
                <p className="mb-8 leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.9rem" }}>
                  Prefere ir direto ao ponto? Me encontre nas redes sociais ou envie um e-mail.
                  Responderei o mais breve possível.
                </p>
                <div className="space-y-3">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-2xl group transition-all duration-300"
                        style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.1)", textDecoration: "none", display: "flex" }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = "rgba(179,0,27,0.45)";
                          el.style.transform = "translateY(-2px)";
                          el.style.boxShadow = "0 6px 24px rgba(179,0,27,0.07)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = "rgba(179,0,27,0.1)";
                          el.style.transform = "translateY(0)";
                          el.style.boxShadow = "none";
                        }}
                      >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(179,0,27,0.1)" }}>
                          <Icon size={18} style={{ color: "#B3001B" }} />
                        </div>
                        <div className="flex-1">
                          <p style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "0.9rem" }}>{s.label}</p>
                          <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.75rem", marginTop: 2 }}>{s.handle}</p>
                        </div>
                        <ArrowRight size={14} style={{ color: "#8A8A8A" }} />
                      </a>
                    );
                  })}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
