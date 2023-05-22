import { Paper, createStyles } from '@mantine/core';
import { LoginForm } from './Login.Form';

const useStyles = createStyles((theme) => ({
  form: {
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    // minHeight: '100vh',
    // maxWidth: 450,
    paddingTop: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },
}));

export const Login = () => {
  const { classes } = useStyles();
  return (
    <Paper className={classes.form} radius={0} p={30}>
      <LoginForm />
    </Paper>
  );
};
