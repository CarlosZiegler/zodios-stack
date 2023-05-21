import { api } from '../api';
import { userContext } from '../context/user.context';
import { current } from '../controllers';

export const userRouter = userContext.router(api);

userRouter.get('/user/iam', current);
