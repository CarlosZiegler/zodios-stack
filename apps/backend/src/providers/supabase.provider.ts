import { createClient } from '@supabase/supabase-js';
import { envs } from '../config';

export const supabase = createClient(envs.server.SUPABASE_URL, envs.server.SUPABASE_SERVICE_ROLE_KEY, {
	auth: {
		autoRefreshToken: false,
		persistSession: false,
	},
});
