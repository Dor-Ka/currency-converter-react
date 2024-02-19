import { createGlobalStyle } from "styled-components";

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
  background-image: url("../public/backgrounds.png");
  background-position: center;
  background-size: cover;
}
`;