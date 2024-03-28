const initialState = {
  email: '',
  role: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
