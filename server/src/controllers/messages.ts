import { Request, Response } from "express";
import { prisma } from "../config/database.js";
import { logger } from "../config/logger.js";
import { sendContactEmail } from "../services/email.js";

export async function list(req: Request, res: Response) {
  try {
    const { page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [messages, total] = await Promise.all([
      prisma.message.findMany({ orderBy: { createdAt: "desc" }, skip, take: Number(limit) }),
      prisma.message.count(),
    ]);

    return res.json({
      success: true,
      data: messages,
      meta: { page: Number(page), limit: Number(limit), total, totalPages: Math.ceil(total / Number(limit)) },
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const { nome, email, assunto, mensagem } = req.body;

    const message = await prisma.message.create({
      data: { nome, email, assunto, mensagem },
    });

    logger.info(`Mensagem recebida de ${nome} (${email})`);

    const emailResult = await sendContactEmail({ nome, email, mensagem, assunto });

    return res.status(201).json({ success: true, data: message, emailSent: emailResult.success });
  } catch (error) {
    const err = error as Error;
    logger.error(`Erro ao salvar mensagem: ${err.name}: ${err.message}`);
    return res.status(500).json({ success: false, error: "Erro interno do servidor", detail: `${err.name}: ${err.message}` });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const id = req.params.id as string;
    const existing = await prisma.message.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ success: false, error: "Mensagem nao encontrada" });

    const message = await prisma.message.update({ where: { id }, data: req.body });
    return res.json({ success: true, data: message });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const id = req.params.id as string;
    const existing = await prisma.message.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ success: false, error: "Mensagem nao encontrada" });
    await prisma.message.delete({ where: { id } });
    return res.json({ success: true, message: "Mensagem deletada" });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}
