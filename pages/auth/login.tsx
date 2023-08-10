// pages/login.tsx

import { useState } from 'react';
import styles from '../styles/login.module.scss';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'; // Import the 'js-cookie' library

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Set a cookie to indicate the user is logged in
    Cookies.set('isLoggedIn', 'true');
    
    // Redirect to the quiz page after login
    router.push('/');
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
