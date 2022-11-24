import styled from 'styled-components';

export const Container = styled.header`
  background: #000;
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  .page-details{
    h1 {
      color: #fff;
      font-size: 32px;
    }

    img {
      height: 3rem;
      width: 10rem;
      cursor: pointer;
    }
  }

  a {
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    background: #fff;
    color: #000;
    cursor: pointer;
    border-radius: 15px;
    text-decoration: none;
  }
`;
