const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

export const api = {
  base: API_BASE,
  messages: `${API_BASE}/messages`,
  projects: `${API_BASE}/projects`,
  technologies: `${API_BASE}/technologies`,
  auth: `${API_BASE}/auth`,
  histories: `${API_BASE}/histories`,
  negoCaos: `${API_BASE}/nego-caos`,
  gallery: `${API_BASE}/gallery`,
  uploads: `${API_BASE}/uploads`,
  curriculo: `${API_BASE}/curriculo`,
  site: `${API_BASE}/site`,
  stats: `${API_BASE}/stats`,
  health: `${API_BASE}/health`,
};

export async function apiPost(url: string, data: unknown) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function apiGet(url: string) {
  const res = await fetch(url);
  return res.json();
}

export async function apiPut(url: string, data: unknown, token?: string) {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(url, { method: "PUT", headers, body: JSON.stringify(data) });
  return res.json();
}
