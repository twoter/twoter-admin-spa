import { SHOW_ALERT_MODAL, HIDE_ALERT_MODAL } from '../constants/action-types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT_MODAL:
      return Object.assign({}, state, {
        title: action.payload.title,
        message: action.payload.message,
        showModal: true,
        onOk: action.payload.onOk
      });
    case HIDE_ALERT_MODAL:
      return initialState;
    default:
      return state;
  }
};
