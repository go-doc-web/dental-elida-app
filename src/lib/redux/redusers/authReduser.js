const initialState = {
  token: null,
  userName: null,
  email: null,
  role: null,
  error: null,
};

export const authReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN_SUCCESS':
      return { ...state, ...payload, error: null };
    case 'LOGIN_ERROR':
      return { ...state, error: payload };
    default:
      return state;
  }
};
// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };
