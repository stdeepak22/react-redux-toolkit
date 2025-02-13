import { JSX } from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './features/login/components/login';
import { Counter } from './features/counter/components/counter';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { selectIsLoggedIn, selectUserName } from './features/globalState/globalStateSelector';
import { performLogout } from './features/globalState/globalStateSlice';
import { HomePage } from './features/home/home-page';
import { SecretPage } from './features/home/secure-page';

function LoginStatus(): JSX.Element {
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

function NavBar(): JSX.Element {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/counter">Counter</Link></li>
      {isLoggedIn && <li><Link to="/secret-page">Secret Page</Link></li>}
    </ul>
  );
}

function App(): JSX.Element {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Router>
      <LoginStatus />
      <NavBar />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        {isLoggedIn && <Route path="/secret-page" element={<SecretPage />} />}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

function AppWithPrrovider(): JSX.Element {
  return <Provider store={store}>
    <App />
  </Provider>;
}
export default AppWithPrrovider;
