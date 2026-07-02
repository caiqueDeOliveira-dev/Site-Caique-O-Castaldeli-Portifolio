import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { api, apiPost } from "../config/api";

interface User {
  id: string;
  nome: string;
  email: string;
  avatar?: string | null;
  cargo: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

function getStoredToken(): string | null {
  try {
    return localStorage.getItem("accessToken");
  } catch {
    return null;
  }
}

function storeToken(token: string) {
  try {
    localStorage.setItem("accessToken", token);
  } catch { }
}

function clearToken() {
  try {
    localStorage.removeItem("accessToken");
  } catch { }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(getStoredToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }
    fetch(`${api.auth}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.success) setUser(res.data);
        else { clearToken(); setToken(null); }
      })
      .catch(() => { clearToken(); setToken(null); })
      .finally(() => setLoading(false));
  }, [token]);

  async function login(email: string, senha: string) {
    const res = await apiPost(api.auth + "/login", { email, senha });
    if (!res.success) throw new Error(res.error || "Erro ao fazer login");
    setUser(res.data.user);
    setToken(res.data.accessToken);
    storeToken(res.data.accessToken);
  }

  function logout() {
    setUser(null);
    setToken(null);
    clearToken();
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}
