import React, { useState, FormEvent, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import { Container, InputBlock } from './styles';

export function FormRegister() {
  const goBack = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setisPasswordShown] = useState(false);
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      await api.post('users', { username, password })

      goBack('/');
    } catch (error) {
      console.log(error);

      alert('Erro no cadastro!');
    }





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
        <h1>Create an account</h1>
        <hr />
        <InputBlock>

          <label htmlFor="userName">USERNAME</label>
          <input id="userName"
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
        <button type="submit" >CADASTRAR</button>
      </form>
    </Container >
  );
}
