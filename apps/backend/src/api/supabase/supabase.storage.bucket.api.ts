import { makeApi } from '@zodios/core';
import { z } from 'zod';
import { makeEndpoint } from '@zodios/core';
import { makeParameters } from '@zodios/core';
import { authHeaderSchema, signInResponseSchema, signUpResponseSchema } from '../../schemas';

const authHeaderParams = makeParameters([
	{
		name: 'authorization',
		description: 'Auth header params',
		schema: authHeaderSchema,
		type: 'Header',
	},
]);

const createUserBucketResponse = z.object({
	name: z.string(),
});

const createUserBucket = makeEndpoint({
	method: 'post',
	path: '/',
	response: createUserBucketResponse,
	alias: 'createUserBucket',
	description: 'Create user bucket',
	parameters: authHeaderParams,
});

const bucketSchema = z.object({
	id: z.string(),
	name: z.string(),
	owner: z.string(),
	public: z.boolean(),
	file_size_limit: z.number().nullable().optional(),
	allowed_mime_types: z.array(z.string()).nullable().optional(),
	created_at: z.string().datetime({ offset: true }),
	updated_at: z.string().datetime({ offset: true }),
});

const getUserBucket = makeEndpoint({
	method: 'get',
	path: '/',
	response: bucketSchema,
	alias: 'getUserBucket',
	description: 'Get user Bucket',
	parameters: authHeaderParams,
});

const emptyUserBucketResponse = z.object({
	message: z.string(),
});

const emptyUserBucket = makeEndpoint({
	method: 'put',
	path: '/',
	response: emptyUserBucketResponse.nullable(),
	alias: 'emptyUserBucket',
	description: 'Clear user bucket',
	parameters: authHeaderParams,
});

const deleteUserBucketResponse = z.object({
	message: z.string(),
});

const deleteUserBucket = makeEndpoint({
	method: 'delete',
	path: '/',
	response: deleteUserBucketResponse.nullable(),
	alias: 'deleteUserBucket',
	description: 'Delete user bucket',
	parameters: authHeaderParams,
});

export const bucketApi = makeApi([createUserBucket, getUserBucket, emptyUserBucket, deleteUserBucket]);
