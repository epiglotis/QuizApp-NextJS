import React, { useState } from 'react';
import styles from '../styles/rolldice.module.scss';
import { useRouter } from 'next/router';

function DiceRollingApp() {
  const [rollResult, setRollResult] = useState<number>();
  const router = useRouter();
  const sides = 6; // Number of sides on the dice

  const rollDice = () => {
    const result = Math.floor(Math.random() * sides) + 1;
    setRollResult(result);
  };

  const handleReturnToMainPage = () =>{
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <h1>Dice Rolling Simulator</h1>
      <button onClick={rollDice}>Roll the Dice</button>
      {rollResult && <p>You rolled a {rollResult}</p>}
      <button className={styles['main-page-button']} onClick={handleReturnToMainPage}>
        Return to Main Menu
      </button>
    </div>
  );
}

export default DiceRollingApp;
