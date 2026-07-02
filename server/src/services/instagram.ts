import { env } from "../config/env.js";
import { logger } from "../config/logger.js";

interface InstagramStats {
  seguidores: number;
  posts: number;
  alcance: number;
  engajamento: number;
}

async function getLongLivedToken(): Promise<string> {
  if (!env.INSTAGRAM_ACCESS_TOKEN) throw new Error("INSTAGRAM_ACCESS_TOKEN nao configurado");
  return env.INSTAGRAM_ACCESS_TOKEN;
}

export async function fetchInstagramStats(): Promise<Partial<InstagramStats>> {
  const result: Partial<InstagramStats> = {};

  try {
    const token = await getLongLivedToken();
    const businessId = env.INSTAGRAM_BUSINESS_ID;
    if (!businessId) {
      logger.warn("INSTAGRAM_BUSINESS_ID nao configurado");
      return result;
    }

    const baseUrl = "https://graph.facebook.com/v22.0";

    const userRes = await fetch(
      `${baseUrl}/${businessId}?fields=followers_count,media_count&access_token=${token}`,
      { signal: AbortSignal.timeout(10000) }
    );

    if (!userRes.ok) {
      const errBody = await userRes.text();
      logger.error(`Instagram API user error: ${errBody}`);
      return result;
    }

    const userData = await userRes.json();
    if (userData.followers_count !== undefined) result.seguidores = userData.followers_count;
    if (userData.media_count !== undefined) result.posts = userData.media_count;

    const insightsRes = await fetch(
      `${baseUrl}/${businessId}/insights?metric=reach,engagement&period=total&access_token=${token}`,
      { signal: AbortSignal.timeout(10000) }
    );

    if (insightsRes.ok) {
      const insightsData = await insightsRes.json();
      if (insightsData.data) {
        for (const metric of insightsData.data) {
          if (metric.name === "reach" && metric.values?.[0]?.value !== undefined) {
            result.alcance = metric.values[0].value;
          }
          if (metric.name === "engagement" && metric.values?.[0]?.value !== undefined) {
            result.engajamento = metric.values[0].value;
          }
        }
      }
    }

    logger.info(`Instagram sync concluido: ${JSON.stringify(result)}`);
  } catch (error) {
    logger.error(`Erro ao buscar dados do Instagram: ${(error as Error).message}`);
  }

  return result;
}
