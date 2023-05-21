import { User } from '@supabase/supabase-js';
import { supabase } from '../providers';

async function update(updatedUser: User) {
	// TODO: update user
	return supabase.auth.admin.updateUserById(updatedUser.id, {
		phone: updatedUser.phone,
	});
}

async function destroy(id: string) {
	return supabase.auth.admin.deleteUser(id);
}

async function findOne(_id: string, opt?: Record<string, any>) {
	return {};
}

async function find() {
	return [{}];
}

async function exist(_id: string) {
	return false;
}

export const userSupabaseRepository = {
	update,
	destroy,
	exist,
	findOne,
	find,
};
