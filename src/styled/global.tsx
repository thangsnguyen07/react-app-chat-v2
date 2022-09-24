import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: #fff;
    background-color: #131313;
  }
`;

export const theme = {
  dark: "#131313",
  gray: "#8f8f8f",
  lightDark: "#1a1a1a",
  lighterDark: "#1f1f1f",
  lightestDark: "#252525",
  borderRadius: "10px",
  transition: "0.3s all ease",
};
