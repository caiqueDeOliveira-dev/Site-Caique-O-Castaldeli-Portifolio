import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { GeometricComposition } from "../components/GeometricComposition";
import { scrollToId } from "../data/utils";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#050505", paddingTop: 80 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 55% at 80% 50%, rgba(179,0,27,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 w-full" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
              style={{ background: "rgba(179,0,27,0.08)", border: "1px solid rgba(179,0,27,0.25)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#FF1744", boxShadow: "0 0 6px #FF1744" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#B3001B", fontFamily: "Inter, sans-serif" }}>
                Disponível para Oportunidades
              </span>
            </motion.div>

            <div className="overflow-hidden mb-1">
              <motion.h1
                style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(3.2rem, 9vw, 6.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.92, color: "#F5F5F5" }}
                initial={{ y: 110, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              >
                CAIQUE
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 5.5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 0.95 }}
                initial={{ y: 90, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.65, ease: [0.76, 0, 0.24, 1] }}
              >
                <span style={{ color: "#B3001B" }}>O</span>
                {" "}
                <span style={{ color: "#F5F5F5" }}>CASTALDELI</span>
              </motion.h1>
            </div>

            <motion.p
              className="mb-3"
              style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "1rem", letterSpacing: "0.04em" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Desenvolvedor Full Stack • Criador de Soluções com IA
            </motion.p>

            <motion.p
              className="leading-relaxed mb-10"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(138,138,138,0.75)", fontSize: "0.925rem", maxWidth: 480 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Transformando ideias em experiências digitais através de código,
              criatividade e Inteligência Artificial.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              <button
                onClick={() => scrollToId("#projetos")}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{ background: "#B3001B", color: "#F5F5F5", fontFamily: "Inter, sans-serif" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(179,0,27,0.5)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              >
                Ver Projetos
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToId("#contato")}
                className="px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300"
                style={{
                  color: "#F5F5F5", fontFamily: "Inter, sans-serif",
                  border: "1px solid rgba(179,0,27,0.3)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#B3001B"; (e.currentTarget as HTMLElement).style.background = "rgba(179,0,27,0.08)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.3)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                Entrar em Contato
              </button>
            </motion.div>
          </div>

          <motion.div
            className="h-80 lg:h-[520px]"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <GeometricComposition />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, #B3001B, transparent)" }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
