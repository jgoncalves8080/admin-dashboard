import React, { useContext } from 'react';

// import { Container } from './styles';
import { Context } from '../../contexts/AuthContext';

function Login() {
  const { authenticated, handleLogin } = useContext(Context);

  console.log(authenticated);
  return <button onClick={handleLogin}>Entrar</button>;
}

export default Login;
