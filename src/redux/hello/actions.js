import { request } from '../../services/hello';
import {
  ACTION_ONE,
  CONT2_LOADING,
  CONT2_LOADED
} from './types';

export const sayHello = message => {
  return {
    type: ACTION_ONE,
    payload: { message }
  };
};

export const asyncAction = () => {
  return dispatch => {
    dispatch({
      type: CONT2_LOADING
    });

    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    })
      .then(() => request())
      .then(data => {
        dispatch({
          type: CONT2_LOADED,
          payload: data
        });
      });
  };
};
