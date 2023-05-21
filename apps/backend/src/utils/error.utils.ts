import Logger from './logger.utils';
import { ErrorRequestHandler } from 'express';
import { internal } from '@hapi/boom';
import { boomify } from '@hapi/boom';
import { StatusCodes } from 'http-status-codes';

/**
 * Error Handling for express - using @hapi/boom for standard responses
 * @param err - Error or Boom error
 */
export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
	if (error) {
		Logger.info(error);
		if (!error.isBoom) {
			console.log(error);
			return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(boomify(error));
		}
		return res.status(error.output.statusCode).json(error.output.payload);
	} else {
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json(internal('Strange error happend. We are looking into it.'));
	}
};
