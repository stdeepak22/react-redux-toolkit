import { createSelector } from '@reduxjs/toolkit';

const selectCounterState = (state) => state.counter;

export const selectCounterValue = createSelector(
    [selectCounterState],
    (counter) => counter.value
);

export const selectCounterStatus = createSelector(
    [selectCounterState],
    (counter) => counter.status
);