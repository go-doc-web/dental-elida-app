import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';

export const initialState = {
  isShowBurger: false,
  isOpen: false,
  status: 'all',
  isShowModal: false,
  isActive: false,
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
