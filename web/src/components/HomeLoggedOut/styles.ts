import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

export const Content = styled.header`
  width: 100%;
  height: 100%;
  max-width: 1216px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  .page-details{
    h1 {
      color: #fff;
      font-size: 32px;
    }
  }

  img {
      height: 32rem;
      width: 22rem;
  }
`;
