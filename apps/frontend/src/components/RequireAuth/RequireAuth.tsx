import { LoadingOverlay } from '@mantine/core';
import Cookies from 'js-cookie';
import { Navigate, useLocation } from 'react-router-dom';

import { useIAM } from '../../hooks';
import { routes } from '../../routes';

export function RequireAuth({ element }: { element: JSX.Element }) {
  const location = useLocation();

  const token = Cookies.get('x-auth-token');
  const { data, isLoading, isFetched, isFetching, isSuccess, user } = useIAM();

  if (isFetching) {
    return <LoadingOverlay visible={isLoading} />;
  }

  if (!token || (!user && !data?.user && isSuccess && isFetched)) {
    return (
      <Navigate
        to={routes.app.auth.signIn}
        state={{ from: location }}
        replace
      />
    );
  }

  return element;
}
