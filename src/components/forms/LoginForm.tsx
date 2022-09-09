import { Button } from "../../styled/buttons";
import {
  Form,
  InputContainer,
  InputField,
  InputLabel,
} from "../../styled/form";

const LoginForm = () => {
  return (
    <Form>
      <InputContainer marginBottom="8px">
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField id="email" />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField id="password" />
      </InputContainer>
      <Button>Login</Button>
    </Form>
  );
};

export default LoginForm;
