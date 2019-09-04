import updateService from '../services/updateService';
import {
  DELETE_UPDATE_START,
  DELETE_UPDATE_SUCCESS,
  DELETE_UPDATE_FAILURE,
  LOADING_UPDATES,
  LOADED_UPDATES,
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

export const loadUpdates = () => {
  return dispatch => {
    dispatch({
      type: LOADING_UPDATES
    });

    return updateService.getAll().then(updates => {
      dispatch({
        type: LOADED_UPDATES,
        payload: updates
      });
    });
  };
};

export const loadUpdatesForUser = userId => {
  return dispatch => {
    dispatch({
      type: LOADING_UPDATES
    });

    return updateService.getByUser(userId).then(updates => {
      dispatch({
        type: LOADED_UPDATES,
        payload: updates
      });
    });
  };
};

export const clearLoaded = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_LOADED_UPDATES
    });
  };
};
