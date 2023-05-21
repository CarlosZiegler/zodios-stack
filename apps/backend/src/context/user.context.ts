import { zodiosContext } from '@zodios/express';

import { userContextSchema } from '../schemas/user.schema';

export const userContext = zodiosContext(userContextSchema);

export type UserContext = typeof userContext;
