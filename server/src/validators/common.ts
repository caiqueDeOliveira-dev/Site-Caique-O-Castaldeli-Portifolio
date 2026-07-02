import { z } from "zod";

export const contentSchema = z.object({
  titulo: z.string().min(2, "Titulo deve ter no minimo 2 caracteres"),
  descricao: z.string().optional().nullable(),
  imagem: z.string().url().optional().nullable(),
  data: z.string().datetime().optional().nullable(),
  publicado: z.boolean().optional(),
  destaque: z.boolean().optional(),
  link: z.string().url().optional().nullable(),
});

export const contentUpdateSchema = contentSchema.partial();

export const gallerySchema = z.object({
  titulo: z.string().optional().nullable(),
  imagem: z.string().url("Imagem deve ser uma URL valida"),
  descricao: z.string().optional().nullable(),
  pagina: z.string().optional(),
  destaque: z.boolean().optional(),
});

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(12),
});
