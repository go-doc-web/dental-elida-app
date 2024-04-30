const initialState = {
  status: 'all',
  rating: 'all',
  sort: 'new',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_STATUS':
      return {
        ...state,
        status: payload?.status,
      };
    case 'SET_RATING':
      return {
        ...state,
        rating: payload?.rating,
      };
    case 'SET_SORT':
      return {
        ...state,
        sort: payload?.sort,
      };

    default:
      return state;
  }
};
