import React from 'react';

import { Container } from '../../styles/globalStyles';
import axios from '../../services/axios';

export default function Alunos() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      console.log(response);
    }

    getData();
  }, []);

  return (
    <Container>
      <h1>Listagem de alunos</h1>
    </Container>
  );
}
