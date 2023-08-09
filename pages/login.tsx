// pages/login.tsx

import React, { useState } from 'react';
import styles from '../styles/login.module.scss'; // Import SCSS styles

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login clicked with username:', username);
  };

  return (
    <div className={styles['login-container']}>
      <h1>Login</h1>
      <div className={styles['login-form']}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
