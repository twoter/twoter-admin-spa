import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import hello from './reducers/hello-reducer';

export default combineReducers({
  hello,
  router: routerReducer
});
