import { FormEvent, JSX, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, clearLogin, login } from '../loginSlice';
import { selectUsername, selectPassword } from '../loginSelector';
import { useNavigate } from 'react-router-dom';
import { setLoginSuccessful } from '../../globalState/globalStateSlice';
import { AppDispatch } from '../../../store';
import logger from '../../../utils/logger';

const Login = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();
    const username = useSelector(selectUsername);
    const password = useSelector(selectPassword);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const resultAction = await dispatch(login({ username, password }));
            if (login.fulfilled.match(resultAction)) {
                logger.log('Login successful:', resultAction.payload);
                dispatch(setLoginSuccessful(username));
                dispatch(clearLogin());
                navigate('/');
            } else if (login.rejected.match(resultAction)) {
                setError(resultAction.payload?.message ?? 'Login failed');
            }
        } catch (err) {
            logger.error('An unexpected error occurred:', err);
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