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

const getCollectionList = makeEndpoint({
	method: 'get',
	path: '/',
	response: signInResponseSchema,
	alias: 'getCollectionList',
	description: 'Get user Collection',
	parameters: authHeaderParams,
});

const createCollection = makeEndpoint({
	method: 'post',
	path: '/:collectionId',
	response: signUpResponseSchema,
	alias: 'createCollection',
	description: 'Create user Collection',
	parameters: authHeaderParams,
});

const getCollection = makeEndpoint({
	method: 'get',
	path: '/:collectionId',
	response: signInResponseSchema,
	alias: 'getCollection',
	description: 'Get user Collection',
	parameters: authHeaderParams,
});

const emptyCollection = makeEndpoint({
	method: 'put',
	path: '/:collectionId',
	response: signInResponseSchema,
	alias: 'emptyCollection',
	description: 'Clear Collection',
	parameters: authHeaderParams,
});

const deleteCollection = makeEndpoint({
	method: 'delete',
	path: '/:collectionId',
	response: signInResponseSchema,
	alias: 'deleteCollection',
	description: 'Delete Collection',
	parameters: authHeaderParams,
});

export const collectionApi = makeApi([
	createCollection,
	getCollection,
	getCollectionList,
	emptyCollection,
	deleteCollection,
]);
