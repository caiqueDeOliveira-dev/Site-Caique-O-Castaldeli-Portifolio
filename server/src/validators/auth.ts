import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email invalido"),
  senha: z.string().min(6, "Senha deve ter no minimo 6 caracteres"),
});

export const userCreateSchema = z.object({
  nome: z.string().min(2, "Nome deve ter no minimo 2 caracteres"),
  email: z.string().email("Email invalido"),
  senha: z.string().min(6, "Senha deve ter no minimo 6 caracteres"),
  cargo: z.string().optional(),
});

export const userUpdateSchema = z.object({
  nome: z.string().min(2).optional(),
  cargo: z.string().optional(),
  avatar: z.string().url().optional().nullable(),
  ativo: z.boolean().optional(),
});
