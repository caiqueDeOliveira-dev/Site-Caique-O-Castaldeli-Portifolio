import { useNavigate } from "react-router";
import { NAV_LINKS_FULL } from "../data/data";

export function Footer() {
  const navigate = useNavigate();

  function go(href: string) {
    navigate(href);
    window.scrollTo(0, 0);
  }

  return (
    <footer className="py-12" style={{ background: "#030303", borderTop: "1px solid rgba(179,0,27,0.1)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="text-center md:text-left">
            <p style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5", fontWeight: 700, fontSize: "1.1rem" }}>
              Caique <span style={{ color: "#B3001B" }}>O</span> Castaldeli
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.78rem", marginTop: 4 }}>
              Desenvolvedor Full Stack • Criador de Soluções com IA
            </p>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            {NAV_LINKS_FULL.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.85rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#B3001B"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8A8A8A"; }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6" style={{ borderTop: "1px solid rgba(179,0,27,0.08)" }}>
          <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.75rem" }}>
            © 2026 Caique O Castaldeli. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.75rem" }}>
            Desenvolvido com <span style={{ color: "#B3001B" }}>♥</span> por Caique O Castaldeli.
            Obrigado por visitar!
          </p>
        </div>
      </div>
    </footer>
  );
}
