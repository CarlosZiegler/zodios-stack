import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormContext,
} from 'react-hook-form';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Select,
  Center,
  Divider,
} from '@mantine/core';
import { DevTool } from '@hookform/devtools';

import ErrorMessage from '../../components/ErrorMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupSchemaType, signupSchema } from './SignUp.schema';
import { routes } from '../../routes';
import { useRegister } from '../../hooks';

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
  });

  const { mutate: handleRegister, isLoading, isError, error } = useRegister();

  const onSubmit: SubmitHandler<SignupSchemaType> = async (data) => {
    const { email, password, confirmPassword } = data;

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
              style={{ width: '100%' }}
              mt="md"
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
              style={{ width: '100%' }}
              label="Password"
              autoComplete="new-password"
              placeholder="New password"
              required
              mt="md"
              {...register('password')}
            />

            <ErrorMessage inputName={'password'} errors={errors} />
          </Group>
          <Group style={{ width: '100%' }}>
            <PasswordInput
              style={{ width: '100%' }}
              label="Confirm Password"
              placeholder="Please confirm your password"
              autoComplete="new-password"
              required
              mt="md"
              {...register('confirmPassword')}
            />

            <ErrorMessage inputName={'confirmPassword'} errors={errors} />
          </Group>

          <Divider my={25} />

          <Center mt={25}>
            <Button
              mt="xl"
              type="button"
              disabled={!isValid}
              loading={isLoading}
            >
              Continue
            </Button>
          </Center>
        </Paper>
        <DevTool control={control} />
      </Container>
    </form>
  );
};
