const initialState = {
  items: [],
};

export const reviews = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REVIEWS':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default reviews;
