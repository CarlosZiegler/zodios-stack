import { makeApi } from '@zodios/core';
import { z } from 'zod';
import { makeEndpoint } from '@zodios/core';
import { makeParameters } from '@zodios/core';
import { signInResponseSchema, signInWithProviderResponseSchema, signUpResponseSchema } from '../../schemas';
import { AUTH_PROVIDERS } from '../../constants';

const signinParams = makeParameters([
	{
		name: 'Signup',
		description: 'Signup',
		schema: z.object({
			email: z.string().email(),
			password: z.string(),
		}),
		type: 'Body',
	},
]);

const signup = makeEndpoint({
	method: 'post',
	path: '/sign-up',
	response: signUpResponseSchema,
	alias: 'signup',
	description: 'Signup a user',
	parameters: signinParams,
});

const signIn = makeEndpoint({
	method: 'post',
	path: '/sign-in',
	response: signInResponseSchema,
	alias: 'signIn',
	description: 'Signin a user',
	parameters: signinParams,
});

const signWIthProviderParams = makeParameters([
	{
		name: 'Signin with provider',
		description: 'Signin with provider',
		schema: z.object({
			provider: z.enum(AUTH_PROVIDERS),
		}),
		type: 'Body',
	},
]);
const signInWithProvider = makeEndpoint({
	method: 'post',
	path: '/sign-in-provider',
	response: signInWithProviderResponseSchema,
	alias: 'signInWithProvider',
	description: 'Signin a user with provider',
	parameters: signWIthProviderParams,
});

const signInWithOTPMailParams = makeParameters([
	{
		name: 'Signin with OTP email',
		description: 'Signin with OTP email',
		schema: z.object({
			email: z.string().email(),
		}),
		type: 'Body',
	},
]);

const signInWithOTPMail = makeEndpoint({
	method: 'post',
	path: '/sign-in-otp-email',
	response: signInResponseSchema,
	alias: 'signInWithOTPMail',
	description: ' Signin a user with OTP email',
	parameters: signInWithOTPMailParams,
});

const signInWithOTPPhoneParams = makeParameters([
	{
		name: 'Signin with OTP email',
		description: 'Signin with OTP email',
		schema: z.object({
			phone: z
				.string()
				.min(8)
				.max(15)
				.regex(/^\+?[0-9]+$/),
		}),
		type: 'Body',
	},
]);

const signInWithOTPPhone = makeEndpoint({
	method: 'post',
	path: '/sign-in-otp-phone',
	response: signInResponseSchema,
	alias: 'signInWithOTPPhone',
	description: ' Signin a user with OTP phone',
	parameters: signInWithOTPPhoneParams,
});

const iamParams = makeParameters([
	{
		name: 'Authorization',
		description: 'Bearer token',
		schema: z.string(),
		type: 'Header',
	},
]);

const resetPasswordForEmail = makeEndpoint({
	method: 'post',
	path: '/request-reset-password',
	response: z.object({}),
	alias: 'resetPasswordForEmail',
	description: 'Request reset password for email',
	parameters: signInWithOTPMailParams,
});

const refreshTokenParams = makeParameters([
	{
		name: 'refreshToken',
		description: 'refresh token',
		schema: z.object({
			refreshToken: z.string().optional(),
		}),
		type: 'Body',
	},
]);

const refreshToken = makeEndpoint({
	method: 'post',
	path: '/refresh-token',
	response: signInResponseSchema,
	alias: 'refreshToken',
	description: 'Refresh token',
	parameters: refreshTokenParams,
});

const logout = makeEndpoint({
	method: 'post',
	path: '/logout',
	response: z.object({}),
	alias: 'logout',
	description: 'Logout',
	parameters: iamParams,
});
const generateInvitationLink = makeEndpoint({
	method: 'post',
	path: '/generate-invitation-link',
	response: z.object({}),
	alias: 'generateInvitationLink',
	description: 'generate-invitation-link',
	parameters: signInWithOTPMailParams,
});

export const authApi = makeApi([
	signup,
	signIn,
	signInWithProvider,
	signInWithOTPMail,
	signInWithOTPPhone,
	resetPasswordForEmail,
	refreshToken,
	logout,
	generateInvitationLink,
]);
