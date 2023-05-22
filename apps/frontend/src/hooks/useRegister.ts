import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { auth } from '../services';
import { Credentials } from '../types';
import { routes } from '../routes';

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation(
    async (credentials: Credentials) => {
      return auth.signUp(credentials);
    },
    {
      onSuccess() {
        navigate(routes.app.auth.signIn);
      },
    }
  );
};
