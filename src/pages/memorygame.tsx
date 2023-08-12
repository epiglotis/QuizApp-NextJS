// src/pages/memorygame.tsx

import React, { useState, useEffect } from 'react';
import { logoutUser } from '../authService';
import { useRouter } from 'next/router';
import styles from '../styles/memorygame.module.scss'; // Import the SCSS styles

const images = [
  'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*',
  'https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.88847xw:1xh;center,top&resize=1200:*',
  'data:image/jpeg;base64,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',
  'https://cdn.theatlantic.com/thumbor/vDZCdxF7pRXmZIc5vpB4pFrWHKs=/559x0:2259x1700/1080x1080/media/img/mt/2017/06/shutterstock_319985324/original.jpg',
  'https://www.thesprucepets.com/thmb/9zz13o5HFZcGtBQOnwq1jZ-ajDQ=/2000x0/filters:no_upscale():strip_icc()/savannah-cat-4ec08e9efe40457a8f73a2af24fcdcc3.jpeg',
  'https://www.webbox.co.uk/wp-content/uploads/2020/10/angry_cat_2-scaled-1024x683.jpg',
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

  const handleResetClick = () => {
    setFlippedCards([]); // Reset flipped cards
    setCards((prevCards) =>
      prevCards.map((card) => ({ ...card, isFlipped: false })) // Reset card flips
    );
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
      <div className={styles['button-container']}>
        <button className={styles['reset-button']} onClick={handleResetClick}>
          Reset
        </button>
        <button className={styles['logout-button']} onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}
