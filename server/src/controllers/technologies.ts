import { Request, Response } from "express";
import { prisma } from "../config/database.js";
import { logger } from "../config/logger.js";

export async function list(req: Request, res: Response) {
  try {
    const { categoria } = req.query;
    const where = categoria ? { categoria: categoria as string } : {};
    const technologies = await prisma.technology.findMany({ where, orderBy: { ordem: "asc" } });
    return res.json({ success: true, data: technologies });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const technology = await prisma.technology.create({ data: req.body });
    logger.info(`Tecnologia criada: ${technology.nome}`);
    return res.status(201).json({ success: true, data: technology });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const id = req.params.id as string;
    const existing = await prisma.technology.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ success: false, error: "Tecnologia nao encontrada" });
    const technology = await prisma.technology.update({ where: { id }, data: req.body });
    return res.json({ success: true, data: technology });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const id = req.params.id as string;
    const existing = await prisma.technology.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ success: false, error: "Tecnologia nao encontrada" });
    await prisma.technology.delete({ where: { id } });
    return res.json({ success: true, message: "Tecnologia deletada" });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}
