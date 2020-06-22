// @constants
import { SESSION_TOKEN_NAME } from '@src/constants';

export function loginService({ username, password } = { username: null, password: null }) {
  const token = window.localStorage.getItem(SESSION_TOKEN_NAME);
  let userLoggedIn = null;

  if (token || (username && password)) {
    userLoggedIn = {
      id: Date.now().toString(),
      username: username || 'Fake User'
    };
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userLoggedIn);
    }, 2000);
  });
}
