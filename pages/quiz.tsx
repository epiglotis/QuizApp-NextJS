import React, { useState } from 'react';
import styles from '../styles/quiz.module.scss';

const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Jupiter', 'Venus', 'Mercury'],
      answer: 'Mars',
    },
    {
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Lion'],
      answer: 'Blue Whale',
    },
    {
      question: 'Which gas do plants use for photosynthesis?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      answer: 'Carbon Dioxide',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: [
        'Pablo Picasso',
        'Leonardo da Vinci',
        'Vincent van Gogh',
        'Michelangelo',
      ],
      answer: 'Leonardo da Vinci',
    },
    {
      question: 'Which instrument is known as the "king of instruments"?',
      options: ['Piano', 'Violin', 'Trumpet', 'Organ'],
      answer: 'Organ',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Ag', 'Au', 'Gd', 'Fe'],
      answer: 'Au',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      answer: 'Jupiter',
    },
    {
      question: 'Which country is known as the "Land of the Rising Sun"?',
      options: ['China', 'South Korea', 'Japan', 'Vietnam'],
      answer: 'Japan',
    },
    {
      question: 'Which famous scientist developed the theory of relativity?',
      options: [
        'Isaac Newton',
        'Albert Einstein',
        'Galileo Galilei',
        'Stephen Hawking',
      ],
      answer: 'Albert Einstein',
    },
  ];
  const QuizPage: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
  
    const handleOptionSelect = (option: string) => {
      if (option === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
  
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    };
  
    return (
      <div className={styles['quiz-container']}>
        {showScore ? (
          <div>
            <h1>Quiz Score</h1>
            <p>Your score: {score}/{questions.length}</p>
            <button onClick={() => { setShowScore(false); setCurrentQuestion(0); setScore(0); }}>
              Return to Quiz
            </button>
          </div>
        ) : (
          <div>
            <h1>Interactive Quiz</h1>
            <p>Question {currentQuestion + 1}/{questions.length}</p>
            <p>{questions[currentQuestion].question}</p>
            <div className={styles['options']}>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default QuizPage;