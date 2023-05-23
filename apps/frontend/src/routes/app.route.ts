export const appRoutes = {
  main: '/',
  notifications: '/notifications',
  settings: '/settings',
  auth: {
    signUp: '/auth/sign-up',
    signIn: '/auth/sign-in',
    forgotPassword: '/auth/forgot-password',
    forgotPasswordSuccess: '/auth/forgot-password-success',
    resetPassword: '/auth/reset-password/:userId/:token',
  },
};
