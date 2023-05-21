import winston from 'winston';

export function initLogger() {
	winston.exceptions.handle(new winston.transports.Console());
	winston.add(new winston.transports.Console());
}
