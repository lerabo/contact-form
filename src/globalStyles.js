import "normalize.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #3E3E3E;
    height: 100%;
  }
`;

export default GlobalStyle;
