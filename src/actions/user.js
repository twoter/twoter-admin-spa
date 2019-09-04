import userService from '../services/userService';
import {
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE
} from '../constants/action-types';

export const deleteUser = id => {
  return dispatch => {
    return userService
      .deleteById(id)
      .then(() => dispatch(deleteUserSuccess(id)))
      .catch(({ message }) => deleteUserFailure(message));
  };
};

const deleteUserSuccess = id => ({
  type: DELETE_USER_SUCCESS,
  payload: { id }
});

const deleteUserFailure = message => ({
  type: DELETE_USER_FAILURE,
  payload: { message }
});

export const loadUsers = () => {
  return dispatch => {
    dispatch(loadUsersStart());

    return userService
      .getAll()
      .then(users => dispatch(loadUsersSuccess(users)))
      .catch(({ message }) => loadUsersFailure(message));
  };
};

const loadUsersStart = () => ({ type: LOAD_USERS_START });

const loadUsersSuccess = users => ({
  type: LOAD_USERS_SUCCESS,
  payload: users
});

const loadUsersFailure = message => ({
  type: LOAD_USERS_FAILURE,
  payload: { message }
});
