import { bucketController } from './storage.bucket.controller';
import { objectController } from './storage.object.controller';

export const storageController = {
	bucket: bucketController,
	object: objectController,
};
