import { Request, Response } from "express";
import { prisma } from "../config/database.js";
import { logger } from "../config/logger.js";
import { fetchInstagramStats } from "../services/instagram.js";
import { fetchGitHubStats } from "../services/github.js";

export async function getStats(_req: Request, res: Response) {
  try {
    let stats = await prisma.stats.findFirst({ orderBy: { updatedAt: "desc" } });
    if (!stats) {
      stats = await prisma.stats.create({ data: {} });
    }
    return res.json({ success: true, data: stats });
  } catch (error) {
    logger.error(`Erro ao buscar stats: ${(error as Error).message}`);
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function updateStats(req: Request, res: Response) {
  try {
    const allowed = ["posts", "seguidores", "conteudos", "alcance", "projetos", "tecnologias", "horasEstudo", "commits", "projetosGamer", "horasJogadas", "horasDev"] as const;
    const data: Record<string, number> = {};
    for (const key of allowed) {
      if (req.body[key] !== undefined) {
        const val = Number(req.body[key]);
        if (!Number.isInteger(val) || val < 0) {
          return res.status(400).json({ success: false, error: `${key} deve ser um inteiro positivo` });
        }
        data[key] = val;
      }
    }
    const existing = await prisma.stats.findFirst({ orderBy: { updatedAt: "desc" } });
    let stats;
    if (existing) {
      stats = await prisma.stats.update({ where: { id: existing.id }, data });
    } else {
      stats = await prisma.stats.create({ data });
    }
    logger.info("Stats atualizados");
    return res.json({ success: true, data: stats });
  } catch (error) {
    logger.error(`Erro ao atualizar stats: ${(error as Error).message}`);
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function syncStats(_req: Request, res: Response) {
  try {
    const [igData, ghData] = await Promise.all([
      fetchInstagramStats(),
      fetchGitHubStats(),
    ]);

    const data: Record<string, number> = {};
    if (igData.posts !== undefined) data.posts = igData.posts;
    if (igData.seguidores !== undefined) data.seguidores = igData.seguidores;
    if (igData.alcance !== undefined) data.alcance = igData.alcance;
    if (ghData.seguidores !== undefined) data.seguidores = ghData.seguidores;

    const existing = await prisma.stats.findFirst({ orderBy: { updatedAt: "desc" } });
    let stats;
    if (existing) {
      stats = await prisma.stats.update({ where: { id: existing.id }, data });
    } else {
      stats = await prisma.stats.create({ data });
    }

    logger.info("Stats sincronizados com sucesso");
    return res.json({ success: true, data: stats, syncedAt: new Date().toISOString() });
  } catch (error) {
    logger.error(`Erro ao sincronizar stats: ${(error as Error).message}`);
    return res.status(500).json({ success: false, error: "Erro ao sincronizar" });
  }
}

export let autoSyncTimer: ReturnType<typeof setInterval> | null = null;

export function startAutoSync() {
  if (autoSyncTimer) return;
  logger.info("Auto-sync stats iniciado (30min)");
  autoSyncTimer = setInterval(async () => {
    try {
      const igData = await fetchInstagramStats();
      const data: Record<string, number> = {};
      if (igData.posts !== undefined) data.posts = igData.posts;
      if (igData.seguidores !== undefined) data.seguidores = igData.seguidores;
      if (igData.alcance !== undefined) data.alcance = igData.alcance;
      if (Object.keys(data).length === 0) return;
      const existing = await prisma.stats.findFirst({ orderBy: { updatedAt: "desc" } });
      if (existing) {
        await prisma.stats.update({ where: { id: existing.id }, data });
        logger.info("Auto-sync concluido");
      }
    } catch (error) {
      logger.error(`Auto-sync error: ${(error as Error).message}`);
    }
  }, 30 * 60 * 1000);
}

export function stopAutoSync() {
  if (autoSyncTimer) {
    clearInterval(autoSyncTimer);
    autoSyncTimer = null;
    logger.info("Auto-sync parado");
  }
}

export async function seedStats() {
  const existing = await prisma.stats.findFirst();
  if (existing) {
    logger.info("Stats ja existem, pulando seed");
    return;
  }
  await prisma.stats.create({
    data: {
      posts: 200,
      seguidores: 5284,
      conteudos: 156,
      alcance: 1248397,
      projetos: 12,
      tecnologias: 13,
      horasEstudo: 2000,
      commits: 500,
      projetosGamer: 15,
      horasJogadas: 3000,
      horasDev: 500,
    },
  });
  logger.info("Stats seed concluido");
}
