import React from 'react';
import marvelLogo from '../../assets/marvel-logo.png';
import { Container } from './styles';
const Header = () => {
  return (
    <>
    <Container>
      <img src={marvelLogo} alt="Marvel" />
    </Container>
    </>
  )
};

export default Header;