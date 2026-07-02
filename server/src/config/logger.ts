import winston from "winston";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isVercel = process.env.VERCEL === "1";
const isProduction = process.env.NODE_ENV === "production";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`)
      ),
    }),
  ],
});

// Only write to files in non-serverless environments
if (!isVercel && !isProduction) {
  const logsDir = path.resolve(__dirname, "../../logs");
  if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });
  logger.add(new winston.transports.File({ filename: path.join(logsDir, "error.log"), level: "error" }));
  logger.add(new winston.transports.File({ filename: path.join(logsDir, "combined.log") }));
}
