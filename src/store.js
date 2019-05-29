import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, routerMiddleware(history))
);
