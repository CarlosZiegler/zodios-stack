import { ErrorRequestHandler } from 'express';
import { internal } from '@hapi/boom';
import { boomify } from '@hapi/boom';
import { StatusCodes } from 'http-status-codes';
import { fromZodError } from 'zod-validation-error';
import { ZodError } from 'zod';
import { ZodiosError } from '@zodios/core';
import winston from 'winston';
import { Logger } from '../utils';

/**
 * Error Handling for express - using @hapi/boom for standard responses
 * @param err - Error or Boom error
 */
export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
	if (error) {
		winston.error(error.message, error);
		Logger.info(error);
		if (!error.isBoom) {
			if (error instanceof ZodError) {
				return res.status(StatusCodes.BAD_REQUEST).json(boomify(fromZodError(error)));
			}
			if (error instanceof ZodiosError && error?.cause instanceof ZodError) {
				return res.status(StatusCodes.BAD_REQUEST).json(boomify(fromZodError(error.cause)));
			}
			return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(boomify(error));
		}

		return res.status(error.output.statusCode).json(error.output.payload);
	} else {
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json(internal('Strange error happend. We are looking into it.'));
	}
};
