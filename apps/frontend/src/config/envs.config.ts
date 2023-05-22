const { VITE_API_URL, DEV } = import.meta.env;

const apiUrl = DEV ? 'http://localhost:5001' : VITE_API_URL;

export const envs = { apiUrl };
