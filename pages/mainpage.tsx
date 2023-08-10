// pages/buttons.tsx

import React from 'react';
import Link from 'next/link';

const MainPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome! Choose an option:</h1>
      <Link href="/quiz">
        <a>Start Quiz</a>
      </Link>
      {/* Add more buttons or links for other options */}
    </div>
  );
};

export default MainPage;
