import { serve, setup } from 'swagger-ui-express';
import { openApiBuilder } from '@zodios/openapi';
import { Express } from 'express';
import { api } from '../api/';
import { ZodiosAppType } from '../app';

export const swaggerProvider = {
	path: '/api-docs',
	serve: serve,
	registerApp: (app: ZodiosAppType) => {
		const document = openApiBuilder({
			title: 'API',
			version: '1.0.0',
			description: 'A simple user API',
		})
			.addServer({ url: '/api/v1', description: 'Development server' })
			// you can declare as many security schemes as you want
			// .addSecurityScheme('admin', bearerAuthScheme())
			// you can declare as many apis as you want
			.addPublicApi(api)
			// you can declare as many protected apis as you want
			// .addProtectedApi('admin', adminApi)
			.build();

		app.use('/api-docs', setup(document));
		app.use(`/docs/swagger.json`, (_, res) => res.json(document));
		app.use('/docs', serve);
		app.use('/docs', setup(undefined, { swaggerUrl: '/docs/swagger.json' }));
	},
};
