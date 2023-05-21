import Logger from '../utils/logger.utils';
import { ZodiosAppType } from '../app/zodios.app';
import { swaggerProvider } from '../providers';

export function initDocs(app: ZodiosAppType) {
	swaggerProvider.registerApp(app);

	return app;
}
