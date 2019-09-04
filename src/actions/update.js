import updateService from '../services/updateService';
import {
  DELETE_UPDATE_START,
  DELETE_UPDATE_SUCCESS,
  DELETE_UPDATE_FAILURE,
  LOAD_UPDATES_START,
  LOAD_UPDATES_SUCCESS,
  LOAD_UPDATES_FAILURE,
  LOAD_UPDATES_FOR_USER_START,
  LOAD_UPDATES_FOR_USER_SUCCESS,
  LOAD_UPDATES_FOR_USER_FAILURE,
  CLEAR_LOADED_UPDATES
} from '../constants/action-types';

const deleteUpdateStart = () => ({ type: DELETE_UPDATE_START });

const deleteUpdateSuccess = id => ({
  type: DELETE_UPDATE_SUCCESS,
  payload: { id }
});

const deleteUpdateFailure = message => ({
  type: DELETE_UPDATE_FAILURE,
  payload: { message }
});

export const deleteUpdate = id => {
  return dispatch => {
    dispatch(deleteUpdateStart());

    updateService
      .deleteById(id)
      .then(() => dispatch(deleteUpdateSuccess(id)))
      .catch(({ message }) => dispatch(deleteUpdateFailure(message)));
  };
};

const loadUpdatesStart = () => ({ type: LOAD_UPDATES_START });

const loadUpdatesSuccess = updates => ({
  type: LOAD_UPDATES_SUCCESS,
  payload: updates
});

const loadUpdatesFailure = message => ({
  type: LOAD_UPDATES_FAILURE,
  payload: { message }
});

export const loadUpdates = () => {
  return dispatch => {
    dispatch(loadUpdatesStart());

    updateService
      .getAll()
      .then(updates => dispatch(loadUpdatesSuccess(updates)))
      .catch(({ message }) => dispatch(loadUpdatesFailure(message)));
  };
};

const loadUpdatesForUserStart = () => ({ type: LOAD_UPDATES_FOR_USER_START });

const loadUpdatesForUserSuccess = updates => ({
  type: LOAD_UPDATES_FOR_USER_SUCCESS,
  payload: updates
});

const loadUpdatesForUserFailure = message => ({
  type: LOAD_UPDATES_FOR_USER_FAILURE,
  payload: { message }
});

export const loadUpdatesForUser = userId => {
  return dispatch => {
    dispatch(loadUpdatesForUserStart());

    return updateService
      .getByUser(userId)
      .then(updates => dispatch(loadUpdatesForUserSuccess(updates)))
      .catch(({ message }) => dispatch(loadUpdatesForUserFailure(message)));
  };
};

export const clearLoadedUpdates = () => ({ type: CLEAR_LOADED_UPDATES });
