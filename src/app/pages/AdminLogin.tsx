import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { Particles } from "../components/Particles";

export default function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, senha);
      navigate("/admin/stats");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ background: "#050505", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <Particles />
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#0D0D0D",
          border: "1px solid rgba(179,0,27,0.2)",
          borderRadius: 16,
          padding: "40px 32px",
          width: "100%",
          maxWidth: 400,
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          className="text-2xl font-bold text-center mb-8"
          style={{ fontFamily: "Sora, sans-serif", color: "#F5F5F5" }}
        >
          Admin
        </h1>

        {error && (
          <p className="text-sm text-center mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#B3001B" }}>
            {error}
          </p>
        )}

        <div className="mb-4">
          <label className="block text-sm mb-2" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A" }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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

        <div className="mb-6">
          <label className="block text-sm mb-2" style={{ fontFamily: "Inter, sans-serif", color: "#8A8A8A" }}>
            Senha
          </label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
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

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "#B3001B",
            border: "none",
            borderRadius: 8,
            color: "#F5F5F5",
            fontFamily: "Sora, sans-serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
