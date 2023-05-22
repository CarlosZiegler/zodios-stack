import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
  Space,
  Center,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { credentialsSchema, CredentialsSchemaType } from './Login.schema';
import { useLogin } from '../../hooks';
import { routes } from '../../routes';
import { ThemeToggle } from '../../components/ThemeToggle';
import ErrorMessage from '../../components/ErrorMessage';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CredentialsSchemaType>({
    resolver: zodResolver(credentialsSchema),
    mode: 'onChange',
  });
  const navigate = useNavigate();

  const { mutate: handleLogin, isLoading, isError, error } = useLogin();

  // useEffect(() => {
  //   if (Cookies.get('x-auth-token')) {
  //     navigate(routes.app.main);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (isError) {
  //     showNotification({
  //       autoClose: 5000,
  //       title: 'Invalid details',
  //       message: error?.message,
  //       color: 'red',
  //       loading: false,
  //     });
  //   }
  // }, [isError]);

  const onSubmit: SubmitHandler<CredentialsSchemaType> = async (data) => {
    const { email, password } = data;
    handleLogin({ email, password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Center>
          <ThemeToggle.SegmentedToggle />
        </Center>
      </Container>
      <Title align="center">
        <Center>
          <Group>Login Page</Group>
        </Center>
      </Title>
      <Title order={3} align="center">
        <Center>Welcome back!</Center>
      </Title>

      <Paper p={30} mt={30} radius="md">
        <Group style={{ width: '100%' }}>
          <TextInput
            style={{ width: '100%' }}
            label="Email"
            placeholder="you@example.com"
            required
            {...register('email')}
          />

          <ErrorMessage inputName={'email'} errors={errors} />
        </Group>
        <Group style={{ width: '100%' }}>
          <PasswordInput
            style={{ width: '100%' }}
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...register('password')}
          />

          <ErrorMessage inputName={'password'} errors={errors} />
        </Group>

        <Group position="apart" mt="md">
          <Link to={routes.app.auth.forgotPassword}>Forgot password?</Link>
          <Button mt="md" type="submit" loading={isLoading} disabled={!isValid}>
            Sign in
          </Button>
        </Group>
        <Space h="xl" />
        <Divider my="sm" label="or" labelPosition="center" />
        <Space h="xl" />
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{' '}
          <Link to={routes.app.auth.signUp}>Create account</Link>
        </Text>
      </Paper>
    </form>
  );
}
