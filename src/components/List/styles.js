import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  padding: 10px;
`;

export const Container = styled.section`
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  div {
    background: #F4F0F0;
    /* border: 1px solid #221E1E; */
    box-shadow: 1px 1px 7px 1px rgba(0,0,0,0.3);
    border-radius: 5px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    a {
      text-decoration:none;
      color: #221E1E;
      font-weight: 600;
    }

    img {
      margin-top: 10px;
      width: 200px;
      height: 200px;
    }
  }
`;

export const Pagination = styled.nav`
  display: flex;
  justify-content: center;
  padding: 20px;

  label {
    margin: 5px;
  }
`;

export const Footer = styled.footer`
  background: #221E1E;
  
  
  div {
  height: 35px;
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      color: #F4F0F0;
      text-decoration: none;
    }
  }
`;
