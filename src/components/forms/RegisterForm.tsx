import { Button } from "../../styled/buttons";
import {
  FlexBox,
  Form,
  InputContainer,
  InputField,
  InputLabel,
} from "../../styled/form";
import { LinkContainer, StyledLink } from "../../styled/shared";

const RegisterForm = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
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
        <InputField id="password" type="password" />
      </InputContainer>
      <Button>Create My Account</Button>
      <LinkContainer>
        <span>Already have an account? </span>
        <StyledLink to="/login">Login</StyledLink>
      </LinkContainer>
    </Form>
  );
};

export default RegisterForm;
