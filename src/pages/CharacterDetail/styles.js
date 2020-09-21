import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1060px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  div {
    img {
      margin-top: 30px;
      width: 300px;
      box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
    }
  }
  a {
    display: flex;
    text-decoration: none;
    color: #221e1e;
    font-size: 24px;
    margin: 20px;

    svg {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
`;
