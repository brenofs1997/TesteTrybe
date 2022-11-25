import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormRegister } from "../FormRegister";
import { FormLogin } from "../FormLogin";
import { HeaderLoggedOut } from '../HeaderLoggedOut';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { Container, LineDivisor } from "./styles";

export function Register() {

  return (
    <>
      <ToastContainer />
      <GlobalStyles />
      <HeaderLoggedOut />
        <Container>
          <FormLogin />
          <LineDivisor />
          <FormRegister />
        </Container>
    </>
  )
}
