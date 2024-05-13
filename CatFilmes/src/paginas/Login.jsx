// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o hook useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inicialize o hook useNavigate

  const handleLogin = () => {
    // Aqui você pode implementar a lógica de autenticação
    // Verifique o email e senha e redirecione o usuário se for válido
    console.log('Usuário logado:', email);
    navigate('/inicial'); // Redirecione o usuário para a rota '/inicial'
  };

  return (
    <div className="login-container">
      <h2>Tela de Login</h2>
      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
