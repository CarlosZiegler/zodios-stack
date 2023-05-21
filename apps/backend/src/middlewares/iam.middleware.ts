import { services } from '../services';
import { ZodiosRequestHandler } from '@zodios/express';
import { Api } from '../api';
import { UserContextSchema } from '../schemas/types.schema';
import { RequestFormat } from '@zodios/core/lib/zodios.types';
import { NextFunction, Request, RequestHandler, Response } from 'express';

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
