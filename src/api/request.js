import { api } from './api';

export const authorization = data => {
  // email -> string
  // password -> string
  // token ->> string

  return api.post('/auth/login', { ...data });
};
