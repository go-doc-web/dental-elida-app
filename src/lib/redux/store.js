import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';

export const initialState = {
  isActivated: false,
};
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
