import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import express from "express";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };
const prisma = globalForPrisma.prisma ?? new PrismaClient({ log: ["error"] });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

const app = express();
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "API Caique O Castaldeli rodando", environment: process.env.NODE_ENV || "production" });
});

app.get("/api/stats", async (_req, res) => {
  try {
    let stats = await prisma.stats.findFirst({ orderBy: { updatedAt: "desc" } });
    if (!stats) stats = await prisma.stats.create({ data: {} });
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

app.post("/api/messages", async (req, res) => {
  try {
    const { nome, email, assunto, mensagem } = req.body;
    if (!nome || !email || !mensagem) {
      return res.status(400).json({ success: false, error: "Campos obrigatorios: nome, email, mensagem" });
    }
    const message = await prisma.message.create({ data: { nome, email, assunto: assunto || "", mensagem } });
    res.status(201).json({ success: true, data: message });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, senha } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.ativo) {
      return res.status(401).json({ success: false, error: "Credenciais invalidas" });
    }
    const valida = await bcrypt.compare(senha, user.senha);
    if (!valida) {
      return res.status(401).json({ success: false, error: "Credenciais invalidas" });
    }
    import("jsonwebtoken").then(({ sign }) => {
      const token = sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || "secret", { expiresIn: "15m" });
      res.json({ success: true, data: { user: { id: user.id, nome: user.nome, email: user.email }, accessToken: token } });
    });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

export default app;
