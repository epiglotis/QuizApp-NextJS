// src/pages/mainpage.tsx

import React from 'react';
import { logoutUser } from '../authService';
import { useRouter } from 'next/navigation';

export default function MainPage() {
  const router = useRouter();

  const handleQuizButtonClick = () => {
    router.push('/quiz'); // Redirect to the quiz page
  };
  const handleLogout = () => {
    logoutUser();
    // Redirect to login page after logout
    window.location.href = '/login';
  };

  return (
    <div>
      <h1>Welcome! Choose an option:</h1>
      <button onClick={handleQuizButtonClick}>Start Quiz</button>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}
