// src/pages/mainpage.tsx

import React from 'react';
import { useRouter } from 'next/router';
import { logoutUser } from '../authService';
import styles from '../styles/mainpage.module.scss'; // Import the SCSS styles

export default function MainPage() {
  const router = useRouter();

  const handleQuizButtonClick = () => {
    router.push('/quiz'); // Redirect to the quiz page
  };

  const handleCalculatorButtonClick = () => {
    router.push('/calculator'); // Redirect to the calculator page
  };

  const handleMemoryGameButtonClick = () => {
    router.push('/memorygame'); // Redirect to the memory game page
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
      <button className={styles['main-page-button']} onClick={handleCalculatorButtonClick}>
        Open Calculator
      </button>
      <button className={styles['main-page-button']} onClick={handleMemoryGameButtonClick}>
        Play Memory Game
      </button>
      <button className={styles['main-page-button']} onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
