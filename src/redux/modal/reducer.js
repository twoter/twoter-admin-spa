import {
  SHOW_ALERT_MODAL,
  HIDE_ALERT_MODAL,
  CONFIRM_DELETE_USER
} from './types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT_MODAL:
    case CONFIRM_DELETE_USER:
      return {
        ...state,
        title: action.payload.title,
        message: action.payload.message,
        showModal: true,
        onOk: action.payload.onOk
      };
    case HIDE_ALERT_MODAL:
      return initialState;
    default:
      return state;
  }
};
