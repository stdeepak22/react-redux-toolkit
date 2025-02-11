import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const selectGlobalState = (state: RootState) => state.globalState;

export const selectUserName = createSelector(
    [selectGlobalState],
    (st) => st.userName
);

export const selectIsLoggedIn = createSelector(
    [selectGlobalState],
    (st) => st.isLoggedIn
);