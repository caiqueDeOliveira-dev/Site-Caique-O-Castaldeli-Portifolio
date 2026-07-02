import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Particles } from "../components/Particles";
import { ScrollProgress } from "../layout/ScrollProgress";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#050505", minHeight: "100vh" }}>
      <Particles />
      <ScrollProgress />
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(179,0,27,0.08) 0%, transparent 70%)" }}
          />
          <div className="relative z-10 text-center" style={{ padding: "0 24px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ background: "rgba(179,0,27,0.08)", border: "1px solid rgba(179,0,27,0.25)" }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: "#FF1744", boxShadow: "0 0 8px #FF1744" }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#B3001B", fontFamily: "Inter, sans-serif" }}>
                  Erro 404
                </span>
              </div>
            </motion.div>

            <motion.h1
              style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(6rem, 20vw, 14rem)", fontWeight: 800, letterSpacing: "-0.06em", lineHeight: 0.85, color: "#F5F5F5" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              4
              <span style={{ color: "#B3001B", textShadow: "0 0 60px rgba(179,0,27,0.5)" }}>0</span>
              4
            </motion.h1>

            <motion.p
              className="mx-auto max-w-md mb-10"
              style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "1rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Página não encontrada. O caminho que você procurou não existe ou foi movido.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{ background: "#B3001B", color: "#F5F5F5", fontFamily: "Inter, sans-serif" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 34px rgba(179,0,27,0.5)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              >
                <ArrowLeft size={16} /> Voltar ao Início
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
