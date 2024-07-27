import { createGlobalStyle } from "styled-components";

export const cores = {
  background: "#FFF8F2",
  s_background: '#FFEBD9',
  main: "#E66767",
  white: "#FFF",
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
  }
  
  body {
    background-color: ${cores.background};
    color: ${cores.white};
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
`;
