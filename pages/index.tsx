// pages/index.tsx

import { useRouter } from 'next/router';
import QuizPage from './quiz'; // Import the QuizPage component
import LoginPage from './login'; // Import the LoginPage component
import Cookies from 'js-cookie'; // Import the 'js-cookie' library

export default function Home() {
  const router = useRouter();
  const isLoggedIn = Cookies.get('isLoggedIn'); // Check if user is logged in

  if (isLoggedIn) {
    // Render the quiz or whatever content you want to show to logged-in users
    return <QuizPage />;
  } else {
    // Render the login page
    return <LoginPage />;
  }
}
