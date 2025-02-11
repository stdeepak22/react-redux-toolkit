import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const selectLoginState = (state: RootState) => state.login;

export const selectUsername = createSelector(
    [selectLoginState],
    (login) => login.username
);

export const selectPassword = createSelector(
    [selectLoginState],
    (login) => login.password
);