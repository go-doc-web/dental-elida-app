const initialState = {
  notification: '',
  typeNotification: 'success',
};

// eslint-disable-next-line import/no-anonymous-default-export
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
