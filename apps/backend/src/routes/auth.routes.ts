import { api } from '../api';
import { userContext } from '../context/user.context';
import { authController } from '../controllers/auth.controller';

export const authRouter = userContext.router(api);

authRouter.post('/auth/sign-up', authController.signUp);
authRouter.post('/auth/sign-in', authController.signIn);
authRouter.post('/auth/sign-in-provider', authController.signInWithProvider);
authRouter.post('/auth/sign-in-otp-email', authController.signInWithOTPMail);
authRouter.post('/auth/sign-in-otp-phone', authController.signInWithOTPhone);
authRouter.post('/auth/refresh-token', authController.refreshToken);
authRouter.post('/auth/request-reset-password', authController.resetPasswordForEmail);
authRouter.post('/auth/generate-invitation-link', authController.generateInvitationLink);
authRouter.post('/auth/logout', authController.logout);
