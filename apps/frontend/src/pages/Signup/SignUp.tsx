import { Container, Stack } from '@mantine/core';

import { SignUpForm } from './SignUp.Form';
import { ThemeToggle } from '../../components/ThemeToggle';

export const SignUp = () => {
  return (
    <Stack>
      <Container>
        <ThemeToggle.SegmentedToggle />
      </Container>
      <SignUpForm />
    </Stack>
  );
};
