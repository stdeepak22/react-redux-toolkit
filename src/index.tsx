import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './store';
import App from './App'
import { loadFromLocalStorage } from './features/globalState/globalStateSlice';

store.dispatch(loadFromLocalStorage());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
