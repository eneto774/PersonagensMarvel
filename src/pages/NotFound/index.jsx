import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Container } from './styles';

const NotFound = () => (
  <>
    <Header />
    <Container>
      <h3>Ooooops...</h3>
      <h1>404</h1>
      <h3>Pagína não encontrada</h3>
      <div>
        <Link to="/">
          <AiFillHome />
          Voltar para Home
        </Link>
      </div>
    </Container>
  </>
);

export default NotFound;
