import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ConversationChannel from "./components/conversation/ConversationChannel";
import ConversationChannelDefault from "./components/conversation/ConversationChannelDefault";
import { ProtectedRoute } from "./components/ProtectedRoute";
import ConversationPage from "./pages/ConversationPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { GlobalStyle, theme } from "./styled/global";
import { ROUTE } from "./utils/constants";
import AuthProvider from "./utils/context/AuthContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTE.REGISTER} element={<RegisterPage />}></Route>
            <Route path={ROUTE.LOGIN} element={<LoginPage />}></Route>
            <Route
              path={ROUTE.CONVERSATIONS}
              element={
                <ProtectedRoute>
                  <ConversationPage />
                </ProtectedRoute>
              }
            >
              <Route index element={<ConversationChannelDefault />} />
              <Route path=":id" element={<ConversationChannel />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
