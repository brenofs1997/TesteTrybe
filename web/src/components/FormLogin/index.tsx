import React, { useState, FormEvent, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import { Container, InputBlock } from './styles';


export function FormLogin() {
  const goBack = useNavigate();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setisPasswordShown] = useState(false);
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    await api.post('auth', { username, password })
      .then((response) => {
        localStorage.setItem('token', JSON.parse(JSON.stringify(response.data)).token);
        localStorage.setItem('accountId', JSON.parse(JSON.stringify(response.data)).accountId);
        localStorage.setItem('username',username);
        goBack('/');
      }).catch(() => {
        alert('Erro no Login!');
      })
  }

  function togglePasswordVisiblity() {
    if (isPasswordShown == true)
      setisPasswordShown(false);
    else
      setisPasswordShown(true);
  };

  return (
    <Container >
      <form onSubmit={handleSubmit}>
        <h1>I'm already a customer</h1>
        <hr />
        <InputBlock>
          <label htmlFor="username">USERNAME</label>
          <input id="username"
            value={username}
            onChange={event => setUserName(event.target.value)}
          />
          <i
            className="fa fa-eye password-icon"
            onClick={togglePasswordVisiblity}
          />
        </InputBlock>
        <InputBlock>
          <label htmlFor="password">PASSWORD</label>
          <input id="password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </InputBlock>
        <button type="submit" >SING IN</button>
      </form>
    </Container >
  );
}
