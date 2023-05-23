import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Group,
  Button,
  Center,
  createStyles,
} from '@mantine/core';
import { DevTool } from '@hookform/devtools';

import ErrorMessage from '../../components/ErrorMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupSchemaType, signupSchema } from './SignUp.schema';
import { routes } from '../../routes';
import { useRegister } from '../../hooks';

const useStyles = createStyles(() => ({
  root: {
    width: '100%',
  },
  label: {
    width: '100%',
    textAlign: 'start',
  },
}));

export const SignUpForm = () => {
  const styles = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
  });

  const { mutate: handleRegister, isLoading } = useRegister();

  const onSubmit: SubmitHandler<SignupSchemaType> = async (data) => {
    const { email, password } = data;

    handleRegister({ email, password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container
        sizes={{
          xs: 250,
          sm: 450,
          md: 780,
          lg: 780,
          xl: 780,
        }}
        my={40}
      >
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Create your Account
        </Title>

        <Title order={4} align="center">
          Already have an ACCOUNT?{' '}
          <Link to={routes.app.auth.signIn} style={{ fontWeight: 700 }}>
            Sign In
          </Link>
        </Title>
        <Paper shadow="md" p={30} mt={30} radius="md">
          <Group style={{ width: '100%' }}>
            <TextInput
              className={(styles.classes.root, styles.classes.label)}
              label="Email"
              type="email"
              placeholder="you@domain.com"
              required
              {...register('email')}
            />
            <ErrorMessage inputName={'email'} errors={errors} />
          </Group>

          <Group style={{ width: '100%' }}>
            <PasswordInput
              className={(styles.classes.root, styles.classes.label)}
              label="Password"
              autoComplete="new-password"
              placeholder="New password"
              required
              {...register('password')}
            />

            <ErrorMessage inputName={'password'} errors={errors} />
          </Group>
          <Group style={{ width: '100%' }}>
            <PasswordInput
              className={(styles.classes.root, styles.classes.label)}
              label="Confirm Password"
              placeholder="Please confirm your password"
              autoComplete="new-password"
              required
              {...register('confirmPassword')}
            />

            <ErrorMessage inputName={'confirmPassword'} errors={errors} />
          </Group>

          <Center mt={25}>
            <Button type="button" disabled={!isValid} loading={isLoading}>
              Continue
            </Button>
          </Center>
        </Paper>
        <DevTool control={control} />
      </Container>
    </form>
  );
};
