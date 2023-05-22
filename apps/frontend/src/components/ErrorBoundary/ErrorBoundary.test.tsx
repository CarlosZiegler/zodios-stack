import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './index';
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

type Props = {
  shouldThrowError: boolean;
};

const BoomComponent: FC<Props> = ({ shouldThrowError }) => {
  if (shouldThrowError) {
    throw new Error('Boom!');
  }

  return <div>Render Success</div>;
};

describe('Boudary Error test', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  test('should be not throw error', () => {
    render(
      <ErrorBoundary>
        <BoomComponent shouldThrowError={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Render Success/i)).toBeDefined();
  });
  test('should be throw error', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <BoomComponent shouldThrowError={true} />
              </ErrorBoundary>
            }></Route>
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText(/try again/i)).toBeDefined();
  });
  test('should be reset error if clicked on try again button', async () => {
    vi.runAllTimers();
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <BoomComponent shouldThrowError={true} />
              </ErrorBoundary>
            }></Route>
        </Routes>
      </BrowserRouter>
    );

    const resetErrorBtn = screen.getByRole('button', {
      name: /try again/i,
    });
    userEvent.click(resetErrorBtn);
  });
});
