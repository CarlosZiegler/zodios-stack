import { Provider } from '@supabase/supabase-js';
import { supabase } from '../../providers';

export const signUpWithPassword = async (user: Partial<any>) => {
	return supabase.auth.signUp({
		email: user.email,
		password: user.password,
		phone: user.phone,
	});
};

export const signInWithPassword = async (user: Partial<any>) => {
	return supabase.auth.signInWithPassword({
		email: user.email,
		password: user.password,
	});
};

export const signInWithProvider = async ({ provider }: { provider: Provider }) => {
	return supabase.auth.signInWithOAuth({
		provider,
		options: {
			redirectTo: 'https://example.com',
		},
	});
};

export const signInOTPPhone = async ({ phone }: { phone: string }) => {
	return supabase.auth.signInWithOtp({
		phone,
	});
};

export const signInOTPMail = async ({ email }: { email: string }) => {
	return supabase.auth.signInWithOtp({
		email,
		options: {
			shouldCreateUser: true,
		},
	});
};

export const signInMagicLink = async (user: any) => {
	return supabase.auth.signInWithOtp({
		email: user.email,
		options: {
			emailRedirectTo: 'https://example.com/welcome',
			shouldCreateUser: true,
		},
	});
};

export const getCurrentUser = async (token: string) => {
	return supabase.auth.getUser(token);
};

export const generateInviteLink = async (email: string) => {
	return supabase.auth.admin.generateLink({
		type: 'invite',
		email,
		options: {
			data: {
				// TODO: add custom data
			},
		},
	});
};

export const resetPasswordForEmail = async (email: string) => {
	return supabase.auth.resetPasswordForEmail(email, {});
};

export const refreshToken = async ({ refreshToken }: { refreshToken: string }) => {
	return supabase.auth.refreshSession({ refresh_token: refreshToken });
};

export const signOut = async ({ token }: { token: string }) => {
	return supabase.auth.admin.signOut(token);
};
