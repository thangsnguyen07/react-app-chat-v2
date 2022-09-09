import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const theme = {
  dark: "#131313",
  lightDark: "#8f8f8f",
  lightestDark: "#1a1a1a",
  borderRadius: "10px",
};
