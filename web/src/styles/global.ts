import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: 0;
  }
  body {
    background: #120F0F;
    color: #DEDEDE;
  }
  body, input, button, textarea {
    font: 700 16px 'Inter', sans-serif;
  }
`;