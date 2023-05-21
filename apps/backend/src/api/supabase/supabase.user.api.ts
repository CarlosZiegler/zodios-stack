import { makeApi } from '@zodios/core';
import { userContextSchema } from '../../schemas/user.schema';

export const userApi = makeApi([
	{
		method: 'get',
		path: '/iam',
		alias: 'iam',
		description: 'Get a current user',
		response: userContextSchema,
	},
	{
		method: 'put',
		path: '/:id',
		alias: 'update',
		description: 'Update current user',
		response: userContextSchema,
	},
	{
		method: 'delete',
		path: '/:id',
		alias: 'delete',
		description: 'Delete current user',
		response: userContextSchema,
	},
]);
