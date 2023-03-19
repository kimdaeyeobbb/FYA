import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './theme';
import { HelmetProvider } from "react-helmet-async";

const GlobalStyle = createGlobalStyle`
  ${reset}

  #root {
    font-family: Noto Sans CJK KR;
    margin: 0 auto;
    max-width: 1920px;
    box-sizing: border-box;
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
      <HelmetProvider>
          <App />
      </HelmetProvider>
  </ThemeProvider>
);
