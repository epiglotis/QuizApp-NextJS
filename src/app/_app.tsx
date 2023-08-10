// src/_app.tsx

import { useEffect } from 'react';
import { checkAuth } from '../authService';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Redirect to login page if not authenticated
    if (!checkAuth() && window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
