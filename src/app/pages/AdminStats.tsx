import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { api, apiGet, apiPut } from "../config/api";
import type { StatsData } from "../config/types";
import { Particles } from "../components/Particles";

const FIELDS = [
  { key: "posts", label: "Posts Publicados", section: "Histórias Apagadas" },
  { key: "seguidores", label: "Seguidores", section: "Histórias Apagadas" },
  { key: "conteudos", label: "Conteúdos Criados", section: "Histórias Apagadas" },
  { key: "alcance", label: "Alcance", section: "Histórias Apagadas" },
  { key: "projetos", label: "Projetos Concluídos", section: "Home" },
  { key: "tecnologias", label: "Tecnologias Dominadas", section: "Home" },
  { key: "horasEstudo", label: "Horas de Estudo", section: "Home" },
  { key: "commits", label: "Commits no GitHub", section: "Home" },
  { key: "projetosGamer", label: "Projetos Gamer", section: "Nego CaOS" },
  { key: "horasJogadas", label: "Horas Jogadas", section: "Nego CaOS" },
  { key: "horasDev", label: "Horas de Desenvolvimento", section: "Nego CaOS" },
] as const;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: "Sora, sans-serif", color: "#B3001B" }}>
      {children}
    </h2>
  );
}

export default function AdminStats() {
  const { user, token, loading: authLoading, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState<Partial<StatsData>>({});
  const [saving, setSaving] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!authLoading && !user) navigate("/admin");
  }, [user, authLoading, navigate]);

  useEffect(() => {
    loadStats();
  }, []);

  function loadStats() {
    apiGet(api.stats).then((res) => {
      if (res.success && res.data) {
        const { id, updatedAt, ...rest } = res.data;
        setStats(rest);
      }
    });
  }

  async function handleSave() {
    setSaving(true);
    setMsg("");
    try {
      const res = await apiPut(api.stats, stats, token ?? undefined);
      if (res.success) {
        setMsg("Salvo com sucesso!");
        setTimeout(() => setMsg(""), 3000);
      } else {
        setMsg(res.error || "Erro ao salvar");
      }
    } catch {
      setMsg("Erro de conexão");
    } finally {
      setSaving(false);
    }
  }

  async function handleSync() {
    setSyncing(true);
    setMsg("");
    try {
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;
      const res = await fetch(`${api.stats}/sync`, {
        method: "POST",
        headers,
      });
      const data = await res.json();
      if (data.success) {
        setMsg("Sincronizado com sucesso!");
        loadStats();
        setTimeout(() => setMsg(""), 3000);
      } else {
        setMsg(data.error || "Erro ao sincronizar");
      }
    } catch {
      setMsg("Erro de conexão");
    } finally {
      setSyncing(false);
    }
  }

  if (authLoading || !user) return null;

  const sections = [...new Set(FIELDS.map((f) => f.section))] as string[];

  return (
    <div style={{ background: "#050505", minHeight: "100vh", position: "relative" }}>
      <Particles />
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px", position: "relative", zIndex: 1 }}>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5" }}>
            Estatísticas
          </h1>
          <button
            onClick={logout}
            style={{
              padding: "8px 16px",
              background: "rgba(179,0,27,0.15)",
              border: "1px solid rgba(179,0,27,0.3)",
              borderRadius: 8,
              color: "#B3001B",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem",
              cursor: "pointer",
            }}
          >
            Sair
          </button>
        </div>

        <div
          className="mb-8"
          style={{
            background: "#0D0D0D",
            border: "1px solid rgba(179,0,27,0.15)",
            borderRadius: 12,
            padding: 24,
          }}
        >
          <SectionTitle>Integrações</SectionTitle>
          <p className="mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A", fontSize: "0.85rem" }}>
            Sincronizar dados diretamente do Instagram e do GitHub.
          </p>
          <button
            onClick={handleSync}
            disabled={syncing}
            style={{
              width: "100%",
              padding: "14px",
              background: "#B3001B",
              border: "none",
              borderRadius: 10,
              color: "#F5F5F5",
              fontFamily: "Sora, sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: syncing ? "not-allowed" : "pointer",
              opacity: syncing ? 0.6 : 1,
            }}
          >
            {syncing ? "Sincronizando..." : "🔄 Sincronizar Agora"}
          </button>
        </div>

        {sections.map((section) => (
          <div
            key={section}
            className="mb-8"
            style={{
              background: "#0D0D0D",
              border: "1px solid rgba(179,0,27,0.15)",
              borderRadius: 12,
              padding: 24,
            }}
          >
            <SectionTitle>{section}</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FIELDS.filter((f) => f.section === section).map((field) => (
                <div key={field.key}>
                  <label
                    className="block text-sm mb-1"
                    style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={stats[field.key] ?? 0}
                    onChange={(e) => setStats((s) => ({ ...s, [field.key]: Number(e.target.value) }))}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "#050505",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 8,
                      color: "#F5F5F5",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {msg && (
          <p
            className="text-center mb-4"
            style={{ fontFamily: "Inter, sans-serif", color: msg.includes("sucesso") ? "#22c55e" : "#B3001B" }}
          >
            {msg}
          </p>
        )}

        <button
          onClick={handleSave}
          disabled={saving}
          style={{
            width: "100%",
            padding: "14px",
            background: "#B3001B",
            border: "none",
            borderRadius: 10,
            color: "#F5F5F5",
            fontFamily: "Sora, sans-serif",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: saving ? "not-allowed" : "pointer",
            opacity: saving ? 0.6 : 1,
          }}
        >
          {saving ? "Salvando..." : "Salvar Alterações"}
        </button>
      </div>
    </div>
  );
}
