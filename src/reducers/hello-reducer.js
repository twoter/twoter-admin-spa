import {
  ACTION_ONE,
  CONT2_LOADING,
  CONT2_LOADED
} from '../constants/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTION_ONE:
      return Object.assign({}, state, {
        message: action.payload.message
      });
    case CONT2_LOADING:
      return Object.assign({}, state, {
        message: 'cont2 loading...'
      });
    case CONT2_LOADED:
      console.log('CONT2 LOADED REDUCER');
      console.log(JSON.stringify(action.payload, null, 2));

      return Object.assign({}, state, {
        userId: action.payload.userId,
        title: action.payload.title,
        message: 'cont2 loaded!'
      });
    default:
      return state;
  }
};
