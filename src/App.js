import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/globalStyle';

import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}
