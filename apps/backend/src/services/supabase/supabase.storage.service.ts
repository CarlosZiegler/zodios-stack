import { supabase } from '../../providers';
import { File } from 'node:buffer';

export const createBucket = async ({
	bucketId,
	options,
}: {
	bucketId: string;
	options?: {
		public: boolean;
		fileSizeLimit?: number | string | null;
		allowedMimeTypes?: string[] | null;
	};
}) => {
	return supabase.storage.createBucket(bucketId, {
		public: false,
		...options,
	});
};

export const getBucket = async (bucketId: string) => {
	return supabase.storage.getBucket(bucketId);
};

export const updateBucket = async ({
	bucketId,
	options,
}: {
	bucketId: string;
	options?: {
		public: boolean;
		fileSizeLimit?: number | string | null;
		allowedMimeTypes?: string[] | null;
	};
}) => {
	return supabase.storage.updateBucket(bucketId, {
		public: false,
		...options,
	});
};

export const emptyBucket = async (bucketId: string) => {
	return supabase.storage.emptyBucket(bucketId);
};

export const deleteBucket = async (bucketId: string) => {
	return supabase.storage.deleteBucket(bucketId);
};

export const listBuckets = async () => {
	return supabase.storage.listBuckets();
};

export const listCollection = async (bucketId: string) => {
	return supabase.storage.from(bucketId).list();
};

export const uploadObject = async ({
	bucketId,
	file,
	fileName,
	options,
}: {
	bucketId: string;
	fileName: string;
	file: Blob | File | ArrayBuffer | Uint8Array;
	options?: {
		cacheControl?: string;
		upsert?: boolean;
	};
}) => {
	return supabase.storage.from(bucketId).upload(fileName, file, options);
};

export const updateObject = async ({
	bucketId,
	file,
	fileName,
	options,
}: {
	bucketId: string;
	fileName: string;
	file: Blob | File | ArrayBuffer | Uint8Array;
	options?: {
		cacheControl?: string;
		upsert?: boolean;
	};
}) => {
	return supabase.storage.from(bucketId).update(fileName, file, options);
};

export const downloadObject = async ({ bucketId, fileName }: { bucketId: string; fileName: string }) => {
	return supabase.storage.from(bucketId).download(fileName);
};

export const listObjects = async ({ bucketId, path }: { bucketId: string; path?: string }) => {
	return supabase.storage.from(bucketId).list(path, {
		limit: 100,
		offset: 0,
		sortBy: { column: 'name', order: 'asc' },
	});
};

export const searchObject = async ({ bucketId, path, search }: { bucketId: string; path: string; search: string }) => {
	return supabase.storage.from(bucketId).list(path, {
		limit: 100,
		offset: 0,
		sortBy: { column: 'name', order: 'asc' },
		search: search,
	});
};

export const replaceObject = async ({
	bucketId,
	file,
	fileName,
	options,
}: {
	bucketId: string;
	fileName: string;
	file: Blob | File | ArrayBuffer | Uint8Array;
	options?: {
		cacheControl?: string;
		upsert?: boolean;
	};
}) => {
	return supabase.storage.from(bucketId).update(fileName, file, options);
};

export const deleteObject = async ({ bucketId, fileName }: { bucketId: string; fileName: string }) => {
	return supabase.storage.from(bucketId).remove([fileName]);
};

export const createSignedUrl = async ({
	bucketId,
	fileName,
	expirySeconds,
}: {
	bucketId: string;
	fileName: string;
	expirySeconds?: number;
}) => {
	return supabase.storage.from(bucketId).createSignedUrl(fileName, expirySeconds ?? 60);
};

export const createMultipleSignedUrls = async ({
	bucketId,
	fileNames,
	expirySeconds,
}: {
	bucketId: string;
	fileNames: string[];
	expirySeconds: number;
}) => {
	return supabase.storage.from(bucketId).createSignedUrls(fileNames, expirySeconds);
};

export const createUploadSignedUrl = async ({
	bucketId,
	fileName,
}: {
	bucketId: string;
	fileName: string;
	expirySeconds: number;
}) => {
	return supabase.storage.from(bucketId).createSignedUploadUrl(fileName);
};

export const uploadToSignedUrl = async ({
	bucketId,
	fileName,
	file,
	token,
}: {
	bucketId: string;
	fileName: string;
	file: Blob | File | ArrayBuffer | Uint8Array;
	token: string;
}) => {
	return supabase.storage.from(bucketId).uploadToSignedUrl(fileName, token, file);
};

export const getPublicUrl = async ({ bucketId, fileName }: { bucketId: string; fileName: string }) => {
	return supabase.storage.from(bucketId).getPublicUrl(fileName);
};
