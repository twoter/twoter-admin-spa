import updateService from '../services/updateService';
import {
  DELETE_UPDATE,
  LOADING_UPDATES,
  LOADED_UPDATES
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
