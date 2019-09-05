import {
  SHOW_ALERT_MODAL,
  HIDE_ALERT_MODAL,
  CONFIRM_DELETE_USER,
  CONFIRM_DELETE_UPDATE
} from './types';

export const showModal = ({ title, message, onOk }) => ({
  type: SHOW_ALERT_MODAL,
  payload: {
    title,
    message,
    onOk
  }
});

export const confirmDeleteUser = onOk => ({
  type: CONFIRM_DELETE_USER,
  payload: {
    title: 'Delete user',
    message: 'Are you sure you want to delete this user?',
    onOk
  }
});

export const confirmDeleteUpdate = onOk => ({
  type: CONFIRM_DELETE_UPDATE,
  payload: {
    title: 'Delete update',
    message: 'Are you sure you want to delete this update?',
    onOk
  }
});

export const hideModal = () => ({
  type: HIDE_ALERT_MODAL
});
