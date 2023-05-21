import { NextFunction, Request, Response } from 'express';

import { userSupabaseRepository } from '../repository';
import { User } from '@supabase/supabase-js';
import { ZodiosRequestHandler } from '@zodios/express';
import { Api } from '../api';
import { UserContextSchema } from '../schemas/types.schema';

export const current: ZodiosRequestHandler<Api, UserContextSchema, 'get', '/user/iam'> = async (req, res) => {
	console.log('current');
	return res.status(200).json({ user: req.user });
};

// const update: ZodiosRequestHandler<Api, UserContextSchema, 'put', '/user/:id'> = async (req, res, next) => {
// 	const { user } = res.locals;
// 	const updatedUser: User = {
// 		...user,
// 		...req.body,
// 	};
// 	const { data, error } = await userSupabaseRepository.update(updatedUser);
// 	if (error) {
// 		return next(error);
// 	}
// 	return res.status(200).json(data);
// };
// const destroy: ZodiosRequestHandler<Api, UserContextSchema, 'delete', '/user/:id'> = async (req, res, next) => {
// 	const { user } = res.locals;
// 	const { id } = req.params;
// 	if (user.id !== id) {
// 		return res.status(401).json({ message: 'Unauthorized' });
// 	}
// 	const { data, error } = await userSupabaseRepository.destroy(user.id);
// 	if (error) {
// 		return next(error);
// 	}
// 	return res.status(200).json(data);
// };

// export const userController = {
// 	current,
// 	update,
// 	destroy,
// };
