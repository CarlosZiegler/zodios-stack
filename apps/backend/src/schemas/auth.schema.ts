import { z } from 'zod';
import { userSchema } from './user.schema';
import { AUTH_PROVIDERS } from '../constants';

export const sessionSchema = z.object({
	access_token: z.string(),
	token_type: z.string(), // add bearer to the token
	expires_in: z.number(),
	refresh_token: z.string(),
});

export const signUpResponseSchema = z.object({
	user: userSchema.nullable(),
	session: sessionSchema.nullable(),
});

export const signInResponseSchema = z.object({
	user: userSchema.nullable(),
	session: sessionSchema.nullable(),
});

export const signInWithProviderResponseSchema = z.object({
	provider: z.enum(AUTH_PROVIDERS).nullable(),
	url: z.string().nullable(),
});

export const authHeaderSchema = z.string();
