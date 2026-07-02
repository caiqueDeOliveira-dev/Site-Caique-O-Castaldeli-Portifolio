import { FadeIn } from "../components/FadeIn";
import { StatCounter } from "../components/StatCounter";
import { useStats } from "../hooks/useStats";

const HOME_STATS = [
  { key: "projetos" as const, label: "Projetos Concluídos", suffix: "+" },
  { key: "tecnologias" as const, label: "Tecnologias Dominadas", suffix: "" },
  { key: "horasEstudo" as const, label: "Horas de Estudo", suffix: "+" },
  { key: "commits" as const, label: "Commits no GitHub", suffix: "+" },
];

function Skeleton() {
  return (
    <section className="py-24" style={{ background: "#080808", borderTop: "1px solid rgba(179,0,27,0.1)", borderBottom: "1px solid rgba(179,0,27,0.1)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-12 mx-auto mb-2 rounded" style={{ background: "rgba(179,0,27,0.08)", animation: "pulse 2s infinite" }} />
              <div className="w-28 h-4 mx-auto rounded" style={{ background: "rgba(138,138,138,0.08)", animation: "pulse 2s infinite 0.2s" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const { stats, loading } = useStats();
  if (loading) return <Skeleton />;
  return (
    <section className="py-24" style={{ background: "#080808", borderTop: "1px solid rgba(179,0,27,0.1)", borderBottom: "1px solid rgba(179,0,27,0.1)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {HOME_STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
              <div
                className="text-5xl font-bold mb-2"
                style={{ fontFamily: "Sora, sans-serif", color: "#B3001B", textShadow: "0 0 35px rgba(179,0,27,0.45)" }}
              >
                <StatCounter target={stats[stat.key]} suffix={stat.suffix} />
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.85rem" }}>
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
