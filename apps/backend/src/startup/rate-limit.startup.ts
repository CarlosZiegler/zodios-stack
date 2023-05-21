import rateLimit from 'express-rate-limit';
import { ZodiosAppType } from '../app';

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minute
	max: 100,
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export function initRateLimit(app: ZodiosAppType) {
	app.use(limiter);
}
