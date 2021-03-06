import React, { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import configApi from '../../config/apikey';
import api from '../../services/api';
import { Container, Footer, Pagination } from './styles';

const List = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function loadCharacters() {
      const { data } = await api.get(
        `public/characters?offset=${page}&apikey=${configApi.publickey}`
      );
      setCharacters(data.data.results);
      setTotalPage(Math.round(data.data.total / 20));
    }
    loadCharacters();
  }, [page]);

  const previousPage = () => page > 0 && setPage(page - 20);
  const nextPage = () => page / 20 + 1 !== totalPage && setPage(page + 20);
  return (
    <>
      {/* <Title>Personagens dos quadrinhos Marvel</Title> */}
      <Container>
        {characters.map(chara => (
          <div key={chara.id}>
            <Link to={`/CharacterDetail/${chara.id}`}>{chara.name}</Link>
            <img
              src={`${chara.thumbnail.path}.${chara.thumbnail.extension}`}
              alt={chara.name}
            />
          </div>
        ))}
      </Container>
      {totalPage > 0 && (
        <Pagination>
          <div>
            <button type="button" onClick={() => previousPage()}>
              Anterior
            </button>
            <label>
              {page / 20 + 1} /{totalPage}
            </label>
            <button type="button" onClick={() => nextPage()}>
              Proximo
            </button>
          </div>
        </Pagination>
      )}
      <Footer>
        <div>
          <a href="https://developer.marvel.com/">
            API - https://developer.marvel.com/
          </a>
          <a href="https://github.com/eneto774">
            <AiFillGithub /> - Desenvolvido por Edgar Ribeiro
          </a>
        </div>
      </Footer>
    </>
  );
};

export default List;
