import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './features/login/components/login';
import { Counter } from './features/counter/components/counter';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from './features/globalState/globalStateSelector';
import { performLogout } from './features/globalState/globalStateSlice';
import { HomePage } from './features/home/home-page';
import { SecretPage } from './features/home/secure-page';

function LoginStatus() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();
    return (
        <div>
            {isLoggedIn ?
                <button onClick={() => dispatch(performLogout())}>Logout</button>
                : <Link to="/login">
                    <button>Login</button>
                </Link>}
            <br />
            {isLoggedIn ? userName : ''}
        </div>
    );
}

function NavBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            {isLoggedIn && <li><Link to="/secret-page">Secret Page</Link></li>}
        </ul>
    );
}

function App() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <Router>
            <LoginStatus />
            <NavBar />
            <Switch>
                <Route path="/counter">
                    <Counter />
                </Route>
                {isLoggedIn ? <Route path="/secret-page">
                    <SecretPage />
                </Route>
                    : <Route path="/login">
                        <Login />
                    </Route>
                }
                <Route default path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
