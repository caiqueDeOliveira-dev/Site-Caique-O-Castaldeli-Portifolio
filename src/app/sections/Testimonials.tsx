import { Star } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { SectionLabel } from "../components/SectionLabel";
import { TESTIMONIALS } from "../data/data";

export function Testimonials() {
  return (
    <section className="py-32" style={{ background: "#050505" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <FadeIn className="text-center mb-16">
          <SectionLabel>Depoimentos</SectionLabel>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#F5F5F5" }}>
            O que <span style={{ color: "#B3001B" }}>Dizem</span> Sobre Mim
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="relative p-7 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300"
                style={{ background: "rgba(13,13,13,0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(179,0,27,0.12)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.4)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.12)"; }}
              >
                <div
                  className="absolute -top-12 -right-12 w-36 h-36 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(179,0,27,0.07) 0%, transparent 70%)" }}
                />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={12} fill="#B3001B" style={{ color: "#B3001B" }} />
                  ))}
                </div>
                <p className="leading-relaxed flex-1 mb-6" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.9rem" }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3" style={{ borderTop: "1px solid rgba(179,0,27,0.1)", paddingTop: 16 }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ background: "#B3001B", color: "#F5F5F5", fontFamily: "Sora, sans-serif" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "0.875rem" }}>
                      {t.name}
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.72rem" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
