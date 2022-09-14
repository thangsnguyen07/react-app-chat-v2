import { createContext, useState } from "react";
import { User } from "../interfaces";

export interface AuthContextInterface {
  user?: User;
  updateAuth: (data: User) => void;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

interface Props {
  children?: React.ReactNode;
}
// eslint-disable-next-line react/prop-types
const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>();

  const updateAuth = (data: User) => {
    setUser(data);
  };

  const contextValue = {
    user,
    updateAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
