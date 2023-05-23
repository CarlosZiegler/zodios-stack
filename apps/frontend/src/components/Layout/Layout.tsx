import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { AppShell, Container } from '@mantine/core';
import { Icon } from 'tabler-icons-react';
import { SideBar } from '../SideBar';
import { NavBar } from '../NavBar';
import { RequireAuth } from '../RequireAuth';
import { ErrorBoundary } from '../ErrorBoundary';

export type LayoutProps = {
  links?: {
    link: string;
    label: string;
    icon: Icon;
  }[];
};

export const Layout = ({ links }: LayoutProps) => {
  const [opened, setOpened] = useState(false);
  return (
    <RequireAuth
      element={
        <AppShell
          padding="md"
          className="app-shell"
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          navbar={links && <SideBar linkList={links} isOpened={opened} />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white',
            },
            body: {
              height: '95vh',
            },
            root: {
              maxWidth: '1920px',
              margin: '0 auto',
            },
          })}
          header={<NavBar opened={opened} setOpened={setOpened} />}
        >
          <ErrorBoundary>
            <Container mt={50}>
              <Outlet />
            </Container>
          </ErrorBoundary>
        </AppShell>
      }
    />
  );
};
