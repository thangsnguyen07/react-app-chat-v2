import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ConversationChannel from "./components/conversation/ConversationChannel";
import ConversationChannelDefault from "./components/conversation/ConversationChannelDefault";
import ConversationPage from "./pages/ConversationPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { GlobalStyle, theme } from "./styled/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="conversations" element={<ConversationPage />}>
            <Route index element={<ConversationChannelDefault />} />
            <Route path=":id" element={<ConversationChannel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
