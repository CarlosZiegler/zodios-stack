import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

export const clickByTestId = async (testId: string) => {
  return userEvent.click(screen.getByTestId(testId));
};

export const changeTextFieldByTestId = async (testId: string, text: string) => {
  return userEvent.type(screen.getByTestId(testId, { exact: false }), text);
};

const customRender = (ui: React.ReactElement, options = {}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
    ...options,
  });
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
