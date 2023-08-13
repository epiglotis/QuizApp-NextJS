// src/pages/calculator.tsx

import React, { useState } from 'react';
import { logoutUser } from '../authService';
import { useRouter } from 'next/router';
import styles from '../styles/calculator.module.scss'; // Import the SCSS styles

export default function CalculatorPage() {
  const router = useRouter();
  const [result, setResult] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  const handleReturnToMainPage = () => {
    router.push("/")
  };

  return (
    <div className={styles['calculator-container']}>
      <h1>Calculator</h1>
      <div className={styles['calculator-display']}>{result}</div>
      <div className={styles['calculator-buttons']}>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <button className={styles['logout-button']} onClick={handleReturnToMainPage}>
        Return to Main Page
      </button>
    </div>
  );
}
