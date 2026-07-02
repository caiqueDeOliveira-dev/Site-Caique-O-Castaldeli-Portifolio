import { Request, Response } from "express";
import { prisma } from "../config/database.js";

export async function getCurriculo(req: Request, res: Response) {
  try {
    const configs = await prisma.siteConfig.findMany({
      where: { chave: { startsWith: "curriculo_" } },
    });
    const data: Record<string, string> = {};
    configs.forEach((c: { chave: string; valor: string | null }) => { data[c.chave.replace("curriculo_", "")] = c.valor || ""; });
    return res.json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function updateCurriculo(req: Request, res: Response) {
  try {
    const updates = req.body;
    for (const [key, value] of Object.entries(updates)) {
      await prisma.siteConfig.upsert({
        where: { chave: `curriculo_${key}` },
        update: { valor: value as string },
        create: { chave: `curriculo_${key}`, valor: value as string },
      });
    }
    return res.json({ success: true, message: "Curriculo atualizado" });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}
