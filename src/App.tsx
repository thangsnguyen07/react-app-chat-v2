import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { GlobalStyle, theme } from "./styled/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="conversations"
            element={
              <div>
                <div>Conversations</div>
                <Outlet />
              </div>
            }
          >
            <Route path=":id" element={<div>Conversation ID Page</div>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
