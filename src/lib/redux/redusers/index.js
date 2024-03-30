import { combineReducers } from 'redux';
import { authReduser } from './authReduser';
import { reviewsReducer } from './reviewsReduser';
import user from './user';
import app from './app';

export default combineReducers({
  auth: authReduser,
  reviewsReducer,
  app,
  user,
});
