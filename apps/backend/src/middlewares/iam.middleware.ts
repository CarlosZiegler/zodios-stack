import { services } from '../services';
import { RequestHandler } from 'express';

// How type this middleware?
export const iam: RequestHandler = async (req, res, next) => {
	const authorization = req.headers.authorization || req.headers.Authorization;
	if (!authorization) {
		throw new Error('there is no bearer token in the headers');
	}

	const token = (authorization as string).split(' ')[1];
	const { data, error } = await services.supabase.auth.getCurrentUser(token);
	if (error) {
		console.log('error');
		return next(error);
	}
	// TODO: Fix this
	(req as any).user = data.user;

	return next();
};
