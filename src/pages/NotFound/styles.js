import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #221e1e;

  h3 {
    font-size: 36px;
  }

  h1 {
    color: #e44b50;
    font-size: 250px;
  }
  div {
    display: flex;
    align-items: center;

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
  }
`;
