import React from 'react';
import Header from "../../components/Header";
import List from '../../components/List';
import { Title } from './styles';

const Home = () => (
  <>
    <Header />
    <Title>Personagens dos quadrinhos Marvel</Title>
    <List />
  </>
);

export default Home;