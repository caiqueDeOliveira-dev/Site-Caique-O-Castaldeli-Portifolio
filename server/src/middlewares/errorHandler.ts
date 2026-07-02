import { Request, Response, NextFunction } from "express";
import { logger } from "../config/logger.js";
import { env } from "../config/env.js";

export class AppError extends Error {
  statusCode: number;
  constructor(message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = "AppError";
  }
}

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
    });
  }

  logger.error(`Erro nao tratado: ${err.message}`, { stack: err.stack });

  return res.status(500).json({
    success: false,
    error: env.NODE_ENV === "production" ? "Erro interno do servidor" : err.message,
  });
}
