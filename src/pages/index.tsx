// src/pages/index.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { checkAuth } from '../authService'; // Adjust the path to your authService file

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check authentication status
    const isAuthenticated = checkAuth();

    // Redirect to the appropriate page based on authentication
    if (isAuthenticated) {
      router.push('/mainpage'); // Adjust the route to your MainPage component
    } else {
      router.push('/login'); // Adjust the route to your LoginPage component
    }
  }, []);

  // This component doesn't need to render anything
  return null;
}
