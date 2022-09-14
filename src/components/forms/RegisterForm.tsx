import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
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
import { RegisterParams } from "../../utils/interfaces";
import { registerUser } from "../../services/auth";

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterParams>({ resolver: yupResolver(registerSchema) });

  const onSubmit = async (data: RegisterParams) => {
    try {
      await registerUser(data);
      navigate("/conversations");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <InputField id="email" {...register("email")} />
        {errors?.email && <ErrorFeedback>{errors.email.message}</ErrorFeedback>}
      </InputContainer>
      <FlexBox>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <InputField id="firstName" {...register("firstName")} />
          {errors?.firstName && (
            <ErrorFeedback>{errors.firstName.message}</ErrorFeedback>
          )}
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <InputField id="lastName" {...register("lastName")} />
          {errors?.lastName && (
            <ErrorFeedback>{errors.lastName.message}</ErrorFeedback>
          )}
        </InputContainer>
      </FlexBox>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
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
