import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/globalStyles';
import { Title } from './styled';
import * as exampleActions from '../../store/modules/example/action';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    console.log('Botão clicado');

    dispatch(exampleActions.botaoClicadoRequest());
  }

  return (
    <Container>
      <Title isRed>Login</Title>
      <small>dwdw</small>
      <p>owkdow</p>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
