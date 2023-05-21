import rateLimit from 'express-rate-limit';
import { ZodiosAppType } from '../app';
import RedisStore from 'rate-limit-redis';
import RedisClient from 'ioredis';
import { envs } from '../config';

// Create a `ioredis` client
const client = new RedisClient(
	// TODO: adjust this logic to your needs
	envs.server.REDIS_URL
);

// Create and use the rate limiter
const limiter = rateLimit({
	// Rate limiter configuration
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers

	// Redis store configuration
	store: new RedisStore({
		// @ts-expect-error - Known issue: the `call` function is not present in @types/ioredis
		sendCommand: (...args: string[]) => client.call(...args),
	}),
});

export function initRateLimit(app: ZodiosAppType) {
	app.use(limiter);
}
