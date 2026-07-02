import { z } from "zod";

export const messageSchema = z.object({
  nome: z.string().min(2, "Nome deve ter no minimo 2 caracteres"),
  email: z.string().email("Email invalido"),
  assunto: z.string().optional(),
  mensagem: z.string().min(10, "Mensagem deve ter no minimo 10 caracteres"),
});

export const messageUpdateSchema = z.object({
  lida: z.boolean().optional(),
  respondida: z.boolean().optional(),
});
