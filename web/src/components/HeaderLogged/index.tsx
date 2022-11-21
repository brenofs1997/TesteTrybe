import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo-ngcash.svg';
import api from '../../services/api';

import { Container, Content } from './styles';

interface Props {
  username: string | null,
  setUserName: React.Dispatch<React.SetStateAction<string | null>>
}

export function HeaderLogged() {
  const goBack = useNavigate();
  const token = localStorage.getItem('token');

  let [username, setUserName] = useState('');

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    getUser();
  }, [username]);

  const getUser = async () => {
    await api.get('auth/me', config)
      .then((resp) => {
        username = '' + JSON.parse(JSON.stringify(resp.data.user)).username;
        setUserName('' + username);
      }).catch(() => {

      })
  };

  const home = () => {
    goBack('/');
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Container>
      <Content>
        <div className="page-details">
          <img onClick={home} src={logo} alt="logo" />
        </div>
        <div >
          <span className="title-name"> Olá, {username}</span>

         
        </div>

        <a onClick={logout}>LOGOUT</a>
      </Content>
    </Container>
  );
}
