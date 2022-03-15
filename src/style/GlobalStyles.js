import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }

  html {
    height: 100%;
    width: 100%;
  }
  body{
    font-family: 'Roboto';
    font-style: normal;
    width: 100%;
    height: 100%;
    background-color:#141414;
    @media screen and (max-width: 884px) {
      font-size: 1.2vw;
    }
  }

  a {
    text-decoration: none;
  }

  li{
    list-style-type: none;
  }
`;
