import { showNotification } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import { auth } from '../services';
import { routes } from '../routes';

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (credentials: any) => {
      return auth.signIn(credentials);
    },
    onSuccess({ session }) {
      if (session) {
        Cookies.set('x-auth-token', session.access_token, {
          path: '/',
          expires: 1,
        });
        navigate(routes.app.main);
      }
    },
    onError(error: Error) {
      // TODO: add handle error Notification
      showNotification({
        title: 'Error',
        message: error.message,
        color: 'red',
      });
    },
  });
};
