import { ZodiosApp } from '@zodios/express';
import { userContext } from '../context/user.context';
import { Api, api } from '../api';
import { UserContextSchema } from '../schemas/types.schema';

export type ZodiosAppType = ZodiosApp<Api, UserContextSchema>;
export const app: ZodiosAppType = userContext.app(api);
