import { storageController } from '../controllers';
import { userContext } from '../context';
import { api } from '../api';

export const bucketRouter = userContext.router(api);

bucketRouter.post('/bucket', storageController.bucket.createUserBucket);
bucketRouter.get('/bucket', storageController.bucket.getUserBucket);
bucketRouter.put('/bucket', storageController.bucket.emptyUserBucket);
bucketRouter.delete('/bucket', storageController.bucket.deleteUserBucket);
