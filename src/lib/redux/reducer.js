import { initialState } from './store';

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'open-close/burger':
      return { ...state, isShowBurger: action.payload };
    default:
      return state;
  }
};
