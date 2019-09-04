import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import hello from '../reducers/hello-reducer';
import modal from '../reducers/modal-reducer';
import user from './user/reducer';
import update from './update/reducer';

const createRootReducer = history =>
  combineReducers({
    hello,
    modal,
    user,
    update,
    router: connectRouter(history)
  });

export default createRootReducer;
