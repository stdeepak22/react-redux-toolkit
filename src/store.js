import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './features/counter/counterSlice';
import { loginReducer } from './features/login/loginSlice';
import { globalStateReduce } from './features/globalState/globalStateSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        login: loginReducer,
        globalState: globalStateReduce,
    }
});

export default store;
