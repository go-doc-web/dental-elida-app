import { api } from './api';

export const authorization = data => {
  // email -> string
  // password -> string
  // token ->> string
  console.log(process.env.API_HOST);
  return api.post('/auth/login', { ...data });
};
