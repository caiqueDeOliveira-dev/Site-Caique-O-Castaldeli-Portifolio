import { useState, useEffect } from "react";
import { api, apiGet } from "../config/api";
import type { StatsData } from "../config/types";

let cache: { data: StatsData | null; promise: Promise<StatsData | null> | null } = {
  data: null,
  promise: null,
};

const FALLBACK: StatsData = {
  id: "0",
  posts: 0,
  seguidores: 0,
  conteudos: 0,
  alcance: 0,
  projetos: 12,
  tecnologias: 13,
  horasEstudo: 2000,
  commits: 500,
  projetosGamer: 15,
  horasJogadas: 3000,
  horasDev: 500,
  updatedAt: new Date().toISOString(),
};

async function fetchStats(): Promise<StatsData | null> {
  try {
    const res = await apiGet(api.stats);
    if (res.success && res.data) {
      cache.data = res.data as StatsData;
      return cache.data;
    }
    return cache.data || FALLBACK;
  } catch {
    return cache.data || FALLBACK;
  }
}

export function useStats() {
  const [stats, setStats] = useState<StatsData>(cache.data || FALLBACK);
  const [loading, setLoading] = useState(!cache.data);

  useEffect(() => {
    if (cache.data) {
      setStats(cache.data);
      setLoading(false);
      return;
    }
    if (cache.promise) {
      cache.promise.then((data) => {
        if (data) setStats(data);
        setLoading(false);
      });
      return;
    }
    cache.promise = fetchStats();
    cache.promise.then((data) => {
      if (data) setStats(data);
      setLoading(false);
    });
  }, []);

  return { stats, loading };
}
