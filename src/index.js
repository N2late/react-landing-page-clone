import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          color: rgb(29, 29, 29);
          font-family: Inter;
        }

        a {
          text-decoration: none;
          color: rgb(29, 29, 29);
        }
      `}
    />
    <App />
  </React.StrictMode>,
);
