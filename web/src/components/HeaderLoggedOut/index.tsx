import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo-ngcash.svg';
import { Container, Content } from './styles';

export function HeaderLoggedOut() {
  const goBack = useNavigate();
  const home = () => {
    goBack('/');
  };

  return (
    <Container>
      <Content>
        <div className="page-details">
          <img onClick={home} src={logo} alt="logo" />
        </div>
        <a href="/register">LOGIN/CADASTRO</a>
      </Content>
    </Container>
  );
}
