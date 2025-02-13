import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const selectCounterState = (state: RootState) => state.counter;

export const selectCounterValue = createSelector(
    [selectCounterState],
    (counter) => counter.value
);

export const selectCounterStatus = createSelector(
    [selectCounterState],
    (counter) => counter.status
);