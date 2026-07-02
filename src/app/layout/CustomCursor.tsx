import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>();

  useEffect(() => {
    function onMove(e: MouseEvent) {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    }

    function animate() {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.11;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.11;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    }

    raf.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMove);

    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.transform += " scale(1.7)";
        ringRef.current.style.borderColor = "#FF1744";
        ringRef.current.style.opacity = "0.7";
      }
    };
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.borderColor = "#B3001B";
        ringRef.current.style.opacity = "0.45";
      }
    };

    const targets = document.querySelectorAll("a,button,[data-hover]");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed", top: 0, left: 0, width: 8, height: 8,
          background: "#FF1744", borderRadius: "50%",
          pointerEvents: "none", zIndex: 9998,
          boxShadow: "0 0 8px #FF1744",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed", top: 0, left: 0, width: 40, height: 40,
          border: "1px solid #B3001B", borderRadius: "50%",
          pointerEvents: "none", zIndex: 9997, opacity: 0.45,
          transition: "border-color 0.2s, opacity 0.2s",
        }}
      />
    </>
  );
}
