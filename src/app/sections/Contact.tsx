import { useState } from "react";
import {
  Github, Linkedin, Instagram, Mail, Send, CheckCircle2, ArrowRight, MessageCircle, Music,
} from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { SectionLabel } from "../components/SectionLabel";

import { api } from "../config/api";
const FORM_ENDPOINT = api.messages;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(FORM_ENDPOINT, {
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

  return (
    <section id="contato" className="py-32" style={{ background: "#080808" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <FadeIn className="text-center mb-16">
          <SectionLabel>Contato</SectionLabel>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#F5F5F5" }}>
            Vamos <span style={{ color: "#B3001B" }}>Conversar</span>
          </h2>
          <p className="mt-4 mx-auto" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", maxWidth: 440, fontSize: "0.95rem" }}>
            Aberto a oportunidades, colaborações e projetos. Entre em contato!
          </p>
        </FadeIn>

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
  );
}
