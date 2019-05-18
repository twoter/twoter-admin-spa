import { LOGGED_USER_KEY } from '../constants/common';

export const authService = {
  login,
  logout,
  isLoggedIn,
  getLoggedUserData
};

function login(data) {
  localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(data));
}

function logout() {
  localStorage.removeItem(LOGGED_USER_KEY);
}

function isLoggedIn() {
  const userData = getLoggedUserData();
  let logged = null !== userData;

  return logged;
}

function getLoggedUserData() {
  let data = null;

  try {
    data = JSON.parse(localStorage.getItem(LOGGED_USER_KEY));
  } catch(e) { }

  return data;
}
