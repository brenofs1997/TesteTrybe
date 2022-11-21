import logo from '../../assets/images/logo-ngcash.svg';

import { Box, Column, Container, FooterLink, Heading, Row } from './styles';

export function Footer() {
  return (
    <Box>
    <Container>
      <Row>
        <Column>
          <Heading>About Us</Heading>
          <FooterLink >Breno Fernandes dos Santos</FooterLink>
          <FooterLink >🔭 Bacharel em Sistemas de Informação.</FooterLink>
          <FooterLink >🌱 Estudando Javascript,React,NodeJs,React Native e Java com springboot e Aws.</FooterLink>
        </Column>
        <Column>
          <Heading>Social Media</Heading>
          <FooterLink href="https://github.com/brenofs1997" target="_blank">
            <i className="fab fa-twitter">
              <span style={{ marginLeft: "10px" }}>
                Github
              </span>
            </i>
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/breno-fernandes-dos-santos-285657203/" target="_blank">
            <i className="fab fa-youtube">
              <span style={{ marginLeft: "10px" }}>
               Linkedin
              </span>
            </i>
          </FooterLink>
        </Column>
      </Row>
    </Container>
  </Box>
  );
}
