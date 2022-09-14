import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Page } from "../styled/shared";

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute: FC<Props> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Page display="flex" alignItems="center" justifyContent="center">
        Loading...
      </Page>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
