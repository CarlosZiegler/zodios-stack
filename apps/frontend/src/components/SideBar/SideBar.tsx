import { useId } from 'react';
import { Logout } from 'tabler-icons-react';
import {
  createStyles,
  Navbar,
  Text,
  MediaQuery,
  Avatar,
  Container,
  Title,
} from '@mantine/core';

import { SideBarLink } from './components/SideBarLink';
import { ThemeToggle } from '../ThemeToggle';
import { useIAM, useLogout } from '../../hooks';
import { routes } from '../../routes';
import { useQueryClient } from '@tanstack/react-query';

const useStyles = createStyles((theme) => {
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: (theme.spacing.md as unknown as number) * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },
  };
});

export function SideBar({
  linkList,
  isOpened,
}: {
  linkList: {
    link: string;
    label: string;
    icon: any;
  }[];
  isOpened: boolean;
}) {
  const { classes, theme } = useStyles();
  const id = useId();
  const links = linkList.map((item) => (
    <SideBarLink {...item} key={`${id}-${item.label}`} />
  ));
  const { user } = useIAM();
  const { mutate: logout } = useLogout();

  return (
    <MediaQuery smallerThan="sm" styles={{ width: '100vw' }}>
      <Navbar
        height={'95vh'}
        p="md"
        hiddenBreakpoint="sm"
        hidden={!isOpened}
        width={{ sm: 400, lg: 400 }}
        style={{
          borderRight:
            theme.colorScheme === 'light'
              ? 0
              : `1px solid ${theme.colors.dark[4]}`,
        }}
      >
        <Navbar.Section mt={50} ml={20}>
          <Container mb={50} p={0}>
            <Avatar size={100} radius={100} color="blue" />
            <Title mt={15} order={3} align="start">
              {user.email}
            </Title>
          </Container>
          {links}
        </Navbar.Section>
        <MediaQuery largerThan="sm" styles={{ display: 'none !important' }}>
          <Navbar.Section className={classes.footer}>
            <ThemeToggle.SegmentedToggle />
            <SideBarLink
              icon={Logout}
              label={'Logout'}
              link={routes.app.auth.signIn}
              onClick={logout}
            />
          </Navbar.Section>
        </MediaQuery>
      </Navbar>
    </MediaQuery>
  );
}
