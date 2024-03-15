export const authLogin = payload => {
  return {
    type: 'auth/login',
    payload,
  };
};
