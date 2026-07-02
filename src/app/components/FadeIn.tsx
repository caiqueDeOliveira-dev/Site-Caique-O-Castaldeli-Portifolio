import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function FadeIn({
  children,
  delay = 0,
  y = 36,
  x = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
