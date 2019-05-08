import { ACTION_ONE } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTION_ONE:
      return Object.assign({}, state, {
        message: action.payload.message
      });
    default:
      return state;
  }
}
