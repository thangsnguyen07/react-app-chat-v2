import { Button } from "../../styled/buttons";
import {
  FlexBox,
  Form,
  InputContainer,
  InputField,
  InputLabel,
} from "../../styled/form";

const RegisterForm = () => {
  return (
    <Form>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField id="email" />
      </InputContainer>
      <FlexBox>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <InputField id="firstName" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <InputField id="lastName" />
        </InputContainer>
      </FlexBox>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField id="password" />
      </InputContainer>
      <Button>Create My Account</Button>
    </Form>
  );
};

export default RegisterForm;
