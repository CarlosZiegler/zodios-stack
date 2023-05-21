import winston from 'winston';
import { Response, Request, NextFunction } from 'express';

import { ErrorRequestHandler } from 'express';
import { internal } from '@hapi/boom';
import { boomify } from '@hapi/boom';
import { StatusCodes } from 'http-status-codes';
import { Logger } from '../utils';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
	winston.error(err.message, err);
	Logger.info('errrrrooooossss');
	if (err) {
		Logger.info(err);
		if (!err?.isBoom) {
			return res.json(boomify(err));
		}
		return res.status(err.output.statusCode).json(err.output.payload);
	} else {
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json(internal('Strange error happend. We are looking into it.'));
	}
}
