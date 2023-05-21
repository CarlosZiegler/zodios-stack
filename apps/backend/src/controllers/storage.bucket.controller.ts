import { ZodiosRequestHandler } from '@zodios/express';
import { Api } from '../api';
import { UserContextSchema } from '../schemas';
import { services } from '../services';

const createUserBucket: ZodiosRequestHandler<Api, UserContextSchema, 'post', '/bucket'> = async (req, res, next) => {
	const { user } = req;
	const { data, error } = await services.supabase.storage.createBucket({
		bucketId: user.id,
	});
	if (error) {
		return next(error);
	}
	return res.status(200).json(data);
};

const getUserBucket: ZodiosRequestHandler<Api, UserContextSchema, 'get', '/bucket'> = async (req, res, next) => {
	const { user } = req;
	const { data, error } = await services.supabase.storage.getBucket(user.id);
	if (error) {
		return next(error);
	}
	return res.status(200).json(data);
};

const emptyUserBucket: ZodiosRequestHandler<Api, UserContextSchema, 'put', '/bucket'> = async (req, res, next) => {
	const { user } = req;
	const { data, error } = await services.supabase.storage.emptyBucket(user.id);
	if (error) {
		return next(error);
	}
	return res.status(200).json(data);
};

const deleteUserBucket: ZodiosRequestHandler<Api, UserContextSchema, 'delete', '/bucket'> = async (req, res, next) => {
	const { user } = req;
	const { data, error } = await services.supabase.storage.deleteBucket(user.id);
	if (error) {
		return next(error);
	}
	return res.status(200).json(data);
};

export const bucketController = {
	createUserBucket,
	getUserBucket,
	emptyUserBucket,
	deleteUserBucket,
};
