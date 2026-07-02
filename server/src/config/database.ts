import { PrismaClient } from "@prisma/client";
import { env } from "./env.js";
import { logger } from "./logger.js";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

if (env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

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
