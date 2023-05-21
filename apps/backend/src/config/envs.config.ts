import dotenv from 'dotenv';
import { serverSchema } from '../schemas';

dotenv.config();

const _serverEnv = serverSchema.safeParse(process.env);

if (!_serverEnv.success) {
	console.error('❌ Invalid environment variables:\n');
	_serverEnv.error.issues.forEach((issue) => {
		console.error(issue);
	});
	throw new Error('Invalid environment variables');
}

const SERVER = {
	PORT: _serverEnv.data.PORT,
	SUPABASE_ANON_KEY: _serverEnv.data.SUPABASE_ANON_KEY,
	SUPABASE_URL: _serverEnv.data.SUPABASE_URL,
	SUPABASE_SERVICE_ROLE_KEY: _serverEnv.data.SUPABASE_SERVICE_ROLE_KEY,
	REDIS_URL: _serverEnv.data.REDIS_URL,
};

export const envs = {
	server: SERVER,
};
