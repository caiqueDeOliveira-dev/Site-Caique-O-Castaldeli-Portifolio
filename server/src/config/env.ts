import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

function getEnv(key: string, defaultValue?: string): string {
  const exists = key in process.env;
  const value = process.env[key];
  if (exists && value !== "") {
    return value as string;
  }
  if (defaultValue !== undefined) {
    return defaultValue;
  }
  console.error(`⚠️  Variavel de ambiente ${key} nao definida`);
  return "";
}

export const env = {
  PORT: parseInt(getEnv("PORT", "3001"), 10),
  NODE_ENV: getEnv("NODE_ENV", "development"),
  FRONTEND_URL: getEnv("FRONTEND_URL", "http://localhost:5173"),
  DATABASE_URL: getEnv("DATABASE_URL"),
  JWT_SECRET: getEnv("JWT_SECRET", "dev-secret"),
  JWT_REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET", "dev-refresh-secret"),
  JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "15m"),
  JWT_REFRESH_EXPIRES_IN: getEnv("JWT_REFRESH_EXPIRES_IN", "7d"),
  RESEND_API_KEY: getEnv("RESEND_API_KEY", ""),
  SUPABASE_URL: getEnv("SUPABASE_URL", ""),
  SUPABASE_SERVICE_KEY: getEnv("SUPABASE_SERVICE_KEY", ""),
  SUPABASE_BUCKET: getEnv("SUPABASE_BUCKET", "site-caique"),
  ADMIN_EMAIL: getEnv("ADMIN_EMAIL", "admin@caiquecastaldeli.dev"),
  ADMIN_PASSWORD: getEnv("ADMIN_PASSWORD", "Admin123!"),
  INSTAGRAM_ACCESS_TOKEN: getEnv("INSTAGRAM_ACCESS_TOKEN", ""),
  INSTAGRAM_BUSINESS_ID: getEnv("INSTAGRAM_BUSINESS_ID", ""),
  GITHUB_USERNAME: getEnv("GITHUB_USERNAME", ""),
};
