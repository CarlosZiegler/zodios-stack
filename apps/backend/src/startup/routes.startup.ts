import Logger from '../utils/logger.utils';
import { ZodiosAppType } from '../app/zodios.app';
import { authRouter, userRouter, bucketRouter, objectRouter } from '../routes';
import { iam } from '../middlewares';

export function initRoutes(app: ZodiosAppType) {
	Logger.info('   - adding Auth routes...');
	app.use('/api/v1', authRouter);

	Logger.info('   - adding restrict routes...');
	app.use('/api/v1', iam, userRouter, bucketRouter, objectRouter);

	return app;
}
