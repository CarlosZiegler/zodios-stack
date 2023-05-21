import { ZodiosRequestHandler } from '@zodios/express';
import { Api } from '../api';
import { UserContextSchema } from '../schemas';
import { services } from '../services';

const listObjects: ZodiosRequestHandler<Api, UserContextSchema, 'get', '/object'> = async (req, res, next) => {
	const { user } = req;

	const { data, error } = await services.supabase.storage.listObjects({
		bucketId: user.id,
	});
	if (error) {
		return next(error);
	}
	return res.status(200).json(data);
};

const uploadObject: ZodiosRequestHandler<Api, UserContextSchema, 'post', '/object'> = async (req, res, next) => {
	const { user } = req;
	// TODO: refactor to upload file with streams
	const { data, error } = await services.supabase.storage.uploadObject({
		bucketId: user.id,
		file: req.body.file,
		fileName: req.body.file.originalname,
		options: req.body,
	});
	if (error) {
		return next(error);
	}
	return res.status(200).json(data);
};

const replaceObject: ZodiosRequestHandler<Api, UserContextSchema, 'patch', '/object/:objectId'> = async (
	req,
	res,
	next
) => {
	const { user } = req;
	// TODO: refactor to upload file with streams
	const { data, error } = await services.supabase.storage.replaceObject({
		bucketId: user.id,
		file: req.body.file,
		fileName: req.body.file.originalname,
		options: req.body,
	});
	if (error) {
		return next(error);
	}
	return res.status(200).json(data);
};

const searchObject: ZodiosRequestHandler<Api, UserContextSchema, 'get', '/object/search'> = async (req, res, next) => {
	const { user } = req;
	const path = req.params.path;
	const search = req.params.search;

	const { data, error } = await services.supabase.storage.searchObject({
		bucketId: user.id,
		path,
		search,
	});
	if (error) {
		return next(error);
	}
	return res.status(200).json(data);
};

const deleteObject: ZodiosRequestHandler<Api, UserContextSchema, 'delete', '/object/:objectId'> = async (
	req,
	res,
	next
) => {
	const { user } = req;
	const path = req.params.path;

	const { data, error } = await services.supabase.storage.deleteObject({
		bucketId: user.id,
		fileName: path,
	});
	if (error) {
		return next(error);
	}
	return res.status(200).json(data);
};

const getPublicUrl: ZodiosRequestHandler<Api, UserContextSchema, 'get', '/object/:objectId/public-url'> = async (
	req,
	res,
	next
) => {
	const { user } = req;
	const path = req.params.path;

	const { data } = await services.supabase.storage.getPublicUrl({
		bucketId: user.id,
		fileName: path,
	});

	return res.status(200).json(data);
};

const getObject: ZodiosRequestHandler<Api, UserContextSchema, 'get', '/object/:objectId'> = async (req, res, next) => {
	const { user } = req;
	const path = req.params.path;

	const { data, error } = await services.supabase.storage.downloadObject({
		bucketId: user.id,
		fileName: path,
	});
	if (error) {
		return next(error);
	}
	return res.status(200).json(data);
};
const getSignedObjectUrl: ZodiosRequestHandler<Api, UserContextSchema, 'get', '/object/:objectId/signed-url'> = async (
	req,
	res,
	next
) => {
	const { user } = req;
	const path = req.params.path;

	const { data, error } = await services.supabase.storage.createSignedUrl({
		bucketId: user.id,
		fileName: path,
	});
	if (error) {
		return next(error);
	}
	return res.status(200).json(data);
};

export const objectController = {
	list: listObjects,
	upload: uploadObject,
	replace: replaceObject,
	search: searchObject,
	delete: deleteObject,
	getPublicUrl: getPublicUrl,
	getObject: getObject,
	getSignedUrl: getSignedObjectUrl,
};
