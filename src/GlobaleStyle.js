import { createGlobalStyle } from "styled-components";
import backgrounds from "./backgrounds.png";

export const GlobaleStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after, ::before {
  box-sizing: inherit;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 600px;
  font-family: 'Roboto Condensed', sans-serif;
  line-height: 1.5;
  background-image: url("${backgrounds}");
  background-position: center;
  background-size: cover;
}
`;