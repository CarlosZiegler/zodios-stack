import * as supabaseAuthService from './supabase/supabase.auth.service';
import * as supabaseStorageService from './supabase/supabase.storage.service';

export const services = {
	supabase: {
		auth: supabaseAuthService,
		storage: supabaseStorageService,
	},
};
