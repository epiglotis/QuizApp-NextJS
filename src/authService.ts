// src/authService.ts

import Cookies from 'js-cookie';

export const authenticateUser = async (username: string, password: string) => {
  // Replace this with your custom authentication logic
  if (username === '' && password === '') {
    Cookies.set('isLoggedIn', 'true');
    return true;
  }
  return false;
};

export const logoutUser = () => {
  Cookies.remove('isLoggedIn');
};

export const checkAuth = () => {
  return Cookies.get('isLoggedIn') === 'true';
};
