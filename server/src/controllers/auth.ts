import { Response } from "express";
import { prisma } from "../config/database.js";
import { logger } from "../config/logger.js";
import { hashPassword, comparePassword } from "../utils/password.js";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../utils/jwt.js";
import { AuthRequest } from "../types/index.js";
import { env } from "../config/env.js";

export async function login(req: AuthRequest, res: Response) {
  try {
    const { email, senha } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.ativo) {
      return res.status(401).json({ success: false, error: "Credenciais invalidas" });
    }

    const senhaValida = await comparePassword(senha, user.senha);
    if (!senhaValida) {
      logger.warn(`Tentativa de login invalida: ${email}`);
      return res.status(401).json({ success: false, error: "Credenciais invalidas" });
    }

    const payload = { userId: user.id, email: user.email };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    logger.info(`Login realizado: ${email}`);
    return res.json({
      success: true,
      data: {
        user: { id: user.id, nome: user.nome, email: user.email, avatar: user.avatar, cargo: user.cargo },
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    logger.error(`Erro no login: ${(error as Error).message}`);
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function refresh(req: AuthRequest, res: Response) {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).json({ success: false, error: "Refresh token nao fornecido" });
    }

    const decoded = verifyRefreshToken(refreshToken);
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    if (!user || !user.ativo) {
      return res.status(401).json({ success: false, error: "Usuario nao encontrado ou inativo" });
    }

    const payload = { userId: user.id, email: user.email };
    const newAccessToken = generateAccessToken(payload);
    const newRefreshToken = generateRefreshToken(payload);

    return res.json({ success: true, data: { accessToken: newAccessToken, refreshToken: newRefreshToken } });
  } catch (error) {
    return res.status(401).json({ success: false, error: "Refresh token invalido ou expirado" });
  }
}

export async function me(req: AuthRequest, res: Response) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.userId },
      select: { id: true, nome: true, email: true, avatar: true, cargo: true, ativo: true, createdAt: true },
    });
    if (!user) return res.status(404).json({ success: false, error: "Usuario nao encontrado" });
    return res.json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function updateProfile(req: AuthRequest, res: Response) {
  try {
    const { nome, cargo, avatar } = req.body;
    const user = await prisma.user.update({
      where: { id: req.user!.userId },
      data: { ...(nome && { nome }), ...(cargo && { cargo }), ...(avatar !== undefined && { avatar }) },
      select: { id: true, nome: true, email: true, avatar: true, cargo: true },
    });
    return res.json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
}

export async function seedAdmin() {
  const adminEmail = env.ADMIN_EMAIL;
  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (existing) {
    logger.info("Admin ja existe, pulando seed");
    return;
  }
  const senha = await hashPassword(env.ADMIN_PASSWORD);
  await prisma.user.create({
    data: { nome: "Admin", email: adminEmail, senha, cargo: "Administrador" },
  });
  logger.info(`Admin criado: ${adminEmail}`);
}
