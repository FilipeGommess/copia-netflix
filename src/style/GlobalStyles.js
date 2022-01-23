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

  body{
    font-family: 'Roboto';
    font-style: normal;
    width: 100vw;
  }

  a {
    text-decoration: none;
  }

  li{
    list-style-type: none;
  }
`;
