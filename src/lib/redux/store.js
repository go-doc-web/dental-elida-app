import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';

import { devToolsEnhancer } from '@redux-devtools/extension';
import combineReducers from './redusers/index';

const enhancer = compose(applyMiddleware(thunk), devToolsEnhancer());

export const store = createStore(combineReducers, enhancer);
