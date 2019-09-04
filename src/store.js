import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import createRootReducer from './reducer';

export const history = createBrowserHistory();

export const store = createStore(
  createRootReducer(history),
  applyMiddleware(thunkMiddleware, routerMiddleware(history))
);
