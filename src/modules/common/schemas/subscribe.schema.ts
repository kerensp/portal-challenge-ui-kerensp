import z from 'zod/v3';

export const subscribeSchema = z.object({
  email: z
    .string({ required_error: "Requerido" })
    .email("Por favor, introduce un correo electrónico válido."),
});