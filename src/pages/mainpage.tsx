// src/pages/mainpage.tsx

import React from 'react';
import { logoutUser } from '../authService';
import { useRouter } from 'next/router';
import styles from '../styles/mainpage.module.scss'; // Import the SCSS styles

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
    <div className={styles['main-page-container']}>
      <h1>Welcome! Choose an option:</h1>
      <button className={styles['main-page-button']} onClick={handleQuizButtonClick}>
        Start Quiz
      </button>
      <button className={styles['main-page-button']} onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
