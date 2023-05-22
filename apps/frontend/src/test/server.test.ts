import { setupServer, SetupServerApi } from 'msw/node';
import { DefaultBodyType, MockedRequest, rest, RestHandler } from 'msw';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';

export const createMockServer = (handlers: RestHandler<MockedRequest<DefaultBodyType>>[]) => setupServer(...handlers);

export const createRestHandler = (method: 'get' | 'post', url: string, statusCode: number, payload: any) => [
  rest[method](url, (req, res, ctx) => {
    return res(ctx.status(statusCode), ctx.json(payload));
  }),
];

export const startMockServer = (server: SetupServerApi) => {
  beforeAll(() => {
    vi.useFakeTimers();
    server.listen({ onUnhandledRequest: 'error' });
  });

  //  Close server after all tests
  afterAll(() => server.close());

  // Reset handlers after each test `important for test isolation`
  afterEach(() => server.resetHandlers());
};
