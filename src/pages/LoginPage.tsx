import LoginForm from "../components/forms/LoginForm";
import { Page } from "../styled/shared";

const LoginPage = () => {
  return (
    <Page display="flex" justifyContent="center" alignItems="center">
      <LoginForm />
    </Page>
  );
};

export default LoginPage;
