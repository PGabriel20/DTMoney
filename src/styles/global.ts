import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFFFF;
  }

  *{
    margin: 0;
    padding: 0;;
    box-sizing: border-box;
  }

  //font-size: 16px;
  //standard font-size for desktop


  //Media queries for font sizes
  html{
    @media(max-width: 1080px){
      font-size: 93.75%; //15px
    }

    @media(max-width: 720px){
      font-size: 87.5%; //14px
    }
  }

  //1 REM = 16px (your font-size);

  body{
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button{
    font-family: Poppins, sans-serif;
    font-weight: 400;
  }

  strong, h1, h2, h3, h4, h5, h6{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;