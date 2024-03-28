const initialState = {
  notification: '',
  typeNotification: 'success',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'APP_ERROR':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
