import { storageController } from '../controllers';
import { userContext } from '../context';
import { api } from '../api';

export const objectRouter = userContext.router(api);

objectRouter.get('/object', storageController.object.list);
objectRouter.post('/object', storageController.object.upload);
objectRouter.patch('/object/:objectId', storageController.object.replace);
objectRouter.delete('/object/:objectId', storageController.object.delete);
objectRouter.get('/object/:objectId', storageController.object.getObject);
objectRouter.get('/object/:objectId/public-url', storageController.object.getPublicUrl);
objectRouter.get('/object/:objectId/signed-url', storageController.object.getSignedUrl);
objectRouter.get('/object/search', storageController.object.search);
