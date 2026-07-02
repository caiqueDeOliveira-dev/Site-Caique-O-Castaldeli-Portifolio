import { PrismaClient } from "@prisma/client";
import { env } from "./env.js";
import { logger } from "./logger.js";

export const prisma = new PrismaClient({
  log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

export async function connectDatabase() {
  try {
    await prisma.$connect();
    logger.info("Banco de dados conectado com sucesso");
  } catch (error) {
    logger.error("Erro ao conectar no banco de dados:", error);
    throw error;
  }
}

export async function disconnectDatabase() {
  await prisma.$disconnect();
  logger.info("Banco de dados desconectado");
}
