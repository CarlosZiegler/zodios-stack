import Cookies from 'js-cookie';
import { AuthProviders, Credentials } from '../types';
import { apiClient } from './api.service';

export const signUp = (credentials: Credentials) =>
  apiClient.signup(credentials);

export const signIn = (credentials: Credentials) =>
  apiClient.signIn(credentials);

export const signInWithProvider = (provider: AuthProviders) =>
  apiClient.signInWithProvider({ provider });

export const signInWithOTPMail = (email: Credentials['email']) =>
  apiClient.signInWithOTPMail({ email });

export const signInWithOTPPhone = (input: { phone: string }) =>
  apiClient.signInWithOTPPhone(input);

export const refreshToken = () => {
  const refreshToken = Cookies.get('x-refresh-token');
  // TODO: check logic
  if (!refreshToken) {
    return Promise.reject('No refresh token');
  }
  return apiClient.refreshToken({ refreshToken });
};

export const logout = () =>
  apiClient.logout(undefined, {
    headers: {
      Authorization: `Bearer ${Cookies.get('x-auth-token')}` as const,
    },
  });

export const forgotPassword = (email: string) =>
  apiClient.resetPasswordForEmail({
    email,
  });

export const iam = () => apiClient.iam();

export const auth = {
  signUp,
  signIn,
  signInWithProvider,
  signInWithOTPMail,
  signInWithOTPPhone,
  refreshToken,
  logout,
  forgotPassword,
  iam,
};
