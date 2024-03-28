import { combineReducers } from 'redux';
import { authReduser } from './authReduser';
import { reviewsReducer } from './reviewsReduser';
import app from './app';

export default combineReducers({
  auth: authReduser,
  reviewsReducer,
  app,
});
