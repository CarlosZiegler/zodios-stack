import { useQuery, useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { auth } from '../services';

export const useIAM = () => {
  const token = Cookies.get('x-auth-token');
  const queryClient = useQueryClient();
  //TODO: fix type
  const data = queryClient.getQueryData<any>(['iam']);
  const queries = useQuery({
    queryKey: ['iam'],
    queryFn: () => auth.iam(),
    retryOnMount: false,
    enabled: !data?.user && token !== undefined,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,

    retry: 1,
    retryDelay: 500,
  });
  return {
    user: data?.user,
    ...queries,
  };
};
