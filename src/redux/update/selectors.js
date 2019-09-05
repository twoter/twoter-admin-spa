import { createSelector } from 'reselect';

const selectUpdateState = state => state.update;

export const getUpdates = createSelector(
  selectUpdateState,
  state => state.updates
);

export const getIsLoadingUpdates = createSelector(
  selectUpdateState,
  state => state.loadingUpdates
);
