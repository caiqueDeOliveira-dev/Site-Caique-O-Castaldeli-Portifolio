import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { env } from "./config/env.js";
import { logger } from "./config/logger.js";
import { connectDatabase, disconnectDatabase } from "./config/database.js";
import { errorHandler } from "./middlewares/errorHandler.js";

import authRoutes from "./routes/auth.js";
import projectRoutes from "./routes/projects.js";
import technologyRoutes from "./routes/technologies.js";
import messageRoutes from "./routes/messages.js";
import historyRoutes from "./routes/histories.js";
import negoCaosRoutes from "./routes/negaocaos.js";
import galleryRoutes from "./routes/gallery.js";
import uploadRoutes from "./routes/upload.js";
import curriculoRoutes from "./routes/curriculo.js";
import siteRoutes from "./routes/site.js";
import statsRoutes from "./routes/stats.js";

import { seedAdmin } from "./controllers/auth.js";
import { seedCategories, seedTechnologies } from "./controllers/site.js";
import { seedStats, startAutoSync, stopAutoSync } from "./controllers/stats.js";

const app = express();

// Security
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: env.FRONTEND_URL, credentials: true }));
app.use(express.json({ limit: "10mb" }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: "Muitas requisicoes. Tente novamente em 15 minutos." },
});
app.use("/api/", limiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/technologies", technologyRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/histories", historyRoutes);
app.use("/api/nego-caos", negoCaosRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/curriculo", curriculoRoutes);
app.use("/api/site", siteRoutes);
app.use("/api/stats", statsRoutes);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "API Caique O Castaldeli rodando", environment: env.NODE_ENV });
});

// Error handler
app.use(errorHandler);

// Start
async function start() {
  try {
    await connectDatabase();
    await seedAdmin();
    await seedCategories();
    await seedTechnologies();
    await seedStats();
    startAutoSync();

    app.listen(env.PORT, () => {
      logger.info(`Servidor rodando em http://localhost:${env.PORT} (${env.NODE_ENV})`);
      console.log(`🚀 API rodando em http://localhost:${env.PORT}/api`);
    });
  } catch (error) {
    logger.error("Erro ao iniciar servidor:", error);
    process.exit(1);
  }
}

process.on("SIGINT", async () => {
  stopAutoSync();
  await disconnectDatabase();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  stopAutoSync();
  await disconnectDatabase();
  process.exit(0);
});

start();
