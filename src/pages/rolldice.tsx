import React, { useState } from 'react';
import styles from '../styles/rolldice.module.scss';

function DiceRollingApp() {
  const [rollResult, setRollResult] = useState<number>();
  const sides = 6; // Number of sides on the dice

  const rollDice = () => {
    const result = Math.floor(Math.random() * sides) + 1;
    setRollResult(result);
  };

  return (
    <div className={styles.container}>
      <h1>Dice Rolling Simulator</h1>
      <button onClick={rollDice}>Roll the Dice</button>
      {rollResult && <p>You rolled a {rollResult}</p>}
    </div>
  );
}

export default DiceRollingApp;
