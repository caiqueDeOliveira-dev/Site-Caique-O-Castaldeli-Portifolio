import { connectDatabase, disconnectDatabase } from "./config/database.js";
import { seedAdmin } from "./controllers/auth.js";
import { seedCategories, seedTechnologies } from "./controllers/site.js";
import { logger } from "./config/logger.js";

async function seed() {
  try {
    await connectDatabase();
    logger.info("Iniciando seed...");

    await seedAdmin();
    await seedCategories();
    await seedTechnologies();

    logger.info("Seed concluido com sucesso!");
    await disconnectDatabase();
    process.exit(0);
  } catch (error) {
    logger.error("Erro no seed:", error);
    process.exit(1);
  }
}

seed();
