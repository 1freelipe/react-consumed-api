import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { Container } from '../../styles/globalStyles';
import { Form } from './styled';

import * as actions from '../../store/modules/auth/action';

export default function Login(props) {
  const dispatch = useDispatch();
  const prevPath = get(props, 'location.state.prevPath', '/');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (email.length === 0) {
      formErrors = true;
      toast.warning('O e-mail precisa ser preenchido.');
    }

    if (email.length !== 0 && !isEmail(email)) {
      formErrors = true;
      toast.warning('O e-mail precisa ser válido.');
    }

    if (password.length === 0) {
      formErrors = true;
      toast.warning('A senha precisa ser preenchida.');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
