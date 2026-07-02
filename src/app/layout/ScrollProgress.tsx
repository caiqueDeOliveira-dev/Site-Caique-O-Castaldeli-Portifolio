import { useState, useEffect } from "react";

export function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    function onScroll() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      setPct(total > 0 ? (scrollTop / total) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, background: "#0D0D0D", zIndex: 9996 }}>
      <div
        style={{
          height: "100%", width: `${pct}%`,
          background: "linear-gradient(90deg, #B3001B 0%, #FF1744 100%)",
          boxShadow: "0 0 8px rgba(179,0,27,0.8)",
        }}
      />
    </div>
  );
}
