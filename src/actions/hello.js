import { ACTION_ONE } from '../constants/actionTypes';

export function sayHello(message) {
  return {
    type: ACTION_ONE,
    payload: { message }
  };
}
