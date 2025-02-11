import { createSelector } from '@reduxjs/toolkit';

const selectGlobalState = (state) => state.globalState;

export const selectUserName = createSelector(
    [selectGlobalState],
    (st) => st.userName
);

export const selectIsLoggedIn = createSelector(
    [selectGlobalState],
    (st) => st.isLoggedIn
);