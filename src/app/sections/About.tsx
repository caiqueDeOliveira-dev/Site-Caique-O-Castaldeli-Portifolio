import { FadeIn } from "../components/FadeIn";
import { SectionLabel } from "../components/SectionLabel";

export function About() {
  const infoCards = [
    { label: "Localização", value: "Brasil" },
    { label: "Status", value: "Disponível" },
    { label: "Foco", value: "Full Stack" },
    { label: "Modo", value: "Aprendizado ∞" },
  ];

  return (
    <section id="sobre" className="py-32" style={{ background: "#080808" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <FadeIn>
              <SectionLabel>Sobre Mim</SectionLabel>
              <h2
                className="leading-tight mb-8"
                style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#F5F5F5" }}
              >
                Minha{" "}
                <span style={{ color: "#B3001B" }}>História</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="leading-relaxed mb-5" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                Estou em transição para a área de tecnologia, movido por uma paixão genuína pelo poder de criar
                soluções digitais que impactam a vida das pessoas. Cada linha de código que escrevo carrega
                intenção, cuidado e vontade de evoluir.
              </p>
              <p className="leading-relaxed mb-5" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                Acredito no aprendizado constante e na mentalidade de crescimento. Utilizo Inteligência Artificial
                como aliada estratégica para ampliar minha produtividade, acelerar meu desenvolvimento e criar
                soluções mais inovadoras.
              </p>
              <p className="leading-relaxed mb-10" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.95rem" }}>
                Meu objetivo é conquistar minha primeira oportunidade como Desenvolvedor Full Stack, trazendo
                dedicação, criatividade e uma perspectiva única de quem entende que tecnologia é, acima de
                tudo, sobre pessoas.
              </p>
            </FadeIn>

            <FadeIn delay={0.22}>
              <div className="grid grid-cols-2 gap-3">
                {infoCards.map((card) => (
                  <div
                    key={card.label}
                    className="p-4 rounded-xl"
                    style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.14)" }}
                  >
                    <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.7rem", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                      {card.label}
                    </p>
                    <p style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "0.9rem" }}>
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} x={40} y={0}>
            <div
              className="relative p-8 rounded-3xl overflow-hidden"
              style={{ background: "#0D0D0D", border: "1px solid rgba(179,0,27,0.15)" }}
            >
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(179,0,27,0.1) 0%, transparent 70%)" }}
              />
              <span style={{ fontFamily: "Sora, sans-serif", color: "#B3001B", fontSize: "4rem", lineHeight: 1 }}>"</span>
              <p
                className="mt-2 leading-relaxed"
                style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontSize: "1.25rem", fontWeight: 600 }}
              >
                Tecnologia é a arte de transformar imaginação em realidade.
              </p>
              <p className="mt-4" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.85rem" }}>
                Cada projeto é uma oportunidade de aprender mais, criar melhor e impactar positivamente.
              </p>

              <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(179,0,27,0.12)" }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                    style={{ background: "#B3001B", color: "#F5F5F5", fontFamily: "Sora, sans-serif" }}
                  >
                    C
                  </div>
                  <div>
                    <p style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 600, fontSize: "0.9rem" }}>
                      Caique O Castaldeli
                    </p>
                    <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.75rem" }}>
                      Desenvolvedor Full Stack
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
