// pages/index.tsx

import React, { useState } from 'react';
import { useSession } from 'next-auth/react'; // Import authentication session hook
import LoginPage from './auth/login';
import MainPage from './mainpage';

export default function Home() {
  const { data: session } = useSession(); // Get authentication session data

  return (
    <div>
      {session ? <MainPage /> : <LoginPage />}
    </div>
  );
}
