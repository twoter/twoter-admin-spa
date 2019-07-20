import updateService from '../services/updateService';
import {
  DELETE_UPDATE,
  LOADING_UPDATES,
  LOADED_UPDATES,
  CLEAR_LOADED_UPDATES
} from '../constants/action-types';

export const deleteUpdate = (id) => {
  return (dispatch) => {
    return updateService.deleteById(id)
      .then(() => {
        dispatch({
          type: DELETE_UPDATE,
          payload: { id }
        });
      });
  };
};

export const loadUpdates = () => {
  return (dispatch) => {
    dispatch({
      type: LOADING_UPDATES,
    });

    return updateService.getAll()
      .then((updates) => {
        dispatch({
          type: LOADED_UPDATES,
          payload: updates
        });
      });
  };
};

export const loadUpdatesForUser = (userId) => {
  return (dispatch) => {
    dispatch({
      type: LOADING_UPDATES,
    });

    return updateService.getByUser(userId)
      .then((updates) => {
        dispatch({
          type: LOADED_UPDATES,
          payload: updates
        });
      });
  };
};

export const clearLoaded = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_LOADED_UPDATES
    });
  }
}
