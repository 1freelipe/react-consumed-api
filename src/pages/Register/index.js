import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from './styled';

import Loading from '../../components/Loading';
import { Container } from '../../styles/globalStyles';
import * as actions from '../../store/modules/auth/action';

export default function Register() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.user.id);
  const emailStored = useSelector((state) => state.auth.user.email);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const loading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [id, emailStored, nomeStored]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.warning(
        'O nome precisa ter no mínimo 3 caracteres e no máximo 255 caracteres'
      );
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.warning('O e-mail precisa ser válido');
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.warning(
        'A senha precisa ter no mínimo 6 caracteres e no máximo 255 caracteres'
      );
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));
  };

  return (
    <Container>
      <Loading isLoading={loading} />

      <h1>{id ? 'Edite sua conta' : 'Crie sua conta'}</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            id="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
          />
        </label>

        <button type="submit" disabled={loading}>
          {id ? 'Salvar alterações ' : 'Criar minha conta'}
        </button>
      </Form>
    </Container>
  );
}
