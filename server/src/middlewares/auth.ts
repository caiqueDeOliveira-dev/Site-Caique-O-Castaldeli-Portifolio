import { Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt.js";
import { AuthRequest } from "../types/index.js";
import { logger } from "../config/logger.js";

export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, error: "Token nao fornecido" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    logger.error(`Falha de autenticacao: ${(error as Error).message}`);
    return res.status(401).json({ success: false, error: "Token invalido ou expirado" });
  }
}
