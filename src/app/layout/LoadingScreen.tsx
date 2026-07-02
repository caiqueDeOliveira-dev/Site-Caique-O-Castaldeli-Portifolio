import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { easeOutCubic } from "../data/utils";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const cbRef = useRef(onComplete);
  cbRef.current = onComplete;

  useEffect(() => {
    let start: number | null = null;
    let raf: number;
    const duration = 2400;

    function step(ts: number) {
      if (!start) start = ts;
      const t = Math.min((ts - start) / duration, 1);
      setProgress(easeOutCubic(t) * 100);
      if (t < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setTimeout(() => cbRef.current(), 700);
      }
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const line1 = "CAIQUE".split("");
  const line2 = "O CASTALDELI".split("");

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#050505" }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(179,0,27,0.1) 0%, transparent 70%)",
        }}
      />

      {["top-8 left-8 border-t-2 border-l-2", "top-8 right-8 border-t-2 border-r-2",
        "bottom-8 left-8 border-b-2 border-l-2", "bottom-8 right-8 border-b-2 border-r-2"].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute w-10 h-10 ${cls}`}
          style={{ borderColor: "rgba(179,0,27,0.3)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      ))}

      <div className="overflow-hidden mb-1">
        <motion.div
          className="flex"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
        >
          {line1.map((char, i) => (
            <motion.span
              key={i}
              style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontSize: "clamp(3.5rem, 10vw, 7rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}
              variants={{
                hidden: { y: 90, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="overflow-hidden mb-14">
        <motion.div
          className="flex items-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } } }}
        >
          {line2.map((char, i) => (
            <motion.span
              key={i}
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "clamp(1.1rem, 3.5vw, 2.5rem)",
                fontWeight: char === "O" && i === 0 ? 700 : 300,
                letterSpacing: "0.18em",
                lineHeight: 1,
                color: char === "O" && i === 0 ? "#B3001B" : "rgba(245,245,245,0.75)",
              }}
              variants={{
                hidden: { y: 45, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div style={{ width: "min(260px, 70vw)" }}>
        <div className="flex justify-between mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
          <span style={{ color: "#8A8A8A", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Carregando
          </span>
          <span style={{ color: "#B3001B", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
            {Math.round(progress)}%
          </span>
        </div>
        <div style={{ height: "1px", background: "#1A1A1A", width: "100%" }}>
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, #B3001B 0%, #FF1744 100%)",
              boxShadow: "0 0 10px rgba(179,0,27,0.7)",
              transition: "none",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
