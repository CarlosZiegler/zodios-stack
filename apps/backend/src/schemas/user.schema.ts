import { z } from 'zod';

export const userAppMetadataSchema = z.record(z.any()).and(
	z.object({
		provider: z.string().optional(),
	})
);

export const userMetadataSchema = z.record(z.any());

export const userIdentitySchema = z.object({
	id: z.string(),
	user_id: z.string(),
	identity_data: z.record(z.any()).optional(),
	provider: z.string(),
	created_at: z.string().optional(),
	last_sign_in_at: z.string().optional(),
	updated_at: z.string().optional(),
});

export const factorSchema = z.object({
	id: z.string(),
	friendly_name: z.string().optional(),
	factor_type: z.union([z.literal('totp'), z.string()]),
	status: z.union([z.literal('verified'), z.literal('unverified')]),
	created_at: z.string(),
	updated_at: z.string(),
});

export const userSchema = z.object({
	id: z.string(),
	app_metadata: userAppMetadataSchema,
	user_metadata: userMetadataSchema,
	aud: z.string(),
	confirmation_sent_at: z.string().optional(),
	recovery_sent_at: z.string().optional(),
	email_change_sent_at: z.string().optional(),
	new_email: z.string().optional(),
	new_phone: z.string().optional(),
	invited_at: z.string().optional(),
	action_link: z.string().optional(),
	email: z.string().optional(),
	phone: z.string().optional(),
	created_at: z.string(),
	confirmed_at: z.string().optional(),
	email_confirmed_at: z.string().optional(),
	phone_confirmed_at: z.string().optional(),
	last_sign_in_at: z.string().optional(),
	role: z.string().optional(),
	updated_at: z.string().optional(),
	identities: z.array(userIdentitySchema).optional(),
	factors: z.array(factorSchema).optional(),
});

export const userResponseSchema = z
	.object({
		data: z.object({
			user: userSchema,
		}),
		error: z.null(),
	})
	.or(
		z.object({
			data: z.object({
				user: z.null(),
			}),
			error: z.object({
				message: z.string(),
			}),
		})
	);

export const userContextSchema = z.object({
	user: userSchema,
});
