import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: '',
    isLoggedIn: false
};

const globalStateSlice = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        loadFromLocalStorage: (state) => {
            const storedState = localStorage.getItem('globalState');
            if (storedState) {
                return JSON.parse(storedState);
            }
            return state;
        },
        setLoginSuccessful: (state, action) => {
            state.userName = action.payload
            state.isLoggedIn = true;
            localStorage.setItem('globalState', JSON.stringify(state));
        },
        performLogout: (state) => {
            state.userName = ''
            state.isLoggedIn = false;
            localStorage.removeItem('globalState');
        }
    }
});

export const { loadFromLocalStorage, setLoginSuccessful, performLogout } = globalStateSlice.actions;
export const { reducer: globalStateReduce } = globalStateSlice;
