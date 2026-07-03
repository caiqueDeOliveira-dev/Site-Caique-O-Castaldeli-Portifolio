import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import express from "express";
import jwt from "jsonwebtoken";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined; seeded: boolean };
const prisma = globalForPrisma.prisma ?? new PrismaClient({ log: ["error"] });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

async function seedAdmin() {
  if (globalForPrisma.seeded) return;
  globalForPrisma.seeded = true;
  const count = await prisma.user.count();
  if (count === 0) {
    const hash = await bcrypt.hash("Admin123!", 10);
    await prisma.user.create({ data: { nome: "Admin", email: "admin@caiquecastaldeli.dev", senha: hash, cargo: "admin" } });
    console.log("[seed] Admin user created");
  }
}
seedAdmin().catch(console.error);

const app = express();
app.use(express.text({ type: "*/*" }));
app.use((req, res, next) => {
  if (req.body && typeof req.body === "string") {
    if (req.body.trim()) {
      try { req.body = JSON.parse(req.body); } catch { /* keep as string */ }
    } else {
      req.body = {};
    }
  }
  next();
});

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
    const { nome, email, assunto, mensagem } = req.body || {};
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
    const { email, senha } = req.body || {};
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.ativo) {
      return res.status(401).json({ success: false, error: "Credenciais invalidas" });
    }
    const valida = await bcrypt.compare(senha, user.senha);
    if (!valida) {
      return res.status(401).json({ success: false, error: "Credenciais invalidas" });
    }
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || "secret", { expiresIn: "15m" });
    res.json({ success: true, data: { user: { id: user.id, nome: user.nome, email: user.email }, accessToken: token } });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

app.post("/api/auth/refresh", async (req, res) => {
  try {
    const { refreshToken } = req.body || {};
    if (!refreshToken) return res.status(400).json({ success: false, error: "Refresh token nao fornecido" });
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET || "refresh-secret") as any;
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    if (!user || !user.ativo) return res.status(401).json({ success: false, error: "Usuario nao encontrado" });
    const newAccess = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || "secret", { expiresIn: "15m" });
    const newRefresh = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_REFRESH_SECRET || "refresh-secret", { expiresIn: "7d" });
    res.json({ success: true, data: { accessToken: newAccess, refreshToken: newRefresh } });
  } catch {
    res.status(401).json({ success: false, error: "Refresh token invalido" });
  }
});

export default app;
