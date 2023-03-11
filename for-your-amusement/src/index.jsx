import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: Noto Sans CJK KR;
  }

  .ir {
    position: absolute;
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  button {
    border:0;
    cursor: pointer;
    background-color:transparent;
  }
  
  a {
    color:black;
    text-decoration:none;
  }
`;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
