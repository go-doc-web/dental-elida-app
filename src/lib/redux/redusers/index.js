import { combineReducers } from 'redux';
import { authReduser } from './authReduser';
import { reviews } from './reviewsReduser';
import user from './user';
import appNotifier from './appNotifier';
// import app from './app';

export default combineReducers({
  auth: authReduser,
  reviews,
  // app,
  user,
  appNotifier,
});
