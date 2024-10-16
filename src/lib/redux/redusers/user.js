const initialState = {
  email: '',
  role: 0,
  isActive: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_USER_STATUS':
      return {
        ...state,
        isActive: Boolean(action.payload),
      };

    default:
      return state;
  }
};
