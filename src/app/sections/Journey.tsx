import { FadeIn } from "../components/FadeIn";
import { SectionLabel } from "../components/SectionLabel";
import { JOURNEY } from "../data/data";

export function Journey() {
  return (
    <section id="jornada" className="py-32" style={{ background: "#050505" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <FadeIn className="text-center mb-16">
          <SectionLabel>Jornada</SectionLabel>
          <h2 style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#F5F5F5" }}>
            Minha <span style={{ color: "#B3001B" }}>Trajetória</span>
          </h2>
          <p className="mt-4 mx-auto" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", maxWidth: 460, fontSize: "0.95rem" }}>
            Cada etapa me moldou e me preparou para o próximo desafio.
          </p>
        </FadeIn>

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, transparent, #B3001B 10%, rgba(179,0,27,0.3) 90%, transparent)", transform: "translateX(-50%)" }}
          />

          <div className="space-y-12 md:space-y-0">
            {JOURNEY.map((item, i) => {
              const isLeft = item.side === "left";
              return (
                <FadeIn key={i} delay={i * 0.1} x={isLeft ? -30 : 30} y={0}>
                  <div className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${isLeft ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                      <div
                        className="p-6 rounded-2xl transition-all duration-300"
                        style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.12)" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.4)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.12)"; }}
                      >
                        <span style={{ fontFamily: "Inter, sans-serif", color: "#B3001B", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                          {item.year}
                        </span>
                        <h3 className="mt-1.5 mb-2" style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "1.05rem" }}>
                          {item.title}
                        </h3>
                        <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.875rem", lineHeight: 1.65 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div
                      className="hidden md:flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 z-10"
                      style={{ background: "#050505", border: "2px solid #B3001B", boxShadow: "0 0 20px rgba(179,0,27,0.35)" }}
                    >
                      <div className="w-3 h-3 rounded-full" style={{ background: "#B3001B" }} />
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
  );
}
