// @vendors
import { useCallback, useState } from 'react';

// @http
import { loginService } from '@src/http/session';

// @constants
import { SESSION_TOKEN_NAME } from '@src/constants';

export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = useCallback((userCredentials) => {
    loginService(userCredentials)
      .then((newUser) => {
        setUser(newUser);
        setLoading(false);

        if (newUser) {
          window.localStorage.setItem(SESSION_TOKEN_NAME, Date.now().toString());
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, [loginService, setUser, setLoading]);

  const logout = useCallback(() => {
    setUser(null);
    window.localStorage.removeItem(SESSION_TOKEN_NAME);
  }, [setUser]);

  return {
    loading,
    login,
    logout,
    user
  };
}
