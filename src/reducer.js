import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import hello from './reducers/hello-reducer';
import modal from './reducers/modal-reducer';

export default combineReducers({
  hello,
  modal,
  router: routerReducer
});
