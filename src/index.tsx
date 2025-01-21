import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import './styles/variables.css';
import './styles/global.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import reportWebVitals from './reportWebVitals';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// console.log or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
