import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../styled/buttons";
import {
  FlexBox,
  Form,
  InputContainer,
  InputField,
  InputLabel,
} from "../../styled/form";
import { ErrorFeedback, LinkContainer, StyledLink } from "../../styled/shared";
import { registerSchema } from "../../utils/validations";

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(registerSchema) });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField id="email" {...register("email")} />
        {errors?.email && <ErrorFeedback>{errors.email.message}</ErrorFeedback>}
      </InputContainer>
      <FlexBox>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <InputField id="firstName" {...register("firstName")} />
          {errors?.firstName && (
            <ErrorFeedback>{errors.firstName.message}</ErrorFeedback>
          )}
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <InputField id="lastName" {...register("lastName")} />
          {errors?.lastName && (
            <ErrorFeedback>{errors.lastName.message}</ErrorFeedback>
          )}
        </InputContainer>
      </FlexBox>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField id="password" type="password" {...register("password")} />
        {errors?.password && (
          <ErrorFeedback>{errors.password.message}</ErrorFeedback>
        )}
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
