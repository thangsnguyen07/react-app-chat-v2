import { Button } from "../../styled/buttons";
import {
  Form,
  InputContainer,
  InputField,
  InputLabel,
} from "../../styled/form";
import { LinkContainer, StyledLink } from "../../styled/shared";

const LoginForm = () => {
  return (
    <Form>
      <InputContainer marginBottom="8px">
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField id="email" />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField id="password" type="password" />
      </InputContainer>
      <Button>Login</Button>
      <LinkContainer>
        <span>Don&#39;t have an account? </span>
        <StyledLink to="/register">Register</StyledLink>
      </LinkContainer>
    </Form>
  );
};

export default LoginForm;
