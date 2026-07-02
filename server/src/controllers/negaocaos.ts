import { Request, Response } from "express";
import { prisma } from "../config/database.js";
import { logger } from "../config/logger.js";

export async function list(req: Request, res: Response) {
  try {
    const { tipo, page = 1, limit = 20 } = req.query;
    const where = tipo ? { tipo: tipo as string } : {};
    const skip = (Number(page) - 1) * Number(limit);

    const [contents, total] = await Promise.all([
      prisma.negoCaosContent.findMany({ where, orderBy: { createdAt: "desc" }, skip, take: Number(limit) }),
      prisma.negoCaosContent.count({ where }),
    ]);

    return res.json({
      success: true,
      data: contents,
      meta: { page: Number(page), limit: Number(limit), total, totalPages: Math.ceil(total / Number(limit)) },
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const content = await prisma.negoCaosContent.create({ data: req.body });
    logger.info(`Conteudo Nego CaOS criado: ${content.titulo}`);
    return res.status(201).json({ success: true, data: content });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const id = req.params.id as string;
    const existing = await prisma.negoCaosContent.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ success: false, error: "Conteudo nao encontrado" });
    const content = await prisma.negoCaosContent.update({ where: { id }, data: req.body });
    return res.json({ success: true, data: content });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const id = req.params.id as string;
    const existing = await prisma.negoCaosContent.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ success: false, error: "Conteudo nao encontrado" });
    await prisma.negoCaosContent.delete({ where: { id } });
    return res.json({ success: true, message: "Conteudo deletado" });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}
