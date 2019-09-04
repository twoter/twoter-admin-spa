import {
  SHOW_ALERT_MODAL,
  HIDE_ALERT_MODAL,
  LOAD_USERS,
  LOADING_USERS,
  LOADED_USERS,
  DELETE_USER
} from '../constants/action-types';
import { filterOutUserById } from '../services/userService';

const initialState = {
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case DELETE_USER:
    return Object.assign({}, state, {
      users: filterOutUserById(state.users, action.payload.id)
    });
  case LOAD_USERS:
    return state;
  case LOADING_USERS:
    return Object.assign({}, state, {
      loadingUsers: true
    });
  case LOADED_USERS:
    return Object.assign({}, state, {
      loadingUsers: false,
      users: action.payload
    });
  default:
    return state;
  }
};
