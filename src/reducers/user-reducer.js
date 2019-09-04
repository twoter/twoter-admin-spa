import {
  DELETE_USER_SUCCESS,
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS
} from '../constants/action-types';
import { filterOutUserById } from '../services/userService';

const initialState = {
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: filterOutUserById(state.users, action.payload.id)
      };
    case LOAD_USERS_START:
      return {
        ...state,
        loadingUsers: true
      };
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        loadingUsers: false,
        users: action.payload
      };
    default:
      return state;
  }
};
