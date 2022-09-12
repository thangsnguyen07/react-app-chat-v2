import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: #fff;
  }
`;

export const theme = {
  dark: "#131313",
  gray: "#8f8f8f",
  lightDark: "#1a1a1a",
  lightestDark: "#1f1f1f",
  borderRadius: "10px",
  transition: "0.3s all ease",
};
