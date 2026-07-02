import { Request, Response } from "express";
import { prisma } from "../config/database.js";

export async function getConfig(req: Request, res: Response) {
  try {
    const chave = req.params.chave as string;
    const config = await prisma.siteConfig.findUnique({ where: { chave } });
    if (!config) return res.status(404).json({ success: false, error: "Configuracao nao encontrada" });
    return res.json({ success: true, data: config });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function setConfig(req: Request, res: Response) {
  try {
    const { chave, valor } = req.body;
    const config = await prisma.siteConfig.upsert({
      where: { chave },
      update: { valor },
      create: { chave, valor },
    });
    return res.json({ success: true, data: config });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function getAllConfigs(req: Request, res: Response) {
  try {
    const configs = await prisma.siteConfig.findMany();
    const data: Record<string, string> = {};
    configs.forEach((c: { chave: string; valor: string | null }) => { data[c.chave] = c.valor || ""; });
    return res.json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function seedCategories() {
  const categories = [
    { nome: "Web", slug: "web", descricao: "Aplicacoes web e sites" },
    { nome: "Inteligencia Artificial", slug: "ia", descricao: "Projetos com IA" },
    { nome: "Mobile", slug: "mobile", descricao: "Aplicativos mobile" },
    { nome: "Backend", slug: "backend", descricao: "APIs e servicos" },
  ];

  for (const cat of categories) {
    const existing = await prisma.category.findUnique({ where: { slug: cat.slug } });
    if (!existing) {
      await prisma.category.create({ data: cat });
    }
  }
}

export async function seedTechnologies() {
  const techs = [
    { nome: "HTML", descricao: "Estrutura semantica", categoria: "web", ordem: 1 },
    { nome: "CSS", descricao: "Estilizacao avancada", categoria: "web", ordem: 2 },
    { nome: "JavaScript", descricao: "Linguagem dinamica", categoria: "web", ordem: 3 },
    { nome: "TypeScript", descricao: "Tipagem robusta", categoria: "web", ordem: 4 },
    { nome: "React", descricao: "UI declarativa", categoria: "frontend", ordem: 5 },
    { nome: "Next.js", descricao: "Framework full-stack", categoria: "frontend", ordem: 6 },
    { nome: "Node.js", descricao: "Runtime server-side", categoria: "backend", ordem: 7 },
    { nome: "Tailwind CSS", descricao: "Styling utilitario", categoria: "frontend", ordem: 8 },
    { nome: "Git", descricao: "Controle de versao", categoria: "ferramentas", ordem: 9 },
    { nome: "GitHub", descricao: "Colaboracao", categoria: "ferramentas", ordem: 10 },
    { nome: "PostgreSQL", descricao: "Banco de dados relacional", categoria: "backend", ordem: 11 },
    { nome: "Inteligencia Artificial", descricao: "Produtividade com IA", categoria: "ia", ordem: 12 },
  ];

  for (const tech of techs) {
    const existing = await prisma.technology.findUnique({ where: { nome: tech.nome } });
    if (!existing) {
      await prisma.technology.create({ data: tech });
    }
  }
}
