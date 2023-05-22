import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import { auth } from '../services';
import { routes } from '../routes';

export const useLogout = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async () => {
      return auth.logout();
    },
    onSuccess() {
      Cookies.remove('x-auth-token');
      navigate(routes.app.auth.signIn);
    },
    onError(error: Error) {
      // TODO: fix this logic
      Cookies.remove('x-auth-token');
    },
  });
};
