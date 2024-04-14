const initialState = {
  message: 'asasasasasasasasas sasasas',
  key: 'success',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_APP_NOTIFIER':
      return {
        ...state,
        message: payload?.message,
        key: payload?.key,
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
