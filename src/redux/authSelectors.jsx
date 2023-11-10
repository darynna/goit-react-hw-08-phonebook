import { createSelector } from '@reduxjs/toolkit';

const selectAuthStore = state => state.auth;

export const selectAuthIsLoading = createSelector(
  selectAuthStore,
  auth => auth.isLoading
);
export const selectPAuthError = createSelector(
  selectAuthStore,
  auth => auth.error
);
export const selectAuthToken = createSelector(
  selectAuthStore,
  auth => auth.authenticated
);

export const selectAuthenticated = createSelector(
    selectAuthStore,
    auth => auth.authenticated
)

export const selectAuthUser = createSelector(
  selectAuthStore,
  auth => auth.user
)

