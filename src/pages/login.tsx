// src/pages/login.tsx

import React, { useState } from 'react';
import { authenticateUser } from '../authService';
import styles from "../styles/login.module.scss"

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isAuthenticated = await authenticateUser(username, password);
    if (isAuthenticated) {
      // Redirect to main page after successful login
      window.location.href = '/';
    } else {
      // Handle failed login
      console.log('Login failed');
    }
  };

  return (
    <div className={styles["login-container"]}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
