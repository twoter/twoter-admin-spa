import {
  LOADED_UPDATES,
  LOADING_UPDATES,
  DELETE_UPDATE,
  CLEAR_LOADED_UPDATES
} from '../constants/action-types';
import { filterOutUserById } from '../services/userService';

const initialState = {
  updates: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_UPDATE:
      return {
        ...state,
        updates: filterOutUserById(state.updates, action.payload.id)
      };
    case LOADING_UPDATES:
      return {
        ...state,
        loadingUpdates: true
      };
    case LOADED_UPDATES:
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
