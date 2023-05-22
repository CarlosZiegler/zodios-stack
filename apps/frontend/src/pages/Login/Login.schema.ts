import { z } from 'zod';

export const credentialsSchema = z
  .object({
    email: z.string().email(),
    password: z.string(),
  })
  .required();

export type CredentialsSchemaType = z.infer<typeof credentialsSchema>;
