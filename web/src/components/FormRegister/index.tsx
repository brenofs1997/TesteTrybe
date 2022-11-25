import { AxiosError } from 'axios';
import React, { useState, FormEvent, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import api from "../../services/api";
import { Container, InputBlock } from './styles';

export function FormRegister() {
  const goBack = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api.post('users', { username, password })
      .then(() => {
        toast.success('Cadastro realizado com sucesso!');
        goBack('/');
      }).catch((error) => {
        let errorMenssage = '';
        if (error instanceof AxiosError) {
          errorMenssage = JSON.parse(error.response?.data.message)[0].message;
          toast.error(errorMenssage);
        }
      })

  }

  return (
    <Container >
      <form onSubmit={handleSubmit}>
        <h1>Criar conta</h1>
        <hr />
        <InputBlock>
          <label htmlFor="userName">USERNAME</label>
          <input id="userName"
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
        <button type="submit" >CADASTRAR</button>
      </form>
    </Container >
  );
}
