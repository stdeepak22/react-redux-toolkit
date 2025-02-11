import { createSelector } from '@reduxjs/toolkit';

const selectLoginState = (state) => state.login;

export const selectUsername = createSelector(
    [selectLoginState],
    (login) => login.username
);

export const selectPassword = createSelector(
    [selectLoginState],
    (login) => login.password
);