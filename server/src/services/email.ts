import { Resend } from "resend";
import { env } from "../config/env.js";
import { logger } from "../config/logger.js";

let resend: Resend | null = null;
if (env.RESEND_API_KEY) {
  resend = new Resend(env.RESEND_API_KEY);
}

export async function sendContactEmail(data: { nome: string; email: string; mensagem: string; assunto?: string }) {
  if (!resend) {
    logger.info(`Email nao enviado (sem config): ${data.nome} - ${data.email}`);
    return { success: true, simulated: true };
  }

  try {
    await resend.emails.send({
      from: "Site Caique <contato@caiquecastaldeli.dev>",
      to: env.ADMIN_EMAIL,
      replyTo: data.email,
      subject: `[Contato] ${data.assunto || "Nova mensagem"} - ${data.nome}`,
      html: `
        <h2>Nova mensagem do site</h2>
        <p><strong>Nome:</strong> ${data.nome}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Assunto:</strong> ${data.assunto || "Nao informado"}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${data.mensagem}</p>
      `,
    });
    logger.info(`Email enviado com sucesso para ${data.email}`);
    return { success: true };
  } catch (error) {
    logger.error(`Erro ao enviar email: ${(error as Error).message}`);
    return { success: false, error: "Erro ao enviar email" };
  }
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${env.FRONTEND_URL}/reset-password?token=${token}`;
  if (!resend) {
    logger.info(`Reset de senha simulado para ${email}: ${resetUrl}`);
    return { success: true, simulated: true };
  }
  try {
    await resend.emails.send({
      from: "Site Caique <contato@caiquecastaldeli.dev>",
      to: email,
      subject: "Recuperacao de senha",
      html: `<p>Clique no link para redefinir sua senha: <a href="${resetUrl}">${resetUrl}</a></p>`,
    });
    return { success: true };
  } catch (error) {
    logger.error(`Erro ao enviar email de reset: ${(error as Error).message}`);
    return { success: false, error: "Erro ao enviar email de recuperacao" };
  }
}
