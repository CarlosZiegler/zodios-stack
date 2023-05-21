import { mergeApis } from '@zodios/core';
import { authApi, userApi, bucketApi, collectionApi, objectApi } from './supabase';

export const api = mergeApis({
	'/auth': authApi,
	'/user': userApi,
	'/bucket': bucketApi,
	'/collection': collectionApi,
	'/object': objectApi,
});

export type Api = typeof api;
