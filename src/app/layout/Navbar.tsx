import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router";
import { NAV_LINKS, NAV_LINKS_FULL } from "../data/data";

export function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function go(href: string) {
    navigate(href);
    window.scrollTo(0, 0);
    setOpen(false);
  }

  return (
    <>
      <motion.nav
        className="fixed left-0 right-0 z-[9990]"
        style={{ top: 8 }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div
            className="flex items-center justify-between py-3 px-5 rounded-2xl transition-all duration-500"
            style={{
              background: scrolled ? "rgba(5,5,5,0.88)" : "transparent",
              backdropFilter: scrolled ? "blur(20px)" : "none",
              border: scrolled ? "1px solid rgba(179,0,27,0.12)" : "1px solid transparent",
            }}
          >
            <button
              onClick={() => go("/")}
              className="flex items-center gap-3 group"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-transform duration-200 group-hover:scale-110"
                style={{ background: "#B3001B", color: "#F5F5F5", boxShadow: "0 0 14px rgba(179,0,27,0.4)", fontFamily: "Sora, sans-serif" }}
              >
                C
              </div>
              <span className="text-sm font-semibold hidden sm:block" style={{ color: "#F5F5F5", fontFamily: "Sora, sans-serif" }}>
                Caique O Castaldeli
              </span>
            </button>

            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((l) => {
                const isRed = l.href === "/projeto-revolucao" || l.href === "/nego-caos";
                return isRed ? (
                  <button
                    key={l.href}
                    onClick={() => go(l.href)}
                    className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                    style={{ background: "#B3001B", color: "#F5F5F5", fontFamily: "Inter, sans-serif" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(179,0,27,0.45)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                  >
                    {l.label}
                  </button>
                ) : (
                  <button
                    key={l.href}
                    onClick={() => go(l.href)}
                    className="text-sm relative group"
                    style={{ color: "#8A8A8A", fontFamily: "Inter, sans-serif", transition: "color 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#F5F5F5"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8A8A8A"; }}
                  >
                    {l.label}
                    <span
                      className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                      style={{ background: "#B3001B" }}
                    />
                  </button>
                );
              })}
            </div>

            <button
              className="md:hidden"
              style={{ color: "#F5F5F5" }}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9989] md:hidden flex flex-col pt-28 px-8"
            style={{ background: "rgba(5,5,5,0.97)", backdropFilter: "blur(24px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS_FULL.map((l, i) => (
              <motion.button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-3xl font-bold py-5 text-left border-b"
                style={{ color: "#F5F5F5", fontFamily: "Sora, sans-serif", borderColor: "rgba(179,0,27,0.1)" }}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.07 }}
              >
                <span style={{ color: "#B3001B", marginRight: 8 }}>//</span>
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
