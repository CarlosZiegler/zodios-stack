import { useRoutes, RouteObject } from 'react-router-dom';
import { BellRinging, Settings as SettingsIcon } from 'tabler-icons-react';

import { routes } from '../../routes';
import { Login, SignUp } from '../../pages';
import { Layout } from '../Layout';

const links = [
  {
    link: routes.app.settings,
    label: 'Personal Information',
    icon: SettingsIcon,
  },
  { link: routes.app.notifications, label: 'Notifications', icon: BellRinging },
];

export const privateRoutes: RouteObject[] = [
  {
    path: routes.app.main,
    element: <Layout links={links} />,
    children: [
      {
        path: routes.app.notifications,
        element: <div>notifications</div>,
        index: true,
      },
      {
        path: routes.app.settings,
        element: <div>settings</div>,
      },
    ],
  },
];

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
  return useRoutes([...publicRoutes, ...privateRoutes]);
};
