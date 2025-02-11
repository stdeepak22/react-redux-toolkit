import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const incrementAsync = createAsyncThunk('incrementAsync', async (amount) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
});

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value += action.payload;
            });
    }
});

export const { increment, decrement } = counterSlice.actions;
export const { reducer: counterReducer } = counterSlice;