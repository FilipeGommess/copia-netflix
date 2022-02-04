import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Netflix Sans';
    font-weight: normal;
    font-style:normal;
    src: url('../fonts/OTF/NetflixSans-Regular.otf')
     format('opentype');

  }
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
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
  }

  a {
    text-decoration: none;
  }

  li{
    list-style-type: none;
  }
`;
