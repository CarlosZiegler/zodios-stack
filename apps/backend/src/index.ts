import 'express-async-errors';
import Logger from './utils/logger.utils';
import { errorHandler, loggerMiddleware } from './middlewares';
import { initCORS, initProd, initDocs, initRateLimit, initRoutes } from './startup';
import { app } from './app';
import { envs } from './config';

export const startServer = async () => {
	Logger.info('Starting Logging...');
	app.use(loggerMiddleware);

	Logger.info(' - adding error handler...');
	app.use(errorHandler);

	Logger.info(' - adding Cors ...');
	initCORS(app);

	Logger.info(' - adding Prod middleware...');
	initProd(app);

	Logger.info(' - adding docs...');
	initDocs(app);

	Logger.info(' - adding routes...');
	initRoutes(app);

	Logger.info(' - adding rate limit...');
	initRateLimit(app);

	app.listen(envs.server.PORT, () => {
		Logger.info(`Server is running PORT :${envs.server.PORT}`);
	});
};

startServer();
