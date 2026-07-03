import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { IncomingMessage, ServerResponse } from "http";
import { URL } from "url";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };
const prisma = globalForPrisma.prisma ?? new PrismaClient({ log: ["error"] });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

function json(res: ServerResponse, status: number, data: any) {
  res.writeHead(status, { "content-type": "application/json" });
  res.end(JSON.stringify(data));
}

async function handler(req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  const path = url.pathname;
  const method = req.method || "GET";

  // CORS
  res.setHeader("access-control-allow-origin", process.env.FRONTEND_URL || "*");
  res.setHeader("access-control-allow-methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.setHeader("access-control-allow-headers", "Content-Type,Authorization");
  if (method === "OPTIONS") { res.writeHead(204); res.end(); return; }

  // Parse body for POST/PUT/PATCH
  let body: any = {};
  if (["POST", "PUT", "PATCH"].includes(method)) {
    try {
      const raw = await new Promise<string>((resolve) => {
        const chunks: Buffer[] = [];
        req.on("data", (chunk: Buffer) => chunks.push(chunk));
        req.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
      });
      if (raw) body = JSON.parse(raw);
    } catch { body = {}; }
  }

  if (method === "POST" && path === "/api/debug") {
    return json(res, 200, { body, headers: req.headers, raw: "" });
  }

  if (path === "/api/health" && method === "GET") {
    return json(res, 200, { success: true, message: "API Caique O Castaldeli rodando", environment: process.env.NODE_ENV || "production" });
  }

  if (path === "/api/stats" && method === "GET") {
    try {
      let stats = await prisma.stats.findFirst({ orderBy: { updatedAt: "desc" } });
      if (!stats) stats = await prisma.stats.create({ data: {} });
      return json(res, 200, { success: true, data: stats });
    } catch (error) {
      return json(res, 500, { success: false, error: (error as Error).message });
    }
  }

  if (path === "/api/messages" && method === "POST") {
    try {
      const { nome, email, assunto, mensagem } = body;
      if (!nome || !email || !mensagem) {
        return json(res, 400, { success: false, error: "Campos obrigatorios: nome, email, mensagem" });
      }
      const message = await prisma.message.create({ data: { nome, email, assunto: assunto || "", mensagem } });
      return json(res, 201, { success: true, data: message });
    } catch (error) {
      return json(res, 500, { success: false, error: (error as Error).message });
    }
  }

  if (path === "/api/auth/login" && method === "POST") {
    try {
      const { email, senha } = body;
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user || !user.ativo) {
        return json(res, 401, { success: false, error: "Credenciais invalidas" });
      }
      const valida = await bcrypt.compare(senha, user.senha);
      if (!valida) {
        return json(res, 401, { success: false, error: "Credenciais invalidas" });
      }
      const { sign } = await import("jsonwebtoken");
      const token = sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || "secret", { expiresIn: "15m" });
      return json(res, 200, { success: true, data: { user: { id: user.id, nome: user.nome, email: user.email }, accessToken: token } });
    } catch (error) {
      return json(res, 500, { success: false, error: (error as Error).message });
    }
  }

  if (path === "/api/auth/refresh" && method === "POST") {
    try {
      const { refreshToken } = body;
      if (!refreshToken) return json(res, 400, { success: false, error: "Refresh token nao fornecido" });
      const { verify, sign } = await import("jsonwebtoken");
      const decoded = verify(refreshToken, process.env.JWT_REFRESH_SECRET || "refresh-secret") as any;
      const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
      if (!user || !user.ativo) return json(res, 401, { success: false, error: "Usuario nao encontrado" });
      const newAccess = sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || "secret", { expiresIn: "15m" });
      const newRefresh = sign({ userId: user.id, email: user.email }, process.env.JWT_REFRESH_SECRET || "refresh-secret", { expiresIn: "7d" });
      return json(res, 200, { success: true, data: { accessToken: newAccess, refreshToken: newRefresh } });
    } catch { return json(res, 401, { success: false, error: "Refresh token invalido" }); }
  }

  json(res, 404, { success: false, error: "Rota nao encontrada", path, method });
}

export default handler;
