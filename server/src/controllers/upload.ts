import { Request, Response } from "express";
import { prisma } from "../config/database.js";
import { logger } from "../config/logger.js";
import { uploadToSupabase } from "../services/upload.js";

export async function uploadFile(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: "Nenhum arquivo enviado" });
    }

    const file = req.file;
    const ext = file.originalname.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
    const folder = (req.body.folder as string) || "uploads";
    const path = `${folder}/${fileName}`;

    const url = await uploadToSupabase(file.buffer, path, file.mimetype);
    if (!url) {
      return res.status(500).json({ success: false, error: "Erro ao fazer upload" });
    }

    const fileRecord = await prisma.file.create({
      data: {
        nome: file.originalname,
        url,
        tipo: file.mimetype.startsWith("image") ? "image" : file.mimetype === "application/pdf" ? "pdf" : "document",
        tamanho: file.size,
      },
    });

    logger.info(`Arquivo enviado: ${file.originalname} -> ${url}`);
    return res.status(201).json({ success: true, data: fileRecord });
  } catch (error) {
    logger.error(`Erro no upload: ${(error as Error).message}`);
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function listFiles(req: Request, res: Response) {
  try {
    const { tipo } = req.query;
    const where = tipo ? { tipo: tipo as string } : {};
    const files = await prisma.file.findMany({ where, orderBy: { createdAt: "desc" } });
    return res.json({ success: true, data: files });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}
