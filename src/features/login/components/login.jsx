import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, clearLogin, login } from '../loginSlice';
import { selectUsername, selectPassword } from '../loginSelector';
import { useHistory } from 'react-router-dom';
import { setLoginSuccessful } from '../../globalState/globalStateSlice';

const Login = () => {
    const dispatch = useDispatch();
    const username = useSelector(selectUsername);
    const password = useSelector(selectPassword);
    const [error, setError] = useState(null);
    const history = useHistory();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const resultAction = await dispatch(login({ username, password }));

            if (login.fulfilled.match(resultAction)) {
                console.log('Login successful:', resultAction.payload);
                dispatch(setLoginSuccessful(username));
                history.push('/');
            } else {
                setError(resultAction.payload);
            }
        } catch (err) {
            console.error('An unexpected error occurred:', err);
            setError('An unexpected error occurred');
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => dispatch(setUsername(e.target.value))}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit">Login</button>
                <button type="button" onClick={() => dispatch(clearLogin())}>
                    Clear
                </button>
            </form>
        </div>
    );
};

export { Login };