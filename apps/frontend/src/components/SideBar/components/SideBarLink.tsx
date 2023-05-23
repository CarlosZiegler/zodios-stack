import { NavLink } from 'react-router-dom';
import { createStyles, getStylesRef } from '@mantine/core';

const useStyles = createStyles((theme, _params) => {
  const icon = getStylesRef('icon');
  return {
    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      cursor: 'pointer',

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color:
          theme.colorScheme === 'dark'
            ? theme.white
            : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === 'dark' ? 5 : 7
            ],
        },
      },
    },
  };
});

export const SideBarLink: React.FC<{
  link: string;
  label: string;
  icon: any;
  onClick?: () => void;
}> = ({ ...item }) => {
  const { classes, cx } = useStyles();

  return (
    <NavLink
      className={({ isActive }) =>
        cx(classes.link, {
          [classes.linkActive]: isActive,
        })
      }
      to={item.link}
      onClick={() => item?.onClick?.()}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </NavLink>
  );
};
