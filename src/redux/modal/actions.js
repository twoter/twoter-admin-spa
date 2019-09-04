import { SHOW_ALERT_MODAL, HIDE_ALERT_MODAL } from './types';

export const showModal = payload => ({
  type: SHOW_ALERT_MODAL,
  payload
});

export const hideModal = () => ({
  type: HIDE_ALERT_MODAL
});
