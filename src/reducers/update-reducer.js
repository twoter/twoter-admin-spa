import {
  DELETE_UPDATE_SUCCESS,
  CLEAR_LOADED_UPDATES,
  LOAD_UPDATES_START,
  LOAD_UPDATES_SUCCESS,
  LOAD_UPDATES_FOR_USER_START,
  LOAD_UPDATES_FOR_USER_SUCCESS
} from '../constants/action-types';
import { filterOutUserById } from '../services/userService';

const initialState = {
  updates: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_UPDATE_SUCCESS:
      return {
        ...state,
        updates: filterOutUserById(state.updates, action.payload.id)
      };
    case LOAD_UPDATES_START:
    case LOAD_UPDATES_FOR_USER_START:
      return {
        ...state,
        loadingUpdates: true
      };
    case LOAD_UPDATES_SUCCESS:
    case LOAD_UPDATES_FOR_USER_SUCCESS:
      return {
        ...state,
        loadingUpdates: false,
        updates: action.payload
      };
    case CLEAR_LOADED_UPDATES:
      return initialState;
    default:
      return state;
  }
};
