import { makeApi } from '@zodios/core';
import { makeEndpoint } from '@zodios/core';
import { makeParameters } from '@zodios/core';
import { authHeaderSchema, signInResponseSchema, signUpResponseSchema } from '../../schemas';

const authHeaderParams = makeParameters([
	{
		name: 'Auth',
		description: 'Auth header params',
		schema: authHeaderSchema,
		type: 'Header',
	},
]);

const createObject = makeEndpoint({
	method: 'post',
	path: '/',
	response: signUpResponseSchema,
	alias: 'createObject',
	description: 'Create  Object',
	parameters: authHeaderParams,
});

const getObject = makeEndpoint({
	method: 'get',
	path: '/:objectId',
	response: signInResponseSchema,
	alias: 'getObject',
	description: 'Get  Object',
	parameters: authHeaderParams,
});

const searchObject = makeEndpoint({
	method: 'get',
	path: '/search',
	response: signInResponseSchema,
	alias: 'searchObject',
	description: 'Search  Object',
	parameters: authHeaderParams,
});

const getObjectList = makeEndpoint({
	method: 'get',
	path: '/',
	response: signInResponseSchema,
	alias: 'getObjectList',
	description: 'Get  Object',
	parameters: authHeaderParams,
});

const updateObject = makeEndpoint({
	method: 'patch',
	path: '/:objectId',
	response: signInResponseSchema,
	alias: 'replaceObject',
	description: 'Clear Object',
	parameters: authHeaderParams,
});

const emptyObject = makeEndpoint({
	method: 'put',
	path: '/',
	response: signInResponseSchema,
	alias: 'emptyObject',
	description: 'Clear Object',
	parameters: authHeaderParams,
});

const deleteObject = makeEndpoint({
	method: 'delete',
	path: '/:objectId',
	response: signInResponseSchema,
	alias: 'deleteObject',
	description: 'Clear Object',
	parameters: authHeaderParams,
});

const getPublicUrlObject = makeEndpoint({
	method: 'get',
	path: '/:objectId/public-url',
	response: signInResponseSchema,
	alias: 'getPublicUrlObject',
	description: 'Get public Url Object',
	parameters: authHeaderParams,
});

const getSignedUrlObject = makeEndpoint({
	method: 'get',
	path: '/:objectId/signed-url',
	response: signInResponseSchema,
	alias: 'getSignedUrlObject',
	description: 'Get signed Url Object',
	parameters: authHeaderParams,
});

export const objectApi = makeApi([
	createObject,
	getObject,
	searchObject,
	getObjectList,
	updateObject,
	emptyObject,
	deleteObject,
	getPublicUrlObject,
	getSignedUrlObject,
]);
