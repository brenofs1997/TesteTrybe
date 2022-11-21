import app from '../../assets/images/app.svg';

import { Container, Content } from './styles';

export function HomeLoggedOut() {
  return (
    <Container>
      <Content>
        <div className="page-details">
            <p>SOBRE</p>
            <p>Somos a carteira digital da Nova Geração.</p>
            <p > Viemos te ajudar a construir a sua independência financeira.</p>
            <p >
              Vivemos o novo, transformando o futuro. Afinal, depois do ponto,
              vem um novo começo.
            </p>
        </div>
        <img src={app} alt="App" />
      </Content>
    </Container>
  );
}
