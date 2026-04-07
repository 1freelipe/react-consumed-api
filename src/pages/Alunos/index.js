import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { get } from 'lodash';

import { Container } from '../../styles/globalStyles';
import { AlunoContianer, ProfilePicture } from './styled';
import axios from '../../services/axios';

export default function Alunos() {
  // eslint-disable-next-line
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/alunos');
        setAlunos(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e.error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return <h1>Carregando</h1>;
  }

  return (
    <Container>
      <h1>Alunos</h1>

      <AlunoContianer>
        {alunos ? (
          alunos.map((a) => (
            <div key={a.id}>
              <ProfilePicture>
                {get(alunos, 'a.Fotos[0].url', false) ? (
                  <img src={a.Fotos[0]?.url} alt="" />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </ProfilePicture>

              <span>{a.nome}</span>
              <span>{a.email}</span>

              <Link to={`/aluno/${a.id}/edit`}>
                <FaEdit size={16} />
              </Link>
              <Link to={`/aluno/${a.id}/delete`}>
                <FaWindowClose size={16} />
              </Link>
            </div>
          ))
        ) : (
          <h1>Nenhum aluno</h1>
        )}
      </AlunoContianer>
    </Container>
  );
}
