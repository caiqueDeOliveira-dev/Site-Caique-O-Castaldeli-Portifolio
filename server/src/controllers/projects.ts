import { Request, Response } from "express";
import { prisma } from "../config/database.js";
import { logger } from "../config/logger.js";
type ProjectWithTech = any;

function formatProject(p: ProjectWithTech) {
  return { ...p, tecnologias: p.tecnologias.map((t: any) => t.technology) };
}

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await prisma.category.findMany({ orderBy: { nome: "asc" } });
    return res.json({ success: true, data: categories });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function list(req: Request, res: Response) {
  try {
    const { category, status, page = 1, limit = 12 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: any = {};
    if (category) where.category = { slug: category as string };
    if (status) where.status = status as string;

    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        where,
        include: { category: true, tecnologias: { include: { technology: true } } },
        orderBy: { ordem: "asc" },
        skip,
        take: Number(limit),
      }),
      prisma.project.count({ where }),
    ]);

    return res.json({
      success: true,
      data: projects.map(formatProject),
      meta: { page: Number(page), limit: Number(limit), total, totalPages: Math.ceil(total / Number(limit)) },
    });
  } catch (error) {
    logger.error(`Erro ao listar projetos: ${(error as Error).message}`);
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const project = await prisma.project.findUnique({
      where: { id: req.params.id as string },
      include: { category: true, tecnologias: { include: { technology: true } } },
    });
    if (!project) return res.status(404).json({ success: false, error: "Projeto nao encontrado" });

    return res.json({ success: true, data: formatProject(project) });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const { tecnologias, categoryId, ...data } = req.body;

    const project = await prisma.project.create({
      data: {
        ...data,
        ...(categoryId && { category: { connect: { id: categoryId } } }),
        ...(tecnologias?.length && {
          tecnologias: { create: tecnologias.map((techId: string) => ({ technologyId: techId })) },
        }),
      },
      include: { category: true, tecnologias: { include: { technology: true } } },
    });

    logger.info(`Projeto criado: ${project.titulo}`);
    return res.status(201).json({ success: true, data: formatProject(project) });
  } catch (error) {
    logger.error(`Erro ao criar projeto: ${(error as Error).message}`);
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const { tecnologias, categoryId, ...data } = req.body;
    const id = req.params.id as string;

    const existing = await prisma.project.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ success: false, error: "Projeto nao encontrado" });

    if (tecnologias) {
      await prisma.projectTechnology.deleteMany({ where: { projectId: id } });
    }

    const project = await prisma.project.update({
      where: { id },
      data: {
        ...data,
        ...(categoryId ? { category: { connect: { id: categoryId } } } : {}),
        ...(tecnologias?.length && {
          tecnologias: { create: tecnologias.map((techId: string) => ({ technologyId: techId })) },
        }),
      },
      include: { category: true, tecnologias: { include: { technology: true } } },
    });

    return res.json({ success: true, data: formatProject(project) });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const id = req.params.id as string;
    const existing = await prisma.project.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ success: false, error: "Projeto nao encontrado" });

    await prisma.project.delete({ where: { id } });
    logger.info(`Projeto deletado: ${existing.titulo}`);
    return res.json({ success: true, message: "Projeto deletado com sucesso" });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}
