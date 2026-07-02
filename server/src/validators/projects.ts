import { z } from "zod";

export const projectSchema = z.object({
  titulo: z.string().min(2, "Titulo deve ter no minimo 2 caracteres"),
  descricao: z.string().min(10, "Descricao deve ter no minimo 10 caracteres"),
  imagem: z.string().url().optional().nullable(),
  github: z.string().url().optional().nullable(),
  demo: z.string().url().optional().nullable(),
  status: z.enum(["CONCLUIDO", "EM_DESENVOLVIMENTO", "EM_PAUSA", "PLANEJADO"]).optional(),
  destaque: z.boolean().optional(),
  ordem: z.number().int().optional(),
  categoryId: z.string().optional().nullable(),
  tecnologias: z.array(z.string()).optional(),
});

export const projectUpdateSchema = projectSchema.partial();
