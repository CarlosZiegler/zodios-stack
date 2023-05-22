import { useRoutes, RouteObject } from 'react-router-dom';

import { routes } from '../../routes';
import { Login, SignUp } from '../../pages';

export const publicRoutes: RouteObject[] = [
  {
    path: routes.app.auth.signIn,
    element: <Login />,
    index: true,
  },
  {
    path: routes.app.auth.signUp,
    element: <SignUp />,
  },
  {
    path: routes.app.main,

    element: (
      <div>
        You are logged in!
        <button>logout</button>
      </div>
    ),
  },
  {
    path: routes.app.auth.forgotPassword,
    element: <div>forgotPassword</div>,
  },
  {
    path: routes.app.auth.forgotPasswordSuccess,
    element: <div>forgotPasswordSuccess</div>,
  },
  {
    path: routes.app.auth.resetPassword,
    element: <div>resetPassword</div>,
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
];

export const NavigationRoutes = () => {
  return useRoutes([...publicRoutes]);
};
