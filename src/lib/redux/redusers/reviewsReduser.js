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
    case 'PUT_REVIEWS':
      const updatedReview = action.payload;
      const index = state.items.findIndex(item => item._id === updatedReview._id);
      if (index !== -1) {
        return {
          ...state,
          items: [
            ...state.items.slice(0, index), // все элементы до обновляемого
            updatedReview, // обновленный отзыв
            ...state.items.slice(index + 1), // все элементы после обновляемого
          ],
        };
      }
      // Возвращаем текущее состояние, если отзыв не найден
      return state;
    default:
      return state;
  }
};

export default reviews;
