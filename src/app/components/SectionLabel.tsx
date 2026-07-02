export function SectionLabel({ children }: { children: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase mb-3"
      style={{ color: "#B3001B", fontFamily: "Inter, sans-serif" }}
    >
      <span className="w-5 h-px" style={{ background: "#B3001B" }} />
      {children}
    </span>
  );
}
