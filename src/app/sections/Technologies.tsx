import { FadeIn } from "../components/FadeIn";
import { SectionLabel } from "../components/SectionLabel";
import { TECH_LIST } from "../data/data";

export function Technologies() {
  return (
    <section id="tecnologias" className="py-32" style={{ background: "#050505" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <FadeIn className="text-center mb-16">
          <SectionLabel>Tecnologias</SectionLabel>
          <h2
            style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#F5F5F5" }}
          >
            Meu <span style={{ color: "#B3001B" }}>Stack</span> Técnico
          </h2>
          <p className="mt-4 mx-auto" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", maxWidth: 480, fontSize: "0.95rem" }}>
            Ferramentas e tecnologias que domino para construir soluções completas do front ao back.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {TECH_LIST.map((tech, i) => {
            const Icon = tech.icon;
            return (
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
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(179,0,27,0.1)" }}
                  >
                    <Icon size={20} style={{ color: "#B3001B" }} />
                  </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
