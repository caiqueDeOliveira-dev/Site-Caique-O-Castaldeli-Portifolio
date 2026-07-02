import { env } from "../config/env.js";
import { logger } from "../config/logger.js";

const SUPABASE_STORAGE_URL = `${env.SUPABASE_URL}/storage/v1/object/public/${env.SUPABASE_BUCKET}`;

export async function uploadToSupabase(file: Buffer, path: string, contentType: string): Promise<string | null> {
  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_KEY) {
    logger.info(`Upload simulado: ${path}`);
    return `${env.FRONTEND_URL}/placeholder/${path}`;
  }

  try {
    const response = await fetch(`${SUPABASE_STORAGE_URL}/${path}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${env.SUPABASE_SERVICE_KEY}`,
        "Content-Type": contentType,
        upsert: "true",
      },
      body: new Uint8Array(file),
    });

    if (!response.ok) throw new Error(`Upload failed: ${response.statusText}`);

    const url = `${SUPABASE_STORAGE_URL}/${path}`;
    logger.info(`Upload realizado: ${url}`);
    return url;
  } catch (error) {
    logger.error(`Erro no upload: ${(error as Error).message}`);
    return null;
  }
}

export async function deleteFromSupabase(path: string): Promise<boolean> {
  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_KEY) {
    logger.info(`Delete simulado: ${path}`);
    return true;
  }

  try {
    const response = await fetch(`${SUPABASE_STORAGE_URL}/${path}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${env.SUPABASE_SERVICE_KEY}` },
    });
    return response.ok;
  } catch (error) {
    logger.error(`Erro ao deletar arquivo: ${(error as Error).message}`);
    return false;
  }
}
