import { Paper, createStyles } from '@mantine/core';
import { LoginForm } from './Login.Form';

const useStyles = createStyles((theme) => ({
  form: {
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
    <Paper className={classes.form} radius="md" p={30} shadow="md">
      <LoginForm />
    </Paper>
  );
};
