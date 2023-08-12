// src/pages/memorygame.tsx

import React, { useState, useEffect } from 'react';
import { logoutUser } from '../authService';
import { useRouter } from 'next/router';
import styles from '../styles/memorygame.module.scss'; // Import the SCSS styles

const images = [
  'https://via.placeholder.com/150?text=Cat',
  'https://via.placeholder.com/150?text=Dog',
  'https://via.placeholder.com/150?text=Flower',
  'https://via.placeholder.com/150?text=Sun',
  'https://via.placeholder.com/150?text=Star',
];

interface Card {
    id: number;
    image: string;
    isFlipped: boolean;
  }

export default function MemoryGamePage() {
  const router = useRouter();
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  // Helper function to shuffle an array
function shuffleArray(array: any[]) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  // Shuffle the images and create card objects
  useEffect(() => {
    const shuffledImages = shuffleArray(images.concat(images));
    const shuffledCards = shuffledImages.map((image, index) => ({
      id: index,
      image,
      isFlipped: false,
    }));
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (cardId:number) => {
    // If two cards are already flipped, reset them
    if (flippedCards.length === 2) {
      setFlippedCards([]);
      return;
    }

    // Flip the clicked card
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, isFlipped: true } : card
      )
    );
    setFlippedCards((prevFlipped) => [...prevFlipped, cardId]);
  };

  const handleLogout = () => {
    logoutUser();
    // Redirect to login page after logout
    window.location.href = '/login';
  };

  return (
    <div className={styles['memory-game-container']}>
      <h1>Memory Game</h1>
      <div className={styles['memory-game-board']}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${styles['memory-game-card']} ${
              card.isFlipped ? styles['flipped'] : ''
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <img src={card.image} alt={`Card ${card.id}`} />
          </div>
        ))}
      </div>
      <button className={styles['logout-button']} onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
