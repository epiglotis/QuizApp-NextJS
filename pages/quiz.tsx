import React, { useState } from 'react';

const QuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

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

  return <div>{}</div>;
};

export default QuizPage;
