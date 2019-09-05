import { createSelector } from 'reselect';

const selectUserState = state => state.user;

export const getUsers = createSelector(
  selectUserState,
  state => state.users
);

export const getIsLoadingUsers = createSelector(
  selectUserState,
  state => state.loadingUsers
);
