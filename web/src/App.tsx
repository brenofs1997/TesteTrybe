import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HeaderLogged } from './components/HeaderLogged';
import { HeaderLoggedOut } from './components/HeaderLoggedOut';
import { HomeLoggedOut } from './components/HomeLoggedOut';
import { HomeLogged } from './components/HomeLogged';
import { GlobalStyles } from './styles/GlobalStyles';
import { useEffect, useState } from 'react';

export function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, [token]);

  return (
    <>
      <ToastContainer />
      <GlobalStyles />
      {token ? <HeaderLogged /> : <HeaderLoggedOut />}
      {token ? <HomeLogged /> : <HomeLoggedOut />}
    </>
  );
}

