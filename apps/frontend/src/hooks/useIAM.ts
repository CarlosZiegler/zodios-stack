import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';

import { auth } from '../services';

export const useIAM = () => {
  const token = Cookies.get('x-auth-token');
  return useQuery({
    queryKey: ['iam'],
    queryFn: () => auth.iam(),
    retryOnMount: false,
    enabled: token !== undefined,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    retryDelay: 500,
  });
};
