import Logger from './utils/logger.utils';
import { loggerMiddleware } from './middlewares';
import { initCORS, initProd, initDocs, initRateLimit, initRoutes } from './startup';
import { app } from './app';
import { envs } from './config';

export const startServer = async () => {
	Logger.info('Starting Logging...');
	app.use(loggerMiddleware);

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
		// const routes = app._router.stack;

		// app._router.stack.forEach(print.bind(null, []));

		Logger.info(`Server is running PORT :${envs.server.PORT}`);
	});
};

startServer();

// function print(path: any, layer: any) {
// 	if (layer.route) {
// 		layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))));
// 	} else if (layer.name === 'router' && layer.handle.stack) {
// 		layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))));
// 	} else if (layer.method) {
// 		Logger.http(`${layer.method.toUpperCase()} ${path.concat(split(layer.regexp)).filter(Boolean).join('/')}`);
// 	}
// }

// function split(thing: any) {
// 	if (typeof thing === 'string') {
// 		return thing.split('/');
// 	} else if (thing.fast_slash) {
// 		return '';
// 	} else {
// 		var match = thing
// 			.toString()
// 			.replace('\\/?', '')
// 			.replace('(?=\\/|$)', '$')
// 			.match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
// 		return match ? match[1].replace(/\\(.)/g, '$1').split('/') : '<complex:' + thing.toString() + '>';
// 	}
// }
