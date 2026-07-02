import { Request, Response } from "express";
import { prisma } from "../config/database.js";
import { logger } from "../config/logger.js";

export async function list(req: Request, res: Response) {
  try {
    const { pagina } = req.query;
    const where = pagina ? { pagina: pagina as string } : {};
    const images = await prisma.gallery.findMany({ where, orderBy: { createdAt: "desc" } });
    return res.json({ success: true, data: images });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const image = await prisma.gallery.create({ data: req.body });
    logger.info(`Imagem adicionada a galeria: ${image.titulo || image.imagem}`);
    return res.status(201).json({ success: true, data: image });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const id = req.params.id as string;
    const existing = await prisma.gallery.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ success: false, error: "Imagem nao encontrada" });
    await prisma.gallery.delete({ where: { id } });
    return res.json({ success: true, message: "Imagem removida" });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}
