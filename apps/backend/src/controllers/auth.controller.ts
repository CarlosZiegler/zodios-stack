import { ZodiosRequestHandler } from '@zodios/express';
import { Api } from '../api';
import { services } from '../services';
import { UserContextSchema } from '../schemas/types.schema';

const signUp: ZodiosRequestHandler<Api, UserContextSchema, 'post', '/auth/sign-up'> = async (req, res, next) => {
	const { email, password } = req.body;
	const { data, error } = await services.supabase.auth.signUpWithPassword({
		email,
		password,
	});
	if (error) {
		return next(error);
	}
	return res.status(200).send(data);
};

const signIn: ZodiosRequestHandler<Api, UserContextSchema, 'post', '/auth/sign-in'> = async (req, res, next) => {
	const { email, password } = req.body;

	const { data, error } = await services.supabase.auth.signInWithPassword({
		email,
		password,
	});
	if (error) {
		return next(error);
	}
	return res.status(200).send(data);
};

const signInWithProvider: ZodiosRequestHandler<Api, UserContextSchema, 'post', '/auth/sign-in-provider'> = async (
	req,
	res,
	next
) => {
	const { provider } = req.body;

	const { data, error } = await services.supabase.auth.signInWithProvider({
		provider,
	});
	if (error) {
		return next(error);
	}
	return res.status(200).send(data);
};

const signInWithOTPhone: ZodiosRequestHandler<Api, UserContextSchema, 'post', '/auth/sign-in-otp-phone'> = async (
	req,
	res,
	next
) => {
	const { phone } = req.body;

	const { data, error } = await services.supabase.auth.signInOTPPhone({
		phone,
	});
	if (error) {
		return next(error);
	}
	return res.status(200).send(data);
};

const signInWithOTPMail: ZodiosRequestHandler<Api, UserContextSchema, 'post', '/auth/sign-in-otp-email'> = async (
	req,
	res,
	next
) => {
	const { email } = req.body;

	const { data, error } = await services.supabase.auth.signInOTPMail({
		email,
	});
	if (error) {
		return next(error);
	}
	return res.status(200).send(data);
};

const resetPasswordForEmail: ZodiosRequestHandler<
	Api,
	UserContextSchema,
	'post',
	'/auth/request-reset-password'
> = async (req, res, next) => {
	const { email } = req.body;

	const { data, error } = await services.supabase.auth.resetPasswordForEmail(email);
	if (error) {
		return next(error);
	}
	return res.status(200).send(data);
};

const refreshToken: ZodiosRequestHandler<Api, UserContextSchema, 'post', '/auth/refresh-token'> = async (
	req,
	res,
	next
) => {
	const { refreshToken } = req.body;

	const { data, error } = await services.supabase.auth.refreshToken({
		refreshToken,
	});
	if (error) {
		return next(error);
	}
	return res.status(200).send(data);
};

const logout: ZodiosRequestHandler<Api, UserContextSchema, 'post', '/auth/logout'> = async (req, res, next) => {
	const { token } = req.body;

	const { error } = await services.supabase.auth.signOut({
		token,
	});
	if (error) {
		return next(error);
	}
	return res.status(204).send();
};

const generateInvitationLink: ZodiosRequestHandler<
	Api,
	UserContextSchema,
	'post',
	'/auth/generate-invitation-link'
> = async (req, res, next) => {
	const { email } = req.body;

	const { data, error } = await services.supabase.auth.signInMagicLink(email);
	if (error) {
		return next(error);
	}
	return res.status(200).send(data);
};

export const authController = {
	signUp,
	signIn,
	signInWithProvider,
	signInWithOTPhone,
	signInWithOTPMail,
	resetPasswordForEmail,
	refreshToken,
	logout,
	generateInvitationLink,
};
