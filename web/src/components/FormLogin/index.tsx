import React, { useState, FormEvent, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import { Container, InputBlock } from './styles';
import { toast } from 'react-toastify';


export function FormLogin() {
  const goBack = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    await api.post('auth', { username, password })
      .then((response) => {
        localStorage.setItem('token', JSON.parse(JSON.stringify(response.data)).token);
        localStorage.setItem('accountId', JSON.parse(JSON.stringify(response.data)).accountId);
        localStorage.setItem('username',username);
        goBack('/');
      }).catch(() => {
        toast.error('Erro no Login!');
      })
  }

  return (
    <Container >
      <form onSubmit={handleSubmit}>
        <h1>Já sou cliente</h1>
        <hr />
        <InputBlock>
          <label htmlFor="username">USERNAME</label>
          <input id="username"
            value={username}
            onChange={event => setUserName(event.target.value)}
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
        <button type="submit" >ACESSAR CONTA</button>
      </form>
    </Container >
  );
}
