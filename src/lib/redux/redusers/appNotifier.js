const initialState = {
  message: '',
  key: 'success',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_APP_NOTIFIER':
      return {
        ...state,
        message: action?.message,
        key: action?.key,
      };
    case 'CLOSE_APP_NOTIFIER':
      return {
        ...state,
        message: '',
        key: 'success',
      };

    default:
      return state;
  }
};
