import { ReactNode, useState } from 'react';
import { Notifications } from '@mantine/notifications';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';

export const UIProvider = ({
  children,
}: {
  children?: ReactNode | undefined;
}) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, primaryColor: 'green' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Notifications position="top-right" zIndex={3000} />
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
