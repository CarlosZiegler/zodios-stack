import Cookies from 'js-cookie';
import { Zodios } from '@zodios/core';
import { api } from 'backend';

export const apiClient = new Zodios('http://localhost:5001/api/v1/', api);
apiClient.axios.interceptors.request.use((config) => {
  // TODO: check logic, because it's not working with the current backend, need explicit on auth.service.ts
  const token = Cookies.get('x-auth-token');
  if (token && config.headers) {
    config.headers.token = token;
    config.headers['Content-Type'] = 'application/json';
  }
  return config;
});

apiClient.axios.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove('x-auth-token');
    }

    // TODO: add custom error handling
    // if(isErrorFromPath(api, "post", "/auth/sign-in", error)){
    //   // error type is now narrowed to an axios error with a response from the ones defined in the api
    //   if(error.response.status === 401) {
    //     // error.response.data is guaranteed to be of type { message: string, specificTo404: string }
    //   } else {
    //     // error.response.data is guaranteed to be of type { message: string }
    //   }
    // }

    return Promise.reject(error);
  }
);
