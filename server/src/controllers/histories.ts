import { Request, Response } from "express";
import { prisma } from "../config/database.js";
import { logger } from "../config/logger.js";

export async function list(req: Request, res: Response) {
  try {
    const { page = 1, limit = 12 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [posts, total] = await Promise.all([
      prisma.historyPost.findMany({ orderBy: { data: "desc" }, skip, take: Number(limit) }),
      prisma.historyPost.count(),
    ]);

    return res.json({
      success: true,
      data: posts,
      meta: { page: Number(page), limit: Number(limit), total, totalPages: Math.ceil(total / Number(limit)) },
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function getPublished(req: Request, res: Response) {
  try {
    const posts = await prisma.historyPost.findMany({
      where: { publicado: true },
      orderBy: { data: "desc" },
    });
    return res.json({ success: true, data: posts });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const post = await prisma.historyPost.create({ data: req.body });
    logger.info(`Post historico criado: ${post.titulo}`);
    return res.status(201).json({ success: true, data: post });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const id = req.params.id as string;
    const existing = await prisma.historyPost.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ success: false, error: "Post nao encontrado" });
    const post = await prisma.historyPost.update({ where: { id }, data: req.body });
    return res.json({ success: true, data: post });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const id = req.params.id as string;
    const existing = await prisma.historyPost.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ success: false, error: "Post nao encontrado" });
    await prisma.historyPost.delete({ where: { id } });
    return res.json({ success: true, message: "Post deletado" });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}
