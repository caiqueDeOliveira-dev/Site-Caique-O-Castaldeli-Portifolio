import { env } from "../config/env.js";
import { logger } from "../config/logger.js";

interface GitHubStats {
  reposPublicos: number;
  seguidores: number;
  commitsRecentes: number;
  linguagens: string[];
}

export async function fetchGitHubStats(): Promise<Partial<GitHubStats>> {
  const result: Partial<GitHubStats> = {};

  try {
    const username = env.GITHUB_USERNAME;
    if (!username) {
      logger.warn("GITHUB_USERNAME nao configurado");
      return result;
    }

    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "caique-portfolio",
    };

    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers,
      signal: AbortSignal.timeout(10000),
    });

    if (!userRes.ok) {
      logger.error(`GitHub API user error: ${userRes.status}`);
      return result;
    }

    const userData = await userRes.json();
    if (userData.public_repos !== undefined) result.reposPublicos = userData.public_repos;
    if (userData.followers !== undefined) result.seguidores = userData.followers;

    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      { headers, signal: AbortSignal.timeout(10000) }
    );

    if (reposRes.ok) {
      const repos = await reposRes.json();
      const linguagens = new Set<string>();
      for (const repo of repos) {
        if (repo.language) linguagens.add(repo.language);
      }
      result.linguagens = [...linguagens].sort();
    }

    const eventsRes = await fetch(
      `https://api.github.com/users/${username}/events?per_page=30`,
      { headers, signal: AbortSignal.timeout(10000) }
    );

    if (eventsRes.ok) {
      const events = await eventsRes.json();
      const pushEvents = events.filter((e: { type: string }) => e.type === "PushEvent");
      result.commitsRecentes = pushEvents.reduce(
        (acc: number, e: { payload: { commits?: unknown[] } }) => acc + (e.payload.commits?.length || 0),
        0
      );
    }

    logger.info(`GitHub sync concluido: ${JSON.stringify(result)}`);
  } catch (error) {
    logger.error(`Erro ao buscar dados do GitHub: ${(error as Error).message}`);
  }

  return result;
}
