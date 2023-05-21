import { z } from 'zod';

export const serverSchema = z.object({
	PORT: z.coerce.number(),
	SUPABASE_URL: z.string(),
	SUPABASE_ANON_KEY: z.string(),
	SUPABASE_SERVICE_ROLE_KEY: z.string(),
	REDIS_URL: z.string().default('redis://localhost:6379'),
});
