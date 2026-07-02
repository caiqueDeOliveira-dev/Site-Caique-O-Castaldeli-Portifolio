import { motion } from "motion/react";

export function GeometricComposition() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none" style={{ userSelect: "none" }}>
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.05 }}>
        <defs>
          <pattern id="hgrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#B3001B" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hgrid)" />
      </svg>

      <div className="relative" style={{ width: "min(360px, 85vw)", height: "min(360px, 85vw)" }}>
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="196" fill="none" stroke="#B3001B" strokeWidth="0.8" strokeDasharray="6 14" opacity="0.32" />
            {[0, 72, 144, 216, 288].map((a) => {
              const r = (a * Math.PI) / 180;
              return <circle key={a} cx={200 + 196 * Math.cos(r)} cy={200 + 196 * Math.sin(r)} r="3.5" fill="#FF1744" opacity="0.75" />;
            })}
          </svg>
        </motion.div>

        <motion.div
          className="absolute inset-6"
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="192" fill="none" stroke="#D90429" strokeWidth="1.5" strokeDasharray="55 145" opacity="0.55" />
            {[45, 225].map((a) => {
              const r = (a * Math.PI) / 180;
              return <circle key={a} cx={200 + 192 * Math.cos(r)} cy={200 + 192 * Math.sin(r)} r="5.5" fill="#D90429" opacity="0.9" />;
            })}
          </svg>
        </motion.div>

        <motion.div
          className="absolute inset-14"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <polygon points="200,18 382,342 18,342" fill="none" stroke="#B3001B" strokeWidth="1" opacity="0.28" />
          </svg>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-6 right-6 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(179,0,27,0.15) 20%,rgba(179,0,27,0.4) 50%,rgba(179,0,27,0.15) 80%,transparent)" }} />
            <div className="absolute left-1/2 top-6 bottom-6 w-px" style={{ background: "linear-gradient(180deg,transparent,rgba(179,0,27,0.15) 20%,rgba(179,0,27,0.4) 50%,rgba(179,0,27,0.15) 80%,transparent)" }} />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative rounded-full"
            style={{ width: 88, height: 88 }}
            animate={{ scale: [1, 1.09, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle at 38% 35%, #D90429, #B3001B 55%, #600010)",
                boxShadow: "0 0 35px #B3001B, 0 0 70px rgba(179,0,27,0.55), 0 0 120px rgba(179,0,27,0.2)",
              }}
            />
            <div className="absolute rounded-full" style={{ top: 14, left: 18, width: 24, height: 10, background: "rgba(255,255,255,0.22)", filter: "blur(4px)" }} />
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative" style={{ width: 168, height: 168 }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full" style={{ background: "#FF1744", boxShadow: "0 0 10px #FF1744" }} />
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative" style={{ width: 228, height: 228 }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ background: "#B3001B", boxShadow: "0 0 7px #B3001B" }} />
          </div>
        </motion.div>

        {["top-0 left-0 border-l-2 border-t-2", "top-0 right-0 border-r-2 border-t-2",
          "bottom-0 left-0 border-l-2 border-b-2", "bottom-0 right-0 border-r-2 border-b-2"].map((c, i) => (
          <div key={i} className={`absolute w-6 h-6 ${c}`} style={{ borderColor: "rgba(179,0,27,0.5)" }} />
        ))}
      </div>
    </div>
  );
}
