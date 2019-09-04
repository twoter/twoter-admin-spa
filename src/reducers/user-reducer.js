import {
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
      return {
        ...state,
        users: filterOutUserById(state.users, action.payload.id)
      };
    case LOADING_USERS:
      return {
        ...state,
        loadingUsers: true
      };
    case LOADED_USERS:
      return {
        ...state,
        loadingUsers: false,
        users: action.payload
      };
    default:
      return state;
  }
};
