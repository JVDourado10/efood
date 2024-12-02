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
    text-decoration: none;
  }
  
  body {
    background-color: ${cores.background};
    color: ${cores.white};
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
  }

  .column-12 {
    grid-column: 1/2 !important;
    max-width: 167px !important;
  }

  .column-34 {
    grid-column: 2/5 !important;
    max-width: 167px !important;
  }

  .column-13 {
    grid-column: 1/4 !important;
    max-width: 240px !important;
  }

  .column-4 {
    grid-column: 4 !important;
    max-width: 100px !important;
  }

`;
