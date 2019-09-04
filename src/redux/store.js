import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import createRootReducer from './reducer';

export const history = createBrowserHistory();

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(thunkMiddleware, routerMiddleware(history))
  )
);
