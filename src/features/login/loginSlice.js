import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        username: '',
        password: ''
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
            // return `new name is - ${state.username}`;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        clearLogin: (state) => {
            state.username = '';
            state.password = '';
        }
    }
});

export const login = createAsyncThunk(
    'login/login',
    async ({ username, password }, thunkAPI) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'admin' && password === 'password') {
                    resolve({ username });
                } else {
                    reject(new Error('Invalid username or password'));
                }
            }, 1000);
        });
    }
);

export const { setUsername, setPassword, clearLogin } = loginSlice.actions;
export const { reducer: loginReducer } = loginSlice;
