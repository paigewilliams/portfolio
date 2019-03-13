import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lustria', serif;
    margin: 0;
  };

  p {
    font-family: 'Open Sans', sans-serif;
    line-height: 22px;
    font-size: 16px;
  };

  li {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  ul {
    list-style-type: none;
    list-style-position: inside;
    padding-left: 0;
  }
  

  a {
    text-decoration: none;
   color: black;
  };

 
`