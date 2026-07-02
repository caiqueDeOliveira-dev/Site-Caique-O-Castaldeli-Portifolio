import { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";
import { easeOutCubic } from "../data/utils";

export function StatCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const prevTarget = useRef(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const started = useRef(false);

  useEffect(() => {
    if (!isInView) return;
    const from = started.current ? prevTarget.current : 0;
    prevTarget.current = target;
    started.current = true;
    let start: number | null = null;
    const duration = 1800;

    function step(ts: number) {
      if (!start) start = ts;
      const t = Math.min((ts - start) / duration, 1);
      setCount(Math.round(from + easeOutCubic(t) * (target - from)));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}
