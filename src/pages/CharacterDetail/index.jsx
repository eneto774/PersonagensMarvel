import React, { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import configApi from '../../config/apikey';
import api from '../../services/api';
import { Container } from './styles';

const CharacterDetail = props => {
  const { id } = props.match.params;
  const [details, setDetails] = useState([]);
  useEffect(() => {
    async function loadDetails() {
      const { data } = await api.get(
        `public/characters/${id}?apikey=${configApi.publickey}`,
      );
      setDetails(data.data.results);
    }

    loadDetails();
  }, [id]);
  return (
    <>
      <Header />
      <Container>
        {details.map(detail => (
          <div key={detail.id}>
            <h1>{detail.name}</h1>
            <img
              src={`${detail.thumbnail.path}.${detail.thumbnail.extension}`}
              alt={detail.name}
            />
            <p>
              {detail.description ? detail.description : <p>No Description</p>}
            </p>
          </div>
        ))}
        <Link to="/">
          <AiFillHome />
          Voltar para Home
        </Link>
      </Container>
    </>
  );
};

export default CharacterDetail;
