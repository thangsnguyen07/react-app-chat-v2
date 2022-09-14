import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth";
import { Button } from "../../styled/buttons";
import {
  Form,
  InputContainer,
  InputField,
  InputLabel,
} from "../../styled/form";
import { ErrorFeedback, LinkContainer, StyledLink } from "../../styled/shared";
import { UserCredentials } from "../../utils/interfaces";
import { loginSchema } from "../../utils/validations";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>({ resolver: yupResolver(loginSchema) });
  const navigate = useNavigate();

  const onSubmit = async (data: UserCredentials) => {
    try {
      await loginUser(data);
      navigate("/conversations");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer marginBottom="8px">
        <InputLabel htmlFor="email">Email</InputLabel>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <InputField id="email" {...register("email")} />
        {errors?.email && <ErrorFeedback>{errors.email.message}</ErrorFeedback>}
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <InputField id="password" type="password" {...register("password")} />
        {errors?.password && (
          <ErrorFeedback>{errors.password.message}</ErrorFeedback>
        )}
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
