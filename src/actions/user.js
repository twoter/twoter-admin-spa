import userService from '../services/userService';
import {
  LOADED_USERS,
  LOADING_USERS,
  DELETE_USER
} from '../constants/action-types';

export const deleteUser = id => {
  return dispatch => {
    return userService.deleteById(id).then(() => {
      dispatch({
        type: DELETE_USER,
        payload: { id }
      });
    });
  };
};

export const loadUsers = () => {
  return dispatch => {
    dispatch({
      type: LOADING_USERS
    });

    return userService.getAll().then(users => {
      dispatch({
        type: LOADED_USERS,
        payload: users
      });
    });
  };
};
