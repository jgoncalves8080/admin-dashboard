import React, { createContext, useEffect, useState } from 'react';

import api from '../services/api';
import history from '../services/history';

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token') || [];

    if (token) {
      api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = async () => {
    const {
      data: { token },
    } = await api.post('/sessions', {
      email: 'jgonca@gmail.com',
      password: '123456',
    });

    console.log('data=>', token);
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.authorization = `Bearer ${token}`;
    setAuthenticated(true);
    history.push('/');
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.authorization = undefined;
    history.push('/login');
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
