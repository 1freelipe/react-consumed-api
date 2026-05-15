import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

import Loading from '../../components/Loading';
import { Container } from '../../styles/globalStyles';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.warning(
        'A senha precisa ter no mínimo 6 caracteres e no máximo 255 caracteres'
      );
    }

    if (formErrors) return;

    async function submitData() {
      setLoading(true);
      try {
        await axios.post('/users/', {
          nome,
          password,
          email,
        });

        toast.success('Você fez o seu cadastro');
        history.push('/login');
      } catch (error) {
        console.log('Erro ao enviar o formulário', error);
        const status = get(error, 'response.status', 0);
        const errors = get(error, 'response.data.errors', []);
        console.log('status:', status);

        errors.map((err) => toast.error(err));
      } finally {
        setLoading(false);
      }
    }

    submitData();
  };

  return (
    <Container>
      <Loading isLoading={loading} />

      <h1>Crie sua conta</h1>

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
          Criar minha conta
        </button>
      </Form>
    </Container>
  );
}
