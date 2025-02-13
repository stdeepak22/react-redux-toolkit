import { JSX } from 'react';
import { selectIsLoggedIn } from '../globalState/globalStateSelector';
import { useSelector } from 'react-redux';

export const HomePage = (): JSX.Element => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            {!isLoggedIn && <>
                <h2>login with </h2>
                <ul>
                    <li>Name: <i>admin</i></li>
                    <li>Password: <i>password</i></li>
                </ul>
            </>}
        </div>
    );
};