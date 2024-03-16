import { combineReducers } from 'redux';
import { authReduser } from './authReduser';
import { reviewsReducer } from './reviewsReduser';

export default combineReducers({
  auth: authReduser,
  reviewsReducer,
});
