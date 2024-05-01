/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: payload?.loading,
      };

    default:
      return state;
  }
};
