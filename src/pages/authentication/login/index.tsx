import { Head } from "@/components/global/Head";
import {
  GithubLogo,
  GoogleLogo,
  AppleLogo,
  FacebookLogo,
} from "phosphor-react";
import {
  Button,
  Container,
  Description,
  Form,
  Header,
  Input,
  LoginContainer,
  LoginSocial,
  OtherOptions,
  Title,
} from "./styles";

export default function Login() {
  return (
    <>
      <Head name="Login" />
      <Container>
        <LoginContainer>
          <Header>
            <Title></Title>
            <Description></Description>
          </Header>

          <Form>
            <Input />
            <Input />

            <Button>SIGN IN</Button>

            <OtherOptions> - Or sign in with - </OtherOptions>

            <LoginSocial>
              <GithubLogo />
              <GoogleLogo />
              <AppleLogo />
              <FacebookLogo />
            </LoginSocial>
          </Form>
        </LoginContainer>
      </Container>
    </>
  );
}
