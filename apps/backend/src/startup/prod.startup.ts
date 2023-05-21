import helmet from 'helmet';
import compression from 'compression';
import { ZodiosAppType } from '../app';

export function initProd(app: ZodiosAppType) {
	if (process.env.APP_ENV === 'prod') {
		app.use(helmet());
		app.use(compression());
	}
}
