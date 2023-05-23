import {
  Burger,
  Header as MantineHeader,
  MediaQuery,
  useMantineTheme,
  Text,
  Group,
  Image,
  Box,
} from '@mantine/core';

import { Logout } from 'tabler-icons-react';

import { SideBarLink } from '../SideBar/components/SideBarLink';
import { ThemeToggle } from '../ThemeToggle';
import { useLogout } from '../../hooks';
import { routes } from '../../routes';

type Props = {
  opened: boolean;
  setOpened: (isOpened: boolean) => void;
};

export const NavBar = ({ opened, setOpened }: Props) => {
  const theme = useMantineTheme();
  const { mutate: logout } = useLogout();

  return (
    <MantineHeader
      height={70}
      p="md"
      style={{
        border:
          theme.colorScheme === 'light'
            ? 0
            : `1px solid ${theme.colors.dark[4]}`,
        maxWidth: '1920px',
        margin: '0 auto',
        // zIndex: 100,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: 'none !important' }}>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Group>
              <Text weight={700}> Logo </Text>
            </Group>
            <Group>
              <ThemeToggle.SegmentedToggle />

              <SideBarLink
                icon={Logout}
                label={'Logout'}
                link={routes.app.auth.signIn}
              />
            </Group>
          </Box>
        </MediaQuery>
      </div>
    </MantineHeader>
  );
};
